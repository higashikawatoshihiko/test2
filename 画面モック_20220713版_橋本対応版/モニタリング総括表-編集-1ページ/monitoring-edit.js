var target;
// フォーカスin
$(document).on('focusin', 'table .cell-short, table .cell-season, table .cell-method, table .cell-service',function(e) {
  target = e.currentTarget;
  btnToggle(true);
});

// 行追加
$(document).on('click', '.btn-row-add', function(e) {
  // 操作対象行
  let cell = $(target).closest('td');
  let row = cell.closest('tr');

  // 操作対象グループ
  let groupName = getRowGroupName(cell);
  if(groupName===null) {
    //操作対象でなければ何もしない
    return;
  }
  let rows = getRowGroup(row, groupName);

  // テンプレート行から追加行を作成
  let template = row.closest('table').find('tr.row-template');
  let newRow = template.clone();
  newRow.removeClass('row-template');
  resetRowInputs(newRow);

  // 上位項目の削除
  let groupNames = getParentGroupNames(groupName);
  let pattern = groupNames.map(x => 'td.cell-' + x).join(',');
  newRow.find(pattern).remove();
  updateRowClass(newRow);

  // 行結合操作
  updateParentRowSpan(row, groupName, 1);

  // 行を追加
  rows.last().after(newRow);

  // 行番号更新
  updateRowNumber();

  target = null;
});

// 行削除
$(document).on('click', '.btn-row-delete', async function(e) {
  // 操作対象行
  let cell = $(target).closest('td');
  let row = cell.closest('tr');

  // 操作対象グループ
  let groupName = getRowGroupName(cell);
  if(groupName===null) return; //操作対象でなければ何もしない

  // 確認ダイアログ
  let result = await confirmModal('#confirm-delete');
  if (!result) return;

  let rows = getRowGroup(row, groupName);

  // 行の単純削除
  if (getRowGroupName(row) === groupName && !(groupName === 'short' && row.is('tr.row-short:first'))) {
    // 行結合操作
    updateParentRowSpan(row, groupName, -rows.length);

    // 行グループ削除
    rows.remove();

    // 行番号更新
    updateRowNumber();

    target = null;
    return;
  }

  // 次の行グループの取得
  let nextRows = getNextRowGroup(rows, groupName);
  if (nextRows.length > 0) {
    // 行結合操作
    updateParentRowSpan(row, groupName, -rows.length);

    // 上位項目の移動
    moveParentCells(row, nextRows.first(), groupName);

    // 行グループ削除
    rows.remove();
  } else {
    let children = rows.slice(1);

    // 行結合操作
    updateParentRowSpan(row, groupName, -children.length);
    updateChildRowSpan(row, groupName);

    // 行グループ削除
    children.remove();

    // 入力項目のクリア
    let cells = cell.add(cell.nextAll('td'));
    resetRowInputs(cells);
  }

  // 行番号更新
  updateRowNumber();

  target = null;
});

// 行上移動
$(document).on('click', '.btn-row-move-up', function(e) {
  // 操作対象行
  let cell = $(target).closest('td');
  let row = cell.closest('tr');

  // 操作対象グループ
  let groupName = getRowGroupName(cell);
  if(groupName===null) {
    //操作対象でなければ何もしない
    return;
  }

  if (getRowGroupName(row) !== groupName) {
    target = null;
    return;
  }

  let rows = getRowGroup(row, groupName);

  // 前の行グループの取得
  let prevRows = getPrevRowGroup(rows, groupName);
  if (prevRows.length === 0) {
    target = null;
    return;
  }

  // 上位項目の移動
  moveParentCells(prevRows.first(), row, groupName);

  // 前の行グループの上に移動
  rows.last().after(prevRows);

  // 行番号更新
  updateRowNumber();

  target = null;
});

// 行下移動
$(document).on('click', '.btn-row-move-down', function(e) {
  // 操作対象行
  let cell = $(target).closest('td');
  let row = cell.closest('tr');

  // 操作対象グループ
  let groupName = getRowGroupName(cell);
  if(groupName===null) {
    //操作対象でなければ何もしない
    return;
  }

  let rows = getRowGroup(row, groupName);

  // 次の行グループの取得
  let nextRows = getNextRowGroup(rows, groupName);
  if (nextRows.length === 0) {
    target = null;
    return;
  }

  // 上位項目の移動
  moveParentCells(row, nextRows.first(), groupName);

  // 次の行グループの下に移動
  nextRows.last().after(rows);

  // 行番号更新
  updateRowNumber();
  target = null;
});

// ================
// 行グループ名操作
// ================

// 行グループ階層
GROUPS = ['short-no', 'short', 'season', 'method', 'service'];
// 上位グループ名の取得
function getParentGroupNames(groupName, containsSelf = false) {
  if (containsSelf) {
    // 指定以上の行グループ一覧
    return GROUPS.slice(0, GROUPS.indexOf(groupName) + 1);
  } else {
    // 指定より上位の行グループ一覧
    return GROUPS.slice(0, GROUPS.indexOf(groupName));
  }
}

// 下位グループ名の取得
function getChildGroupNames(groupName, containsSelf = false) {
  if (containsSelf) {
    // 指定以下の行グループ一覧
    return GROUPS.slice(GROUPS.indexOf(groupName));
  } else {
    // 指定より下位の行グループ一覧
    return GROUPS.slice(GROUPS.indexOf(groupName) + 1);
  }
}

// 行グループ名の取得
function getRowGroupName(element) {
  // row-, cell- で始まるクラス名から行グループ名を取得
  for (let className of element.attr('class').split(/\s+/)) {
    let m = className.match(/^(row|cell)-(.+)$/);
    if (m) {
      return m[2];
    }
  }

  return null;
}

// ================
// 行グループ操作
// ================

// 行グループの取得
function getRowGroup(firstRow, groupName) {
  // 行結合数の取得
  let rowspan = firstRow.find('td.cell-' + groupName).prop('rowSpan');

  if (rowspan > 1) {
    // 結合ありの場合、結合分の行を含む
    let children = firstRow.nextAll('tr').slice(0, rowspan - 1);
    return firstRow.add(children);
  } else {
    // 結合なしの場合、自行のみ
    return $().add(firstRow);
  }
}

// 前の行グループの取得
function getPrevRowGroup(rows, groupName) {
  // 前行
  let groupNames = getParentGroupNames(groupName, true);
  let pattern = groupNames.map(x => 'tr.row-' + x).join(',');
  let prevRows = rows.first().prevAll(pattern);

  if (prevRows.length > 0) {
    // パターンが一致する場合は取得
    return getRowGroup(prevRows.first(), groupName);
  } else {
    // パターンが一致しない場合はなし
    return $();
  }
}

// 次の行グループの取得
function getNextRowGroup(rows, groupName) {
  // 次行
  let nextRow = rows.last().next('tr');

  if (nextRow.length > 0 && getRowGroupName(nextRow) === groupName) {
    // 行グループ名が一致する場合は取得
    return getRowGroup(nextRow, groupName);
  } else {
    // 行グループ名が一致しない場合はなし
    return $();
  }
}

// ================
// その他
// ================

  // 入力項目のクリア
function resetRowInputs(elements) {
  elements.find('input[type="text"], textarea').val('');
  elements.find('textarea.auto-height').css('height', '');
  elements.find('select').prop('selectedIndex', -1);
/*
  let checked = elements.find('input[type="checkbox"], input[type="radio"]').filter(':checked');
  checked.prop('checked', false).trigger('change');
*/
}

// 上位項目の移動
function moveParentCells(srcRow, destRow, groupName) {
  // 上位項目の取得
  let groupNames = getParentGroupNames(groupName);
  let pattern = groupNames.map(x => 'td.cell-' + x).join(',');
  let parentCells = srcRow.find(pattern);

  // 上位項目の移動
  destRow.prepend(parentCells);

  // 行クラス名の更新
  updateRowClass(srcRow);
  updateRowClass(destRow);
}

// 行クラス名の更新
function updateRowClass(row) {
  // 既存クラスを一旦削除
  let pattern = GROUPS.map(x => 'row-' + x).join(' ');
  row.removeClass(pattern);

  // 子のグループ名から行クラス名を設定
  let cell = row.children('td:first');
  let groupName = getRowGroupName(cell);
  row.addClass('row-' + groupName);
}

// 行結合の更新
function updateParentRowSpan(row, groupName, offset) {
  // 上位グループの更新
  for (let parentGroup of getParentGroupNames(groupName)) {
    // 上位行の検索パターン
    let groupNames = getParentGroupNames(parentGroup, true);
    let pattern = groupNames.map(x => 'tr.row-' + x).join(',');

    // 自行を含めて上位行を検索
    let parentRow = null;
    if (row.is(pattern)) {
      // 自行が上位行に該当する場合は、自行を対象
      parentRow = row;
    } else {
      // 前行から上位行を検索
      let prevRows = row.prevAll(pattern);
      if (prevRows.length === 0) {
        continue;
      }

      parentRow = prevRows.first();
    }

    // 上位項目の取得
    let cell = parentRow.find('td.cell-' + parentGroup);
    // rowspan の調整
    let rowspan = cell.prop('rowSpan');
    cell.prop('rowSpan', rowspan + offset);
  }
}

// 行結合の更新
function updateChildRowSpan(row, groupName) {
  // 下位グループの更新
  let children = getChildGroupNames(groupName, true);
  let pattern = children.map(x => 'td.cell-' + x).join(',');
  row.find(pattern).prop('rowSpan', 1);
}

// 行番号の更新
function updateRowNumber() {
  var rowNoList = document.querySelectorAll('.shortNo');
  for(i=0; i<rowNoList.length; i++) {
    //先頭にrow-templateを含んでいるため0オリジンでよい
    $(rowNoList[i]).text(i);
  }
}

// ================
// 確認ダイアログ
// ================

// 確認ダイアログ表示
function confirmModal(id) {
  const modal = $(id);
  // ダイアログ表示の非同期実行
  return new Promise((resolve) => {
    // 選択値の初期化
    modal.data('modal-result', null);
    // modal hidden イベント
    modal.one('hidden.bs.modal', () => {
      // 選択値を返す
      resolve(modal.data('modal-result'));
      modal.data('modal-result', null);
    });
    // ダイアログ表示
    modal.modal('show');
  });
}

// OK ボタンクリック
$(document).on('click', '.btn[data-modal-result]', function(e) {
  const button = $(e.currentTarget);
  const modal = button.closest('.modal');
  // 選択値の設定
  modal.data('modal-result', button.data('modal-result'));
});

// ================
// 行操作ボタン
// ================

// ボタン有効／無効切り替え
function btnToggle(enable) {
  var btnAdd = document.querySelectorAll(".btn-row-add");
  var btnDel = document.querySelectorAll(".btn-row-delete");
  var btnUp = document.querySelectorAll(".btn-row-move-up");
  var btnDown = document.querySelectorAll(".btn-row-move-down");
  if(enable === true) {
    $(btnAdd).removeClass("disabled");
    $(btnDel).removeClass("disabled");
    $(btnUp).removeClass("disabled");
    $(btnDown).removeClass("disabled");
  }
  else {
    $(btnAdd).addClass("disabled");
    $(btnDel).addClass("disabled");
    $(btnUp).addClass("disabled");
    $(btnDown).addClass("disabled");
  }
}


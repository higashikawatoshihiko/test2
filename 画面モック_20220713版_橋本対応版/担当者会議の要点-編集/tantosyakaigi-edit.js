$(function(){
  init();
  $(".btn-plus").click(function(){
   plus_click($(this));
  });
  $(".btn-minus").click(function(){
    minus_click($(this));
   });
});

function init() {
  // 行数表示
  var textarea;
  var rowcount;
  const tr = document.querySelectorAll(".flexibility");
  for(i=0; i<tr.length; i++) {
    textarea = $(tr[i]).find("textarea");
    rowcount = $(tr[i]).find(".rowcount");
    rowcount.text(textarea.prop("rows"));
  }

  // ボタン制御
  count = total_rowcount();
  if(count >= 20) {
    plusbtn_alldisabled();
  }
}

function plus_click(btnID) {
  var tr = btnID.closest("tr");
  var total_count = total_rowcount();
  if(total_count < 20)
  {
    //ここに行追加処理
    count = row_update(tr,true);
    if(count > 1) {
      var btn_minus = tr.find(".btn-minus");
      btn_enabled(btn_minus);
    }

    total_count = total_rowcount();
    if(total_count >= 20) {
      plusbtn_alldisabled();
    }
  }
}

function minus_click(btnID) {
  var tr = btnID.closest("tr");
  var count = rowcount(tr);
  if(count > 1) {
    // ここに行削除処理追加
    count = row_update(tr,false);
    if(count <= 1) {
      btn_disabled(btnID);
    }
    // Total20行以下であれば＋ボタン有効化
    total_count = total_rowcount();
    if(total_count < 20) {
      plusbtn_allenabled();
    }
  }
}

// 指定行の行数取得
function rowcount(tr) {
  var textarea = tr.find("textarea");
  var rowcount = textarea.prop("rows");
  return rowcount;
}

// 指定行のTextAreaを1行増減
function row_update(tr, inc) {
  var textarea = tr.find("textarea");
  var count = textarea.prop("rows");
  var count_disp = tr.find(".rowcount");
  if(inc == true) {
    count++;
  }
  else {
    count--;
  }
  textarea.prop("rows",count);
  //表示更新
  count_disp.text(count);
  return count;
}

//指定ボタンをDisabled
function btn_disabled(btnID) {
  btnID.css("color","gray");
  btnID.addClass("disabled");
}

//指定ボタンをEnabled
function btn_enabled(btnID) {
  btnID.css("color","black");
  btnID.removeClass("disabled");
}

//全項目の行数を取得
function total_rowcount() {
  var count = 0;
  var nodeList = document.querySelectorAll(".rowcount");
  for(i=0; i<nodeList.length; i++) {
    count += Number(nodeList[i].textContent);
  }

  return count;
}

//全ての＋ボタンをDisabled
function plusbtn_alldisabled() {
  var btn = document.querySelectorAll(".btn-plus");
  $(btn).css("color","gray");
  $(btn).addClass("disabled");
}

//全ての+ボタンをEnabled
function plusbtn_allenabled() {
  var btn = document.querySelectorAll(".btn-plus");
  $(btn).css("color","black");
  $(btn).removeClass("disabled");
}


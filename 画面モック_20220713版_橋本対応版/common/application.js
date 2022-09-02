// onload
$(function() {
  // tooltip 初期化
  $('[data-bs-toggle="tooltip"]').tooltip();

  // auto resize textarea
  $('textarea.auto-height').each(function(index, element) {
    resizeTextAreaHeight(element);
  });

  // flatpickr 初期化
  if (flatpickr) {
    // 日本語化
    flatpickr.localize(flatpickr.l10ns.ja);

    // date picker 有効化
    flatpickr('.input-group.date', {
      allowInput: true,
      clickOpens: false,
      dateFormat: 'Y/m/d',
      wrap: true,
      disableMobile: true
    });
  }
});

// auto resize textarea
$(document).on('input', 'textarea.auto-height', function(e) {
  resizeTextAreaHeight(e.currentTarget);
});

// textarea 高さの自動拡張
function resizeTextAreaHeight(element) {
  var textarea = $(element);
  textarea.css('height', 'auto');
  textarea.css('height', element.scrollHeight + 'px');
}

// flatpickr lazy initializing
$(document).on('click', '.input-group.date [data-toggle]', function(e) {
  if (flatpickr) {
    // flatpickr 初期化済みチェック
    let element = $(e.currentTarget).closest('.input-group.date');
    let picker = element.prop('_flatpickr');
    if (picker) return;

    // flatpickr 表示
    picker = element.flatpickr({
      allowInput: true,
      clickOpens: false,
      dateFormat: 'Y/m/d',
      wrap: true,
      disableMobile: true
    }).open();
  }
});

// flatpickr lazy initializing 未完
$(document).on('click', '.input-group.time [data-toggle2]', function(e) {
  if (flatpickr) {
    // flatpickr 初期化済みチェック
    let element = $(e.currentTarget).closest('.input-group.time');
    let picker = element.prop('_flatpickr');
    if (picker) return;

    // flatpickr 表示
    picker = element.flatpickr({
      allowInput: true,
      clickOpens: false,
      enableTime: true,   // 時間の選択可否
      noCalendar: true,   // カレンダー非表示
      dateFormat: "H:i",  // 表示フォーマット
      wrap: true,
      disableMobile: true
    }).open();
  }
});

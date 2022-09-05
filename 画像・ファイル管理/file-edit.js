// プレビュー表示
function preview(file) {
  // プレビューエリアを非表示
  for (const element of document.querySelectorAll('.preview-area > .preview:not(.d-none)')) {
    element.classList.add('d-none');
  }

  // プレビュー要素の取得
  let element = null;
  if (file.type.startsWith('image/')) {
    element = document.querySelector('.preview-area > img.preview');
  } else if (file.type.startsWith('video/')) {
    element = document.querySelector('.preview-area > video.preview');
  } else {
    return;
  }

  // プレビュー表示
  element.src = URL.createObjectURL(file);
  element.classList.remove('d-none');
}

// ファイル変更 イベントハンドラ
document.addEventListener('input', ev => {
  if (['capture-image', 'capture-video', 'from-file'].includes(ev.target.id)) {
    for (const file of ev.target.files) {
      // プレビュー表示
      //preview(file);
    }
  }
});

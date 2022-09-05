// modal-draggable クラス配下の modal-content クラスに draggable 設定
document.addEventListener('DOMContentLoaded', () => {
  interact('.modal.modal-draggable .modal-content').draggable({
    listeners: {
      // move イベントハンドラー
      move (ev) {
        // 表示位置の移動
        const modal = ev.target;
        modal.dataset.offsetX = parseInt(modal.dataset.offsetX, 10) + ev.dx;
        modal.dataset.offsetY = parseInt(modal.dataset.offsetY, 10) + ev.dy;
        modal.style.transform = `translate(${modal.dataset.offsetX}px, ${modal.dataset.offsetY}px)`;
      }
    }
  });
});

// modal show イベントハンドラー
document.addEventListener('show.bs.modal', ev => {
  // modal-draggable クラス配下の modal-content クラスを初期化
  if (ev.target.matches('.modal.modal-draggable')) {
    for (const modal of ev.target.querySelectorAll('.modal-content')) {
        // 表示位置の初期化
        modal.dataset.offsetX = 0;
        modal.dataset.offsetY = 0;
        modal.style.transform = null;
    }
  }
});

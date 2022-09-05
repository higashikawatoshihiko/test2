// ダミー要素の複製
document.addEventListener('DOMContentLoaded', () => {
  for (const element of document.querySelectorAll('[data-mock-repeat]')) {
    // 複製数の取得
    const count = parseInt(element.dataset.mockRepeat);
    delete element.dataset.mockRepeat;

    // 要素の複製
    for (let i = 1; i < count; i++) {
      const child = element.cloneNode(true);
      element.parentElement.insertBefore(child, element.nextElementSibling);
    }
  }
});

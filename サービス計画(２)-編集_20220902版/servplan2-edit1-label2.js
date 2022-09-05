function copyAreaCheckboxState(target) {
  const cell = target.closest('td');
  const checkbox = cell.querySelector('input[type="checkbox"][data-toggle="area"]');
  checkbox.checked = target.checked;
}

document.addEventListener('DOMContentLoaded', () => {
  for (const target of document.querySelectorAll('input[type="checkbox"][data-input="area"]')) {
    copyAreaCheckboxState(target);
  }
});

document.addEventListener('change', ev => {
  if (ev.target.matches('input[type="checkbox"][data-input="area"]')) {
    copyAreaCheckboxState(ev.target);
  }
});

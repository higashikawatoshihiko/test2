
document.addEventListener('DOMContentLoaded', () => {
  flatpickr.localize(flatpickr.l10ns.ja);

  flatpickr('.input-group.input-flatpickr-date', {
    allowInput: true,
    clickOpens: false,
    dateFormat: 'Y/m/d',
    wrap: true,
  });

  flatpickr('.input-group.input-flatpickr-time', {
    allowInput: true,
    clickOpens: false,
    dateFormat: "H:i",
    enableTime: true,
    noCalendar: true,
    time_24hr: true,
    wrap: true,
  });
});

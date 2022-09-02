var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

//閉じるボタン
function close() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
};

//開くボタン
function open() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
};
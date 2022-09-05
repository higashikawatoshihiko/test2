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

$(function(){
  tr_default("#tbl");
  $("#tbl tbody tr").click(function(){
   tr_click($(this));
  });
});

function tr_default(tblID){
  var vTR = tblID + " tbody tr";
  var edit = document.querySelectorAll(".btn-edit");
  $(vTR).css("background-color","white");
  $(vTR).css("font-weight","normal");
  $(edit).css("visibility","hidden");
}

function tr_click(trID){
  var edit = trID.find("#btn-edit");
  tr_default("#tbl");
  trID.css("background-color","rgba(255,248,159,1)");
  trID.css("font-weight","bold");
  $(edit).css("visibility","visible");
}
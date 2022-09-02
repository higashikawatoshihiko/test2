$(function(){
  tr_default("#tbl");
  $("#tbl tr").click(function(){
   tr_click($(this));
  });
});

function tr_default(tblID){
  var vTR = tblID + " tr";
  var edit = document.querySelectorAll(".btn-edit");
  var del = document.querySelectorAll(".btn-delete");
  $(vTR).css("background-color","#ffffff");
  $(edit).css("visibility","hidden");
  $(del).css("visibility","hidden");
}

function tr_click(trID){
  var edit = trID.find("#btn-edit");
  var del = trID.find("#btn-delete");
  tr_default("#tbl");
  trID.css("background-color","#e49e61");
  $(edit).css("visibility","visible");
  $(del).css("visibility","visible");
}

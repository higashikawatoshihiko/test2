$(function(){
    var flg = "off";
    $('.shoubyoumei').on('click', function(){
      if(flg == "off"){
        $(this).text("↑傷病名");
        flg = "on";
      }else{
        $(this).text("↓傷病名");
        flg = "off";
      }
    });
  });
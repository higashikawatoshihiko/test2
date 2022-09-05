$(function(){
    var flg = "off";
    $('.zigyou').on('click', function(){
      if(flg == "off"){
        $(this).text("↑事業所検索");
        flg = "on";
      }else{
        $(this).text("↓事業所検索");
        flg = "off";
      }
    });
  });
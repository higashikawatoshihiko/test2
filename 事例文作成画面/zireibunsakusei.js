


    $(function(){
        var flg = "off";
        $('.naiyo1').on('click', function(){
          if(flg == "off"){
            $(this).text("↑内容");
            flg = "on";
          }else{
            $(this).text("↓内容");
            flg = "off";
          }
        });
      });
     
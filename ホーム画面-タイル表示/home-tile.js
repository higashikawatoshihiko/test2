// サンプルデータ
const SAMPLES = [
  { "name": "秋田 次生", "oshirase": "保", "oshirase_label": "～4/30","select": "true" },
  { "name": "秋田 照也", "oshirase": "保", "oshirase_label": "～4/30", "select": "true" },
  { "name": "足立 繁造", "oshirase": "短", "oshirase_label": "～5/31" },
  { "name": "天野 慎治" },
  { "name": "荒井 保行", "oshirase_label": "申請中" },
  { "name": "池上 康三" },
  { "name": "石塚 秋徳" },
  { "name": "大野 茂平", "nintei": "支2" },
  { "name": "奥野 正次" },
  { "name": "亀井 美紀", "avatar": "../icons/avatar-female.svg" },
  { "name": "川原 邦江", "avatar": "../icons/avatar-female.svg" },
  { "name": "岸 利恵", "avatar": "../icons/avatar-female.svg" },
  { "name": "木村 信弥" },
  { "name": "黒木 知美", "avatar": "../icons/avatar-female.svg" },
  { "name": "小西 孝敏" },
  { "name": "関口 理香", "avatar": "../icons/avatar-female.svg" },
  { "name": "関根 裕紀" },
  { "name": "大崎 次生" },
  { "name": "高橋 結衣", "avatar": "../icons/avatar-female.svg" },
  { "name": "田村 宏侑" },
  { "name": "塚本 松次郎" },
  { "name": "長沢 雅近" },
  { "name": "福岡 兼典", "avatar": "../icons/avatar-female.svg" },
  { "name": "福原 重文" },
  { "name": "藤田 初美", "avatar": "../icons/avatar-female.svg" },
  { "name": "古谷 嘉彦" },
  { "name": "星 礼子", "avatar": "../icons/avatar-female.svg" },
  { "name": "堀田 克明" },
  { "name": "堀江 菊治" },
  { "name": "町田 初" },
  { "name": "松永 三保子", "avatar": "../icons/avatar-female.svg" },
  { "name": "松山 淳子", "avatar": "../icons/avatar-female.svg" },
  { "name": "三上 真志" },
  { "name": "水野 弘春" },
  { "name": "宮下 真由美", "avatar": "../icons/avatar-female.svg" },
  { "name": "森下 則昭" },
  { "name": "山岸 心一" },
  { "name": "山下 茂平" },
  { "name": "吉岡 敬正" },
  { "name": "吉田 麻樹", "avatar": "../icons/avatar-female.svg" }
];

function initSamples() {
  // 要素の複製
  const item = document.querySelector('.himawari-card');
  for (let i = 1; i < SAMPLES.length; i++) {
    const newItem = item.cloneNode(true);
    item.parentNode.appendChild(newItem);
  }

  // サンプルデータ反映
  const cards = document.querySelectorAll('.himawari-card');
  for (let i = 0; i < SAMPLES.length; i++) {
    const sample = SAMPLES[i];
    const card = cards[i];
    const nintei = card.querySelector('[data-sample="nintei"]');

    card.querySelector('[data-sample="name"]').textContent = sample.name;

    if (sample.avatar) {
      card.querySelector('[data-sample="avatar"]').src = sample.avatar;
    }

    if (sample.oshirase) {
      card.querySelector('[data-sample="oshirase"]').textContent = sample.oshirase;
    } else {
      card.querySelector('[data-sample="oshirase"]').style.display = 'none';
    }

    if (sample.oshirase_label) {
      card.querySelector('[data-sample="oshirase_label"]').textContent = sample.oshirase_label;
    } else {
      card.querySelector('[data-sample="oshirase_label"]').style.display = 'none';
    }

    if(sample.select) {
      card.classList.add('select-border');
      card.querySelector('[data-sample="card-corner"]').classList.add('select-corner');
    }

    if (sample.nintei) {
      nintei.classList.add('badge-nintei-sien');
      nintei.textContent = sample.nintei;
    }
  }
}

// ready イベント
document.addEventListener('DOMContentLoaded',initSamples);

$(document).on('change', '.btn-group.btn-group-toggle[data-toggle="buttons"] > .btn > input[type="radio"]', function(e) {
  const radio = $(this);
  const group = radio.closest('.btn-group');
  group.children('.active').removeClass('active');

  radio.parent().addClass('active');
});






$(document).on('click', function(e) {
	// ２．クリックされた場所の判定
	if(!$(e.target).closest('#pop_up').length && !$(e.target).closest('#button').length){
		$('#pop_up').fadeOut();
	}else if($(e.target).closest('#button').length){
		// ３．ポップアップの表示状態の判定
		if($('#pop_up').is(':hidden')){
			$('#pop_up').fadeIn();
		}else{
			$('#pop_up').fadeOut();
		}
	}
});

$(document).on('click', function(e) {
	// ２．クリックされた場所の判定
	if(!$(e.target).closest('#pop_up1').length && !$(e.target).closest('#button2').length){
		$('#pop_up1').fadeOut();
	}else if($(e.target).closest('#button2').length){
		// ３．ポップアップの表示状態の判定
		if($('#pop_up1').is(':hidden')){
			$('#pop_up1').fadeIn();
		}else{
			$('#pop_up1').fadeOut();
		}
	}
});

$(function(){
  $('.four').hide();
  var flg = "off";
  $('.one').on('click',function(){
    // クリックした要素の ID と違うクラス名のセクションを非表示
    $('.two').not($('.'+$(this).attr('id'))).hide();
    // クリックした要素の ID と同じクラスのセクションを表示
    $('.'+$(this).attr('id')).show();
    
    // toggle にすると、同じボタンを 2 回押すと非表示になる
    // $('.'+$(this).attr('id')).toggle();
    // クリックした要素の ID と違うクラス名のセクションを非表示
    $('.three').not($('.'+$(this).attr('id'))).hide();
    // クリックした要素の ID と同じクラスのセクションを表示
    $('.'+$(this).attr('id')).show();
    
     
    
   
  });
});











$(function(){
  var nowchecked = $('input:checked').val();
  $('input').click(function(){
      if($(this).val() == nowchecked) {
          $(this).prop('checked', false);
          nowchecked = false;
      } else {
          nowchecked = $(this).val();
      }
  });
});


$(function() {
  $('.hosokuToolTip')
  // Tooltipの設定
  .tooltip({
    title: '有効期限は○○です。',
    placement: 'top',
    trigger: 'manual'
  })
  // Tooltip表示後の動作を設定
  .on('shown.bs.tooltip', function(){
    setTimeout((function(){
      $(this).tooltip('hide');
    }).bind(this), 2000);
  })
  // クリック時の動作を設定
  .on('click', function(e) {
    $(this).tooltip('show'); // Tooltipを表示する
    e.preventDefault();
  });
});



$(function(){
  
  $('.pin').on('click', function(e){
    if($("img").hasClass('.select-corner')){
      $("img").removeClass('.select-corner');
    }else{
      $("img").addClass('.select-corner');
    }
    e.preventDefault();
  });
});

$(function() {
    
  /// 長押し検知の閾値
  var LONGPRESS = 1500;
  /// イベント発火するタイマーのID
  var timerId;
  $(window).on("touchstart",function(e){
  timerId = setTimeout(function(){
      /// イベントタイプ longpress を発火
      $(e.target).trigger('longpress');
  }, LONGPRESS);
  }).on("touchend",function(){
      // 長押し検知タイマーを消去
      clearTimeout(timerId);
  });

  $('.long-press').on('longpress', function(e){
      /// 長押し（longpress）された時の処理...
//            alert('ボタンを長押ししました！');    

      $('#menu').css('top', e.pageY + 'px')
              .css('left', e.pageX + 'px')
              .css('visibility', 'visible');
      return false;
  })  
  
  $('.long-press').bind('contextmenu', function(e) {
      $('#menu').css('top', e.pageY + 'px')
              .css('left', e.pageX + 'px')
              .css('visibility', 'visible');
      return false;
  });

  $(window).on('click', function(e){
      if($(e.target).closest('.long-press').length < 1){
          $('#menu').css('visibility', 'hidden');
      }
  });

});
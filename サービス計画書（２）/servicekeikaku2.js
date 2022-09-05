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

$(function(){

	$('#remberme-label').on('click', function() {
		var $rInput = $('#remberme-input');
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$rInput.val(0);
		} else {
			$(this).addClass('active');
			$rInput.val(1);
		}
	});


	var tab = 'account_number';

	$('#num').keyup(function(event) {
		$('.tel-warn').addClass('hide');
		checkBtn();
	});

	$('#pass').keyup(function(event) {
		$('.tel-warn').addClass('hide');
		checkBtn();
	});



	// 按钮是否可点击
	function checkBtn()
	{
		$(".log-btn").off('click');
		if (tab == 'account_number') {
			var inp = $.trim($('#num').val());
			var pass = $.trim($('#pass').val());
			if (inp != '' && pass != '') {
				$(".log-btn").removeClass("off");
						sendBtn();
			} else {
				$(".log-btn").addClass("off");
			}
		} 
	}

	function checkAccount(username){
		if (username == '') {
			$('.num-err').removeClass('hide').find("em").text('请输入账户');
			return false;
		} else {
			$('.num-err').addClass('hide');
			return true;
		}
	}

	function checkPass(pass){
		if (pass == '') {
			$('.pass-err').removeClass('hide').text('请输入密码');
			return false;
		} else {
			$('.pass-err').addClass('hide');
			return true;
		}
	}

	function checkCode(code){
		if (code == '') {
			// $('.tel-warn').removeClass('hide').text('请输入验证码');
			return false;
		} else {
			// $('.tel-warn').addClass('hide');
			return true;
		}
	}



	// 登录点击事件
	function sendBtn(){
		if (tab == 'account_number') {
			$(".log-btn").click(function(){
				// var type = 'phone';
				var inp = $.trim($('#num').val());
				var pass = $.trim($('#pass').val());
				if (checkAccount(inp) && checkPass(pass)) {
					layer.msg('登录检测中，请稍候...');
					setTimeout(() => {
						$('#form-x')[0].submit();
					}, 1000);
				} else {
					return false;
				}
			});
		} 
	}

	// 登录的回车事件
	$(window).keydown(function(event) {
    	if (event.keyCode == 13) {
    		$('.log-btn').trigger('click');
    	}
    });




});
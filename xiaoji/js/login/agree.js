
$(function(){
   	if (hasLogin == 1) {
        layer.msg('检测到您已登录，即将跳转');
        setTimeout(() => {
            window.location.href = 'index.php';
        }, 2000);
    }


   	//输入框输入时模拟placeholder效果
   	var oInput = $(".form-data input");
   	oInput.focus(function () {
		$(this).siblings("label").hide();
    });
   	oInput.blur(function () {
		if($(this).val()==""){
			$(this).siblings("label").show();
		}
	});
   	// 输入框内容变化按钮颜色发生变化
   	oInput.keyup(function () {
		if($(this).val()!="jquery.js"){
			$(".log-btn").removeClass("off")
		}else{
            $(".log-btn").addClass("off")
		}
    });

});
   
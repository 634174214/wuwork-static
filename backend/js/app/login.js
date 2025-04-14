require([
    'pieceConfig',
    'pieceLayer',
    'pieceParticles',
    'jqvalidate'
],function(
    config,
    pieceLayer,
    particles,
    validate
){
    // 初始化layer插件
    var layer = pieceLayer.init();
    var $loginForm = $('#login-form');
    var $verifyImg = $('#v-code').find('img').eq(0);
    var firstImgUrl = $verifyImg.attr('src');
    var isforget = $loginForm.hasClass('forget');
    var submitUrl = isforget ? 'index.php?controller=api&model=getmine' : 'index.php?controller=api';
    // console.log(submitUrl)
    var usercheck = 'index.php?controller=api&model=user';
    var verifycheck = 'index.php?controller=api&model=verify';
    // 移除禁止动画元素
    $('body').removeClass('preload');

    // 加载后删除表单中隐藏的表单域，因为chrome会自动填充表单，所以开始就把填充了用户名密码的隐藏域删掉
    // 删除需要有一个延迟，否则会填充到正式的Input中
    setTimeout(function () {
        // $('#login-form').find('.hidden').remove();
    },5000);

    // 验证码刷新
    var refreshVerify = function () {
        var timeStamp = new Date().getTime();
        $verifyImg.attr('src', firstImgUrl + '&t=' + timeStamp);
    };

    $('.input-control').on('focus', function () {
        $(this).siblings('.label-control').addClass('ani');
    });
    $('.input-control').on('blur', function () {
        var nowValue = $(this).val();
        if (nowValue.length <= 0) {
            $(this).next().removeClass('ani');
        }
    });

    var loginForm = $loginForm.validate({
        // degbug: true,
        errorElement: 'span',
        focusInvalid: false,
        focusCleanup: true,
        rules: {
            // 用户名验证, 用户名Input的name
            myname: {
                required: true,
                remote: {
                    url: usercheck,
                    type: "POST",
                    data: {
                        myname: function () {
                            return $('#myname').val();
                        }
                    }
                }
            },
            password: {
                required: true
            },
            // 验证码验证
            verify: {
                required: true,
                maxlength: 4,
                remote: {
                    url: verifycheck,
                    type: "POST",
                    data: {
                        verify: function () {
                            return $('#verify').val();
                        }
                    }
                }
            },
            // 邮箱验证
            myemail: {
                required: true,
                email: true
            }
        },
        messages: {
            myname: {
                required: "用户名不能为空",
                remote: "用户名不存在"
            },
            password: {
                required: "用户密码不能为空"
            },
            verify: {
                required: "请输入4位验证码，不区分大小写",
                remote: "验证码不正确，请更换验证码重新输入",
                maxlength: "验证码长度不能超过4位！"
            },
            myemail: {
                required: '用户邮箱不能为空',
                email: '输入的必须是邮箱格式！'
            }
        },
        submitHandler: function(form) {
            // 由于邮件发送等操作有等待时间，所以必须出现一个等待界面
            var emailLoading = isforget ? layer.load(1, {
                shade: [0.7,'#fff'], //0.1透明度的白色背景
                content: '<span class="load-tips">邮件发送中...</span>'
            }) : null;
            // 使用post提交的时候data必须是一个对象的形式！不能是一个字符串！，JQ会自动将对象转化为字符串
            /*
           注意这里不能写在 data中 要与自动验证的remote方式区别开
           data:{
               formData: function() {
                var formArr = $(form).serializeArray();
                var dataObj = {};
                $.each(formArr, function() {
                    dataObj[this.name] = this.value;
                });
               }
            }
            要先获得再传递
            */

            var formArr = $(form).serializeArray();
            var dataObj = {};
            $.each(formArr, function() {
                dataObj[this.name] = this.value;
            });
            // 验证通过使用AJAX提交
            $.ajax({
                url: submitUrl,
                type: 'POST',
                dataType: 'json',
                data: dataObj,
                success: function(response) {
                    if(response.error === 0) {
                        // 如果是忘记密码页
                        if (isforget) {
                            var $goLogin = $('<a href="index.php?controller=login" class="sign-btn goback">点我返回登录</a>');
                            $('.sign-btn').after($goLogin).remove();
                            // 对email进行@拆分，获取@后面地址
                            var email_address = dataObj.myemail.split('@')[1];
                            email_address = 'http://mail.' + email_address;
                            layer.msg(response.msg, {
                                time: 0,
                                btn: ['我知道了', '前往邮箱'],
                                btn2: function() {
                                    window.open(email_address);
                                }
                            });
                            // 一次性关闭所有验证
                            $.validator = null;

                        } else {
                            layer.msg(response.msg);
                            setTimeout(function () {
                                window.location.href = response.url;
                            }, 1000);
                        }

                    } else {
                        refreshVerify();
                        // 验证失败
                        layer.msg(response.msg);
                    }
                },
                error: function(err) {
                    layer.msg('数据获取有误，请稍后重试 ' + err.status);
                },
                complete: function () {
                    // 关闭等待层,无论邮件发送成功与否都关闭
                    layer.close(emailLoading);
                }
            });

            // return false;
        },
    });

    // 验证码刷新
    $('#v-code').on('click', function() {
        refreshVerify();
        // https://blog.csdn.net/LitongZero/article/details/87877474
        // 校验重置，发现插件有Bug当第一次验证码通过后，再变换验证码-提交不会有验证提示，这里每次切换图片时候重置表单的验证
        // $('#verify').val(''); // 输入框为空会有个错误提示 所以去掉
        loginForm.resetForm();
    });

    // 背景粒子数量
    var particlesNum = config.ispc ? 100 : 30;
    particles.init(particlesNum);
})
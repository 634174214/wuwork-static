require([
    'piecePublic',
    'pieceValidate',
    'pieceTable',
    'pieceDelBtn'
],function(
    spublic,
    validate,
    table,
    delbtn
){
    spublic.init();
    delbtn.init();
    var $validate = $('.validate');
    if($validate.length > 0) {
        validate.init({
            class: 'validate'
        });
    }
    table.init();

    // 发送邮件的操作
    var $sendBtn = $('#sendmail-btn');
    var $myreply = $('#mes-myreply');
    var $myreplyEmail = $('#mes-myreply-email');
    var $email = $('#mes-email');
    var $content = $('#mes-content');

    $sendBtn.on('click', function () {
        var reply = $myreply.val();
        var replyE = $myreplyEmail.val();
        var email = $email.val();
        var content = $content.val();
        if (!email) {
            layer.alert('邮箱地址不能为空！', {
                title: '系统提示'
            });
            return;
        }
        if (!content) {
            layer.alert('留言的内容不能为空！', {
                title: '系统提示'
            });
            return;
        }
        // 优先特殊定制的内容
        var body = replyE || reply ;
        if (!body) {
            layer.alert('留言回复或邮件通知必须至少一项有内容！', {
                title: '系统提示'
            });
            return;
        }
        var sendBody = `
            您在<a href="https://www.wubin.work/message" target="_blank">https://www.wubin.work/message</a>上的留言有回复啦！
            <p>您的留言：</p>
            <p style="padding: 15px;background: #f2f2f2;margin-top: 10px;">${content}</p>
            <p> WuBin的回复内容如下：</p>
            <p style="padding: 15px;background: #f2f2f2;margin-top: 10px;">${body}</p>
            <p style="margin-top: 15px;border-top: 1px solid #ccc;padding-top: 15px;color: red;">祝您工作顺利，生活愉快，闲暇之余来<a href="https://www.wubin.work" target="_blank">wubin.work看看哦~</a></p>
            <p style="color: #ccc;font-size: 12px;margin-top: 5px;">邮件来自于：https://www.wubin.work</p>        
        `;

        var loading = layer.load(1);
        $.ajax({
            url: 'index.php?controller=api&model=sendmail',
            type: 'POST',
            data: {
                email: email,
                body: sendBody,
                // 邮件标题
                subject: '您在wubin.work的留言有回复啦！'
            },
            dataType: 'json'
        })
            .done(function (res) {
                setTimeout(function () {
                    layer.close(loading);
                    if (res.error === 0) {
                        layer.alert(res.msg, {
                            title: '系统提示',
                            icon: 1
                        })
                    } else {
                        layer.alert('邮件发送失败！');
                    }
                }, 600);
            })
            .fail(function () {
                layer.alert('网络环境问题，邮件发送失败！');
            })

    });
});
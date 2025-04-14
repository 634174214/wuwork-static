require([
    'piecePublic',
    'pieceUploader',
    'pieceValidate',
    'pieceSingleImg',
    'webuploader'
], function (
    piece_public,
    pUploader,
    validate,
    singleUpload,
    wp
) {
    piece_public.init();

    // 当验证成功即将提交的时候，获取所有upimg-list中的元素拼接成头像历史用到的字符串
    var getAllAvatar = function() {
        var $historyInput = $('#avatar-history');
        var $avatarImgs = $('#avatar-list img');
        var resStr = '';
        var splitMark = '|+|';
        $avatarImgs.each(function (index) {
            // 检测是否有loading-pc.gif,有的话证明上传失败，应该排除
            var hasErrimg = (this.src.indexOf('loading-pc.gif') > -1);
            if (hasErrimg) {
                // 如果含有loading-pc.gif那么就跳出当前遍历执行下个遍历, return false是跳出全部循环
                return true;
            }
            // 这样无论什么情况最后都有个|+|
            resStr += this.src + splitMark;
        });
        // 对字符串进行处理，去掉末尾的|+|, 从0位置开始到字符串末尾-3个字符的位置
        resStr = resStr.slice(0, resStr.length - 3);
        // 判断$historyInput是否存在不存在则创建, 这样就不怕input被删除了
        if ($historyInput.length <= 0) {
            $historyInput = $('<input type="hidden" name="avatar-history" id="avatar-history" value="">');
            var $father = $('#avatarPicker').parent();
            $historyInput.insertAfter($father)
        }
        $historyInput.attr('value', resStr);
    };

    validate.init({
        class: 'validate',
        // 验证成功即将要提交之前要执行的回调函数
        callback: getAllAvatar
    });

    // 同一个页面启动多个webuploader，使用一个循环 对每个上传分别配置
    $('.pick-imgone').each(function (index, el) {
        singleUpload.init({
            pickid: el,
            isbig: false,
            fileval: 'userimg',
            server: 'index.php?controller=upload&model=user'
        })
    });

});
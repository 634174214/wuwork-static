// 单个图片文件的上传, 当一个页面中有多个单个上传时 使用一个循环 详情见userinfo.js
// 必须配合固定的元素结构
define([
    'pieceUploader',
], function (
    uploader
) {
    // 上传图片的元素模板,file = 上传的图片信息  isbig= 是否是大的图
    var imgup_item_tpl = function (file, isbig) {
        // 前面注意空格, newinsert样式表明是新插入的
        var bigcls = isbig ? ' big' : '';
        var tpl = '<li class="item active" id="' + file.id + '">';
        tpl += '<div class="item-inner' + bigcls + '">';
        tpl += '<img src="https://634174214.gitee.io/myblog-admin-assets/img/loading-pc.gif" class="loading">';
        tpl += '<p class="status">上传中...</p>';
        tpl += '</div>';
        tpl += '<div class="delete-img"><i class="icon fa fa-times"></i></div>';
        tpl += '</li>';
        return $(tpl); 
    };

    var removeMark = function ($li) {
        $li.each(function () {
            var $status = $(this).find('.status');
            $status.remove();
        });
    };

    var selectMode = function ($pick, $input) {
        var $imglist = $pick.siblings('.upimg-list');
        // 点击选择元素, 给焦点框输入值
        $imglist .on('click', 'li', function () {
            if (!$imglist.hasClass('select-mode')) {
                return;
            }
            var $allLi = $('li', $imglist);
            var imgSrc = $(this).find('img').eq(0).attr('src');
            $input.val(imgSrc);
            $allLi.removeClass('active');
            $(this).addClass('active');
        });
    };

    // 获取将要得到焦点的元素
    var getWillActive = function ($li) {
        // 获得传入元素的前后元素
        var $next = $li.next('li');
        var $prev = $li.prev('li');
        var $will = $();
        switch (true) {
            case $next.length > 0:
                $will = $next;
                break;
            case $next.length <= 0 && $prev.length > 0:
                $will = $prev;
                break;
            default:
                $will = false; // 当前后都没有元素时候
        }
        return $will;
    };

    var deleteImg = function ($pick, $input) {
        // 通过$pick找到结构中的列表, 这里不用重置上传因为pick的时候就重置了
        var $imglist = $pick.siblings('.upimg-list');
        var isSelectMode = $imglist.hasClass('select-mode');
        $imglist.on('click', '.delete-img', function () {
            var $li = $(this).parent();
            var $willActive = getWillActive($li);
            var isActive = $li.hasClass('active');
            // 如果是选择模式 并且当前li在选择状态
            if (isSelectMode &&
                $willActive &&
                isActive
            ) {
                $willActive.addClass('active');
                var imgSrc = $willActive.find('img').eq(0).attr('src');
                $input.val(imgSrc);
            }
            // 如果不是active的状态 那么直接删除li即可
            $li.remove();
            // 这里必须要阻止冒泡，否则会触发点击li元素时候添加active
            return false;
        });
    };

    /*
    * obj
    * server: '提交的地址'
    * pickid: 提交按钮的id名
    * isbig : 是否是轮播那样的大图,true 是的话就添加样式big
    * fileval: 用于后台进行接收的Name属性
    * */
    var init = function (obj) {
        // 获取当前上传的按钮Jq元素
        var $this = $(obj.pickid);
        // 获取最终存储图片链接input的元素，这个可以提前获取，只有显示容器不可提前获取，必须在插入队列的时候获取
        var $imginput = $this.siblings('input');
        var imgLoader = uploader.init({
            server: obj.server,
            auto: true,
            pick: {
                id: obj.pickid,
                // 限制多文件上传
                multiple: false
            },
            chunked: true,//开启分片上传
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            },
            compress: false,//webuploader默认压缩图片,设置compress:false，可以按照原始比例上传图片
            fileVal: obj.fileval,
            threads: 1, //上传并发数。允许同时最大上传进程数,为了保证文件上传顺序
            // 验证文件总数量, 超出则不允许加入队列
            fileNumLimit: 1,
            // 验证文件总大小 不能超过6M
            fileSizeLimit: 6291456,
            // 单个文件大小不可以超过6M
            fileSingleSizeLimit: 6291456
        });
        // 添加到上传队列, 如果是多文件上传，切记需要在添加到队列的时候进行其他容器DOM元素的获取！
        imgLoader.on('fileQueued', function (file) {
            var $imglist = $this.siblings('.upimg-list');
            var $li = $imglist.find('li');
            // 判断列表上是否有select-mode样式，如果有的话就不都清除，只清除第一个
            var hasSelectMode = $imglist.hasClass('select-mode');
            if ($li.length > 0) {
                // 所有的li移除掉active样式
                $li.removeClass('active');
                // 如果是选中模式 那么就只会向列表中插入 不会去替换原来的位置 并删除各种标记
                hasSelectMode && removeMark($li);
                // 不是选中模式那么删除全部的li元素
                !hasSelectMode && $li.remove();
            }
            var $item = imgup_item_tpl(file, obj.isbig);
            $imglist.prepend($item);
        });
        // 上传是否成功或失败的回调
        imgLoader.on('uploadSuccess', function (file, response) {
            var $li = $('#' + file.id),
                $img = $li.find('img').eq(0),
                $status = $li.find('.status').eq(0);
            if (response.error === 0) {
                var url = response.data[0];
                $img.removeClass('loading').attr('src', url);
                $status.addClass('success').text('上传成功');
                $imginput.val(url);
                // 成功后检测当前地址输入框后是否有span.error元素 有那么就隐藏
                $imginput.next('span.error').hide();
            } else {
                $status.addClass('error').text('上传失败');
            }
        });
        // 上传是失败的回调
        imgLoader.on('uploadError', function (file, response) {
            alert('上传失败，请刷新页面重试！');
        });

        // 每次点击的时候让uploader重置，然后只能选择一张图片
        $this.on('click', function () {
            imgLoader.reset();
        });
        // 如果是选择模式
        selectMode($this, $imginput);
        // 删除图片
        deleteImg($this, $imginput);
    };

    return {
        init: init
    }
});
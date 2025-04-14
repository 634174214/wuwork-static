// https://www.kancloud.cn/wangfupeng/wangeditor3/335775
define(['editor'], function(editor){
    var wEditor = null;
    var editorBox = null;

    // 全屏的事件
    var fullscreen = function () {
        var $mainBody = $('.piece-body-main').eq(0);
        // 判断是否有全屏的样式
        var hasFullScreen = $('#piece-editor').hasClass('w-e-full-screen-editor');
        if (hasFullScreen) {
            $mainBody.addClass('editor-fullscreen');
        } else {
            $mainBody.removeClass('editor-fullscreen');
        }
    };

    var init = function(obj) {
        editorBox = document.getElementById('piece-editor');
        wEditor = new editor(editorBox);
        setconfig(obj.hls);
        imgUpload(obj.server, obj.uploadFileName);
        // 如果传递了textareaID属性 那么就使用textarea储存
        if(obj.textareaID) {
            var $textarea = $('#' + obj.textareaID);
            useTextarea($textarea);
        }
        // new以后 必须要在所有配置项都配置好后，在执行create()
        wEditor.create();

        // 必须在create之后进行与textarea同步内容 以防富文本有内容编辑
        if(obj.textareaID) {
            $textarea.val(getHtml());
        }

        // 需要给富文本加一个name 否则JQ.validate会因为找不到富文本的name而报错
        wEditor.$textElem.attr('name', 'edit');
        // 添加编辑器工具栏点击的事件
        wEditor.txt.eventHooks.toolbarClickEvents.push(fullscreen);
    };

    var setconfig = function (hls) {
        wEditor.config.debug = true;
        // 设置编辑区域高度为 500px
        wEditor.config.height = 400;
        // 取消自动 focus
        wEditor.config.focus = true;
        // 修改默认提示输入文字
        wEditor.config.placeholder = '请输入新的文章内容';
        // 配置全屏功能按钮是否展示
        wEditor.config.showFullScreen = true;
        // 是否过滤粘贴的文本样式
        wEditor.config.pasteFilterStyle = true;
        //插入代码语言配置
        wEditor.config.languageType = [
            'Html',
            'CSS',
            'JavaScript',
            'PHP',
            'SQL',
            'JSON',
            'TypeScript',
            'C',
            'Java',
            'XML',
            'Markdown',
            'Python'
        ];
        wEditor.highlight = hls;
        // 忽略从word等处粘贴来的图片 只保留文字信息
        wEditor.config.pasteIgnoreImg = true;
        // 自定义检查插入图片的链接, 不可用
        // wEditor.config.linkImgCheck = function(imgSrc) {
        //     return imgSrc + '图片 src 有 xxx 错误';
        // };
    };

    var getHtml = function() {
        return wEditor.txt.html();
    };

    var getText = function() {
        return wEditor.txt.text();
    };

    // 上传图片的相关配置
    var imgUpload = function(server, name) {
        // 配置服务器端地址
        // wEditor.config.uploadImgServer = server;
        // 文件名称也就是你在后台接受的参数值
        // wEditor.config.uploadFileName = "articleimg";
        //header头信息
        // wEditor.config.uploadImgHeaders = {
        //     'Accept': 'text/x-json'
        // }
        // 将图片大小限制为 6M
        wEditor.config.uploadImgMaxSize = 5 * 1024 * 1024;
        // 限制一次最多上传 5 张图片
        wEditor.config.uploadImgMaxLength = 5;
        // false隐藏插入网络图片的功能，即只保留上传本地图片
        wEditor.config.showLinkImg = true;
        // 上传图片时可自定义传递一些参数
        // wEditor.config.uploadImgParams = {
        //     token: 'workupload',
        // };
        // 上传返回的情况
        wEditor.config.uploadImgHooks = {
            fail:function (xhr, editor, result) {
                console.table(result);
                //上传错误时触发
                alert("上传图片失败");
            }
        };
        /**
         * 重写多图上传的方法
         * @param resultFiles 是 input 中选中的文件列表
         * @param insertImgFn 是获取图片 url 后，插入到编辑器的方法
         * 上传图片，返回结果，将图片插入到编辑器中
         * insertImgFn(imgUrl)
         */
        wEditor.config.customUploadImg = function(resultFiles, insertImgFn) {
            // 插件自带的仅支持单图上传，这里做成多图上传
            var formData = new FormData();
            for(var i = 0;i < resultFiles.length;i ++) {
                formData.append(name + "[" + i + "]", resultFiles[i]);
            }
            $.ajax({
                url: server,
                type: "POST",
                data: formData,
                // 当为false时候是同步的！
                async: true,
                cache: false,
                dataType: 'json',
                contentType: false,
                processData: false,
                success:function(res){
                    console.log(res)
                    if (res.error === 0) {
                        $.each(res.data, function () {
                            insertImgFn(this);
                        })
                    }
                }
            });
        };
    };

    // 编辑时，将内容同步到textarea中
    var useTextarea = function($textarea) {
        wEditor.config.onchange = function (html) {
            // 监控变化，同步更新到 textarea
            $textarea.val(html)
        }
    };

    return {
        init: init,
        getHtml: getHtml,
        getText: getText
    };
});
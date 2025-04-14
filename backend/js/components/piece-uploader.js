// http://fex.baidu.com/webuploader/download.html
// http://fex.baidu.com/webuploader/getting-started.html
define(['webuploader'], function(webuploader){
    
    var init = function(obj) {
        if ( !webuploader.Uploader.support() ) {
            alert( 'Web Uploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器');
            throw new Error( 'WebUploader does not support the browser you are using.' );
        }

        var baseConfig = {
            auto: false,
            server: '',
            swf: '../libs/webuploader/Uploader.swf',
            pick: '.filepick',
            resize: false
        }

        if(obj.onlypic) {
            baseConfig.accept = {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }
        }
        obj = $.extend(baseConfig, obj);

        var uploader = webuploader.create(obj);
        return uploader;
    };

    return {
        init: init
    };
});
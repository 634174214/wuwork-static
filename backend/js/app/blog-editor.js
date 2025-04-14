require(
[
    'highlight',
    'pieceEditor',
    'pieceUploader',
    'pieceValidate',
    'pieceAppendfiles',
    'piecePublic',
], function (
    hls,
    editor,
    uploader,
    validate,
    appendfiles,
    spublic
) {
    spublic.init();
    // 编辑器的启动
    editor.init({
        // 图片上传的路径
        server: 'index.php?controller=upload',
        // 上传图片表单的name属性
        uploadFileName: 'articleimg',
        // 如果不使用传统的方法提交富文本就填false
        textareaID: 'article-content',
        // 传入highlight插件，并不能使用hls接收
        hls: hljs,
    });

    // webuploader的启动与配置
    var $fileList = $('#file-list'),
        $fileUpload = $('#file-upload'),
        state = 'pending';
    var zipup_base_tpl = function (file) {
        var tpl = '<li id="' + file.id + '">' +
            '<div class="left">' +
            '<i class="icon fa fa-file-archive-o"></i>' +
            '<p class="file-name">' + file.name + '</p>' +
            '<span class="precent">0%</span>' +
            '<div class="progress">' +
            '<cite style="width: 0%;" class="progress-bar"></cite>' +
            '</div>' +
            '</div>' +
            '<div class="right">' +
            '<div class="tips">' +
            '等待上传' +
            '</div>' +
            '<div class="delete">' +
            '<i class="icon fa fa-trash-o"></i>' +
            '</div>' +
            '</div>' +
            '<input type="hidden" name="uploadfiles[]" value="" class="upfile-url"> ' +
            '<input type="hidden" name="uploadnames[]" value="" class="upfile-name"> ' +
            '</li>';
        return $(tpl);
    };
    var zipLoader = uploader.init({
        server: 'index.php?controller=upload&model=blogzip',
        pick: {
            id: '#picker',
            // 限制多文件上传
            multiple: false
        },
        chunked: true,//开启分片上传
        dnd: "#drag-box",
        accept: {
            title: 'Zip',
            extensions: 'zip',
            mimeTypes: 'application/zip,application/x-zip,application/x-zip-compressed',
        },
        // 设置文件上传域的name
        fileVal: 'uploadfiles',
        // 验证文件总数量, 超出则不允许加入队列,这里由于会导致逻辑问题所以取消
        // fileNumLimit: 10
    });
    zipLoader.on('all', function (type) {
        if (type === 'startUpload') {
            state = 'uploading';
        } else if (type === 'stopUpload') {
            state = 'paused';
        } else if (type === 'uploadFinished') {
            state = 'done';
        }

        if (state === 'uploading') {
            $fileUpload.addClass('disable');
        }
    });
    // 当文件被加入队列之前触发，如果文件列表中有10条li时候,提示不能上传
    // zipLoader.on( 'beforeFileQueued', function( file ) {
    //     var fileListItemsCount = $fileList.find('li').size();
    //     if (fileListItemsCount > 9) {
    //         alert('上传文件不能超过10条!');
    //         return false;
    //     }
    // });
    // 添加到上传队列
    zipLoader.on('fileQueued', function (file) {
        $item = zipup_base_tpl(file);
        $fileList.append($item);
        if ($fileUpload.hasClass('disable')) {
            $fileUpload.removeClass('disable');
        }
    });
    // 当文件被移出上传队列时候触发
    zipLoader.on('fileDequeued', function (file) {
        // 获取文件统计信息
        var stats = zipLoader.getStats();
        setTimeout(function () {
            var hasleft = ($fileList.find('li').length > 0 && stats.queueNum === 0);
            if (!hasleft) {
                $fileUpload.addClass('disable');
            }
        }, 100);
    });
    // 文件上传过程中创建进度条实时显示。
    zipLoader.on('uploadProgress', function (file, percentage) {
        var $li = $('#' + file.id),
            $precent = $li.find('.precent'),
            $progress = $li.find('.progress-bar'),
            $tips = $li.find('.tips');
        var percent = Math.ceil(percentage * 100) + '%';
        $tips.text('正在上传');
        $precent.text(percent);
        $progress.css('width', percent);
    });
    // 上传是否成功或失败的回调
    zipLoader.on('uploadSuccess', function (file, response) {
        var $fileLi = $('#' + file.id);
        // console.log(response);
        if (response.error === 0) {
            $fileLi.find('.tips').text('上传成功');
            $fileLi.find('.upfile-url').val(response.data[0]);
            $fileLi.find('.upfile-name').val(response.names[0]);
            var $filenameNew = $('<a class="file-name" download href="' + response.data[0] + '">' + file.name + '</a>')
            $fileLi.find('.file-name').replaceWith($filenameNew);
        } else {
            $fileLi.find('.tips').text('上传失败');
            $fileLi.find('.progress').fadeOut();
        }
    });
    zipLoader.on('uploadError', function (file, response) {
        var $fileLi = $('#' + file.id);
        $fileLi.find('.tips').text('上传失败');
        $fileLi.find('.progress').fadeOut();
    });
    zipLoader.on('uploadComplete', function (file) {
        $fileUpload.removeClass('disable');
    });
    // 点击删除上传队列的文件, 同时中断传输
    $fileList.on('click', '.delete', function () {
        var $fileLi = $(this).parents('li');
        var fileId = $fileLi.attr('id');
        var fileUrl = $fileLi.find('.upfile-url').eq(0).val();
        var fileName = $fileLi.find('.upfile-name').eq(0).val();
        // 是否已经上传,上传后会有url和名字
        var hasuploaded = (fileUrl.indexOf('http://') > -1 && fileName.length > 0);
        var msg = '删除成功';

        layer.confirm('确定要删除上传的附件吗？', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            var loading = layer.load(2, {
                shade: [0.1,'#fff'] //0.1透明度的白色背景
            });
            // 判断文件是否在传输中
            if (zipLoader.isInProgress()) {
                zipLoader.cancelFile(fileId);
            }
            // 已经上传添加的，就删除服务器上的文件
            if (hasuploaded) {
                $.ajax({
                    // 将异步处理改为同步
                    async: false,
                    url: 'index.php?controller=upload&model=delfile',
                    type: 'POST',
                    dataType: 'json',
                    data: {url: fileUrl}, // 携带到服务器的数据，后台用$_post['url]接收
                    success: function (res) {
                        console.log(res);
                        if (res.error != 0) {
                            msg = res.title + ',' + res.msg;
                        } else {
                            $fileLi.remove();
                        }
                    },
                    error: function (res) {
                        console.log(res.responseText);
                        msg = '删除失败！请刷新重试';
                    }
                });
            } else {
                // 如果fileId存在那么就是通过插件动态上传的那么就移除
                fileId && zipLoader.removeFile(fileId, true);
                $fileLi.remove();
            }
            layer.close(loading);
            layer.msg(msg);

        });

    });
    // 点击上传文件
    $fileUpload.on('click', function () {
        console.log(state);
        if (state !== 'uploading') {
            zipLoader.upload();
        }
    });


    // 点击按钮动态生成元素,针对不同功能单独制作
    appendfiles.createInput({
        btnName: '#addAnnex-btn',
        eleContainer: '#addAnnex-container'
    });

    // 表单验证
    validate.init({
        class: 'validate',
        // 传入需要将name替换成appendfiles-name[]形式，数组中的是class名称
        // 如果没有的话就传入false
        nameArrCls: ['appendfiles-name', 'appendfiles']
    });

    // $('#piece-editor').on('click', '.w-e-icon-fullscreen', function () {
    //     console.log('aa')
    //     $('.piece-body-main').addClass('editor-fullscreen');
    // })
    // 给编辑器加上特定的文本样式
    $('#piece-editor').find('.w-e-text-container').addClass('entry');

    // 预览图上传
    var Preview = function () {
        function preview() {
            this.$input = $('#preview-input');
            this.$picker = $('#preview-picker');
            this.loader = uploader.init({
                server: 'index.php?controller=upload&model=preview',
                auto: true,
                pick: {
                    id: '#preview-picker',
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
                fileVal: 'article-preview',
                threads: 1, //上传并发数。允许同时最大上传进程数,为了保证文件上传顺序
                // 验证文件总数量, 超出则不允许加入队列
                fileNumLimit: 1,
                // 验证文件总大小 不能超过6M
                fileSizeLimit: 6291456,
                // 单个文件大小不可以超过6M
                fileSingleSizeLimit: 6291456
            });
            this.init();
        }
        preview.prototype = {
            success: function() {
                var self = this;
                // 上传是否成功或失败的回调
                this.loader.on('uploadSuccess', function (file, response) {
                    // console.log(response);
                    if (response.error === 0) {
                        self.$input[0].value = response.data;
                    } else {
                        alert('图片上传失败！');
                    }
                });
            },
            error: function() {
                // 上传失败的回调
                this.loader.on('uploadError', function (file, response) {
                    alert('上传失败，请刷新页面重试！');
                });
            },
            reset: function() {
                var self = this;
                // 每次点击的时候让uploader重置，然后只能选择一张图片
                this.$picker.on('click', function () {
                    self.loader.reset();
                });
            },
            init: function () {
                this.success();
                this.error();
                this.reset();
            }
        };
        new preview();
    }();

})
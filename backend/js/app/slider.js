require([
        'piecePublic',
        'pieceValidate',
        'pieceUploader',
        'pieceSingleImg'
    ],
    function (
        spublic,
        validate,
        uploader,
        singleUpload
    ) {
        spublic.init();
        // 如果存在验证表单那么就进行验证
        if ($('.validate').length > 0) {
            validate.init({
                class: 'validate'
            });
        }
        // 单张图片的上传图片
        singleUpload.init({
            server: 'index.php?controller=upload&model=sliderimg',
            pickid: '#silder-pick',
            fileval: 'sliderimg',
            isbig: true
        });

    })
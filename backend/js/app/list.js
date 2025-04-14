require([
        'piecePublic',
        'pieceValidate',
        'pieceDelBtn',
        'pieceTable'
    ],
    function(
        spublic,
        validate,
        delbtn,
        table
    ){
        spublic.init();
        // 获取初始化后 返回的layer
        delbtn.init();
        table.init();
        // 如果存在验证表单那么就进行验证
        if($('.validate').length > 0) {
            validate.init({
                class: 'validate'
            });
        }
})
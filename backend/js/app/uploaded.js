require([
    'piecePublic',
    'pieceValidate',
    'pieceSelectbox',
    'pieceTable',
    'pieceDelBtn'
], function (
    spublic,
    validate,
    selectbox,
    table,
    delbtn
) {
    spublic.init();
    delbtn.init();
    selectbox.init();
    var $validate = $('.validate');
    if ($validate.length > 0) {
        validate.init({
            class: 'validate'
        });
    }
    table.init();

    // 拼接筛选的查询字符串 并跳转
    $('#dressfiles').on('click', function () {
        var url = $(this).data('href');
        var fileBelong = $('#filebelong').data();
        var fileType = $('#filetype').data();
        // 拼接查询的链接
        url = url + '&belong=' + fileBelong.selected + '&type=' + fileType.selected;
        window.location.replace(url);
    });
})
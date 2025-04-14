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
})
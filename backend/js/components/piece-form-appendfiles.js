define(function () {

    var createInputTpl = function (index) {
        var nameTpl = '<fieldset class="form-item w40">';
        nameTpl += '<label class="form-label">附件名称</label>'
        nameTpl += '<div class="input-block">';
        nameTpl += '<input type="text" name="appendfiles-name' + index + '" placeholder="请输入要添加附件的文件名称"  class="input appendfiles-name" required data-msg-required="文件名必填">';
        nameTpl += '</div>';
        nameTpl += '</fieldset>';
        var urlTpl = '<fieldset class="form-item w55">';
        urlTpl += '<label class="form-label">附件地址</label>'
        urlTpl += '<div class="input-block">';
        urlTpl += '<input type="text" name="appendfiles' + index + '" placeholder="请输入要添加附件的文件地址"  class="input appendfiles" required data-msg-required="文件地址必填" data-rule-url="true" data-msg-url="必须为url地址">';
        urlTpl += '</div>';
        urlTpl += '</fieldset>';
        var deleteBtnTpl = '<div class="delete">';
        deleteBtnTpl += '<i class="icon fa fa-times-circle"></i>';
        deleteBtnTpl += '</div>';
        var tpl = '<div class="form-item-box">' + nameTpl + urlTpl + deleteBtnTpl + '</div>';
        return tpl;
    };
    var createInput = function (obj) {
        var $btn = $(obj.btnName);
        var $container = $(obj.eleContainer);
        // 获取元素中有多少个form-item-box，从存在的数量后开始计数
        var fontItemCount = $container.find('.form-item-box').length;
        $btn.on('click', function () {
            var $createdinput = $(createInputTpl(fontItemCount));
            $container.prepend($createdinput);
            fontItemCount++;
        });
        $container.on('click', '.delete', function () {
            $(this).parents('.form-item-box').remove();
        });
    };

    return {
        createInput: createInput
    }
});
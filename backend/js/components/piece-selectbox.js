/*
注意此方法应对于标准的table结构 不要有合并td等
*/
define(['selectbox', 'pieceConfig'], function(selectbox, config) {
    var init = function() {
        if(config.ispc) {
            // 将.select样式在PC上进行替换
            $(".select").selectbox({
                effect:"slide",
                onChange: function () {
                    // 点的时候触发事件，给元素添加一个data记录选中的值
                    var val = $(this).find('option[selected=selected]').val();
                    // 将数据放在data上 使用时候从元素获取selected的值即可
                    $(this).data('selected', val);
                }
            });
        }
    };

    return {
        init: init
    }
});
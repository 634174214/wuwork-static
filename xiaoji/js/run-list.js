$('.delete-item-btn').on('click', function() {
    var $tr = $(this).parents('tr');
    if ($tr.hasClass('has-removed')) {
        layer.alert('该条已删除');
        return;
    }

    var listType = $(this).data('type');
    var monthId = parseInt($(this).data('id'));
    // console.log(listType, monthId)
    layer.confirm(
        '确定要删除该条记录吗？', 
        {
            title: '系统提示'
        },
        function(index) {
            $.ajax({
                url: 'api_del_list_items.php',
                type: 'POST',
                data: {
                    list_type: listType,
                    list_id: monthId
                },
                success: function(res) {
                    if (res.code == 0) {
                        layer.msg('记录删除成功！');
                        $tr.addClass('has-removed');
                    } else {
                        layer.alert(res.msg);
                    }
                    layer.close(index);
                },
                error: function(err) {
                    layer.alert('抱歉，删除失败!请在控制台查看信息！');
                    console.log(err);
                    layer.close(index);
                }
            });
        }
    );
});
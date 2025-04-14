/*
用于列表页点击删除的弹窗
标准结构
layer弹窗组件必须要在此组件之前挂在全局上
<span href="../delete.php" class="piece-btn warn del" data-layer-delmsg="确定要删除这篇文章吗？">删除</span>
*/
define(function () {

    // 单个的.del被点击的时候
    var delClsClick = function ($dels) {
        $dels.on('click', function () {
            // 获取删除链接的href
            var delHref = $(this).attr('href');
            var delmsg = $(this).data('layer-delmsg') || '确定要删除吗？';
            layer.confirm(delmsg, {
                // skin: 'layui-layer-lan',
                title: '确认删除',
                btn: ['确认', '取消'] //按钮
            }, function () {
                // 点击确定执行, 将删除按钮的链接使用JS去跳转达到删除目的
                // layer.msg(delHref, {icon: 1});
                window.location.href = delHref;
            }, function () {
                // 点击取消执行
                // layer.msg('也可以这样', {
                //   time: 20000, //20s后自动关闭
                //   btn: ['明白了', '知道了']
                // });
            });
        });
    };

    var getDelmanyNames = function ($checkedbox) {
        var arr = [];
        $checkedbox.each(function () {
            arr.push(this.value)
        });
        return arr;
    };

    // 获取服务器反馈
    var getServerRequest = function (obj) {
        $.ajax({
            url: obj.url,
            type: 'POST',
            dataType: 'json',
            // index.php?controller=upload&model=deluploads&url%5B%5D=53&url%5B%5D=52
            // %5B --> [  %5D --> ]
            // 由于传递的是数组，JQ将数组转化为字符串
            // index.php?controller=upload&model=deluploads&url[]=53&url[]=52"
            data: {arr: obj.data},
            success: function (res) {
                // console.log(res);
                if (res.error === 0 && res.success) {
                    layer.msg(res.title + ' , ' + res.msg);
                    setTimeout(function () {
                        // window.location.href = res.backurl;
                        // 成功后刷新当前页
                        // 因为后台页面添加了判断，当刷新的时候page=2判断当前总页数是1 会跳转到page=1上
                        window.location.reload();
                    }, 1000);
                } else {
                    // 删除失败
                    layer.msg(res.title + ' , ' + res.msg);
                }
            },
            error: function (res) {
                console.log(res.responseText);
            }
        })
    };

    // 用于批量删除的时候
    var delManyClsClick = function ($delMany) {
        $delMany.on('click', function () {
            // 选中所有被点击的元素
            var $checkedbox = $('input[type="checkbox"]:checked');
            // 判断是否有选中的复选框
            var hasCheckedbox = $checkedbox.length > 0;
            if (!hasCheckedbox) {
                layer.msg('请选择要删除的文件', {
                    time: 2000, //20s后自动关闭
                });
                return;
            }

            // 获取删除链接的href
            var delHref = $(this).attr('href');
            var delmsg = $(this).data('layer-delmsg') || '确定要删除吗？';
            // 获取所有选中元素的name拼接的属性
            var searchArr = getDelmanyNames($checkedbox);
            layer.confirm(delmsg, {
                // skin: 'layui-layer-lan',
                title: '确认删除',
                btn: ['确认', '取消'] //按钮
            }, function () {
                // 点击确定执行, 将删除按钮的链接使用JS去跳转达到删除目的
                getServerRequest({
                    url: delHref,
                    data: searchArr
                });
            }, function () {
                // 点击取消执行
                // layer.msg('也可以这样', {
                //   time: 20000, //20s后自动关闭
                //   btn: ['明白了', '知道了']
                // });
            });
        });
    }

    var init = function () {
        var $dels = $('.del');
        var $delMany = $('.delmany');
        if ($dels.length > 0) {
            delClsClick($dels);
        }
        if ($delMany.length > 0) {
            delManyClsClick($delMany);
        }
    }

    return {
        init: init
    };
})
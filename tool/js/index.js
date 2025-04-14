/*
主页应用的js
*/


function copyText(text, callback) {
    var tag = document.createElement('input');
    var tagId = 'copy_input';
    tag.setAttribute('id', tagId);
    tag.setAttribute('class', 'not-show');
    tag.value = text;
    document.getElementsByTagName('body')[0].appendChild(tag);
    tag.select();
    var copyOk = document.execCommand('copy');
    // tag.remove();
    if(copyOk && callback) {
        callback('success');
    }
    if(!copyOk && callback) {
        callback('wrong');
    }
}

// 对有tool-link样式的<a> 拼接成完整的路径
var toolLink = function() {
    $('.tool-link').each(function() {
        var href = $(this).attr('href');
        $(this).attr('href', homeUrl + href);
    });
}();

// 复制工具页面的链接
var itemCopy = function() {
    $('.item-copy').on('click', function() {
        var $father = $(this).parents('.item');
        console.log($father);
        var $itemH4 = $father.find('.item-h4');
        var itemTitle = '【' + $itemH4.text() + '】';
        var itemHref = $itemH4.attr('href');
        var text = itemTitle + ' | ' + itemHref;
        copyText(text, function() {
            layer.msg('复制成功，快去给小伙伴们分享吧！');
        });
    });
};

// 给工具选项卡添加按钮
var fenlei = function() {
    var $tabbar = $('#nav-tabbar'),
        $alert =  $('#alert');

    var tpl = function(obj) {
        var activeCls = (obj.class === 0) ? 'active' : '';
        var tplStr = '';
        tplStr += '<div class="btn-group">';
        tplStr += '<button class="btn btn-default btn-lg ' +  activeCls +  '"data-toolclass="' + obj.class + '">';
        tplStr += obj.label;
        tplStr += '</button>';
        tplStr += '</div>';
        return tplStr;
    };

    // 根据每个li上的data-toolclass设置.label-name所属类的中文名称
    var setLabelName = function(item) {
        var dataEl = 'li[data-toolclass="' + item.class + '"]';
        $(dataEl).find('.label-name').text(item.label);
    };

    var setTab = function() {
        var res = '';
        $.each(toolClass, function(index, item) {
            setLabelName(item);
            // 拼接选项模版
            res += tpl(item);
        });
        $tabbar.append($(res));
    }();

    $tabbar.on('click', '.btn', function() {
        $alert.hide();
        $(this).parents('#nav-tabbar').find('.btn').removeClass('active');
        $(this).addClass('active');
        var clsNum = $(this).data('toolclass');
        console.log(clsNum)
        if(clsNum === 0) {
            $('.item').show();
            return;
        }
        $('.item').hide();
        // 显示的.item
        var $itemsShow =  $('.item[data-toolclass="' + clsNum + '"]');
        if($itemsShow.length <= 0) {
            $alert.show();
        }
        $itemsShow.show();
    });
}();

// 设置每个工具上的搜索关键词
var setToolKeyword = function() {
    var $item = $('#index-cards').find('.item');
    $item.each(function () {
        var key = $(this).data('toolname');
        $(this).attr('data-search', toolAll[key].keyword);
    });
}();


// 搜索 根据关键词进行匹配
var searchResult = function() {
    var searchVal = '',
        $items = $();

    var init = function() {
        // 手机不执行搜索
        if(!support.ispc) {
            return false;
        }
        searchVal = window.location.search.split('=')[1];
        if(searchVal == '' || 
           searchVal == ',' ||
           searchVal == '，' ||
           searchVal == undefined
        ) {
            return false;
        }
        console.log(searchVal);
        // 如果是中文，需要进行一次解码
        searchVal = decodeURI(searchVal);
        // 获取匹配到的元素
        $items = $('.item[data-search*="' + searchVal + '"]');
        if($items.length <= 0) {
            layer.msg('抱歉，没有找到与' + searchVal + '相关的工具');
            return false;
        }
        return true;
    }
    // 将获取到的元素转为str
    var jq2Str = function() {
        var str = '';
        $items.each(function(index, item) {
            str += '<li class="item col-md-6">' + item.innerHTML + '</li>';
        });
        return '<ul class="row inlayer index-cards">' + str + '</ul>';
    }

    var showResultBtn = function() {
        $('#search-result').show();
    }

    var showResult = function () {
        if(!init()) {
            return;
        }
        var str = jq2Str();
        // 如果存在工具
        layer.open({
            type: 1,
            title: '搜索到与<b>' + searchVal + '</b>相关的结果',
            skin: 'layui-layer-demo', //样式类名
            anim: 2,
            area: '700px',
            closeBtn: 1,
            maxHeight: 600,
            shadeClose: false, //开启遮罩关闭
            content: str
        });
        // 重新绑定拷贝事件
        itemCopy();
        showResultBtn();
    };

    return {
        show: showResult
    }

}();

searchResult.show();
itemCopy();
$('#search-result').on('click', searchResult.show);
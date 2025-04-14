var support = {
    windowHeight: $(window).height(),
    ispc: function() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ['Android', 'iPhone',
            'SymbianOS', 'Windows Phone',
            'iPad', 'iPod'
        ];
        var flag = true;
        for (var i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) != -1) {
                flag = false;
                break;
            }
        }
        return flag;
    }()
}

$('#gohome').attr('href', homeUrl);

// 手机上出现弹窗 提示PC版
var phoneTips = function() {
    if(!support.ispc) {
        layer.confirm('为了更好的效果，请您在电脑端使用', {
            title: '重要提示',
            btn: ['确定'],
            btnAlign: 'c'
        });
    }
}();

var setTopHead = function() {
    $('#tool-logo-img').attr('src', pageInfo.toolLogo);
    $('#tool-h1').text(pageInfo.toolName);
}();


var search = function() {
    var $form = $('#search-form'),
        $input = $('#search-input');
    var timer = null;

    $form.on('submit', function () {
        clearTimeout(timer);
        var searchVal = $input.val();
        searchVal = searchVal.toLowerCase();
        if(searchVal == '') {
            layer.msg('输入的内容不能为空');
            return false;
        }
        if(searchVal.indexOf(',') > -1) {
            layer.msg('输入的内容含有非法字符');
            return false;
        }

        for (var toolname in toolAll) {
            var keyword = toolAll[toolname].keyword;
            // console.log(keyword)
            if(keyword.indexOf(searchVal) > -1) {
                var url = homeUrl + '?search=' + searchVal;
                window.location.href = url;
            } 
        }
        // 加一个延迟 否则还未跳转就出现弹窗了
        timer = setTimeout(function() {
            layer.msg('抱歉, 您搜索的结果不存在');
        }, 1000);
        return false;
    });


}();

$('.result-text').on('blur', function() {
    var value = this.value;
    if(value) {
        $(this).addClass('not-empty');
    } else {
        $(this).removeClass('not-empty');
    }
});
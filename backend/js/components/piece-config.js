define({
    // 版本号
    edition: 'v1.0.0',
    // 后台页面地址
    server: '',
    // 是否为pc或者手机
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
});
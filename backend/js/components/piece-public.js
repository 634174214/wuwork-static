// 所有页面都运行的函数,注意 这个必须在jq之后引入
define([
    'jquery',
    'pieceLayer',
    'pieceTree',
    'pieceTopNav',
    'pieceTabBar'
], function(
    $,
    player,
    tree,
    nav,
    bar
) {
    
    var pageLoaded = function() {
        // 页面加载完成 开启所有元素的transition动画
        $(document).ready(function(){ 
            　$("body").removeClass("preload");
        }); 
    };
    // 带有disable的类点击不执行任何操作
    var disable = function () {
      $('.disable').on('click', function () {
          return false;
      });
    };


    var init = function() {
        // 将JQ挂载到全局
        window.$ = $;
        // 将弹窗组件挂到全局
        window.layer = player.init();
        pageLoaded();
        disable();
        tree.init();
        nav.init();
        bar.init();
    };

    return {
        init: init
    }
});
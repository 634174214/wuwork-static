// 基本的静态资源路径定义在html中，这里只是对其引用
var hasOutLineUrl = (typeof ASSETS_URL === 'undefined') ? false : true;
// 如果有就用外部路径没用就用本地的
var giteeUrl = hasOutLineUrl ? ASSETS_URL : '/assets/';
$LAB
  .script(giteeUrl + "libs/jquery-1.11.1.min.js").wait()
  .script(giteeUrl + "libs/layer/layer.js").wait()
  .script(giteeUrl + "libs/go-top.js").wait()
  .script(giteeUrl + "libs/storage.js")
  .script(giteeUrl + "libs/swiper4/js/swiper.min.js")
  .script(giteeUrl + "js/public.js?t=1")
  .script(giteeUrl + "js/index.js");
// 关键词使用require或者requirejs都可以，注意引用的时候不要带文件后缀.js
require.config({
    // baseUrl: 'https://634174214.gitee.io/myblog-admin-assets/js/',
    // baseUrl: 'https://vip.qdxin.cn/lin/wb/website/backend/js/',
    // baseUrl: '/admin/assets/js/',
    baseUrl: 'https://cdn.jsdelivr.net/gh/634174214/wuwork-static@main/backend/js/',
    waitSeconds: 0,
    // 时间戳
    // urlArgs: 'bust=' + (new Date()).getTime(),
    urlArgs: 'bust=' + 12,
    paths: {
        // jquery: 'libs/jquery/jquery-1.11.1.min',
        // layer在r.js中是一个关键字，冲突了，所以要把layer别名改下即可，否则无论路径怎么设置都会找不到路径
        layerPop: 'libs/layer/layer',
        editor: 'libs/wangeditor/wangEditor.min',
        highlight: 'libs/highlight/highlight.min',
        selectbox: 'libs/jquery.selectbox/jquery.selectbox',
        webuploader: 'libs/webuploader/webuploader',
        jqvalidate: 'libs/jquery.validate/jquery.validate',
        swiper: 'libs/swiper/swiper-bundle.min',
        pieceConfig: 'components/piece-config',
        pieceTree: 'components/piece-tree',
        pieceTopNav: 'components/piece-top-nav',
        pieceTabBar: 'components/piece-tab-bar',
        pieceEditor: 'components/piece-editor',
        pieceUploader: 'components/piece-uploader',
        pieceValidate: 'components/piece-form-validate',
        pieceLayer: 'components/piece-layer',
        pieceAppendfiles: 'components/piece-form-appendfiles',
        pieceTable: 'components/piece-table',
        pieceDelBtn: 'components/piece-delbtn',
        piecePublic: 'components/piece-public',
        pieceSelectbox: 'components/piece-selectbox',
        pieceParticles: 'components/piece-particles',
        pieceSingleImg: 'components/piece-singleimg-upload',
        pieceSwiper: 'components/piece-swiper'
    }
});


({
    // 指cmd进入的当前路径，入cmd cd D:\xampp\htdocs\admin\main\assets\js 那么为空就代表这个目录
    baseUrl: '',
    // require.config的配置文件，注意要带.js
    mainConfigFile: 'require.config.js',
    // 是否混淆并压缩，none是不压缩，目前测试不好用，需要用nodejs单独安装uglifyJS 然后使用uglifyjs dist/list.js -m -o dist/list.min.js进行压缩
    optimize: "uglify",
    // 页面的入口文件路径！，会根据这个文件中的require顺序进行将文件打包
    name: "app/list",
    // 打包文件到指定的目录文件，要带.js！
    // out: "dist/folder.js",
    out: "dist/list.js"
})

// r.js.cmd -o build.js

/*
有错误因为里面使用了ES6语法 其无法试别造成错误
uglifyjs dist/login.js -m -o dist/login.min.js
uglifyjs dist/blog-editor.js -m -o dist/blog-editor.min.js

uglifyjs dist/index.js -m -o dist/index.min.js
uglifyjs dist/normalform.js -m -o dist/normalform.min.js
uglifyjs dist/slider.js -m -o dist/slider.min.js
uglifyjs dist/uploaded.js -m -o dist/uploaded.min.js
uglifyjs dist/userinfo.js -m -o dist/userinfo.min.js
*/
const router = [];

//自动加载 views 目录下的 .vue/.js 结尾文件
const viewsContext = require.context(
    // 页面目录相对路径
    '../views',
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则表达式
    /\.(vue|js)$/
);
console.log("viewsContext",viewsContext);
  
viewsContext.keys().forEach(fileName => {
    // fileName ./Home.vue
    // 获取组件的 PascalCase 命名 
    console.log("lodash",fileName.replace(/^\.\/(.*)\.\w+$/, '$1'));
    const viewName = upperFirst(  // viewName Home
        camelCase(
            // 剥去文件名开头的 `./` 和结尾的扩展名
            fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
    )
    const route = {
        // path:`${}`,
        name: viewName, //
    };
});
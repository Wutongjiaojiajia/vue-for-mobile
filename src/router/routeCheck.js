import trimStart from 'lodash/trimStart';
import trimEnd from 'lodash/trimEnd';
import camelCase from 'lodash/camelCase';

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
  
viewsContext.keys().forEach(fileName => {
    let path = `/${(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')).toLowerCase()}`; //文件名小写
    let viewsName = `${trimEnd(trimEnd((trimStart(fileName,'./')),'vue'),'.')}`;
    const route = {
        path: path,
        component:() => import(`../views/${viewsName}`),
        name: camelCase(path),
    };
    router.push(route);
});

export default router;
# vuedemo2  
npm install  
npm run dev  
npm run build  
npm run build --report    

components/文件夹用来存放Vue 组件。个人建议，把每一个组件中使用到的image图片放置到对应的组件子文件目录下，便于统一的管理   
Node_modules/npm安装的该项目的依赖库   
vuex/文件夹存放的是和 Vuex store 相关的东西（state对象，actions，mutations)   
router/文件夹存放的是跟vue-router相关的路由配置项   
build/文件是 webpack 的打包编译配置文件   
static/文件夹存放一些静态的、较少变动的image或者css文件   
config/文件夹存放的是一些配置项，比如服务器访问的端口配置等   
dist/该文件夹一开始是不存在，在我们的项目经过 build 之后才会产出   
App.vue根组件，所有的子组件都将在这里被引用   
index.html整个项目的入口文件，将会引用我们的根组件 App.vue   
main.js入口文件的 js 逻辑，在webpack 打包之后将被注入到 index.html 中   

功能点：   
1.登录页面+用户管理   
2.任务管理table：新增，编辑，调度，删除   
3.日志统计页面：饼状图，柱状图   

小技术点：  
1.table 数据加载与 页面切换组件配合？ ---数据总数，每页展示条数，当前页，getdata()计算出当前页显示数据   
2.新增页面？ /el-dialog :visible.sync="editdispaly"    
3.   


vue全家桶：vue + vue-cli + vue-router + vuex + axios    
https://segmentfault.com/a/1190000019350009   
http://doc.liangxinghua.com/vue-family/1.html    
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import table1 from '@/components/table1'
import layout1 from '@/components/layout1'
import error from '@/components/error'
import table2 from '@/components/table2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'main',
      component: layout1
    },
    {
      path: '/error',
      name: 'error1',
      component: error
    },{
      path: '/layout1',
      name: 'daohang',
      component:layout1,
      children:[
        {path: '/form1',component: HelloWorld},
        {path: '/table1',component: table1},
        {path: '/table2',component: table2}
      ]
    }
  ]
})

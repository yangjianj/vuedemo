import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import form1 from '@/components/workbs/form1'
import table2 from '@/components/workbs/table2'
import workb from '@/components/workbs/workbench'
import layout1 from '@/components/layout1'
import envir from '@/components/envirment'
import userm from '@/components/usermanage'
import error from '@/components/error'
import datacharts from '@/components/charts/DataCharts'
Vue.use(Router)

export default new Router({
  mode: 'history', //去掉url中的#    //127.0.0.1:8080/table2
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: layout1//HelloWorld
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
    }, {
      path: '/layout1',
      name: 'daohang',
      component: layout1,
      children: [
        {
          path: '/workb', component: workb, 
          children: [
              { path: '/form1', component: form1 },
              { path: '/table2', component: table2 },  //127.0.0.1:8080/table2
              { path: '/datacharts', component: datacharts },
          ]
        },
        { path: '/envir', component: envir },
        { path: '/userm', component: userm }
      ]
    }
  ]
})

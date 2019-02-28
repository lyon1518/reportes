import Vue from 'vue'
import Router from 'vue-router'
import inicio from '@/components/inicio'
import acciones from '@/components/acciones'
import entregaEfectivo from '@/components/tablaEEfectivo'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: inicio
    },
    {
      path: '/reporte',
      name: 'acciones',
      component: acciones
    },
    {
      path: '/entregaEfectivo',
      name: 'EEfectivo',
      component: entregaEfectivo
    }
  ]
})

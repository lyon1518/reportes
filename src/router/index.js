import Vue from 'vue'
import Router from 'vue-router'
import inicio from '@/components/inicio'
import acciones from '@/components/acciones'
import entregaEfectivo from '@/components/tablaEEfectivo'
import login from '@/components/login'
import home from '@/components/home'
import usarios from '@/components/usuarios'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/usuarios',
      name: 'usarios',
      component: usarios
    },
    {
      path: '/inicio',
      name: '/inicio',
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

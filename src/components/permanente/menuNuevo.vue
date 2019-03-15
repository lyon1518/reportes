<template lang="pug">
    nav.navbar.navbar-expand-lg.navbar-dark.bg-verde
        .collapse.navbar-collapse#navbarText.ml-80
            ul.navbar-nav.ml-auto
                li.nav-item
                    a.nav-link(href="#/home") 
                        span Formatos 
                li.nav-item
                    a.nav-link(href="#") 
                        span Clientes
                li.nav-item
                    a.nav-link(href="#") 
                        span Mensajeros
                li.nav-item
                    a.nav-link(href="#") 
                        span Personal
                li.nav-item#usuario
                    a.nav-link(href="#/usuarios" @click="activo('usuario')") 
                        span Usuarios
        span usuario
        span.fa.fa-user-circle.fa-2x(style="margin-left:10px; margin-right:10px;")
        .cerrar.ml-40
            a(href="#")
                span Cerrar sesión
</template>

<script>
import { bus } from '../../../bus.js'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

export default {
    name: 'menuNuevo',
    methods:{
        activo(activa){
            console.log("hola");
            $(".nav-item").removeClass("active")
            $("#"+activa).addClass("active")
        }
    },
    mounted(){
        console.log(bus);
    }
}
</script>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
.navbar{
    padding: 0px;
}
.nav-item:hover,.active{
    background-color: $verdelofton;
}
.nav-item>a>span{
    color:$hoverama;
    border-bottom: solid 1px $hoverama;
}
.navbar>span, .navbar>svg.svg-inline--fa.fa-user-circle.fa-w-16.fa-2x, .navbar>.cerrar>a>span{
    color:$hoverama;
}
.navbar>.cerrar{
    width: 30px;
    line-height: 12px;
}
.navbar>.cerrar>a>span{
    font-size: 12px;
}
</style>

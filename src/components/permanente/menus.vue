<template lang="pug">
    nav.navbar.navbar-expand-lg.navbar-dark.bg-verde
        button.navbar-toggler.btnmovil(type="button")
        .collapse.navbar-collapse#navbarColor02
            span.fa.fa-user-tie.icona
            span.letraicon Usuario
            ul.navbar-nav.mr-auto
                li.nav-item
                    a.nav-link(href="#/inicio") Inicio
        a(href="#")
            span.fa.fa-sign-out-alt.icona
            span.letraicon Cerrar sesión
</template>

<script>
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()
export default {
    name: 'menus',
    // mounted(){
    //     alert('ok')
    // }
    // methods:{
    //     inicio(){
    //         this.$parent.vista = 'inicio'
    //     }
    // }
}
</script>

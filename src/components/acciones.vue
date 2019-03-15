<template lang="pug">
    transition(name="component-fade" mode="out-in")
        .vista2
            menus
            logo(v-if="logos == true")
            .container
                .row
                    .col-md-4
                        button.btn.btn-warning.dropdown-toggle#depiliega1(data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="verForm('LFEEfectivo','llenar')") LLenar formato
                    .col-md-4
                        .dropdown
                            button.btn.btn-warning.dropdown-toggle#depiliega2(data-toggle="dropdown" aria-haspopup="true" aria-expanded="false") Registrar
                            .dropdown-menu(aria-labelledby="depiliega2")
                                .dropdown-item(@click="verForm('RCliente','Registra')")
                                    span.fa.fa-file.icona
                                    span.fa.fa-angle-right.icona
                                    span cliente
                                .dropdown-item(@click="verForm('RMensajero','Registra')")
                                    span.fa.fa-file.icona
                                    span.fa.fa-angle-right.icona
                                    span Mensajero
                    .col-md-4
                        .dropdown
                            button.btn.btn-warning.dropdown-toggle#depiliega2(data-toggle="dropdown" aria-haspopup="true" aria-expanded="false") Actualizar
                            .dropdown-menu(aria-labelledby="depiliega2")
                                    .dropdown-item(@click="verForm('RCliente','Actualiza')")
                                        span.fa.fa-file.icona
                                        span.fa.fa-angle-right.icona
                                        span cliente
                                    .dropdown-item(@click="verForm('RMensajero','Actualiza')")
                                        span.fa.fa-file.icona
                                        span.fa.fa-angle-right.icona
                                        span Mensajero
            RCEE(v-if="forvista == 'RCliente'")
            RM(v-if="forvista == 'RMensajero'")
            LFEE(v-if="forvista == 'LFEEfectivo'")
            BUSCA(v-if="forvista == 'buscar'")
</template>
<script>
import LFEE from "./formLFEE";
import BUSCA from "./buscador";
import RCEE from "./formRCEE";
import RM from "./formRM";
import menus from "./permanente/menus";
import logo from "./logos";
import { setTimeout } from 'timers';
export default {
    name:"acciones",
    components: {
        LFEE,
        RM,
        RCEE,
        menus,
        logo,
        BUSCA
    },
    data(){
        return{
            areaI:[],
            logos:false,
            forvista:'',
            funcion:'',
            busca:true,
        }
    },
    methods:{
        verForm(form,acc){
            this.forvista = '';
            this.funcion = acc;
            setTimeout(() => {
                this.forvista = form
            }, 100)
        }
    },
    mounted(){
        this.areaI = this.$session.getAll()
        // console.log(this.areaI);
        if (this.areaI.length != 0) {
            this.logos = true;
        }
    }
}

</script>
<style lang="scss">
    @import "node_modules/bootstrap/scss/bootstrap";
</style>


<template lang="pug">
    transition(name="component-form" mode="out-in")
        .container
            .form-lofton2.m-20
                .formulario
                    i.fa.fa-file-alt.fa-5x.verde.m-10
                    p Entrega de efectivo o cheque
                    .row
                        div(:class="(datosEnviar.tipo != '')?'col-md-4':'col-md-12'")
                            .row
                                .col-md-12
                                    .input-group.mb-3
                                        .input-group-prepend
                                            span.input-group-text
                                                i.fa.fa-address-book.ico
                                        select(v-model="datosEnviar.mensajero" required class="form-control inicioForm" id="mensajero")
                                            option(value="") Mensajero
                                .col-md-6
                                    .input-group.mb-3
                                        .input-group-prepend
                                            span.input-group-text
                                                i.fas.fa-map-marked-alt.ico
                                        input(v-model="datosEnviar.area" type="text" class="form-control inicioForm" id="area" disabled readonly)
                                .col-md-6
                                    .input-group.mb-3
                                        .input-group-prepend
                                            span.input-group-text
                                                i.fas.fa-map-marked-alt.ico
                                        input(v-model="datosEnviar.noEmpleado" type="text" class="form-control inicioForm" id="noEmpleado" disabled readonly)
                                .col-md-6
                                    .input-group.mb-3
                                        .input-group-prepend
                                            span.input-group-text
                                                i.fa.fa-address-book.ico
                                        select(v-model="datosEnviar.tipo" required class="form-control inicioForm" id="tipo")
                                            option(value="") Tipo de Entrega
                                            option(value="efectivo") Efectivo
                                            option(value="cheque") cheque
                                .col-md-6
                                    .input-group.mb-3
                                        .input-group-prepend
                                            span.input-group-text
                                                i.fa.fa-address-book.ico
                                        input(v-model="datosEnviar.noEntrega" type="number" class="form-control inicioForm" id="noEntrega" placeholder="No de Entrega")
                        transition(name="component-form" mode="out-in")
                            .col-md-4(v-if="datosEnviar.tipo != ''")
                                .efectivo
                                    .row    
                                        .col-md-12
                                            .input-group.mb-3
                                                .input-group-prepend
                                                    span.input-group-text
                                                        i.fa.fa-address-book.ico
                                                select(v-model="datosEnviar.cliente" required class="form-control inicioForm" id="cliente")
                                                    option(value="") Cliente
                                        .col-md-12
                                            .input-group.mb-3
                                                .input-group-prepend
                                                    span.input-group-text
                                                        i.fa.fa-address-book.ico
                                                input(v-model="datosEnviar.domicilio" type="text" class="form-control inicioForm" id="domicilio" disabled readonly)
                                        .col-md-6
                                            .input-group.mb-3
                                                .input-group-prepend
                                                    span.input-group-text
                                                        i.fa.fa-address-book.ico
                                                input(v-model="datosEnviar.recibe" type="text" class="form-control inicioForm" id="recibe" placeholder="Quien recibe")
                                        .col-md-6
                                            .input-group.mb-3
                                                .input-group-prepend
                                                    span.input-group-text
                                                        i.fa.fa-address-book.ico
                                                input(v-model="datosEnviar.monto" type="text" class="form-control inicioForm" id="monto" placeholder="monto")
                                        .col-md-6(v-if="datosEnviar.tipo == 'cheque'")
                                            .input-group.mb-3
                                                .input-group-prepend
                                                    span.input-group-text
                                                        i.fa.fa-address-book.ico
                                                input(v-model="datosEnviar.noCheque" type="text" class="form-control inicioForm" id="noCheque" placeholder="No cheque")
                                        .col-md-6(v-if="datosEnviar.tipo == 'cheque'")
                                            .input-group.mb-3
                                                .input-group-prepend
                                                    span.input-group-text
                                                        i.fa.fa-address-book.ico
                                                input(v-model="datosEnviar.banco" type="text" class="form-control inicioForm" id="banco" placeholder="Banco")
                                            
                        transition(name="component-form" mode="out-in")
                            .col-md-4(v-if="datosEnviar.tipo != ''")
                                .row
                                    .col-md-12
                                        .input-group.mb-3
                                            .input-group-prepend
                                                span.input-group-text
                                                    i.fa.fa-address-book.ico
                                            input(v-model="datosEnviar.cantidad" type="number" class="form-control inicioForm" id="cantidad" placeholder="cantidad")
                                    .col-md-12
                                        .input-group.mb-3
                                            .input-group-prepend
                                                span.input-group-text
                                                    i.fa.fa-address-book.ico
                                            input(v-model="datosEnviar.cantidadL" type="text" class="form-control inicioForm" id="cantidadL" placeholder="Cantidad en letra")
                                    .col-md-12    
                                        .input-group.mb-3
                                            .input-group-prepend
                                                span.input-group-text
                                                    i.fa.fa-address-book.ico
                                            select(v-model="datosEnviar.gerente" required class="form-control inicioForm" id="gerente")
                                                option(value="") Gerente
                    button.btn.btn-warning#envia(@click="envia") {{funcion}}
</template>
<script>
export default {
    name:"RCEE",
    data(){
        return{
            datosEnviar:{
                mensajero:'',
                area:'',
                NoEmpleado:'',
                tipo:'',
                noEntrega:'',
                cliente:'',
                domicilio:'',
                recibe:'',
                monto:'',
                cantidad:'',
                cantidadL:'',
                gerente:'',
            },
            funcion:''
        }
    },
    methods:{
        envia(){
            location.href = "#/entregaEfectivo";
        }
    },
    mounted(){
        this.funcion = this.$parent.funcion;
    }
}
</script>

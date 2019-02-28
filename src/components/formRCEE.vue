<template lang="pug">
    transition(name="component-form" mode="out-in")
        .container
            .form-lofton.m-20
                .formulario
                    i.fa.fa-user.fa-5x.verde.m-10
                    .input-group.mb-3
                        .input-group-prepend
                            span.input-group-text
                                i.fa.fa-address-card.ico
                        input(v-model="datosEnviar.nombre" required type="text" class="form-control inicioForm" id="nombre" placeholder="Nombre(s)")
                    
                    .row
                        .col-md-6
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fa.fa-address-card.ico
                                input(v-model="datosEnviar.Apaterno" required type="text" class="form-control inicioForm" id="nentrega" placeholder="Apellido Paterno")
                        .col-md-6
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fa.fa-address-card.ico
                                input(v-model="datosEnviar.Amaterno" required type="text" class="form-control inicioForm" id="nentrega" placeholder="Apellido Materno")
                    
                        .col-md-6
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fa.fa-map-marked-alt.ico
                                input(v-model="datosEnviar.pais" required type="text" class="form-control inicioForm" id="pais" placeholder="Pais")
                        
                        .col-md-6
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fa.fa-map-marked-alt.ico
                                input(v-model="datosEnviar.estado" required type="text" class="form-control inicioForm" id="estado" placeholder="Estado")
                        
                        .col-md-6
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fa.fa-map-marked-alt.ico
                                input(v-model="datosEnviar.municipio" required type="text" class="form-control inicioForm" id="municipio" placeholder="Municipio")

                        .col-md-6
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fa.fa-map-marked-alt.ico
                                input(v-model="datosEnviar.cp" required type="text" class="form-control inicioForm" id="cp" placeholder="Codigo Postal")
                        
                        .col-md-6
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fa.fa-map-marked-alt.ico
                                input(v-model="datosEnviar.calle" type="text" class="form-control inicioForm" id="calle" placeholder="Calle")
                        .col-md-6
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fas.fa-map-marked-alt.ico
                                input(v-model="datosEnviar.mz" type="text" class="form-control inicioForm" id="mz" placeholder="Manzana")
                        
                        .col-md-6
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fa.fa-map-marked-alt.ico
                                input(v-model="datosEnviar.NoE" type="text" class="form-control inicioForm" id="NoE" placeholder="No Exterior")
                        .col-md-6
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fas.fa-map-marked-alt.ico
                                input(v-model="datosEnviar.NoI" type="text" class="form-control inicioForm" id="NoI" placeholder="No Interior")
                        .col-md-12
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fa.fa-address-book.ico
                                select(v-model="datosEnviar.lugarRegistro" required class="form-control inicioForm" id="lugarRegistro")
                                    option(value="") En donde deseas registar el cliente
                                    option(value="") En todas las areas
                                    option(value="") Solo en esta area
                    button.btn.btn-warning#envia {{funcion}}
</template>
<script>
export default {
    name:"RCEE",
    data(){
        return{
            datosEnviar:{
                nombre:'',
                Apaterno:'',
                Amaterno:'',
                pais:'',
                estado:'',
                municio:'',
                calle:'',
                cp:'',
                NoE:'',
                NoI:'',
                lugarRegistro:'',
            },
            funcion:''
        }
    },
    mounted(){
        this.funcion = this.$parent.funcion;
    }
}
</script>

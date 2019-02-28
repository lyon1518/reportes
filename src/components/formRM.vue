<template lang="pug">
    transition(name="component-form" mode="out-in")
        .container
            .form-lofton.m-20
                .formulario
                    i.fa.fa-box-open.fa-5x.verde.m-10
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
                                        i.fa.fa-box.ico
                                input(v-model="datosEnviar.area" required type="text" class="form-control inicioForm" id="area" placeholder="Area")
                        
                        .col-md-6
                            .input-group.mb-3
                                .input-group-prepend
                                    span.input-group-text
                                        i.fa.fa-list-ol.ico
                                input(v-model="datosEnviar.noEmpleado" required type="text" class="form-control inicioForm" id="noEmpleado" placeholder="No Empleado")
                        
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
                area:'',
                noEmpleado:'',
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

<template lang="pug">
    .inicio
        anima(v-if="load == true")
        .fondologin
            .degradado
                .circulogin
                    h4.verdel.mb-20
                        strong Inicio de sesión
                    form.formlogin
                        .form-group
                            input(type="text" class="form-control" id="usuario" placeholder="Usuario")
                        .form-group
                            input(type="password" class="form-control" id="pass" placeholder="Contraseña")
                        button(type="submit" class="btn btn-verde" @click.prevent="envia") Iniciar sesión
</template>

<script>
import menus from "./permanente/menus"
import anima from "./animacion"
export default {
    name: "login",
    components: {
        menus,
        anima,
    },
    data(){
        return{
            load:false,
        }
    },
    methods:{
        envia(){
            location.href = "#/home";
        }
    },
    mounted(){
        this.load=true;
        setTimeout(() => {
            this.load=false;
        }, 3000);
    }
}
</script>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
.fondologin {
    width: 100%;
    height: 100%;
    background-image: url(../assets/fondo.jpeg);
    background-size: cover;
    position: absolute;
}

.circulogin {
    position: absolute;
    width: 350px;
    height: 350px;
    top: 20%;
    left: 38%;
    border-radius: 50%;
    border: solid 3px $claroverde;
    padding: 70px 30px;
    background-color: rgba(255,255,255,.5);
}
.verdel>strong{
    color: $claroverde;
}
.formlogin>.form-group>input{
    border: none;    
    border-bottom: solid 2px $claroverde;
    background: none;
}
.formlogin>.form-group>input:focus{
    box-shadow: none;
    border: none;
    border-bottom: solid 2px $claroverde;
}
input:-internal-autofill-previewed, input:-internal-autofill-selected, textarea:-internal-autofill-previewed, textarea:-internal-autofill-selected, select:-internal-autofill-previewed, select:-internal-autofill-selected {
    background-color: transparent !important;
}
.btn-verde{
    background-color: $claroverde !important;
    color: #fff !important;
}
</style>

<template lang="pug">
    transition(name="component-fade" mode="out-in")
      .inicio
        menus
        logo(v-if="carga == true")
        lista(v-if="carga == true")
</template>

<script>
import lista from "./listaFormatos"
import menus from "./permanente/menus"
import logo from "./logos"
import accion from "./acciones"
export default {
  name: "Inicio",
  components: {
    menus,
    lista,
    logo,
    accion,
  },
  data() {
    return {
      msg: "Este es el inicio",
      areaI:'',
      carga:false,
      reportes:false,
      acciones:false,
      vista:'',
      busca:false,
    }
  },
  mounted() {

    // $.ajax({
    //   crossDomain: true,
    //   method: 'get',
    //   url: `${process.env.API_ROOT}Inicio/mensaje.htm`,
    //   success: (res)=>{
    //     console.log(res)
    //   }
    // })


    var settings = {
      async: true,
      crossDomain: true,
      url: "http://localhost:3000/lof",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
        "Postman-Token": "8b7c735f-6ea5-47c5-8724-cccf05c53b76"
      },
      processData: false,
      data: ""
    };

    $.ajax(settings).done((res) => {
      this.areaI = res;
      // console.log(this.areaI);
      this.carga = true;
      this.vista = 'inicio';
      this.$session.start();
      this.$session.set("area",this.areaI.area);
      this.$session.set("permiso",this.areaI.permiso);
      // console.log(this.$session.getAll());
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
</style>

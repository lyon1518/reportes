<template lang="pug">
    transition(name="component-fade" mode="out-in")
      .inicio.fondoBody
        .degradado
            menus
            .row.mt-20(style="width:100%;")
                .col-md-2
                    img(src="../assets/logSA.png" width="60%")
                .col-md-8
                    h3.linea.text-left
                        
                        strong.titulossss.gris Formatos 
                .col-md-2
            .row.mt-80(style="width:100%;margin:0px;")
                .col-md-2
                .col-md-8
                    .row(style="width:100%;margin:0px;")
                        .col-md-12
                            .row(style="width:100%;margin:0px;")
                                .col-md-2.lineadere.margenes.ml-20
                                    .row.lineaverde(style="width:100%;margin:0px;")
                                        .col-md-6.col-xs-6
                                            span.fa.fa-file.crece
                                        .col-md-6.col-xs-6.vertical
                                            strong.testo Entradas y Salidas de Efectivo
                                .col-md-2.lineadere.margenes
                                    .row.lineaverde(style="width:100%;margin:0px;")
                                        .col-md-6.col-xs-6
                                            span.fa.fa-file.crece
                                        .col-md-6.col-xs-6.vertical
                                            strong.testo Entrega de Efectivo
                                .col-md-2.lineadere.margenes
                                    .row.lineaverde(style="width:100%;margin:0px;")
                                        .col-md-6.col-xs-6
                                            span.fa.fa-file.crece
                                        .col-md-6.col-xs-6.vertical
                                            strong.testo Acuse de Entrega Cliente
                                .col-md-2.lineadere.margenes.sinpa.pr-20
                                    .row.lineaverde(style="width:100%;margin:0px;")
                                        .col-md-6.col-xs-6.sinpa
                                            span.fa.fa-file.crece
                                        .col-md-6.col-xs-6.vertical.sinpa
                                            strong.testo Solicitud de Recursos sin comprobante
                                .col-md-2.lineadere.margenes
                                    .row.lineaverde(style="width:100%;margin:0px;")
                                        .col-md-6.col-xs-6
                                            span.fa.fa-file.crece
                                        .col-md-6.col-xs-6.vertical
                                            strong.testo Gastos Fondo Fijo
                .col-md-2
</template>

<script>
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()
import menus from "./permanente/menuNuevo"
export default {
  name: "home",
  components: {
    menus,
  },
  data() {
    return {
    }
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
.inicio {
    width: 100%;
    height: 625px !important;
}
.fondoBody {
    width: 100%;
    height: 100%;
    background-image: url(../assets/fondoCuerpo.jpeg);
    background-size: 100% 100%;
    background-position: center;
    background-attachment: fixed;
    position: sticky;
    top:0px;
}
.gris{
    color:$clarogris;
}
.linea{
    border-bottom: solid 2px $clarogris;
    position: relative;
    top: 30px;
}
.lineaverde{
    border-bottom: solid 2px $claroverde;
    padding-bottom: 10px;
}
.lineadere{
    border-right: solid 1px $clarogris;
    cursor: pointer;
}
.lineadere>.lineaverde{
    bottom: 0px;
    transition: all 1s;
}
.lineadere:hover>.lineaverde{
    position: relative;
    bottom: 20px;
    border-bottom: solid 2px $hoververde;
    // transition: all 1s;
}
.lineadere:hover>.lineaverde>.col-md-6>.crece, 
.lineadere:hover>.lineaverde>.col-md-6>.testo
.lineadere{
    color: $hoververde;
}

.mr-40{
    margin-right: 25px;
}
.crece {
    font-size: 70px;
    color: $claroverde;
}
.mt-80{
    margin-top: 80px !important;
}
.vertical{
    display: flex;
    align-items: center;
}
.testo{
    font-size: 10px;
    transition: all 5s;
}
.ml-20{
    margin-left: 30px;
}
.margenes {
    margin-left: 11px;
    padding: 0px;
    padding-right: 20px;
    padding-left: 0px !important;
}
.sinpa{
    padding: 0px !important;
}
.pr-20{
    padding-right: 15px !important;
}
</style>

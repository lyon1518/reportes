<template lang="pug">
    .container
        .dropdown
            button.btn.btn-warning.dropdown-toggle#depiliega(data-toggle="dropdown" aria-haspopup="true" aria-expanded="false") Lista de Formatos
            .dropdown-menu(aria-labelledby="depiliega")
                .dropdown-item(v-if="area.permiso == 0")
                    span.fa.fa-file.icona
                    span.fa.fa-angle-right.icona
                    span Entradas y Salidas de Efectivo (semanal)
                a(href="#/reporte" @click="cambiaVista('entregaEfectivo')")
                    .dropdown-item(v-if="area.permiso == 0 || area.permiso == 1 || area.permiso == 2")
                        span.fa.fa-file.icona
                        span.fa.fa-angle-right.icona
                        span Entrega de Efectivo 
                .dropdown-item(v-if="area.permiso == 0 || area.permiso == 1")
                    span.fa.fa-file.icona
                    span.fa.fa-angle-right.icona
                    span Acuse de Entrega Cliente
                .dropdown-item(v-if="area.permiso == 0")
                    span.fa.fa-file.icona
                    span.fa.fa-angle-right.icona
                    span Solicitud de Recursos sin comprobante
                .dropdown-item(v-if="area.permiso == 0 || area.permiso == 1")
                    span.fa.fa-file.icona
                    span.fa.fa-angle-right.icona
                    span Gastos Fondo Fijo
</template>

<script>
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()
export default {
  name: "listaFormatos",
  data() {
    return {
      area: [],
      imagen:'hola',
    };
  },
  methods:{
        cambiaVista(ver){
            this.$parent.vista = ver;
        }
  },
  mounted() {
    this.area = this.$parent.areaI;
    // console.log(this.area);
    }
};
</script>

<template lang="pug">
    .container
        //- .dropdown
            button.btn.btn-warning.dropdown-toggle#depiliega(data-toggle="dropdown" aria-haspopup="true" aria-expanded="false") Lista de Formatos
            .dropdown-menu(aria-labelledby="depiliega")
                .dropdown-item
                    span.fa.fa-file.icona
                    span.fa.fa-angle-right.icona
                    span Entradas y Salidas de Efectivo (semanal)
                a(href="#/reporte" @click="cambiaVista('entregaEfectivo')")
                    .dropdown-item
                        span.fa.fa-file.icona
                        span.fa.fa-angle-right.icona
                        span Entrega de Efectivo
                .dropdown-item
                    span.fa.fa-file.icona
                    span.fa.fa-angle-right.icona
                    span Acuse de Entrega Cliente
                .dropdown-item
                    span.fa.fa-file.icona
                    span.fa.fa-angle-right.icona
                    span Solicitud de Recursos sin comprobante
                .dropdown-item
                    span.fa.fa-file.icona
                    span.fa.fa-angle-right.icona
                    span Gastos Fondo Fijo
        .row.m-40
            .col-md-4.fondo(v-if="area.permiso == 0")
                .centra
                    .circulo.mb-40
                        p.fa.fa-file.fa-5x.verde
                        p.texto Entradas y Salidas de Efectivo (semanal)
            div(v-if="area.permiso == 0 || area.permiso == 1 || area.permiso == 2" :class="(area.permiso == 2)?'col-md-12 fondo':'col-md-4 fondo'")
                .centra
                    a(href="#/reporte" @click="cambiaVista('entregaEfectivo')")
                        .circulo.mb-40
                            p.fa.fa-file.fa-5x.verde
                            p.texto Entrega de Efectivo
            .col-md-4.fondo(v-if="area.permiso == 0 || area.permiso == 1")
                .centra
                    .circulo.mb-40
                        p.fa.fa-file.fa-5x.verde
                        p.texto Acuse de Entrega Cliente
        
            .col-md-4.fondo(v-if="area.permiso == 0")
                .centra
                    .circulo.mb-40
                        p.fa.fa-file.fa-5x.verde
                        p.texto Solicitud de Recursos sin comprobante
            .col-md-4.fondo(v-if="area.permiso == 0 || area.permiso == 1")
                .centra
                    .circulo.mb-40
                        p.fa.fa-file.fa-5x.verde
                        p.texto Gastos Fondo Fijo
            .col-md-4
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

<template lang="pug">
    .tablaReporte
        menus
        .menudespliega.navactivo
            .abajo
                a(href="#" class="text-center" onclick="tableToExcel('tablacontenido', 'Reporte de Entrega de Efectivo')")
                    span.fa.fa-file-excel.verde.fa-3x <br>
                    strong.verde Excel
                //- button.btn.btn-warning(onclick="") Excel
        .container.m-20#tablacontenido
            table.table.table-bordered(style="text-aling:center;")
                thead
                    tr
                        th(rowspan=2 style="border:solid 1px #000;width:20%;") 
                            img(src="../assets/logSA.jpg" width="150px" style="background-image: url(/static/img/logSA.9bdfed2.jpg);width: 150px;height: 50px;background-size: contain;")
                        th(colspan=4 style="border:solid 1px #000;" v-if="datos.tipo == 'efectivo'") {{datos.formatoArea}}
                        th(colspan=6 style="border:solid 1px #000;" v-else) {{datos.formatoArea}}
                    tr
                        th(colspan=4 style="border:solid 1px #000;" v-if="datos.tipo == 'efectivo'") Entrega de Efectivo o Cheque
                        th(colspan=6 style="border:solid 1px #000;" v-else) Entrega de Efectivo o Cheque
                    tr
                    tr
            .row.m-20
                .col-md-4
                .col-md-4
                .col-md-4
                    table.table.table-bordered
                        thead
                            tr
                                th(colspan=3 class="oculto" v-if="datos.tipo == 'efectivo'")
                                th(colspan=5 class="oculto" v-else)
                                th(style="background:#ededed;border:solid 1px #000;width:30%;") Folio:
                                th(style="border:solid 1px #000;width:70%;") {{datos.folio}}
                            tr
                                th(colspan=3 class="oculto" v-if="datos.tipo == 'efectivo'")
                                th(colspan=5 class="oculto" v-else)
                                th(style="background:#ededed;border:solid 1px #000;") Fecha:
                                th(style="border:solid 1px #000;") {{datos.fecha}}
                            tr
            table.table.table-bordered(style="text-aling:center;")  
                thead
                    tr
                        th(colspan=5 style="border:solid 1px #000;background:#ededed;" v-if="datos.tipo == 'efectivo'") Datos del mensajero
                        th(colspan=7 style="border:solid 1px #000;background:#ededed;" v-else) Datos del mensajero
                    tr
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") Nombre:
                        th(colspan=4 style="border:solid 1px #000;width:80%;" v-if="datos.tipo == 'efectivo'") {{datos.mensajero}}
                        th(colspan=6 style="border:solid 1px #000;width:80%;" v-else) {{datos.mensajero}}
                    tr
                        th(style="border:solid 1px #000;background:#ededed;") Área:
                        th(colspan=2 style="border:solid 1px #000;width:30%;" v-if="datos.tipo == 'efectivo'") {{datos.area}}
                        th(colspan=4 style="border:solid 1px #000;width:30%;" v-else) {{datos.area}}
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") No. Empleado:
                        th(style="border:solid 1px #000;width:20%;") {{datos.noEntrega}}
                    tr           
                    tr           
            .row.m-20
                .col-md-4
                .col-md-4
                .col-md-4
                    table.table.table-bordered
                        thead
                            tr(v-if="datos.tipo == 'efectivo'")
                                th(colspan=3 class="oculto" v-if="datos.tipo == 'efectivo'")
                                th(colspan=5 class="oculto" v-else)
                                th(style="background:#ededed;border:solid 1px #000;width:50%;") Efectivo
                                th(style="border:solid 1px #000;width:50%;") X
                            tr(v-if="datos.tipo == 'cheque'")
                                th(colspan=3 class="oculto" v-if="datos.tipo == 'efectivo'")
                                th(colspan=5 class="oculto" v-else)
                                th(style="background:#ededed;border:solid 1px #000;width:50%;") Cheque
                                th(style="border:solid 1px #000;") X
                            tr      
            table.table.table-bordered.m-20(style="text-aling:center;" v-if="datos.tipo == 'efectivo'")  
                thead
                    tr
                        th(colspan=5 style="border:solid 1px #000;background:#ededed;") Entrega de Efectivo
                    tr
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") No. Entrega
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") Cliente
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") Domicilio de Entrega
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") Nombre de quien recibe
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") Monto
                    tr
                        th(style="border:solid 1px #000;") {{datos.noEntrega}}
                        th(style="border:solid 1px #000;") {{datos.cliente}}
                        th(style="border:solid 1px #000;") {{datos.domicilio}}
                        th(style="border:solid 1px #000;") {{datos.NQRecibe}}
                        th(style="border:solid 1px #000;") {{datos.monto}}
                    tr
                        th(colspan=3 class="puff" style="border:solid 0px #000;!importan" v-if="datos.tipo == 'efectivo'")
                        th(colspan=5 class="puff" style="border:solid 0px #000;!importan" v-else)
                        th Total
                        th(style="border:solid 1px #000;") {{datos.monto}}
                    tr
            table.table.table-bordered.m-20(style="text-aling:center;" v-if="datos.tipo == 'cheque'")
                thead
                    tr
                        th(colspan=7 style="border:solid 1px #000;background:#ededed;" v-if="datos.tipo == 'cheque'") Entrega de Cheque
                    tr
                        th(style="border:solid 1px #000;background:#ededed;") No. Entrega
                        th(style="border:solid 1px #000;background:#ededed;") No. Cheque
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") Banco
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") Cliente
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") Domicilio de Entrega
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") Nombre de quien recibe
                        th(style="border:solid 1px #000;background:#ededed;width:10%;") Monto
                    tr
                        th(style="border:solid 1px #000;") {{datos.noEntrega}}
                        th(style="border:solid 1px #000;") {{datos.noCheque}}
                        th(style="border:solid 1px #000;") {{datos.banco}}
                        th(style="border:solid 1px #000;") {{datos.cliente}}
                        th(style="border:solid 1px #000;") {{datos.domicilio}}
                        th(style="border:solid 1px #000;") {{datos.NQRecibe}}
                        th(style="border:solid 1px #000;") {{datos.monto}}
                    tr
                        th(colspan=5 class="puff" style="border:solid 0px #000;!importan")
                        th Total
                        th(style="border:solid 1px #000;") {{datos.monto}}
                    tr
            table.table.table-bordered.m-20(style="text-aling:center;")  
                thead
                    tr
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") La presente relación ampara la cantidad de
                        th(style="border:solid 1px #000;width:20%;") ${{datos.cantidad}}
                        th(style="border:solid 1px #000;background:#ededed;width:20%;") Cantidad en letra:
                        th(colspan=2 style="border:solid 1px #000;width:40%;" v-if="datos.tipo == 'efectivo'") {{datos.cantidadL}}
                        th(colspan=4 style="border:solid 1px #000;width:40%;" v-else) {{datos.cantidadL}}
                    tr
            table.m-20(style="text-aling:center;")  
                thead
                    tr
                        th 
                        th(v-if="datos.tipo == 'cheque'" colspan=2) Entrada
                        th(v-else) Entrada
                        th 
                        th(v-if="datos.tipo == 'cheque'" colspan=2) Recibe
                        th(v-else) Recibe
                        th
                    tr
                        th 
                        th(style="height:70px;" v-if="datos.tipo == 'cheque'" colspan=2) {{datos.gerente}}
                        th(style="height:70px;" v-else) {{datos.gerente}}
                        th 
                        th(v-if="datos.tipo == 'cheque'" colspan=2) {{datos.mensajero}}
                        th(v-else) {{datos.mensajero}}
                        th 
                    tr
                        th 
                        th(style="border-top: solid 1px #000;width:30%" v-if="datos.tipo == 'cheque'" colspan=2) 
                            p(style="font-weight: 800;") (Gerente/Encargado de área) 
                            p (Nombre y Firma)
                        th(style="border-top: solid 1px #000;width:30%" v-else) 
                            p(style="font-weight: 800;") (Gerente/Encargado de área) 
                            p (Nombre y Firma)
                        th 
                        th(style="border-top: solid 1px #000;width:30%" v-if="datos.tipo == 'cheque'" colspan=2) 
                            p(style="font-weight: 800;") (Mensajero de Área) 
                            p (Nombre, Firma y Fecha)
                        th(style="border-top: solid 1px #000;width:30%" v-else) 
                            p(style="font-weight: 800;") (Mensajero de Área) 
                            p (Nombre, Firma y Fecha)
                        th
</template>
<script>
import exc from "../../excel.js";
import menus from "./permanente/menus";
import excel from "../../excel";
export default {
    name:'EEfectivo',
    components: {
        menus,
        exc
    },
    data(){
        return{
            datos:[],
        }
    },
    methods:{

    },
    mounted(){
         var settings = {
        async: true,
        crossDomain: true,
        url: "http://localhost:3000/ECheque",
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
        this.datos = res;
        // console.log(this.datos);
        });
    }
}
</script>
<style lang="scss">
.table thead th.puff {
    border: none !important;
    border-left: solid 1px #fff !important;
}
</style>

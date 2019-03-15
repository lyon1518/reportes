<template lang="pug">
    transition(name="component-form" mode="out-in")
        .container.mt-40
            .row
                .col-md-6
                    .custom-control.custom-radio
                        input(type="radio" v-model="buscada" id="r1" class="custom-control-input" value="Buscar cliente")
                        label(class="custom-control-label" for="r1") Buscar Cliente 
                .col-md-6
                    .custom-control.custom-radio
                        input(type="radio" v-model="buscada" id="r2" class="custom-control-input" value="Buscar mensajero")
                        label(class="custom-control-label" for="r2") Buscar Mensajero
            transition(name="component-form" mode="out-in")
                .input-group.mb-3.mt-20(v-if="buscada == 'Buscar mensajero'")
                    .input-group-prepend
                        span.input-group-text
                            i.fa.fa-search.ico
                    input(v-model="cliente" type="text" class="form-control inicioForm" id="buscador" placeholder="Mensajero"  @keydown="busca")
            transition(name="component-form" mode="out-in")
                .input-group.mb-3.mt-20(v-if="buscada == 'Buscar cliente'")
                    .input-group-prepend
                        span.input-group-text
                            i.fa.fa-search.ico
                    input(v-model="cliente" type="text" class="form-control inicioForm" id="mensajero" placeholder="Cliente" @keydown="busca")
            transition(name="component-form" mode="out-in")
                .table-responsive(v-if="buscada == 'Buscar mensajero'")
                    table.table
                        thead.bg-verde
                            tr.STitulo
                                th(style="color:#fff;") Nombre
                                th(style="color:#fff;") Area
                                th(style="color:#fff;") No. Empleado
                        tbody
                            tr(v-for="m in mensajeros")
                                td(v-if="cliente.length == 0 || m.nombre.indexOf( cliente ) > -1") {{m.nombre}}
                                td(v-if="cliente.length == 0 || m.nombre.indexOf( cliente ) > -1") {{m.area}}
                                td(v-if="cliente.length == 0 || m.nombre.indexOf( cliente ) > -1") {{m.noEmpleado}}
            
            transition(name="component-form" mode="out-in")
                .table-responsive(v-if="buscada == 'Buscar cliente'")
                    table.table
                        thead.bg-verde
                            tr.STitulo
                                th(style="color:#fff;") Nombre    
                                th(style="color:#fff;") Domicilio    
                        tbody
                            tr(v-for="c in clientes")
                                td {{c.nombre}}
                                td {{c.domicilio}}
</template>
<script>
export default {
  name: "buscador",
  data() {
    return {
      mensajero: "",
      cliente: "",
      buscada: "",
      clientes: [],
      mensajeros: []
    };
  },
  methods: {
    busca() {
        // $("#buscador").keyup(function() {
        console.log("ok");
        var nombres = $(".nombres");
        console.log(nombres[0]);
        var buscando = this.cliente;
        console.log(buscando);
        var item = "";
        for (var i = 0; i < nombres.length; i++) {
            for( var i = 0; i < nombres.length; i++ ){
                item = $(nombres[i]).html().toLowerCase();
                for(var x = 0; x < item.length; x++ ){
                    if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
                        $(nombres[i]).parents('.item').show(); 
                    }else{
                        $(nombres[i]).parents('.item').hide();
                    }
                }
            }
        }
    }
  },
  mounted() {
    $.ajax({
      crossDomain: true,
      method: "get",
      url: `http://localhost:3000/clientes`,
      success: res => {
        // console.log(res);
        this.clientes = res;
      }
    });
    $.ajax({
      crossDomain: true,
      method: "get",
      url: `http://localhost:3000/mensajeros`,
      success: res => {
        // console.log(res);
        this.mensajeros = res;
      }
    });
  }
};
</script>


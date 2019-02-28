<template lang="pug">
  .container
    .row.m-20
      .col-md-4
      .col-md-4
          img(src="../assets/logSA.jpg" width="230px" v-if="area.area == 'SA'")
          img(src="../assets/logoLOF.png" width="230px" v-if="area.area == 'lofton'")
          img(src="../assets/logCAI.png" width="230px" v-if="area.area == 'cai'")
          img(src="../assets/logRio.png" width="230px" v-if="area.area == 'rio'")
          img(src="../assets/logRancho.png" width="230px" v-if="area.area == 'rancho'")
          img(src="../assets/logdabesare.png" width="230px" v-if="area.area == 'dabesare'")
          img(src="../assets/logvaal.jpg" width="250px" v-if="area.area == 'vaal'")
      .col-md-4
        .busca(v-if="$parent.busca == true")
          span.fa.fa-search.fa-2x.verde
</template>
<script>
export default {
  name: "logos",
  data() {
    return {
      area: []
    };
  },
  mounted(){
    this.area = this.$parent.areaI;
    // console.log(this.area);
  }
};
</script>


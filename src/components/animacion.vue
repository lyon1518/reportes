<template lang="pug">
    .animacionper
        .niveles.nivel1
            .larga
            .larga1
            .corta
            .corta1
            .larga1
            .corta
            .larga
            .corta1
            .corta1
            .larga
            
        
</template>

<script>
export default {
    name:"animacion"
}
</script>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
.animacionper{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.niveles {
    width: 100%;
    height: 80px;
}
.larga {
    width: 40%;
    height: 40px;
    background-color: rgba(0,0,0,0.2);
    border-radius: 40px;
    position: relative;
    top: 20px;
    -webkit-animation: muevete 5s infinite;
    animation: muevete 5s infinite;
}
.corta {
    width: 5%;
    height: 40px;
    background-color: rgba(0,0,0,0.2);
    border-radius: 40px;
    position: relative;
    top: 20px;
    -webkit-animation: cortamuevete 5s infinite;
    animation: cortamuevete 5s infinite;
}
.larga1 {
    width: 40%;
    height: 70px;
    background-color: rgba(0,0,0,0.2);
    border-radius: 40px;
    position: relative;
    top: 5px;
    -webkit-animation: muevete2 5s infinite;
    animation: muevete2 5s infinite;
}
.corta1 {
    width: 5%;
    height: 70px;
    background-color: rgba(0,0,0,0.2);
    border-radius: 40px;
    position: relative;
    top: 5px;
    -webkit-animation: cortamuevete2 5s infinite;
    animation: cortamuevete2 5s infinite;
}
@-webkit-keyframes muevete {
  0%   {left:-60%;}
  100% {left:100%; width: 0%;}
}
@keyframes muevete {
  0%   {left:-60%;}
  100% {left:100%; width: 0%;}
}
@-webkit-keyframes cortamuevete {
  0%   {left:-15%;}
  100% {left:95%;}
}
@keyframes cortamuevete {
  0%   {left:-15%;}
  100% {left:95%;}
}
@-webkit-keyframes muevete2 {
  0%   {right:-100%; width: 0%;}
  100% {right:100%;}
}
@keyframes muevete2 {
  0%   {right:-100%; width: 0%;}
  100% {right:100%;}
}
@-webkit-keyframes cortamuevete2 {
  0%   {right:-95%;}
  100% {right:0%;}
}
@keyframes cortamuevete2 {
  0%   {right:-95%;}
  100% {right:0%;}
}
</style>

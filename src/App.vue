<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
window.$ = require("jquery");
window.jQuery = require("jquery");
window.Popper = require('popper.js').default;
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner, faAlignLeft)

try {
    window.$ = window.jQuery = require('jquery');
    window.Popper = require('popper.js').default;
    require('bootstrap');
} catch (e) {}
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';

@font-face{
   font-family: OpenSans;
   src: url(../fonts/OpenSans-Light.ttf);
}
@font-face{
   font-family: OpenSansBold;
   src: url(../fonts/OpenSans-Bold.ttf);
}
#app {
  font-family: OpenSans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
strong{
  font-family: OpenSansBold;
}
</style>

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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt,faUser,faUserTie,faBuilding,faFileArchive,faFile,faFileAlt,faFileInvoiceDollar,faFileContract,faAngleRight,
faPlusCircle,faBox,faAddressCard,faAddressBook,faMapMarkedAlt,faMapMarker,faPallet,faBoxOpen,faListOl,faSearch
,faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSession from 'vue-session'

Vue.use(VueSession)

library.add(faSignOutAlt,faUser,faUserTie,faBuilding,faFileArchive,faFile,faFileAlt,faFileInvoiceDollar, faFileContract,faAngleRight,
faPlusCircle,faBox,faAddressCard,faAddressBook,faMapMarkedAlt,faMapMarker,faPallet,faBoxOpen,faListOl,faSearch
,faFileExcel)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

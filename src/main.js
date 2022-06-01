import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// FontAwesome iconos
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);   


// componentes
import BotonAgregar from './components/botonAgregar/index.vue'
import Headbar from './components/headbar/index.vue'
import Sidebar from './components/sidebar/index.vue'

createApp(App)
    .component('BotonAgregar', BotonAgregar)
    .component('Headbar', Headbar)
    .component('Sidebar', Sidebar)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')

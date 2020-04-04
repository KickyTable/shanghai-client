import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import  {BCol, BRow, BContainer} from 'bootstrap-vue/esm/components/layout'
import { BModal, BButton } from 'bootstrap-vue'



Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BCol);
Vue.use(BRow);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './custom.scss'
Vue.component('b-col', BCol);
Vue.component('b-row', BRow);
Vue.component('b-container', BContainer);
Vue.component('b-modal', BModal);
Vue.component('b-button', BButton);


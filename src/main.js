import Vue from "vue";
import VueResource from 'vue-resource'
import App from "./App.vue";
import router from "./router";
import config from "./config/";
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(VueResource)
Vue.config.productionTip = false;
Vue.prototype.$config = config;
window._ = require("lodash");

new Vue({
    router,
    render: h => h(App),
    created: function() {

    }
}).$mount("#app")
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store/index.js'
import Tool from './assets/lib/Tool'
import 'element-ui/lib/theme-default/index.css'
import 'simplemde/dist/simplemde.min.css'

Vue.config.productionTip = false;

// axios.interceptors.request.use(function (config) {
//     let token = Tool.dataToSessionStorageOperate.achieve('token');
//     if (token) {
//         config.headers.Authorization = `${token}`;
//     }
//     return config;
// }, function (err) {
//     return Promise.reject(err);
// });

Vue.filter('format', (date, fmt) => {
    return Tool.format(fmt, new Date(date))
});

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});

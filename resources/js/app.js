require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

let app= new Vue({
   el: "#app",
    router
});
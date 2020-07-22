import VueRouter from 'vue-router';
import Welcome from './views/welcome';
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Welcome
        }
    ]
})
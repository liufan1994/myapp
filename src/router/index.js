import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import start from '@/views/start'
import home from '@/views/home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/start',
            name: 'Start',
            component: start
        },
        {
            path: '/home',
            name: 'Home',
            component: home
        }
    ]
})

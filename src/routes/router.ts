import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '@/views/Home.vue'


const AboutApp = () => import('../views/About.vue')
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeApp
    },
    {
        path: '/about',
        name: 'About',
        component: AboutApp
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


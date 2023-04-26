import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeApp
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


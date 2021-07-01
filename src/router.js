import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/formulario.vue'
import Usuarios from './components/usuarios.vue'



Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/formulario' },
        { path: '/formulario', component: Formulario },
        { path: '/usuarios', component: Usuarios },
    ]
})
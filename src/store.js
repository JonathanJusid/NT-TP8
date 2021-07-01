import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)



const store = new Vuex.Store({
    state: {
        usuarios: [],
        alertaNoUsuarios: false
    },
    mutations: {
        agregarUsuario(state, usuario) {
            state.usuarios.push(usuario);
        },
        setUsuarios(state, usuarios) {
            state.usuarios = usuarios;
        },
        cambiarAlertaNoUsuarios(state) {
            state.alertaNoUsuarios = !state.alertaNoUsuarios;
        }
    },
    actions: {
        async obtenerUsuarios({commit}) {
            try {
                const respuesta = await axios.get("https://60dd43d3878c890017fa2766.mockapi.io/usuarios");

                if (respuesta.data !== 0) {
                    commit('setUsuarios', respuesta.data);
                } else {
                    commit('cambiarAlertaNoUsuarios');
                }
            } catch (e) {
                console.log(e);
            }
        },
        async nuevoUsuario({ commit, state }, formData) {
            try {
                await axios.post("https://60dd43d3878c890017fa2766.mockapi.io/usuarios", formData);
                alert('Usuario registrado correctamente')

                if (state.usuarios.length > 0) {
                    commit('agregarUsuario', formData);
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
})

export default store;
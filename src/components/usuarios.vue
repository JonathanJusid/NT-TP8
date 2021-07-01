<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Usuarios</h2>
      <hr>
      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
          <tr v-for="(usuario,index) in usuarios" :key="index">
            <td>{{usuario.nombre}}</td>
            <td>{{usuario.edad}}</td>
            <td>{{usuario.email}}</td>
          </tr>

        </table>
        <div v-if="alertaNoUsuarios" class="alert alert-danger mt-1">
            No hay usuarios cargados
        </div>   
    </div>
  </div> 
  </section>

</template>

<script lang="js">
import { mapState } from 'vuex';

  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {
    this.getUsuariosAxiosVuex();
    console.log('cargando usuarios')
    },
    computed: mapState([
            'usuarios',
            'alertaNoUsuarios'
      ]),
    methods: {
      getUsuariosAxiosVuex() {
          this.$store.dispatch('obtenerUsuarios');
      }
    }
}


</script>

<style scoped lang="css">
  .src-componentes-http {

  }

  .jumbotron {
    background: rgb(211,211,211); 
    color: white;
  }

  h2{
    color: black;
  }
     


  hr {
    background-color: #fff;
  }  
</style>
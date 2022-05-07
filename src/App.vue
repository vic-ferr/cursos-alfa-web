<template>
  <div id="app">
    <div>
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="success"
        text-variant="white"
      >
        <b-navbar-brand href="#">Cursos Alfaweb</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="margin">
            <router-link class="m-2" to="/">Home</router-link>
            <router-link class="m-2" to="/administracion"
              >administration</router-link
            >
            <router-link class="m-2" to="/registration">restration</router-link>
            <template v-if="!isAuthh">
              <router-link class="m-2" to="/login">login</router-link>
            </template>
            <template v-else>
              <b-button @click="logout" variant="outline-info" class="mb-2">
                <b-icon icon="power" aria-hidden="true"></b-icon> Logout
              </b-button>
            </template>
            <!-- <b-nav-item-dropdown right>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view />

    <div v-for="curso in getCurso" :key="curso.id">
      console.log(curso);
      <b-card
        title="Card Title"
        img-alt="Image"
        img-top
        tag="article"
        :style="'background:url(' + curso.imagen + '), heigth:200px'"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "App",

  created() {
    this.getCurso();
  },

  methods: {
    ...mapActions(["logout", "getCurso"]),
  },
  computed: {
    ...mapState(["isAuth"]),
    isAuthh() {
      return this.isAuth ? true : false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.margin {
  margin-left: auto;
  padding-right: 50px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
router-link {
  color: #ffc107;
}

nav a.router-link-exact-active {
  color: #c4ddd2;
}
</style>

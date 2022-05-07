<template>
  <div class="home">
    <h1>hola estas en home</h1>
    <!-- importar la data que esta en la cards -->
    <CardsCursos :CardsData="cursos" />
  </div>
</template>

<script>
import CardsCursos from "../components/CardsCursos.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    CardsCursos,
  },
  computed: {
    ...mapState(["cursos"]),
  },
};
</script>

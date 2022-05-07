<template>
  <div class="about">
    <h1>Esta es la vista de Administracion</h1>
    <TablaCursos :dataCurso="cursos" />
  </div>
</template>
<script>
import TablaCursos from "@/components/TablaCursos.vue";
import { mapState } from "vuex";
export default {
  name: "AdministracionView",
  components: {
    TablaCursos,
  },
  computed: {
    ...mapState(["cursos"]),
  },
};
</script>

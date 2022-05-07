<template>
  <b-container>
    <b-row>
      <b-col>
        <h2 class="display-4">Vista Editar</h2>
        <h3></h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-container fluid>
          <b-row class="my-1">
            <b-col sm="3">
              <label>Nombre</label>
            </b-col>
            <b-col sm="9">
              <b-form-input v-model="nombre"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label>URL imagen</label>
            </b-col>
            <b-col sm="9">
              <b-form-input v-model="imagen"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label>Cupos del curso</label>
            </b-col>
            <b-col sm="9">
              <b-form-input v-model="cupos"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label>Inscritos en el curso</label>
            </b-col>
            <b-col sm="9">
              <b-form-input v-model="inscritos"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label>Duracion del curso</label>
            </b-col>
            <b-col sm="9">
              <b-form-input v-model="duracion"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label>Costo del Curso</label>
            </b-col>
            <b-col sm="9">
              <b-form-input v-model="costo"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label>Codigo del Curso</label>
            </b-col>
            <b-col sm="9">
              <b-form-input v-model="codigo"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label>Descripcion del Curso</label>
            </b-col>
            <b-col sm="9">
              <b-form-textarea
                v-model="descripcion"
                id="textarea-large"
                size="lg"
              ></b-form-textarea>
              <b-button class="mt-2" @click="updateCurso" variant="primary"
                >Editar Curso</b-button
              >
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import { set } from "vue/types/umd";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "EditView",
  methods: {
    ...mapMutations([
      "SET_EDIT_CURSO",
      "SET_EDIT_CURSO_NOMBRE",
      "SET_EDIT_CURSO_IMAGEN",
      "SET_EDIT_CURSO_CUPOS",
      "SET_EDIT_CURSO_INSCRITOS",
      "SET_EDIT_CURSO_DURACION",
      "SET_EDIT_CURSO_COSTO",
      "SET_EDIT_CURSO_CODIGO",
      "SET_EDIT_CURSO_DESCRIPCION",
    ]),
    ...mapActions(["updateCurso"]),
  },
  computed: {
    ...mapState(["editCurso"]),
    nombre: {
      get() {
        return this.editCurso.nombre;
      },
      set(value) {
        this.SET_EDIT_NOMBRE(value);
      },
    },
    imagen: {
      get() {
        return this.editCurso.imagen;
      },
      set(value) {
        this.SET_EDIT_IMAGEN(value);
      },
    },
    cupos: {
      get() {
        return this.editCurso.cupos;
      },
      set(value) {
        this.SET_EDIT_CUPOS(value);
      },
    },
    inscritos: {
      get() {
        return this.editCurso.inscritos;
      },
      set(value) {
        this.SET_EDIT_INSCRITOS(value);
      },
    },
    duracion: {
      get() {
        return this.editCurso.duracion;
      },
      set(value) {
        this.SET_EDIT_DURACION(value);
      },
    },
    costo: {
      get() {
        return this.editCurso.costo;
      },
      set(value) {
        this.SET_EDIT_COSTO(value);
      },
    },
    codigo: {
      get() {
        return this.editCurso.codigo;
      },
      set(value) {
        this.SET_EDIT_CODIGO(value);
      },
    },
    descripcion: {
      get() {
        return this.editCurso.descripcion;
      },
      set(value) {
        this.SET_EDIT_DESCRIPCION(value);
      },
    },
  },
};
</script>

<style></style>

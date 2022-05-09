<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <h1 clas="display-4">Iniciar secion</h1>
        <b-form inline>
          <label class="sr-only" for="inline-form-input-username">Correo</label>
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              id="inline-form-input-username"
              placeholder="Correo"
              v-model="correo"
            ></b-form-input>
          </b-input-group>

          <label class="sr-only" for="inline-form-input-name">contraseña</label>
          <b-form-input
            id="inline-form-input-name"
            type="password"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Contraseña"
            v-model="contraseña"
          ></b-form-input>

          <b-button class="mt-2" @click="login" variant="primary"
            >iniciar secion</b-button
          >
        </b-form>

        <h2 class="mt-2">contraseña:123456</h2>
        <h3 class="mt-2">correo:pepito@gmail.com</h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginView",
  data() {
    return {
      contraseña: "",
      correo: "",
    };
  },
  methods: {
    ...mapActions(["loginFirebase"]),
    login() {
      this.loginFirebase({
        correo: this.correo,
        contraseña: this.contraseña,
      });
    },
  },
};
</script>

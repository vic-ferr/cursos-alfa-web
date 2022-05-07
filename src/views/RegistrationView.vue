<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h2 clas="display-4">Registrate</h2>
          <b-form inline class="border">
            <label class="sr-only" for="inline-form-input-name"
              >contraseña</label
            >
            <b-form-input
              id="inline-form-input-name"
              type="password"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="contraseña"
              v-model="contraseña"
            ></b-form-input>

            <label class="sr-only" for="inline-form-input-username"
              >Correo</label
            >
            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                type="email"
                id="inline-form-input-username"
                placeholder="correo"
                v-model="correo"
              ></b-form-input>
            </b-input-group>

            <b-button class="mt-2" @click="login" variant="primary"
              >Registrar</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "RegistrationView",
  data() {
    return {
      contraseña: "",
      correo: "",
    };
  },
  methods: {
    login() {},
  },
};
</script>

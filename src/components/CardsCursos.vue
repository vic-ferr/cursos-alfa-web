<template>
  <div>
    <b-container>
      <b-row>
        <b-col
          cols="12"
          md="4"
          lg="4"
          class="m-3 p-3"
          style="width: 21rem"
          v-for="card of CardsData"
          :key="card.codigo"
        >
          <!-- iterar con v-for la car con data de la props cardsData -->
          <b-card style="min-height: 30rem">
            <template>
              <div
                class="bg-imagen"
                :style="`background-image: url(${card.imagen})`"
              ></div>
            </template>

            <b-card-body>
              <b-card-title>{{ card.nombre }}</b-card-title>
              <b-card-sub-title class="mb-2">informacion</b-card-sub-title>
              <b-card-text> </b-card-text>
            </b-card-body>

            <b-list-group flush>
              <b-list-group-item
                ><p>
                  costo:{{ card.costo.toLocaleString("DE-de") }}
                </p></b-list-group-item
              >
              <b-list-group-item
                ><p>duracion:{{ card.duracion }}</p></b-list-group-item
              >
              <b-list-group-item
                ><p>cupos:{{ card.cupos }}</p></b-list-group-item
              >
              <b-list-group-item
                ><p>
                  completado:{{ card.estado ? "si" : "no" }}
                </p></b-list-group-item
              >
              <b-list-group-item
                ><p>fecha de registro:{{}}</p></b-list-group-item
              >
              <b-list-group-item
                ><p>descripcion:{{ card.descripcion }}</p></b-list-group-item
              >
            </b-list-group>
            <b-card-footer>This is a footer</b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CardsCursos",

  props: {
    CardsData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style>
.bg-imagen {
  height: 7rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

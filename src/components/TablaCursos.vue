<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <div>
          <b-table-simple hover small caption-top responsive>
            <caption></caption>
            <colgroup>
              <col />
              <col />
            </colgroup>
            <colgroup>
              <col />
              <col />
              <col />
            </colgroup>
            <colgroup>
              <col />
              <col />
            </colgroup>
            <b-thead head-variant="dark">
              <b-tr>
                <b-th colspan="12">Lista de Cursos</b-th>
              </b-tr>
              <b-tr>
                <b-th>Curso </b-th>
                <b-th>Cupo</b-th>
                <b-th>Inscritos</b-th>
                <b-th>Duracion</b-th>
                <b-th>Costo</b-th>
                <b-th>Terminado</b-th>
                <b-th>Fecha</b-th>
                <b-th>Acciones</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="data of dataCurso" :key="data.codigo">
                <b-td>{{ data.nombre }}</b-td>
                <b-td>{{ data.cupos }}</b-td>
                <b-td>{{ data.inscritos }}</b-td>
                <b-td>{{ data.duracion }}</b-td>
                <b-td>
                  {{ data.costo.toLocaleString("DE-de") }}
                </b-td>
                <b-td>{{ data.estado ? "si" : "no" }}</b-td>
                <b-td> </b-td>
                <b-td>
                  <span @click="MoverEdit(data)" class="cursor-pointer"
                    >✏️</span
                  >
                  <span
                    ><b-icon
                      icon="trash-fill"
                      aria-hidden="true"
                    ></b-icon></span
                ></b-td>
              </b-tr>
            </b-tbody>
            <b-tfoot>
              <b-tr>
                <b-td colspan="12" variant="secondary" class="text-left">
                  Total de cursos: <b>6</b>
                </b-td>
              </b-tr>
            </b-tfoot>
          </b-table-simple>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TablaCursos",
  props: {
    dataCurso: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapMutations(["SET_EDIT_CURSO"]),
    MoverEdit(data) {
      this.SET_EDIT_CURSO(data);
      this.$router.push("/edit");
    },
  },
};
</script>
<style>
.cursor-pointer {
  cursor: pointer;
}
</style>

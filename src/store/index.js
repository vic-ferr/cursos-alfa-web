import Vue from "vue";
import Vuex from "vuex";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "@/helper/firebase";
import {
  collection,
  getDocs,
  doc,
  //setDoc,
  updateDoc,
} from "firebase/firestore";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    cursos: [],
    editCurso: {},
  },
  getters: {
    // getCursoFiltered: (state) => (payload) => {
    //   return state.cursos.find((fil) => fil.codigo === payload);
    // },
  },
  mutations: {
    SET_IS_AUTH(state, payload) {
      state.isAuth = payload;
    },

    SET_DATA_CURSOS(state, payload) {
      state.cursos = payload;
    },
    SET_EDIT_CURSO(state, payload) {
      state.editCurso = payload;
    },
    SET_EDIT_CURSO_NOMBRE(state, payload) {
      state.editCurso.nombre = payload;
    },
    SET_EDIT_CURSO_IMAGEN(state, payload) {
      state.editCurso.imagen = payload;
    },
    SET_EDIT_CURSO_CUPOS(state, payload) {
      state.editCurso.cupos = payload;
    },
    SET_EDIT_CURSO_INSCRITOS(state, payload) {
      state.editCurso.inscritos = payload;
    },
    SET_EDIT_CURSO_DURACION(state, payload) {
      state.editCurso.duracion = payload;
    },
    SET_EDIT_CURSO_COSTO(state, payload) {
      state.editCurso.costo = payload;
    },

    SET_EDIT_CURSO_CODIGO(state, payload) {
      state.editCurso.codigo = payload;
    },

    SET_EDIT_CURSO_DESCRIPCION(state, payload) {
      state.editCurso.descripcion = payload;
    },
  },
  actions: {
    async loginFirebase({ commit }, payload) {
      const contraseña = payload.contraseña;
      const correo = payload.correo;
      console.log(contraseña, correo);

      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          correo,
          contraseña
        );
        // Signed in
        commit("SET_IS_AUTH", true);
        localStorage.setItem("isAuth", "true");
        router.push("/");
        console.log(userCredential);
      } catch (error) {
        console.error(error);
      }
    },

    logout({ commit }) {
      localStorage.removeItem("isAuth");
      commit("SET_IS_AUTH", false);
      router.push("/login");
    },

    async getCurso({ commit }) {
      try {
        const request = await getDocs(collection(db, "cursoalfaweb"));
        const data = request.docs.map((doc) => {
          console.log(doc.id);
          const object = {
            ...doc.data(),
            idFirebase: doc.id,
          };
          return object;
        });
        console.log(data);
        commit("SET_DATA_CURSOS", data);
      } catch (error) {
        console.error(error);
      }
    },
    async updateCurso({ state }) {
      const curso = state.editCurso;
      const idFirebase = curso.idFirebase;
      delete curso.idFirebase;
      try {
        const actulizar = doc(db, "cursoalfaweb", idFirebase);
        // await setDoc(doc(db, "cursoalfaweb", curso.idFirebase), curso);
        await updateDoc(actulizar, curso);
      } catch (error) {
        console.error(error);
      }
      console.log("updateCurso", curso);
    },
  },
  modules: {},
});

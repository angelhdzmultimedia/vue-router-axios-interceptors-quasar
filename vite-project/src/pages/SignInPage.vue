<script setup>
import { useRoute, useRouter } from 'vue-router';

/* 
  En vez de importar useRouter de VueRouter, 
  que es una funcion que se ejecuta y
  devuelve el router que se le haya
  instalado al app de Vue, se puede importar
  y usar el router directamente desde 
  donde lo hayamos definido globalmente,
  en este caso de ../router/index.js.
  Para usarlo asi, eliminar
  "const router = useRouter()" y añadir
   "import { router } from '../router;".
*/

// import { router } from '../router';
import { onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import { api } from '../api';

const $q = useQuasar();
const rutaActual = useRoute();
const router = useRouter();

const email = ref('');
const password = ref('');

// Validaciones de Campos
const emailRules = ref([
  (value) => !!value || 'Correo Electrónico es requerido.',
]);

const passwordRules = ref([(value) => !!value || 'Contraseña es requerida.']);

function navigate(path) {
  router.push(path);
}

async function signIn() {
  $q.notify('Iniciando sesión...');
  const response = await api.post('https://localhost:5000/api/user/login', {
    email: email.value,
    password: password.value,
  });
  $q.notify(JSON.stringify(response.data));
}

onMounted(() => {
  $q.notify(`Query: ${JSON.stringify(rutaActual.query)}`);
});
</script>

<template>
  <q-page
    class="
      column
      items-center
      justify-center
      full-width full-height
      q-gutter-md
    "
  >
    Query {{ $route.query }}
    <span class="text-h4">Iniciar Sesión</span>
    <q-form novalidate @submit.prevent="signIn" class="column q-gutter-sm">
      <q-input
        v-model="email"
        type="email"
        placeholder="Correo Electrónico"
        :reactive-rules="true"
        :rules="emailRules"
      ></q-input>
      <q-input
        v-model="password"
        type="password"
        placeholder="Contraseña"
        :reactive-rules="true"
        :rules="passwordRules"
      ></q-input>
      <q-btn type="submit">Iniciar Sesión</q-btn>
    </q-form>
    <q-btn @click="navigate('/')">Volver</q-btn>
  </q-page>
</template>

<style></style>

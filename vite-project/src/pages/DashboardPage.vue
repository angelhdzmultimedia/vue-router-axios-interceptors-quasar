<script setup>
import { router } from '../router';
function navigate(path) {
  router.push(path);
}
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
    <span class="text-h4">Inicio</span>
    <q-btn @click="navigate('/about')">Acerca de Nostros</q-btn>
    <q-btn @click="navigate('/signin')">Iniciar Sesión</q-btn>
  </q-page>
</template>

<style></style>

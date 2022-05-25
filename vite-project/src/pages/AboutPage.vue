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
    <span class="text-h4">Acerca de Nosotros</span>
    Bla bla bla Lorem Ipsum :/)
    <q-btn @click="navigate('/')">Volver</q-btn>
  </q-page>
</template>

<style></style>

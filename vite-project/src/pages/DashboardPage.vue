<script setup>
import { router } from '../router';
import { onMounted, ref } from 'vue';
import { api } from '../api';

const columns = ref([
  {
    name: 'name',
    field: 'name',
    align: 'center',
    label: 'Nombre',
    sortable: true,
  },
  {
    name: 'email',
    field: 'email',
    align: 'center',
    label: 'Email',
    sortable: true,
  },
  {
    name: 'id',
    field: 'id',
    align: 'center',
    label: 'ID',
    sortable: true,
  },
]);

const loading = ref(true);

const users = ref([]);

const pagination = ref({
  page: 1,
  rowsPerPage: 5,
  rowsNumber: 0,
});

function navigate(path) {
  router.push(path);
}

async function fetchUsers(page) {
  loading.value = true;
  const { data } = await api.get(
    `http://localhost:5000/api/user?limit=${5}&page=${page}`
  );
  users.value = data.users;
  pagination.value.page = data.meta.currentPage;
  pagination.value.rowsPerPage = data.meta.perPage;
  pagination.value.rowsNumber = data.meta.total;
  loading.value = false;
}

function onRequest(props) {
  fetchUsers(props.pagination.page);
}

onMounted(() => {
  fetchUsers(1);
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
    <span class="text-h4">Inicio</span>
    <q-table
      v-model:pagination="pagination"
      :rows-per-page-options="[]"
      @request="onRequest"
      :rows="users"
      :columns="columns"
      :loading="loading"
    >
      <template #loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>
    <q-btn @click="navigate('/about')">Acerca de Nostros</q-btn>
    <q-btn @click="navigate('/signin')">Iniciar Sesión</q-btn>
  </q-page>
</template>

<style></style>

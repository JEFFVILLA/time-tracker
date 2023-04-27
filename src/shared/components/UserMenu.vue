import { WorkStatusEmployee } from '../../models/work-entries.model';
<template>
  <button type="button" @mouseenter="isOpen" @click="isOpen" class="group flex shrink-0 items-center transition">
    <img alt="Man"
      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-10 w-10 rounded-full object-cover"
      :class="[workStatusEmployee === 'online' ? 'border-green-700 border-2' : '']" />
    <p class="ms-2 hidden text-left text-xs sm:block">
      <strong class="block font-medium text-black">{{ employeeFullName }}</strong>
    </p>
    <svg xmlns="http://www.w3.org/2000/svg"
      class="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block" viewBox="0 0 20 20"
      fill="currentColor">
      <path fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd" />
    </svg>
  </button>

  <div v-show="show" @mouseleave="isOpen" class="absolute right-10 top-16 py-2 mt-2 bg-white-200 border-1 text-black rounded-md shadow-xl  w-40">
    <router-link to="/" class="block px-4 py-2 text-sm  hover:bg-emerald-300 ">
      Cuentas
    </router-link>
    <router-link to="/" class="block px-4 py-2 text-sm   hover:bg-emerald-300">
      Vista empleado
    </router-link>
    <router-link to="/" class="block px-4 py-2 text-sm  hover:bg-emerald-300">
      Mi perfil
    </router-link>
    <router-link to="/" class="block px-4 py-2 text-sm  hover:bg-emerald-300">
      Cerrar sesión
    </router-link>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  name: 'UserMenuApp',
  props: {
    employeeFullName: {
      type: String
    },
    workStatusEmployee: {
      type: String
    }
  },
  setup() {
    let show = ref(false);
    const isOpen = () => (show.value = !show.value);
    return { show, isOpen };
  },
}
</script>


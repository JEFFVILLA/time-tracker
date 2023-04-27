<template>
  <div class="mx-auto  px-4 py-2 sm:px-6 lg:px-8">
    <div class="flex items-center sm:justify-between sm:gap-4">
      <div class="relative hidden sm:block">
        <span class="text-xl">DashBoard</span>
      </div>

      <div class="flex flex-1 items-center justify-between sm:justify-end">
        <div class="group gap-3 flex shrink-0 items-center rounded-full transition p-4 bg-emerald-200">
          <span>{{ formatWorkTime }}</span>
          <ButtonApp v-if="employeeWorkStatus === 'offline'"  class="bg-emerald-500" @click="clockIn">Entrar</ButtonApp>
          <ButtonApp v-if="employeeWorkStatus === 'pause' || employeeWorkStatus === 'online'" class="bg-gray-400">Pausar
          </ButtonApp>
          <ButtonApp v-if="employeeWorkStatus === 'online'" class="bg-red-400" @click="clockOut">Salir</ButtonApp>
          <span aria-hidden="true" class="block h-8 w-px rounded-full bg-gray-500"></span>
          <button type="button" class="group flex shrink-0 items-center transition">
            <img alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-10 w-10 rounded-full object-cover" />
            <p class="ms-2 hidden text-left text-xs sm:block">
              <strong class="block font-medium text-black">{{employeeFullName}}</strong>
            </p>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'ToolbarApp',
    
  }
</script>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from '../../store/index';
import ButtonApp from './Button.vue';
import type { Coordinates, WorkEntriesPost } from '../../models/work-entries.model';
import { workTimeHelper } from '../utils/helpers';
const formatWorkTime = ref<string>("00:00:00");
const workTime = ref<number>(0);
const counter: any = ref<any>(null);
const store = useStore();

const employeeFullName = computed(() => {
  return store.getFullNameEmployee;
});

const employeeWorkStatus = computed(() => {
  return store.getWorkStatusEmployee;
});

const employeeWorkTime = computed(() => {
  return store.getWorkTime;
});

const clockIn = () => {
  store.postClockIn(getClockInstance("in"));
  // initCountWorkTime();
}

const clockOut = () => {
  store.postClockOut(getClockInstance("out"));
}

const getClockInstance = (type: string) => {
      
      const coordinates: Coordinates = {
        latitude: 39.474257,
        longitude: -0.357216
      }
      const clockInstace: WorkEntriesPost = {
        employeeId: "b99a6cd9-3a3d-4635-9eea-e089c90ac45a",
      };

      if(type === 'in'){
        clockInstace.workEntryIn = {coordinates};
      }
      if(type === 'out'){
        clockInstace.workEntryOut = { coordinates};
      }

      return clockInstace;

    }

    const initCountWorkTime = () => {
      if (employeeWorkStatus.value === 'offline') {
        clearInterval(counter.value);
        resetTime();
        formatWorkTime.value = workTimeHelper(employeeWorkTime.value);
      }
      if (employeeWorkStatus.value === 'online' || employeeWorkStatus.value === 'pause') {
        counter.value = setInterval(() => {
          workTime.value += 1;
          formatWorkTime.value = workTimeHelper(workTime.value);
        }, 1000)
      }
    };

    const resetTime = () => {
      workTime.value = 0;
      formatWorkTime.value = workTimeHelper(workTime.value);
    }

onMounted(() =>{
  store.getWorkEntries();
  initCountWorkTime();
})

watch(employeeWorkStatus, () => {
  initCountWorkTime();
})

</script>


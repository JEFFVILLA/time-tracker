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
          <UserMenuApp :employee-full-name="employeeFullName" :work-status-employee="employeeWorkStatus" />
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
import UserMenuApp from './UserMenu.vue';
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
        if(employeeWorkTime.value){
          workTime.value = employeeWorkTime.value;
        }
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


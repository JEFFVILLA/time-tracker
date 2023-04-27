<template>
    <div class="mx-auto  px-4 py-8 sm:px-6 lg:px-8">
    <div class="flex items-center sm:justify-between sm:gap-4">
      <div class="relative hidden sm:block">
            <span class="text-xl">DashBoard</span>
      </div>

      <div
        class="flex flex-1 items-center justify-between gap-8 sm:justify-end"
      >
        <div class="group gap-3 flex shrink-0 items-center rounded-full transition p-4 bg-slate-200">
          <span>{{ workHours }}</span>
          <ButtonApp v-if="employeeWorkStatus === 'offline'" class="bg-emerald-500">Entrar</ButtonApp>
          <ButtonApp v-if="employeeWorkStatus === 'pause' || employeeWorkStatus === 'online'" class="bg-gray-400">Pausar</ButtonApp>
          <ButtonApp v-if="employeeWorkStatus === 'online'" class="bg-red-400">Salir</ButtonApp>
          <span
            aria-hidden="true"
            class="block h-8 w-px rounded-full bg-gray-500"
          ></span>
          <button
            type="button"
            class="group flex shrink-0 items-center transition"
          >
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-10 w-10 rounded-full object-cover"
            />
            <p class="ms-2 hidden text-left text-xs sm:block">
              <strong class="block font-medium text-black">{{employeeFullName}}</strong>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { WorkEntriesService } from '../../services/work-entries-endpoint';
import type { WorkEntries, Employee } from '../../models/work-entries.model';
import ButtonApp from '@/shared/components/Button.vue';
export default defineComponent({
    name: 'ToolbarApp',
    components: {
     ButtonApp
    },


    setup() {
        const workEntries =  ref<WorkEntries[]>([]) ;
        const employeeFullName = ref<string>(''); 
        const employeeWorkStatus = ref<string>('');
        const workHours = ref<number>(500);
        const getWorkEntries = async () => {
            try {
                const response = await WorkEntriesService.getWorkEntries();
                workEntries.value = response;
                getEmployeeName(workEntries.value[0].employee);
            } catch (error) {
                console.log(error);
            }
        };
        
        const getEmployeeName = async (employee: Employee) => {
            employeeFullName.value = `${employee.firstName} ${employee.lastName}`;
        };


        const getWorkStatusEmployee = async (employee: Employee) => {
            employeeWorkStatus.value = employee.workStatus;
        };

        onMounted(() => {
            getWorkEntries();
        });

        watch(workEntries, () => {
            getWorkStatusEmployee(workEntries.value[0].employee);
        });

        return {
            workEntries,
            employeeFullName,
            employeeWorkStatus,
            workHours
        };
    },
});


</script>
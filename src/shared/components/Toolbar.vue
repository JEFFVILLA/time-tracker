<template>
    <div>
        <h2>Soy un toolbar</h2>
        <span class="text-black">{{ employeeFullName }}</span>
        <span class="text-black">{{ employeeWorkStatus }}</span>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { WorkEntriesService } from '../../services/work-entries-endpoint';
import type { WorkEntries, Employee } from '../../models/work-entries.model';
export default defineComponent({
    name: 'ToolbarApp',

    setup() {
        const workEntries =  ref<WorkEntries[]>([]) ;
        const employeeFullName = ref<string>(''); 
        const employeeWorkStatus = ref<string>('');
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
            employeeWorkStatus
        };
    },
});


</script>
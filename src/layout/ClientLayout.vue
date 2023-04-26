<template>
    <div class="w-full h-full">
        <header>
            <ToolbarApp />
        </header>
        <main>
            <router-view />
        </main>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import sesameApiService from '@/services/axios-endpoint.js';
import ToolbarApp from '@/shared/components/Toolbar.vue';

export default defineComponent({
    name: 'ClientLayout',
    components: {
    ToolbarApp
  },
    setup() {
        let workEntries: never[] = [];
        const getApiData = async () => {
            try {
                const response = await sesameApiService.get("");
                workEntries = response.data;
                console.log(workEntries);
            } catch (error) {
                console.log(error);
            }
        };
        

        onMounted(() => {
            getApiData();
        });
    },
});

</script>

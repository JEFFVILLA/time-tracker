<template>
    <div class="w-full h-full">
        <div class="flex flex-row">
            <SidebarApp />
            <div class="flex flex-col flex-auto">
                <header class="flex-none">
                    <ToolbarApp />
                </header>
                <main class="flex-auto">
                    <router-view />
                </main>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ToolbarApp from '@/shared/components/Toolbar.vue';
import SidebarApp from '@/shared/components/Sidebar.vue';
export default defineComponent({
    name: 'ClientLayout',
    components: {
    ToolbarApp,
    SidebarApp
  },
});

</script>

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
import { defineComponent } from 'vue';
import ToolbarApp from '@/shared/components/Toolbar.vue';

export default defineComponent({
    name: 'ClientLayout',
    components: {
    ToolbarApp
  },
});

</script>

<template>

    <div class="flex w-full h-full justify-center items-center">
        <CardApp :name-component="'Home'" />
    </div>
    
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CardApp from '../shared/components/Card.vue';
export default defineComponent({
    name: 'HomeApp',
    components: {
      CardApp,
    },
});
</script>
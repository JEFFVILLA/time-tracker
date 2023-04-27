<template>
    <button
    type="button"
    class="flex shrink-0 px-8 py-2 rounded-full text-sm font-medium text-white focus:outline-none"
    >
    <slot/>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ButtonApp',
});

</script>
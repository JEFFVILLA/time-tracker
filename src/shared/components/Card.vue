<template>
    <a href="#" class="relative block overflow-hidden rounded-lg border border-gray-300 p-4 sm:p-6 lg:p-8">
        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    {{ $t("card.header", {name: nameComponent}) }}
                </h3>

                <p class="mt-1 text-xs font-medium text-gray-600">{{ $t("card.created_by") }}</p>
            </div>

            <div class="hidden sm:block sm:shrink-0">
                <img alt="Paul Clapton" src="../../assets/img/imgjeff.png"
                    class="h-16 w-16 rounded-lg object-cover shadow-sm" />
            </div>
        </div>

        <div class="mt-4">
            <p class="max-w-[40ch] text-sm text-gray-500">
                {{ $t("card.work") }}
            </p>
        </div>
    </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'CardApp',
    props: ['nameComponent'],
 
});
</script>
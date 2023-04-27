<template>

    <div class="flex w-full h-full justify-center items-center">
        <a href="#" class="relative block overflow-hidden rounded-lg border border-gray-300 p-4 sm:p-6 lg:p-8">
        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    Hola soy un Home component
                </h3>

                <p class="mt-1 text-xs font-medium text-gray-600">By Jeffri Villacreses</p>
            </div>

            <div class="hidden sm:block sm:shrink-0">
                <img alt="Paul Clapton"
                    src="../assets/img/imgjeff.png"
                    class="h-16 w-16 rounded-lg object-cover shadow-sm" />
            </div>
        </div>

        <div class="mt-4">
            <p class="max-w-[40ch] text-sm text-gray-500">
                Trabajo realizado con las siguiente herramientas y con el &#128153;:
                Vue 3, Vue Router, TaildWindCSS, Typescript, Pinia. Coming soon....
            </p>
            

                    
        </div>
    </a>
    </div>
    
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'HomeApp',
});
</script>
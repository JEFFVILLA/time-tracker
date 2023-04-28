<template>
    <div class="flex h-screen w-16 flex-col justify-between border-e bg-white">
        <div>
            <div class="inline-flex h-16 w-16 items-center justify-center">
                <span class="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                    LOGO
                </span>
            </div>

            <div class="border-t border-gray-300">
                <nav aria-label="Main Side" class="flex flex-col p-2">
                    <ul class="space-y-1 pt-4">
                        <li>
                            <router-link to="/"
                                class="group relative flex justify-center rounded px-2 py-1.5 text-black hover:bg-gray-50 hover:text-gray-700">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Rounded" transform="translate(-816.000000, -289.000000)">
                                            <g id="Action" transform="translate(100.000000, 100.000000)">
                                                <g id="-Round-/-Action-/-home"
                                                    transform="translate(714.000000, 186.000000)">
                                                    <g transform="translate(0.000000, 0.000000)">
                                                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                                        <path
                                                            d="M10,19 L10,14 L14,14 L14,19 C14,19.55 14.45,20 15,20 L18,20 C18.55,20 19,19.55 19,19 L19,12 L20.7,12 C21.16,12 21.38,11.43 21.03,11.13 L12.67,3.6 C12.29,3.26 11.71,3.26 11.33,3.6 L2.97,11.13 C2.63,11.43 2.84,12 3.3,12 L5,12 L5,19 C5,19.55 5.45,20 6,20 L9,20 C9.55,20 10,19.55 10,19 Z"
                                                            id="🔹Icon-Color" fill="#1D1D1D"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span
                                    class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                                    {{ $t("nav.home") }}
                                </span>
                            </router-link>
                        </li>

                        <li>
                            <router-link to="/about"
                                class="group relative flex justify-center items-center rounded px-2 py-1.5 text-black hover:bg-gray-50 hover:text-gray-700">
                                <svg class="h-6 w-6" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/"
                                    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                    <g id="Icon">
                                        <g>
                                            <path
                                                d="M12,1.25c-5.933,0 -10.75,4.817 -10.75,10.75c0,5.933 4.817,10.75 10.75,10.75c5.933,0 10.75,-4.817 10.75,-10.75c0,-5.933 -4.817,-10.75 -10.75,-10.75Zm-0,8.75c-0.398,0 -0.779,0.158 -1.061,0.439c-0.281,0.282 -0.439,0.663 -0.439,1.061c0,1.888 0,4.612 0,6.5c-0,0.398 0.158,0.779 0.439,1.061c0.282,0.281 0.663,0.439 1.061,0.439c0.398,-0 0.779,-0.158 1.061,-0.439c0.281,-0.282 0.439,-0.663 0.439,-1.061c0,-1.888 0,-4.612 0,-6.5c0,-0.398 -0.158,-0.779 -0.439,-1.061c-0.282,-0.281 -0.663,-0.439 -1.061,-0.439Zm0,-5.75c0.966,0 1.75,0.784 1.75,1.75c0,0.966 -0.784,1.75 -1.75,1.75c-0.966,0 -1.75,-0.784 -1.75,-1.75c0,-0.966 0.784,-1.75 1.75,-1.75Z" />
                                        </g>
                                    </g>
                                </svg>

                                <span
                                    class="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                                    {{ $t("nav.about") }}
                                </span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SidebarApp',
});
</script>
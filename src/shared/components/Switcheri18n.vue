<template>
    <select @change="switchLanguage">
        <option v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale"
            :selected="locale === sLocale">
            {{ t(`locale.${sLocale}`) }}
        </option>
    </select>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n'
import Tr from "@/i18n/translation"

export default {
    name: 'Switcheri18nApp',
    setup() {
        const { t, locale } = useI18n()
        const supportedLocales = Tr.supportedLocales

        const switchLanguage = async (event: any) => { // <--- 1
            const newLocale = event.target.value // <--- 2
            await Tr.switchLanguage(newLocale) // <--- 3
        }
        return { t, locale, supportedLocales, switchLanguage }
    },

}
</script>
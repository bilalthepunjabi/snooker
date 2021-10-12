<template>
    <a href="#" class="inline-flex items-center p-1 text-white bg-purple-500 rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
        <span :class="'px-4 ' + (theme === 'sun' ? 'text-white text-xs font-semibold leading-5 uppercase tracking-wide rounded-full bg-purple-600' : '')"><SunIcon class="w-5" @click="sun()"/></span>
        <span :class="''+ (theme === 'moon' ? ' text-black text-xs font-semibold leading-5 uppercase tracking-wide rounded-full bg-white' : '')"><MoonIcon class="w-5" @click="moon()"/></span>
    </a>
</template>

<script>
import { SunIcon,MoonIcon } from '@heroicons/vue/outline'

export default {
    name: "theme-switcher",
    components: {
        SunIcon,
        MoonIcon
    },
    props : [
        'id'
    ],
    data(){
        return {
            theme : 'sun'
        }
    },
    methods: { 
        sun(){
        this.theme = 'sun'
        document.getElementById(this.$props.id).classList.remove('dark');
        },
        moon(){
        this.theme = 'moon'
        document.getElementById(this.$props.id).classList.add('dark');
        }
    },
    setup() {
        return {

        }
    },
}
</script>
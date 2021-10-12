<template>
  <div class="flex flex-col min-h-screen bg-purple-700 dark:bg-gray-900">
    <main class="flex-grow">
      <div class="grid grid-cols-5">
        <div class="col-span-4"></div>
        <div>
          <div class="relative">
            <theme-switcher class="" id="app"/>
          </div>
        <div class="overflow-y-scroll border border-t-0 border-b-0 border-l-2 border-r-0 no-scrollbar">  
          <div v-for="n in ['bg-white','bg-red-600','bg-yellow-500','bg-green-500','bg-yellow-900','bg-blue-500','bg-pink-500','bg-black']" :key="n" class="relative mb-1">
            <span :class="'block w-16 h-16 mx-auto rounded-full '+n"></span>
          </div>
        </div>
        </div>
      </div>
    </main>
    <footer class="flex flex-row items-center h-20 px-2 space-x-2 overflow-x-scroll border border-t-2 border-b-0 border-l-0 border-r-0 no-scrollbar">
      <div v-for="n in 10" :key="n" class="relative flex-shrink-0 inline-block">
        <span>
          <img class="w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          <span class="absolute top-0 right-0 block w-4 h-4 bg-green-400 rounded-full ring-2 ring-white"></span>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data(){
    return {
      
    }
  },
  mounted(){
    // console.warn(this.$store.default_store.hasModule('api'))
    // this.$store.main.dispatch('api/authin',{email:"bilal_punjabi@hotmail.com",password:"123456789"}).then((res)=>{
    //   console.log(res);
    // })
  },
  methods: { 
    
  },
  setup() {
    return {
      
    }
  },
}
</script>
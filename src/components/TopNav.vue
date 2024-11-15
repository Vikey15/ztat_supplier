<template>
    <div class="p-2 flex bg-white items-center justify-between">
      <div class="flex justify-center items-center m-1">
      <button 
        @click="toggleSideMenu" 
        type="button" 
        class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-full
         hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
        aria-expanded="false">
        <Icon icon="ph:list-bold" width="1.5em" height="1.5em" />
      </button>
      <img v-if="true" src="../assets/images/logoWithNamePrimary.png" class="h-10 m-1"/>
      </div>

      <div class="flex justify-center items-center m-1">
      <Icon icon="fluent:alert-48-regular" width="1.5em" height="1.5em" class="text-gray-500 cursor-pointer"/>
      <hr class="rotate-90 w-5 text-gray-400" />
      <Icon @click="this.$router.replace({ name: 'profile' });" icon="iconoir:profile-circle" width="1.5em" height="1.5em" class="text-gray-500 cursor-pointer"/>
      </div>

    </div>
</template>

<script>
import { Icon } from '@iconify/vue/dist/iconify.js';
export default {
  name: 'TopNav',
  data() {
    return {
      isSideMenuActive: false,
      logoVisibility:true,
    };
  },
  components:{
    Icon
  },
  methods: {
    toggleSideMenu() {
      this.isSideMenuActive = !this.isSideMenuActive;
      this.$emit('sideMenu-visibility', this.isSideMenuActive);
    },
  },
};
</script>

<style>
/* Add any additional styles if needed */
</style>

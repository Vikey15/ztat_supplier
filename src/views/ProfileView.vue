<template>
    <div class="min-h-screen flex flex-row bg-gray-100 ">
        <SideMenuNew :is-active="sideMenu"/>
        <div :class="['flex-col','flex-grow']">
            <TopNav @sideMenu-visibility="handleUpdateBoolean" />
            <div class="mx-3 mt-3 p-2 bg-white rounded-3xl">

    
    <div class="bg-gray-100 shadow rounded-lg overflow-hidden">
      <div class="relative m-2 md:m-5">
        <img src="../assets/images/vegetableInbag.jpg" alt="Background" class="w-full h-30 md:h-56 object-cover rounded-lg">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
          <h1 class="text-3xl text-white font-bold text-center">Our values are the compass <br/> that guides our journey</h1>
          <div class="absolute -bottom-4 mx-auto flex items-center justify-between bg-white p-2 rounded-3xl">
            <h3 class="bg-white text-primary-dark px-4 py-2 font-bold ">5 years experience</h3>
            <hr class="rotate-90 w-5 text-gray-400" />
            <Icon icon="emojione:flag-for-qatar" width="1.5em" height="1.5em" />
            <h5 class="bg-white text-primary-dark px-4 py-2 font-medium">Qatar</h5>
          </div>
        </div>
      </div>
      <div class="my-6 mx-2">
        <p class="text-gray-700 font-medium text-center">
          At Al Kabeer, our values are the compass that guides our journey in the frozen food industry.
          <br/>
          With an unwavering commitment to quality and excellence, we prioritize customer satisfaction
          and ethical integrity in everything we do.
        </p>
        </div>

        <div class="m-2.5 space-y-4 flex flex-col 
        lg:space-y-0 lg:flex-row lg:space-x-4 lg:justify-center lg:items-center">
          <div class="w-full flex justify-between items-center p-4 rounded-lg bg-gray-700">
            <div class="flex justify-between items-center">
              <img src="../assets/images/milkImg.jpg" class="object-cover w-12 h-12 rounded-lg"/>
              <h3 class="text-white p-2">Certificate</h3>
            </div>
            <div class="flex justify-between items-center">
              <Icon icon="mdi-light:eye" width="1.5em" height="1.5em" class="text-white" />
              <h3 class="text-white m-1">View</h3>
            </div>

          </div>
          <div class="w-full flex justify-between items-center p-4 rounded-lg bg-gray-700">
            <div class="flex justify-between items-center">
              <img src="../assets/images/milkImg.jpg" class="object-cover w-12 h-12 rounded-lg"/>
              <h3 class="text-white p-2">Case study</h3>
            </div>
            <div class="flex justify-between items-center">
              <Icon icon="mdi-light:eye" width="1.5em" height="1.5em" class="text-white" />
              <h3 class="text-white m-1">View</h3>
            </div>

          </div>
          <div class="w-full flex justify-between items-center p-4 rounded-lg bg-gray-700">
            <div class="flex justify-between items-center">
              <img src="../assets/images/milkImg.jpg" class="object-cover w-12 h-12 rounded-lg"/>
              <h3 class="text-white p-2">Who we Work With</h3>
            </div>
            <div class="flex justify-between items-center">
              <Icon icon="mdi-light:eye" width="1.5em" height="1.5em" class="text-white" />
              <h3 class="text-white m-1">View</h3>
            </div>

          </div>
        </div>
      </div>


            </div>

                </div>
                </div>
</template>

<script>
import SideMenuNew from '../components/SideMenuNew.vue';
import TopNav from '../components/TopNav.vue';
import { Icon } from '@iconify/vue';
export default {
    name: 'profile',
    components: {
        TopNav,
        SideMenuNew,
        Icon,
    },
    data() {
        return {
            sideMenu: false,
        }
    },
    methods: {
        handleUpdateBoolean(newValue) {
            this.sideMenu = newValue;
        },
    },
    
}
</script>
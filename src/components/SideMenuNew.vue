<template>
    <div v-if="sideBar"
        :class="['min-h-screen', 'flex', 'flex-col', 'w-56',
         'bg-white', this.$i18n.locale === 'ar' ? 'rounded-l-3xl' : 'rounded-r-3xl',
         'overflow-hidden','z-50','fixed',
          'top-0', 'left-0',
         'xl:z-0','xl:relative','xl:h-auto','2xl:z-0','2xl:relative','2xl:h-auto']">
        <div class="flex items-center justify-start">
            <img v-if="$i18n.locale === 'en'" src="../assets/images/logoEngPrimary.png" alt="brandLogo"
                class="h-32 w-32 ml-4" />
            <img v-if="$i18n.locale === 'ar'" src="../assets/images/logoArbPrimary.png" alt="brandLogo"
                class="h-32 w-32 mr-4" />
            <button @click="toggleSidebar" class="text-gray-200 hover:text-gray-800">
                <Icon icon="line-md:close-circle-filled" width="1.5em" height="1.5em" />
            </button>
        </div>
        
        <ul class="flex flex-col cursor-pointer">
            <!-- <li class="flex justify-center items-center mb-4">
                <CustomFlagDropDown />
            </li> -->
            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg" @click="this.$router.replace({ name: 'dashboard' });">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="mingcute:home-6-fill" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">Dashboard</span>
                </a>
            </li>
            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="mdi-light:cart" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">Orders</span>
                </a>
            </li>
            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="uis:bag" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">Stocks</span>
                </a>
            </li>
            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="hugeicons:truck-return" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">Returns</span>
                </a>
            </li>
            <hr class="h-4">
            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="solar:logout-2-outline" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">{{ $t('logout') }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import CustomFlagDropDown from './CustomFlagDropDown.vue';
import { Icon } from '@iconify/vue';

export default {
    data() {
        return {
            time: '',
            sideBar:false,
        };
    },
    props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
    components: {
        CustomFlagDropDown,
        Icon
    },
    methods: {
        toggleSidebar(){
            this.sideBar=false
        },
        updateTimeOfDay() {
            const currentHour = new Date().getHours();
            console.log("CurrentHour", currentHour);
            if (currentHour >= 5 && currentHour < 12) {
                this.time = this.$t('goodMorning');
            } else if (currentHour >= 12 && currentHour < 17) {
                this.time = this.$t('goodAfternoon');
            } else if (currentHour >= 17 && currentHour < 21) {
                this.time = this.$t('goodEvening');
            } else {
                this.time = this.$t('goodMorning');
            }
        },
    },
    watch: {
        '$i18n.locale'() {
            this.updateTimeOfDay();
        },
        isActive(oldVal,newVal){
            this.sideBar=!this.sideBar
        }

    },
    mounted() {
        this.updateTimeOfDay();
    },
}
</script>
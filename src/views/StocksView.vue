<template>
    <div class="min-h-screen flex flex-row bg-gray-50">
        <SideMenuNew :is-active="sideMenu" />
        <div :class="['flex-col', 'flex-grow']">
            <TopNav @sideMenu-visibility="handleUpdateBoolean" />
            <div class="m-3">
                <div class="flex flex-col space-y-3
                md:flex-row md:space-y-0 md:justify-between
                lg:flex-row lg:space-y-0 lg:justify-between">
                    <div class="md:w-1/3 lg:w-1/3 items-center">
                    <CustomDropDown :options="dateFilter"/>
                </div>
                    <button class="p-3 text-white bg-primary-dark rounded-full "
                        @click="this.$router.replace({ name: 'addNewProduct' });">+ Add products</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomDropDown from '../components/CustomDropDown.vue';
import SideMenuNew from '../components/SideMenuNew.vue';
import TopNav from '../components/TopNav.vue';
import { Icon } from '@iconify/vue';

export default {
    name: 'StocksView',
    components: {
        TopNav,
        SideMenuNew,
        Icon,
        CustomDropDown
    },
    data() {
        return {
            sideMenu: false,
            dateFilter:['Last stock updated']
        }
    },
    methods: {
        handleUpdateBoolean(newValue) {
            this.sideMenu = newValue;
        },
    },
}
</script>

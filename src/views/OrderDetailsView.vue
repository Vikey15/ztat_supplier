<template>
    <div class="min-h-screen flex flex-row bg-gray-50">
        <SideMenuNew :is-active="sideMenu" />
        <div :class="['flex-col', 'flex-grow']">
            <TopNav @sideMenu-visibility="handleUpdateBoolean" />
            <div class="m-3">
                <h3 class="text-3xl font-extrabold">Return Details</h3>
                <div class="flex justify-between my-5">
                    <div
                    class="flex items-center bg-white rounded-lg font-semibold p-4 text-gray-400 border">
                        <Icon icon="mingcute:left-line" width="1.5em" height="1.5em" class="m-1"/>
                        <h3 class="font-semibold text-gray-400">Return Details</h3>
                    </div>
                    <div
                        class="flex items-center bg-white rounded-lg font-semibold p-4 text-gray-400 border">
                        <Icon icon="mingcute:print-line" width="1.5em" height="1.5em" class="m-1"/>
                        <h3 class="font-semibold text-gray-400">Print Order</h3>
                    </div>
                </div>

                <div id="parent" class="flex flex-col">
                    <div class="flex flex-col bg-white rounded-lg p-3 space-y-2">
                        <div class="flex justify-start items-center space-x-2 p-2 m-2">
                            <img src="../assets/images/pendingIcon.png" />
                            <h3 class="text-secondary-light">Pending</h3>
                        </div>

                        <div class="bg-gray-50 rounded-xl space-y-2 p-2 m-2">
                            <div class="flex justify-between">
                                <h3 class="font-bold">Chieko Chute</h3>
                                <h3 class="font-medium">Date</h3>
                                <h3 class="font-semibold">QAR 210.98</h3>
                            </div>
                            <div class="flex justify-between">
                                <h3 class="text-primary-dark font-bold">ORD-20241025</h3>
                                <h3 class="text-gray-400">11-04-2024</h3>
                                <h3 class="text-gray-400">Qty: 1</h3>
                            </div>
                        </div>

                        <hr class="bg-gray-400"  />
                        <button class="p-3 m-3 text-primary-dark border border-primary-dark rounded-lg font-bold">
                            Mark as in Progress
                        </button>
                    </div>

                    <div>


                    </div>

                    <div>


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
    name: 'OrderDetails',
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
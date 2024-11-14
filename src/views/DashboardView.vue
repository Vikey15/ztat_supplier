<template>
<div class="min-h-screen flex flex-row bg-gray-100 ">
        <SideMenuNew :is-active="sideMenu"/>
        <div :class="['flex-col','flex-grow']">
            <TopNav @sideMenu-visibility="handleUpdateBoolean" />
            <div class="mx-3 mt-3 p-2 bg-white rounded-3xl">

                <div class="flex justify-between items-center">
                    <h3 class="text-primary-dark font-bold text-xl m-4">Dashboard</h3>
                    <div class="flex justify-center items-center space-x-2">
                        <Icon icon="line-md:calendar" width="3em" height="3em" class="text-primary-dark"/>
                        <CustomDropDown/>
                        <button>
                            <Icon icon="solar:refresh-bold-duotone" width="1.5em" height="1.5em" />
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 xl:grid-cols-4 space-x-1 space-y-1">

                    <div class="bg-gray-100 rounded-xl flex flex-col mt-1 ml-1 space-y-1">
                        <h6 class="font-semibold p-2">Total Sale Amount</h6>
                        <hr class="bg-gray-500"/>
                        <div class="flex justify-between items-center lg:min-h-20 xl:min-h-20">
                            <h1 class="font-extrabold p-2 text-2xl">QAR 8,245.00 </h1>
                            <Icon icon="hugeicons:coins-01" width="1.5em" height="1.5em" class="text-primary-dark"/>
                        </div>
                        

                    </div>

                    <div class="bg-gray-100 rounded-xl flex flex-col space-y-1">
                        <h6 class="font-semibold p-2">Total Order</h6>
                        <hr class="bg-gray-500"/>
                        <div class="flex justify-between items-center lg:min-h-20 xl:min-h-20">
                            <h1 class="font-extrabold p-2 text-2xl">1223</h1>
                            <Icon icon="solar:refresh-bold-duotone" width="1.5em" height="1.5em" class="text-primary-dark"/>
                        </div>
                        

                    </div>

                    <div class="bg-gray-100 rounded-xl flex flex-col space-y-1">
                        <h6 class="font-semibold p-2">Average Sales</h6>
                        <hr class="bg-gray-500"/>
                        <div class="flex justify-between items-center lg:min-h-20 xl:min-h-20">
                            <h1 class="font-extrabold p-2 text-2xl">QAR 421.00</h1>
                            <Icon icon="solar:refresh-bold-duotone" width="1.5em" height="1.5em" class="text-primary-dark"/>
                        </div>
                        

                    </div>

                    <div class="bg-gray-100 rounded-xl flex flex-col space-y-1">
                        <h6 class="font-semibold p-2">Pending Orders</h6>
                        <hr class="bg-gray-500"/>
                        <div class="flex justify-between items-center lg:min-h-20 xl:min-h-20">
                            <h1 class="font-extrabold p-2 text-2xl">565K</h1> 
                            <Icon icon="solar:refresh-bold-duotone" width="1.5em" height="1.5em" class="text-primary-dark"/>
                        </div>
                    </div>

                </div>

                <div class="flex flex-col mt-3 
                space-y-3
                md:flex-row md:space-x-2 md:space-y-0 lg:space-x-2 lg:space-y-0 
                xl:justify-between xl:space-y-0">

                    <div class="bg-gray-100 rounded-xl flex flex-col space-y-1 p-3">
                        <div class="flex justify-between items-center m-2">
                            <h3 class="font-extrabold text-2xl">Sales by Top Category</h3>
                            <CustomDropDown/>
                        </div> 
                    </div>

                    <div class="bg-gray-100 rounded-xl flex flex-col space-y-1 p-3 md:w-1/2 lg:w1/2 xl:w-1/2">
                        <div class="flex justify-between items-center m-2">
                            <h3 class="font-extrabold text-2xl">Pending Orders</h3>
                            <!-- Switch area -->
                        </div>
                        <div class="flex flex-col space-y-1">
                            <div class="bg-gray-300 flex justify-between items-center  rounded-2xl">
                                <h4 class="text-primary-dark font-bold p-3">ORD-20241025</h4>
                                <h4 class="font-medium">John Doe</h4>
                                <h4 class="text-gray-500 m-3">Qty:556</h4>
                            </div>
                            <div class="bg-gray-300 flex justify-between items-center  rounded-2xl">
                                <h4 class="text-primary-dark font-bold p-3">ORD-20241025</h4>
                                <h4 class="font-medium">John Doe</h4>
                                <h4 class="text-gray-500 m-3">Qty:556</h4>
                            </div>
                            <div class="bg-gray-300 flex justify-between items-center  rounded-2xl">
                                <h4 class="text-primary-dark font-bold p-3">ORD-20241025</h4>
                                <h4 class="font-medium">John Doe</h4>
                                <h4 class="text-gray-500 m-3">Qty:556</h4>
                            </div>
                            <div class="bg-gray-300 flex justify-between items-center  rounded-2xl">
                                <h4 class="text-primary-dark font-bold p-3">ORD-20241025</h4>
                                <h4 class="font-medium">John Doe</h4>
                                <h4 class="text-gray-500 m-3">Qty:556</h4>
                            </div>
                        </div>

                        <div class="flex justify-between items-center"> 
                            <div class="flex justify-between space-x-2">
                                <h4 class="text-gray-400 pl-2">Total</h4>
                                <h1 class="text-2xl">121</h1>
                            </div>
                            <button class="py-1 px-6 m-3 text-white bg-primary-dark rounded-2xl">View All</button>
                        </div>
                    </div>

                    <div class="bg-gray-100 rounded-xl flex flex-col space-y-1 p-3 ">
                            <h3 class="font-extrabold text-2xl m-2">Recent Sales</h3>
                            <div class="flex flex-col mt-3 space-y-3">
                                <div class="flex space-x-4">
                                    <img src="../assets/images/milkImg.jpg" class="h-20 w-20 rounded-xl">
                                    <div class="flex flex-col justify-center">
                                        <h2 class="text-lg font-bold">Puck Cream Cheese</h2>
                                        <div class="flex space-x-3">
                                            <h3 class="text-orange-400">QAR 400.98</h3>
                                            
                                            <h3 class="text-gray-400">April 29,2022</h3>
                                        </div>
                                    </div>
                                </div>
                                <hr class="bg-gray-500"/>
                                <div class="flex space-x-4">
                                    <img src="../assets/images/milkImg.jpg" class="h-20 w-20 rounded-xl">
                                    <div class="flex flex-col justify-center">
                                        <h2 class="text-lg font-bold">Puck Cream Cheese</h2>
                                        <div class="flex space-x-3">
                                            <h3 class="text-orange-400">QAR 400.98</h3>
                                            
                                            <h3 class="text-gray-400">April 29,2022</h3>
                                        </div>
                                    </div>
                                </div>
                                <hr class="bg-gray-500"/>
                                <div class="flex space-x-4">
                                    <img src="../assets/images/milkImg.jpg" class="h-20 w-20 rounded-xl">
                                    <div class="flex flex-col justify-center">
                                        <h2 class="text-lg font-bold">Puck Cream Cheese</h2>
                                        <div class="flex space-x-3">
                                            <h3 class="text-orange-400">QAR 400.98</h3>
                                            
                                            <h3 class="text-gray-400">April 29,2022</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

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
export default{
    name: 'DashboardView',
    components: {
        TopNav,
        SideMenuNew,
        Icon,
        CustomDropDown
    },
    data()
    {
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

<style>

</style>
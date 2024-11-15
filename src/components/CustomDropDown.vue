<template>
    <div class="relative w-full">
        <div class="border rounded-3xl p-3 cursor-pointer bg-gray-50" @click="toggleDropdown"
            :class="dropdownInputBgColor">
            <span>{{ selectedOption ? selectedOption : 'Select' }}</span>
            <Icon class="float-right" icon="mingcute:down-line" width="1.5em" height="1.5em" />

        </div>
        <transition name="fade" mode="out-in">
            <ul v-if="isOpen" class="absolute mt-1 border rounded-md shadow-lg w-full max-h-40 overflow-auto z-10"
                :class="dropdownListBgColor">
                <li v-for="(option, index) in options" :key="index" class="p-2 hover:bg-gray-200 cursor-pointer"
                    :class="dropdownTextColor" @click="selectOption(option)">
                    {{ option }}
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    data() {
        return {
            isOpen: false,
            selectedOption: null,
            // Dummy data for options
            // options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
            // Customizable class names for different background colors
            dropdownInputBgColor: 'bg-white', // Change this to customize input background color
            dropdownListBgColor: 'bg-white', // Change this to customize list background color
            dropdownTextColor: 'text-black', // Change this to customize text color
        };
    },
    props:{
        options:{
            
        }
    },
    components: {
        Icon
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.isOpen = false;
        },
        handleClickOutside(event) {
            if (this.isOpen && !this.$el.contains(event.target)) {
                this.isOpen = false;
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}

/* Custom scrollbar styles */
ul::-webkit-scrollbar {
    width: 8px;
    background-color: #f1f1f1;
    /* Scrollbar background color */
}

ul::-webkit-scrollbar-thumb {
    background-color: #660033;
    /* Scrollbar thumb color */
    border-radius: 4px;
    /* Rounded corners */
}

ul::-webkit-scrollbar-thumb:hover {
    background-color: #660033;
    /* Darker color on hover */
}
</style>
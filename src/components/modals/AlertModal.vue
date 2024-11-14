<template>
    <transition name="fade">
        <div v-if="show"
            :class="[backgroundClass, 'border-t-4 rounded-b px-4 py-3 shadow-md fixed top-4 right-4 z-50']"
            role="alert" style="margin: 0px;">
            <div class="flex items-center justify-between space-x-2" :style="{ direction: 'ltr' }">
                <div >
                    <Icon :icon="iconName" width="2em" height="2em" />
                </div>
                <div>
                    <p class="font-bold">{{ message }}</p>
                    <p class="text-sm">{{ description }}</p>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    data() {
        return {
            visible: false,
            iconName: "",
            backgroundClass: "",
        }
    },
    components: {
        Icon,
    },
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        // iconName:{
        //     type:String,
        //     required:true
        // },
        severity: {
            type: String,
            required: true,
            validator(value) {
                return ['error', 'warning', 'success', 'info'].includes(value);
            },
        },

    },
    computed: {
        backgroundClass() {
            switch (this.severity) {
                case 'error':
                    this.iconName = "codicon:error"
                    return 'bg-red-100 border-red-500 text-red-900';
                case 'warning':
                    this.iconName = "solar:danger-circle-linear"
                    return 'bg-yellow-100 border-yellow-500 text-yellow-900';
                case 'success':
                    this.iconName = "ep:success-filled"
                    return 'bg-green-100 border-green-500 text-green-900';
                case 'info':
                    this.iconName = "si:info-duotone"
                    return 'bg-blue-100 border-blue-500 text-blue-900';
                default:
                    this.iconName = "si:info-duotone"
                    return 'bg-blue-100 border-blue-500 text-blue-900';
            }
        },
    },
}
</script>

<style>
/* Transition for fading effect */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}

/* Fixed positioning for alert in the top-right corner */
.fixed {
    position: fixed;
}

.top-4 {
    top: 1rem;
    /* Adjust as needed */
}

.right-4 {
    right: 1rem;
    /* Adjust as needed */
}
</style>
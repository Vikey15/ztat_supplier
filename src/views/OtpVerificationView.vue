<template>
    <div :class="`${rtlClass} p-4 space-y-10`">
        <div class="flex justify-start items-center">
      <CustomFlagDropDown />
    </div>
      <div class="flex justify-center">
        <div class="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-4 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2">
          <header>
            <div class="flex justify-center mx-auto">
          <img v-if="$i18n.locale === 'en'" src="../assets/images/logoEngPrimary.png" alt="brandLogo"
            class="h-32 w-32" />
          <img v-if="$i18n.locale === 'ar'" src="../assets/images/logoArbPrimary.png" alt="brandLogo"
            class="h-32 w-32" />

        </div>
            <h1 class="block text-2xl font-bold text-primary-dark dark:text-white">{{ $t('emailVerification') }}</h1>
            <p class="flex justify-center m-2 text-lg text-gray-600 dark:text-gray-400">{{ $t('enterCode') }}</p>
          </header>
          <p class="text-center my-5 font-semibold text-xl">e...e@domain.com</p>
          <form @submit.prevent="handleSubmit" ref="otpForm">
            <div class="flex items-center justify-center gap-3">
              <input
              :id="OtpVerificationIds.otpInput"
                v-for="(input, index) in otpInputs"
                :key="index"
                type="text"
                class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxlength="1"
                v-model="otpInputs[index]"
                @input="handleInput(index)"
                @keydown="handleKeyDown($event, index)"
                @focus="handleFocus"
                @paste="handlePaste"
                ref="otpInputs"
              />
            </div>
            <p class="flex justify-center m-2 text-lg text-gray-600 dark:text-gray-400">
            {{ $t('didntReceiveCode') }} 
            <a class="mx-2 text-primary-dark decoration-2 hover:underline font-medium">
                {{ $t('resend') }}</a>
          </p>
            <div class="max-w-[260px] mx-auto mt-4">
              <button ref="submitButton" type="submit" :id="OtpVerificationIds.otpVerifyBtn"
                      class="w-full py-3 px-6 text-xl font-bold tracking-wider 
                             rounded-full text-white bg-button-dark hover:bg-button-darkHover
                             focus:outline-none">
                             {{ $t('verify') }}
              </button>
            </div>
          </form>
         
        </div>
      </div>
     
    </div>
    <AlertModal :show="alertvisibility" :message="alertMessage" :description="alertDescription"
    :severity="alertSeverity" />
  </template>
  
  <script>
import CustomFlagDropDown from '../components/CustomFlagDropDown.vue';
import AlertModal from '../components/modals/AlertModal.vue';
import { OtpVerificationIds } from '../automationTestingIds';
  export default {
    data() {
      return {
        otpInputs: ['', '', '', ''] ,
        alertvisibility: false,
      alertMessage: "",
      alertDescription: "",
      alertSeverity: "",
      OtpVerificationIds
      };
    },
    components:{
        CustomFlagDropDown,
        AlertModal
    },
    methods: {
      handleSubmit() {
        console.log('OTP Submitted:', this.otpInputs.join(''));
        this.$router.replace({ name: 'passwordReset' }) //For testing
      //   if(this.otpInputs.join('') < 1000)
      // {
      //   this.alertvisibility = true,
      //     this.alertMessage = this.$t('error');
      //     this.alertDescription = this.$t('enter4DigitCode');
      //     this.alertSeverity = "error",
      //     setTimeout(() => {
      //       this.alertvisibility = false;
      //     }, 2000);
      // }
      
      },
      handleInput(index) {
        // Move to the next input if the current input has a value
        if (this.otpInputs[index] && index < this.otpInputs.length - 1) {
          this.$refs.otpInputs[index + 1].focus();
        } else if (index === this.otpInputs.length - 1) {
          this.$refs.submitButton.focus();
        }
      },
      handleKeyDown(event, index) {
        if (!/^[0-9]$/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
          event.preventDefault();
        }
  
        if (event.key === 'Backspace') {
          if (this.otpInputs[index] === '' && index > 0) {
            this.$refs.otpInputs[index - 1].focus();
            this.otpInputs[index - 1] = ''; // Clear previous input on backspace
          } else {
            this.otpInputs[index] = ''; // Clear current input
          }
        }
      },
      handleFocus(event) {
        event.target.select();
      },
      handlePaste(event) {
        event.preventDefault();
        const text = event.clipboardData.getData('text').slice(0, this.otpInputs.length);
        if (/^\d+$/.test(text)) {
          text.split('').forEach((digit, i) => {
            this.otpInputs[i] = digit;
          });
          this.$refs.submitButton.focus();
        }
      }
    }
  };
  </script>
  
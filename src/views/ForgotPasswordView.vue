<template>
<div :class="`${rtlClass} p-4`">
  <div class="flex justify-start items-center">
      <CustomFlagDropDown />
    </div>

    <div class="flex justify-center">
    <div class="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2">
      <div class="p-4 sm:p-7">
        <div class="flex justify-center mx-auto">
          <img v-if="$i18n.locale === 'en'" src="../assets/images/logoEngPrimary.png" alt="brandLogo"
            class="h-32 w-32" />
          <img v-if="$i18n.locale === 'ar'" src="../assets/images/logoArbPrimary.png" alt="brandLogo"
            class="h-32 w-32" />

        </div>
        <div class="text-center">
          
          <h1 class="block text-2xl font-bold text-primary-dark dark:text-white">{{ $t('resetPassword') }}</h1>
          <p class="flex justify-center m-2 text-lg text-gray-600 dark:text-gray-400">
            {{ $t('emailSentText') }}</p>
          
        </div>

        <div class="mt-5">
          <form>
            <div class="grid gap-y-4">
                <div>
                <label class="text-gray-800 text-lg block mb-2">{{ $t('email') }}</label>
                <div class="relative flex items-center">
                  <input v-model="email" name="email" type="text" required
                    :id="ForgotPasswordIds.forgotPassEmail" class="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                    :placeholder="$t('enterEmail')" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" :class="[
                    'w-[18px]',
                    'h-[18px]',
                    'absolute',
                    this.$i18n.locale === 'ar' ? 'left-2' : 'right-2',
                    'cursor-pointer'
                  ]" viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" stroke-miterlimit="10" stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <p class="flex justify-center m-2 text-lg text-gray-600 dark:text-gray-400">
            {{ $t('rememberYourPassword') }}
            <a :id="ForgotPasswordIds.loginHere" class="mx-2 text-primary-dark decoration-2 hover:underline font-medium" href="#" @click="this.$router.replace({ name: 'login' });">
              {{$t('loginHere')}}
            </a>
          </p>
               <button @click="resetPassword" type="button"
                  :id="ForgotPasswordIds.resetPassBtn" class="w-full py-3 px-6 text-xl font-bold tracking-wider 
                  rounded-full text-white bg-button-dark hover:bg-button-darkHover
                  focus:outline-none">
                  {{ $t('continue') }}
                </button>
            </div>
          </form>
        </div>
      </div>
    </div></div>

    

</div>
<AlertModal :show="alertvisibility" :message="alertMessage" :description="alertDescription"
      :severity="alertSeverity" />
</template>

<script>
import CustomFlagDropDown from '../components/CustomFlagDropDown.vue';
import {constants} from '../constants';
import { ForgotPasswordIds } from '../automationTestingIds';
import AlertModal from '../components/modals/AlertModal.vue';
import apiClient from '../services/axios/axiosMiddleware';

export default{
  data()
  {
    return{
      email:"",
      constants,
      ForgotPasswordIds,
      alertvisibility: false,
      alertMessage: "",
      alertDescription: "",
      alertSeverity: ""
    }
  },
  components:{
    CustomFlagDropDown,
    AlertModal
  },
  computed: {
    rtlClass() {
      return this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
    },
  },
  methods:{
    isValidEmail(email) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    },
    async resetPassword(){
      
      const verifyEmail = this.isValidEmail(this.email)
      if(verifyEmail)
    {
      const requestData = {
      emailId: this.email,
      tenantId: constants.ADMIN_TENENT_ID,
      passwordType: constants.FORGOTPASSWORD_TYPE,
    };

    await apiClient.post('/ecommerce-api/bo/forgotPasswordRequest', JSON.stringify(requestData), {
        headers: {
          "Content-Type": "text/plain",
        },
        
      })
      .then((response) => {
        
        if (response) {
          this.alertvisibility = true,
          this.alertMessage = this.$t('error');
          this.alertDescription = this.$t('resetPasswordLinkSent');
          this.alertSeverity = "error",
          setTimeout(() => {
            this.alertvisibility = false;
          }, 2000);
          this.$router.replace({ name: 'login' });
        }
      })
      .catch((error) => {
       console.log("/forgotPasswordRequest error", error)
      });
    }
    else{
      this.$router.replace({ name: 'otpVerification' }) //For testing
      // console.log(verifyEmail,'verifymail')
      // this.alertvisibility = true,
      //     this.alertMessage = this.$t('error');
      //     this.alertDescription = this.$t('enterValidEmail');
      //     this.alertSeverity = "error",
      //     setTimeout(() => {
      //       this.alertvisibility = false;
      //     }, 2000);
    }
    }
  }
}

</script>

<style>

</style>
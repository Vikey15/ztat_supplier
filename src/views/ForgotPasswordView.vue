<template>
<div :class="`${rtlClass} p-4 h-screen space-y-5`">
  <div class="flex justify-start items-center">
      <CustomFlagDropDown />
    </div>

    <div class="flex justify-center">
    <div class=" bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2">
      <div class="w-96">
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

        <div class="m-5">
          <form>
            <div class="grid gap-y-4">
                <div>
                <div class="relative flex items-center">
                  <input v-model="email" name="email" type="text" required
                    :id="ForgotPasswordIds.forgotPassEmail" class="w-full p-3 text-gray-600 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    :placeholder="$t('enterEmail')" />
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
    </div>
  </div>

    

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
<template>
  <div :class="`${rtlClass} p-4`">

    <div class="flex justify-start items-center">
      <CustomFlagDropDown />
    </div>
    <div class="flex justify-center">
      <div class="py-12 bg-white border shadow-lg mt-7 rounded-3xl">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <div class="flex justify-center items-center">
              <img src="../assets/images/passwordUpdated.svg"/>
            </div>
            
            <h1 class="block text-2xl font-bold text-primary-dark dark:text-white">{{ $t('successfulPasswordReset') }}
            </h1>
            <p class=" text-gray-600 dark:text-gray-400 text-lg block m-12 sm:m-10">{{ $t('useNewPasswordToLogin') }}
            </p>
          </div>

          <div class="px-4 mx-auto text-center sm:px-7">
            <button @click="this.$router.replace({ name: 'login' });" type="button"
              :id="PasswordResetSuccessIds.loginButton" class="w-full py-3 px-6 text-xl font-bold tracking-wider 
                  rounded-full text-white bg-button-dark hover:bg-button-darkHover
                  focus:outline-none">{{ $t('backToLogin') }}</button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import CustomFlagDropDown from '../components/CustomFlagDropDown.vue';
import { PasswordResetSuccessIds } from '../automationTestingIds';
export default {
  data() {
    return {
      PasswordResetSuccessIds
    }
  },
  components: {
    CustomFlagDropDown
  },
  computed: {
    rtlClass() {
      return this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
    },
  },
}

</script>
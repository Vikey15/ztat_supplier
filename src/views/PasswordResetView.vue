<template>
  <div :class="`${rtlClass} p-4`">
    <div class="flex justify-start items-center">
      <CustomFlagDropDown />
    </div>
    <div class="flex justify-center">
      <div class="bg-white border w-full max-w-lg shadow-lg mt-7 rounded-xl">
        <div class="m-0">
          <div class="flex justify-center mx-auto">
          <img v-if="$i18n.locale === 'en'" src="../assets/images/logoEngPrimary.png" alt="brandLogo"
            class="h-32 w-32" />
          <img v-if="$i18n.locale === 'ar'" src="../assets/images/logoArbPrimary.png" alt="brandLogo"
            class="h-32 w-32" />

        </div>
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-primary-dark dark:text-white">{{ $t('createNewPassword') }}</h1>
          </div>

          <div class="m-5">
            <form>
              <div class="grid gap-y-4">
                <div>
                  <div class="relative flex items-center">
                    <input :id="PasswordResetIds.newPassword" v-model="password" name="password"
                      :type="this.passwordVisibility ? 'text' : 'password'" required
                      class="w-full p-3 text-gray-600 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark"
                      :placeholder="$t('enterNewPassword')" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                      :id="PasswordResetIds.newPassToggle" :class="[
                        'w-[18px]',
                        'h-[18px]',
                        'absolute',
                        this.$i18n.locale === 'ar' ? 'left-2' : 'right-2', // Conditional class
                        'cursor-pointer'
                      ]" viewBox="0 0 128 128" @click="togglePasswordVisibility">
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                  <!-- <p class="hidden mt-2 text-xs text-red-600" id="new-password-error">Please include a
                                    password that
                                    complies with the rules to ensure security</p> -->
                </div>
                <div>
                  <div class="relative flex items-center">
                    <input :id="PasswordResetIds.confirmPassword" v-model="confirmPassword" name="password"
                      :type="this.passwordVisibility ? 'text' : 'password'" required
                      class="w-full p-3 text-gray-600 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark"
                      :placeholder="$t('enterNewPassword')" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" :class="[
                      'w-[18px]',
                      'h-[18px]',
                      'absolute',
                      this.$i18n.locale === 'ar' ? 'left-2' : 'right-2', // Conditional class
                      'cursor-pointer'
                    ]" viewBox="0 0 128 128" @click="togglePasswordVisibility">
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                  <!-- <p class="hidden mt-2 text-xs text-red-600" id="confirmn_new-password-error">Please
                                    include a password that
                                    complies with the rules to ensure security</p> -->
                </div>
                <button :id="PasswordResetIds.resetMyPassBtn" @click="resetPassword" type="button" class="w-full py-3 px-6 text-xl font-bold tracking-wider 
                  rounded-full text-white bg-button-dark hover:bg-button-darkHover
                  focus:outline-none">{{ $t('update') }}</button>
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
import { PasswordResetIds } from '../automationTestingIds';
import AlertModal from '../components/modals/AlertModal.vue';
import apiClient from '../services/axios/axiosMiddleware';
export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
      passwordVisibility: false,
      PasswordResetIds,
      alertvisibility: false,
      alertMessage: "",
      alertDescription: "",
      alertSeverity: ""
    }
  },
  computed: {
    rtlClass() {
      return this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
    },
  },
  components: {
    CustomFlagDropDown,
    AlertModal
  },
  methods: {
    togglePasswordVisibility() {
      if (this.passwordVisibility) {
        this.passwordVisibility = false
      }
      else {
        this.passwordVisibility = true
      }
    },

    isValidPassword(password) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
      return regex.test(password);
      // Valid Passwords: Must be between 8 and 20 characters long,
      // include at least one uppercase letter, one lowercase letter, one digit,
      // and one special character from the specified set.
    },

    async resetPassword() {
      this.$router.replace({ name: 'passwordResetSuccess' }) //For testing
      const verifyPassword = this.isValidPassword(this.password)
      const verifyConfirmPassword = this.isValidPassword(this.confirmPassword)

      if ((verifyPassword && verifyConfirmPassword) && (this.password === this.confirmPassword)) {
        const token = this.$route.query.token;
        const session = this.$route.query.session;
        const requestData = {
          token: token,
          session: session,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };

          await apiClient.post("/ecommerce-api/bo/forgotPasswordUpdate", JSON.stringify(requestData), {
            headers: {
              "Content-Type": "text/plain",
            },

          })
          .then((response) => {
            if (response) {
              console.log(response, "password changed succesfully")
              this.$router.replace({ name: 'passwordResetSuccess' });
            }
          })
          .catch((error) => {
            console.log("/forgotPasswordUpdate", error)
          });


      }
      else {
        this.alertvisibility = true,
          this.alertMessage = this.$t('error');
          this.alertDescription = this.$t('passwordMismatch');
          this.alertSeverity = "error",
          setTimeout(() => {
            this.alertvisibility = false;
          }, 2000);
        console.log("Password doesn't match")
      }

    }

  }
}

</script>

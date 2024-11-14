<template>
  <div class="relative inline-block text-left" ref="dropdown">
    <button :id="LanguageSwitch.langDropdown" @click="toggleDropdown"
      class="inline-flex justify-center w-full rounded-md border
       border-gray-300 shadow-sm px-2 py-1 bg-white text-lg 
       font-semibold text-gray-700 hover:bg-gray-100
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
    >
      <span class="flex items-center">
        {{ selectedLanguageLabel }}
        <Icon :icon="selectedLanguage === 'en' ? 'twemoji:flag-us-outlying-islands' : 'twemoji:flag-qatar'" width="2em" height="2em" :class='selectedLanguage === "en"?"ml-2":"mr-2"' />
      </span>
      <svg :class='selectedLanguage === "en"?"ml-2 h-5 w-5 mt-1":"mr-2 h-5 w-5 mt-1"' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <div v-if="isOpen" class="origin-top-right absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-fit z-50">
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <a :id="LanguageSwitch.engLanguage" @click="selectLanguage('en')" class="flex items-center justify-between px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">
          English <Icon icon="twemoji:flag-us-outlying-islands" width="2em" height="2em" :class='this.selectedLanguage === "en"?"ml-2":"mr-2"' />
        </a>
        <a :id="LanguageSwitch.arbLanguage" @click="selectLanguage('ar')" class="flex items-center justify-between px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">
          عربي <Icon icon="twemoji:flag-qatar" width="2em" height="2em" :class='this.selectedLanguage === "en"?"ml-2":"mr-2"' />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { LanguageSwitch } from '../automationTestingIds';
export default {
  data() {
    return {
      isOpen: false,
      selectedLanguage: this.$i18n.locale, // Default selected language
      LanguageSwitch
    };
  },
  components: {
    Icon,
  },
  computed: {
    selectedLanguageLabel() {
      return this.selectedLanguage === 'en' ? 'English' : 'عربي'; // Display selected language
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen; // Toggle dropdown visibility
    },
    selectLanguage(language) {
      this.selectedLanguage = language; // Update selected language
      this.isOpen = false; // Close the dropdown
      this.changeLanguage(); // Call method to handle language change
    },
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage
    },
    handleClickOutside(event) {
      const dropdownElement = this.$refs.dropdown;
      if (dropdownElement && !dropdownElement.contains(event.target)) {
        this.isOpen = false; // Close dropdown if clicked outside
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside); // Add event listener
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside); // Clean up event listener
  },
};
</script>

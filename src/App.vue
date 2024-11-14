<template>
  <div id="app" :class="rtlClass">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    rtlClass() {
      return this.$i18n.locale === 'ar' ? 'rtl' : 'ltr';
    }
  }
}
</script>

<style>
.rtl {
  direction: rtl;
}

.ltr {
  direction: ltr;
}
</style>

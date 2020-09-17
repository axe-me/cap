<template>
  <div
    class="w-100 d-flex flex-column justify-content-center align-items-center"
  >
    <router-link :to="{ name: 'Home' }">
      <img src="/images/logo.png" alt="axe cap Logo" />
    </router-link>

    <locale-toggle />
  </div>
</template>

<script lang="ts">
import LocaleToggle from "./LocaleToggle.vue";

export default {
  components: {
    LocaleToggle
  }
};
</script>

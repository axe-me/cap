<template>
  <div class="container">
    <logo-header />
    <router-view />
  </div>
</template>

<script lang="ts">
import LogoHeader from "@/components/common/LogoHeader.vue";

export default {
  components: {
    LogoHeader
  }
};
</script>

<style lang="scss">
@import "src/scss/bootstrap.scss";
@import "src/scss/common.scss";

html {
  // set base font size for rem
  font-size: 10px;
}
</style>

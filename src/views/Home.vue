<template>
  <div class="home">
    <user-info />
    <stock-panel />
  </div>
</template>

<script lang="ts">
import UserInfo from "@/components/user/UserInfo.vue";
import StockPanel from "@/components/stock/StockPanel.vue";

export default {
  name: "Home",
  components: {
    UserInfo,
    StockPanel
  }
};
</script>

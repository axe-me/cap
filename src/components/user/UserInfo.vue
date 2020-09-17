<template>
  <div class="d-flex justify-content-center aligin-items-cneter m-3">
    <span class="p-2">{{ t("hi", { name: user.name }) }}</span>
    <button class="btn btn-link" @click="onLogout">Logout</button>
  </div>
</template>

<script lang="ts">
import { getUser, logout } from "@/services/UserService";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export default {
  name: "UserInfo",
  setup() {
    const user = getUser();
    const router = useRouter();
    const { t } = useI18n();

    const onLogout = () => {
      logout();
      router.push({ name: "SignIn" });
    };

    return {
      user,
      onLogout,
      t
    };
  }
};
</script>

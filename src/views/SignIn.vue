<template>
  <div class="sign-in w-100 d-flex justify-content-center mt-5">
    <div class="sign-in__card card">
      <div class="card-body">
        <h3 class="card-title">{{ t("signIn") }}</h3>
        <hr />
        <sign-in-form />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import SignInForm from "@/components/user/SignInForm.vue";

export default {
  name: "sign-in",
  components: {
    SignInForm
  },
  setup() {
    const { t } = useI18n();

    return {
      t
    };
  }
};
</script>

<style lang="scss">
.sign-in {
  &__card {
    max-width: 50rem;
    min-width: 50rem;
  }
}
</style>

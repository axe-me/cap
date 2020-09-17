<template>
  <div>
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ t(error) }}
    </div>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="signInEmail" class="form-label">{{ t("email") }}</label>
        <input
          v-model="dto.email"
          type="email"
          class="form-control"
          id="signInEmail"
          required
          aria-required="true"
          :placeholder="t('emailPlaceholder')"
        />
      </div>
      <div class="mb-3">
        <label for="signInPassword" class="form-label">{{
          t("password")
        }}</label>
        <input
          v-model="dto.password"
          type="password"
          class="form-control"
          id="signInPassword"
          required
          aria-required="true"
          :placeholder="t('passwordPlaceholder')"
        />
      </div>

      <button type="submit" class="btn btn-primary btn-block">
        {{ t("signIn") }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import { SignInDTO } from "@/types/User";
import { signIn } from "@/services/UserService";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export default {
  name: "sign-in-form",
  setup() {
    const { t } = useI18n();
    const dto: SignInDTO = reactive({ email: "", password: "" });
    const error = ref("");

    const router = useRouter();

    const onSubmit = async () => {
      const { message } = await signIn(dto);
      if (message.type === "success") {
        router.push({ name: "Home" });
      } else {
        error.value = message.message;
      }
    };

    return {
      dto,
      onSubmit,
      error,
      t
    };
  }
};
</script>

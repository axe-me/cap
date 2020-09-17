<template>
  <div class="btn-group">
    <input
      type="radio"
      class="btn-check"
      name="lang"
      id="lang-en"
      autocomplete="off"
      :checked="locale === 'en'"
      @input="locale = 'en'"
    />
    <label class="btn btn-outline-primary" for="lang-en">
      English
    </label>

    <input
      type="radio"
      class="btn-check"
      name="lang"
      id="lang-zh"
      autocomplete="off"
      :checked="locale === 'zh'"
      @input="locale = 'zh'"
    />
    <label class="btn btn-outline-primary" for="lang-zh">
      中文
    </label>
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";

export default {
  name: "LocaleToggle",
  setup() {
    const { locale } = useI18n();

    return {
      locale
    };
  }
};
</script>

<template>
  <div class="btn-group">
    <template v-for="f in functions" :key="f.label">
      <input
        type="radio"
        class="btn-check"
        name="options"
        :id="`${f.label}_option`"
        autocomplete="off"
        :checked="modelValue === f.function"
        @input="onOptionChange(f.function)"
      />
      <label class="btn btn-info" :for="`${f.label}_option`">
        {{ f.label }}
      </label>
    </template>
  </div>
</template>

<script lang="ts">
import { StockFunctionOption, StockFunction } from "@/types/Stock";
import { defineComponent, reactive } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "StockSearchFunctions",
  props: {
    modelValue: String
  },
  setup(props, { emit }) {
    const { t } = useI18n();
    const functions: StockFunctionOption[] = reactive([
      {
        label: t("today"),
        function: "TIME_SERIES_INTRADAY"
      },
      {
        label: t("daily"),
        function: "TIME_SERIES_DAILY"
      },
      {
        label: t("weekly"),
        function: "TIME_SERIES_WEEKLY"
      },
      {
        label: t("monthly"),
        function: "TIME_SERIES_MONTHLY"
      }
    ]);

    const onOptionChange = (stockFunction: StockFunction) => {
      emit("update:modelValue", stockFunction);
    };

    return {
      functions,
      onOptionChange
    };
  }
});
</script>

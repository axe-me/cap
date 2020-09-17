<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ t("stockFilter") }}</h5>

      <div class="row">
        <form @submit.prevent="onSubmit">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              :placeholder="t('stockSearchPlaceholder')"
              :aria-label="t('stockSearchPlaceholder')"
              aria-describedby="symbol-search"
              v-model="symbolModel"
              required
            />
            <button class="btn btn-primary" type="submit" id="symbol-search">
              {{ t("search") }}
            </button>
          </div>
        </form>

        <stock-search-functions v-model="filter.function" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { StockFilter } from "@/types/Stock";
import { defineComponent, reactive, ref, watch } from "vue";
import StockSearchFunctions from "./StockSearchFunctions.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "StockSearch",
  emits: ["search"],
  components: {
    StockSearchFunctions
  },
  setup(_, { emit }) {
    const { t } = useI18n();
    const symbolModel = ref("");

    const filter: StockFilter = reactive({
      symbol: "",
      function: "TIME_SERIES_DAILY",
      interval: "1min"
    });

    const onSubmit = () => {
      filter.symbol = symbolModel.value;
    };

    watch(filter, () => emit("search", filter));

    return {
      filter,
      symbolModel,
      onSubmit,
      t
    };
  }
});
</script>

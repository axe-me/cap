<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{ t("overview") }}</h3>
      <div v-loading="isLoading">
        <ul
          v-if="resp.message.type === 'success'"
          class="overview-list list-group mt-3"
        >
          <li class="list-group-item" v-for="(v, k) in resp.data" :key="k">
            <span
              class="d-flex justify-content-between"
              v-if="k !== 'Description'"
            >
              <span class="font-weight-bold">{{ `${k}: ` }}</span>
              <span>{{ v }}</span>
            </span>
          </li>
        </ul>

        <div v-else class="alert alert-danger" role="alert">
          {{ t(resp.message.message) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { getCompanyInfo } from "@/services/StockService";
import { ApiResponse } from "@/types/Common";

export default defineComponent({
  name: "CompanyOverview",
  props: {
    symbol: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { t } = useI18n();
    const isLoading = ref(false);
    const resp: Ref<ApiResponse> = ref({
      data: null,
      message: { type: "init", message: "" }
    });

    watch(
      () => props.symbol,
      async () => {
        isLoading.value = true;
        resp.value = await getCompanyInfo(props.symbol);
        isLoading.value = false;
      }
    );

    return {
      isLoading,
      t,
      resp
    };
  }
});
</script>

<style lang="scss">
.overview-list {
  max-height: 40rem;
  overflow-y: auto;
}
</style>

<template>
  <div class="card">
    <div class="card-body" v-loading="isLoading">
      <div
        v-if="resp.message.type === 'error'"
        class="alert alert-danger"
        role="alert"
      >
        {{ t(resp.message.message) }}
      </div>

      <div v-else>
        <canvas ref="chartRef" class="stock-chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { generateChartOption, getTimeSeries } from "@/services/StockService";
import { ApiResponse } from "@/types/Common";
import { StockFilter } from "@/types/Stock";
import Chart from "chart.js";

export default defineComponent({
  name: "StockChart",
  props: {
    filter: {
      type: Object,
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
    const chartRef = ref(null);

    watch(
      () => props.filter,
      async () => {
        isLoading.value = true;
        resp.value = await getTimeSeries(props.filter as StockFilter);
        if (resp.value.data) {
          const option = generateChartOption(resp.value.data);
          new Chart(
            ((chartRef.value as unknown) as HTMLCanvasElement).getContext(
              "2d"
            ) as CanvasRenderingContext2D,
            option
          );
        }
        isLoading.value = false;
      },
      { deep: true }
    );

    return {
      isLoading,
      t,
      resp,
      chartRef
    };
  }
});
</script>

<style lang="scss" scoped>
.stock-chart {
  height: 30rem;
  width: 100%;
}
</style>

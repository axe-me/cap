<template>
  <stock-search class="row" @search="onSearch" />
  <div v-show="filter.symbol" class="row mt-3">
    <stock-chart class="col-12 col-md-7 col-lg-8 col-xxl-9" :filter="filter" />
    <company-overview
      class="col-12 col-md-5 col-lg-4 col-xxl-3"
      :symbol="filter.symbol"
    />
  </div>
</template>

<script setup lang="ts">
import { StockFilter } from "@/types/Stock";
import { reactive } from "vue";
import StockSearch from "./StockSearch.vue";
import CompanyOverview from "./CompanyOverview.vue";
import StockChart from "./StockChart.vue";

export default {
  name: "StockPanel",
  components: {
    StockSearch,
    CompanyOverview,
    StockChart
  }
};

export const filter: StockFilter = reactive({
  symbol: "",
  function: "TIME_SERIES_DAILY",
  interval: "1min"
});

export const onSearch = (searchFilter: StockFilter) => {
  filter.symbol = searchFilter.symbol;
  filter.function = searchFilter.function;
};
</script>

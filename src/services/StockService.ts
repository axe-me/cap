import { apiClient } from "./ApiClient";
import { StockFilter, StockTicks } from "@/types/Stock";
import { ApiResponse } from "@/types/Common";
import { ChartConfiguration } from "chart.js";

export async function getTimeSeries(filter: StockFilter): Promise<ApiResponse> {
  const { data } = await apiClient.request({
    params: filter
  });

  const response: ApiResponse = {
    data: null,
    message: {
      type: "success",
      message: "success"
    }
  };

  if (data["Error Message"]) {
    response.message = {
      type: "error",
      message: "errorWrongSymbol"
    };
  } else {
    const dataKey = Object.keys(data).find(k => k.includes("Time Series"));
    if (dataKey) {
      response.data = data[dataKey];
    } else {
      response.message = {
        type: "error",
        message: "apiError"
      };
    }
  }

  return response;
}

export async function getCompanyInfo(symbol: string): Promise<ApiResponse> {
  const { data } = await apiClient.request({
    params: {
      function: "OVERVIEW",
      symbol
    }
  });

  const response: ApiResponse = {
    data: null,
    message: {
      type: "success",
      message: "success"
    }
  };

  if (Object.keys(data).length) {
    response.data = data;
  } else {
    response.message = {
      type: "error",
      message: "errorWrongSymbol"
    };
  }

  return response;
}

export function generateChartOption(raw: StockTicks): ChartConfiguration {
  const map = new Map(Object.entries(raw)); // conver object to map to make sure the interation order is alwats right
  const labels: string[] = [];
  const open: number[] = [];
  const high: number[] = [];
  const low: number[] = [];
  const close: number[] = [];
  const volumn: number[] = [];

  for (const [key, value] of map) {
    labels.push(key);
    open.push(parseFloat(value["1. open"]));
    high.push(parseFloat(value["2. high"]));
    low.push(parseFloat(value["3. low"]));
    close.push(parseFloat(value["4. close"]));
    volumn.push(parseFloat(value["5. volume"]));
  }

  const option: ChartConfiguration = {
    type: "line",

    // The data for our dataset
    data: {
      labels: labels,
      datasets: [
        {
          label: "Open",
          borderColor: "#1d2675",
          backgroundColor: "transparent",
          data: open,
          borderWidth: 2,
          pointRadius: 2
        },
        {
          label: "High",
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "transparent",
          data: high,
          borderWidth: 2,
          pointRadius: 2
        },
        {
          label: "Low",
          borderColor: "#8cd2f4",
          backgroundColor: "transparent",
          data: low,
          borderWidth: 2,
          pointRadius: 2
        },
        {
          label: "Close",
          borderColor: "#919095",
          backgroundColor: "transparent",
          data: close,
          borderWidth: 2,
          pointRadius: 2
        }
      ]
    },

    options: {
      scales: {
        xAxes: [
          {
            type: "time"
          }
        ]
      }
    }
  };

  return option;
}

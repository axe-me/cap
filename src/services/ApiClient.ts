import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://www.alphavantage.co/query",
  params: { apikey: process.env.VUE_APP_ALPHA_VANTAGE_KEY }
});

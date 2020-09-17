import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      signIn: "Sign In",
      email: "Email",
      password: "Password",
      emailPlaceholder: "Please enter your email address",
      passwordPlaceholder: "Please enter your password.",
      successSignIn: "You are succussfully signed in.",
      wrongCredential: "Your credential is wrong.",
      hi: "Hi, {name} ",
      search: "Search",
      stockFilter: "Stock Filter",
      stockSearchPlaceholder: "Enter the stock symbol",
      today: "Today",
      daily: "Daily",
      weekly: "Weekly",
      monthly: "Monthly",
      overview: "Company Overview",
      errorWrongSymbol: "Symbol Not Found",
      apiError: "Something is wrong, please try again later."
    },
    zh: {
      signIn: "登录",
      email: "邮箱",
      password: "密码",
      emailPlaceholder: "请输入你的邮箱地址",
      passwordPlaceholder: "请输入你的密码",
      successSignIn: "成功登录",
      wrongCredential: "账户密码错误",
      hi: "你好, {name} ",
      search: "搜索",
      stockFilter: "股票过滤",
      stockSearchPlaceholder: "输入股票代码",
      today: "今日",
      daily: "日",
      weekly: "周",
      monthly: "月",
      overview: "公司概况",
      errorWrongSymbol: "代码不存在",
      apiError: "错误"
    }
  }
});

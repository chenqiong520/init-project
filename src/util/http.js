import axios from "axios";
import Vue from "vue";
import { MessageBox, Message } from "element-ui";
import { startLoading, endLoading } from "./global-loading";

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
});

// request interceptor
service.interceptors.request.use(
  config => {
    startLoading();
    // if (headers) {
    //   config.headers["X-Token"] = token;
    // }
    return config;
  },
  error => {
    endLoading();
    console.log(error);
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    endLoading();
    const res = response.data;

    if (res.code !== 20000) {
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm(
          "You have been logged out, you can cancel to stay on this page, or log in again",
          "Confirm logout",
          {
            confirmButtonText: "Re-Login",
            cancelButtonText: "Cancel",
            type: "warning"
          }
        ).then(() => {});
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    endLoading();
    console.log("err" + error);
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

Vue.prototype.$http = service;

export default service;

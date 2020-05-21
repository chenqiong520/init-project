import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

// 全局请求loading标识
let needLoadingRequestCount = 0;

export function startLoading() {
  if (needLoadingRequestCount === 0) {
    NProgress.start();
  }
  needLoadingRequestCount++;
}

export function endLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    NProgress.done();
  }
}

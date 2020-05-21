import Http from "@/util/http";

export function show(params) {
  return Http({
    url: "getUserInfo",
    method: "get",
    params
  });
}

import base from "./base"

export default {
  login: async function(params: any) {
    return await base.webAPI("/api/account/login", params.data, params.header)
  }
}

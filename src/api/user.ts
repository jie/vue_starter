import base from "./base"

export default {
  login: async function(params: any) {
    return await base.webAPI("/platform/api/account/login", params.data, params.header)
  },
  getCaptchaImage: async function(params: any) {
    return await base.webAPI("/platform/api/account/captcha/create_image", params.data, params.header)
  },
  getSessionToken: async function(params: any) {
    return await base.webAPI("/platform/api/account/get_session_token", params.data, params.header)
  }
}


// (r'/platform/api/account/regist', account_api.RegistAPI),
// (r'/platform/api/account/regist_confirm', account_api.RegistConfirmAPI),
// (r'/platform/api/account/login', account_api.LoginAPI),
// (r'/platform/api/account/get_login_captcha_token', account_api.GetLoginCaptchaTokenAPI),
// (r'/platform/api/account/get_login_captach_image', account_api.GetLoginCaptchaImageAPI),
// (r'/platform/api/account/reset_password_request', account_api.ResetPasswordAPI),
// (r'/platform/api/account/reset_password_confirm', account_api.ResetPasswordConfirmAPI),
// (r'/platform/api/user/change_password', user_api.ChangePasswordAPI),
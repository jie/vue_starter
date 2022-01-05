import userAPI from '@/api/user'


const state = {
  currentUser: "",
  currentSesstionToken: "",
  currentErrMsg: "",
  currentCaptchaImage: ""
}

// getters
const getters = {}

// actions

async function loginAction({ commit, state }, params: any = {}) {
  let result = await userAPI.login({data: {...params, token: state.currentSesstionToken}})
  if (result.status && result.data.code === '0') {
    commit('LOGIN_REQ_OK', result.data)
    sessionStorage.setItem('current_user', JSON.stringify(result.data))
  } else {
    commit('SET_ERR_MSG', { "msg": "fail_to_login" })
  }
}

async function getCaptchaImage({ commit, state }, params: any = {}) {
  let result = await userAPI.getCaptchaImage({data: {...params, token: state.currentSesstionToken}})
  if (result.status && result.data.code === '0') {
    let url = `/platform/api/account/captcha/image/${result.data.data.image}?case=login`
    commit('GETCAPTCHA_REQ_OK', {url: url, key: result.data.data.image})
  } else {
    commit('SET_ERR_MSG', { "msg": "fail_to_get_captcha_image" })
  }
}

async function getSessionToken({ commit, state }, params: any = {}) {
  let token = sessionStorage.getItem('sd_session_token')
  let p;
  if (token) {
    p = { data: {token: token} };
  } else {
    p = {data:{}}
  }

  let result = await userAPI.getSessionToken(p)
  if (result.status && result.data.code === '0') {
    if(result.data.data.token) {
      sessionStorage.setItem('sd_session_token', result.data.data.token)
    }
    commit('getSessionToken_REQ_OK', result.data.data)
  } else {
    commit('SET_ERR_MSG', { "msg": result.data.message })
  }
}

async function checkLoginSession({ commit, state }, params: any = {}) {
  let current_user = sessionStorage.getItem("current_user")
  console.log('current_user:', current_user)
  if(current_user) {
    commit('LOGIN_REQ_OK', JSON.parse(current_user))
  }

}

const actions = {
  loginAction: loginAction,
  getCaptchaImage: getCaptchaImage,
  getSessionToken: getSessionToken,
  checkLoginSession: checkLoginSession
}
// mutationsg
const mutations = {
  LOGIN_REQ_OK(state: any, payload: any) {
    console.log('login_ok:', payload)
    state.currentUser = payload
  },
  LOGIN_REQ_FAIL(state: any, payload: any) {
    state.currentErrMsg = payload.msg
  },
  GETCAPTCHA_REQ_OK(state: any, payload: any) {
    console.log('payload:', payload)
    state.currentCaptchaImage = payload
    console.log('status.currentCaptchaImage:', state.currentCaptchaImage)
  },
  GETCAPTCHA_REQ_FAIL(state: any, payload: any) {
    state.currentErrMsg = payload.msg
  },
  getSessionToken_REQ_OK(state: any, payload: any) {
    state.currentSesstionToken = payload.token
  },
  SET_ERR_MSG(state: any, payload: any) {
    state.currentErrMsg = payload.msg
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

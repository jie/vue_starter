import userAPI from '@/api/user'


const state = {
  currentUser: ""
}

// getters
const getters = {}

// actions

async function loginAction({ commit, state }, params: any = {}) {
  let result = await userAPI.login(params)
  if (result.status) {
    commit('LOGIN_REQ_OK', state, result.data)
  } else {
    commit('LOGIN_REQ_FAIL', state, { "msg": "fail_to_login" })
  }
}

async function getCaptchaImage({ commit, state }, params: any = {}) {
  let result = await userAPI.getCaptchaImage(params)
  if (result.status) {
    commit('GETCAPTCHA_REQ_OK', state, result.data)
  } else {
    commit('GETCAPTCHA_REQ_FAIL', state, { "msg": "fail_to_get_captcha_image" })
  }
}

async function getCaptchaToken({ commit, state }, params: any = {}) {
  let result = await userAPI.getCaptchaToken(params)
  if (result.status) {
    commit('GETCAPTCHATOKEN_REQ_OK', state, result.data)
  } else {
    commit('GETCAPTCHATOKEN_REQ_FAIL', state, { "msg": "fail_to_get_captcha_token" })
  }
}

const actions = {
  loginAction: loginAction,
  getCaptchaImage: getCaptchaImage,
  getCaptchaToken: getCaptchaToken
}
// mutationsg
const mutations = {
  LOGIN_REQ_OK(state: any, payload: any) {
    state.currentUser = payload
  },
  LOGIN_REQ_FAIL(state: any, payload: any) {
    state.currentMsg = payload.msg
  },
  GETCAPTCHA_REQ_OK(state: any, payload: any) {
    state.currentCaptchaImage = payload.msg
  },
  GETCAPTCHA_REQ_FAIL(state: any, payload: any) {
    state.currentMsg = payload.msg
  },
  GETCAPTCHATOKEN_REQ_OK(state: any, payload: any) {
    state.currentCaptchaToken = payload.msg
  },
  GETCAPTCHATOKEN_REQ_FAIL(state: any, payload: any) {
    state.currentMsg = payload.msg
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

import userAPI from '@/api/user'


const state = {
  currentUser: ""
}

// getters
const getters = {}

// actions

async function loginAction({commit, state}, params: any = {}) {
  　let result = await userAPI.login(params)
    if(result.status) {
      commit('LOGIN_REQ_OK', state, result.data)
    } else {
      commit('LOGIN_REQ_FAIL', state, {"msg": "fail_to_login"})
    }
  }

const actions = {
  loginAction: loginAction
}
// mutationsg
const mutations = {
  LOGIN_REQ_OK(state: any, payload: any) {
    state.currentUser = payload
  },
  LOGIN_REQ_FAIL(state: any, payload: any) {
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

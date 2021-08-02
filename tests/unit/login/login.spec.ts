import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import Login from '@/views/Login.vue'
import { createStore } from 'vuex'
import user from "@/store/modules/user";

async function user_login_api(params) {
  if (params.email === 'wrong_email') {
    return {
      status: false,
      data: {},
      msg: "email_not_found"
    }
  } else {
    return {
      status: true,
      data: {
        email: "zhouyang.me@gmail.com"
      },
      msg: "ok"
    }
  }
}

async function loginAction({ commit, state }, params: any = {}) {
  let result = await user_login_api(params)
  if (result.status) {
    commit('LOGIN_REQ_OK', state, result.data)
  } else {
    commit('LOGIN_REQ_FAIL', state, { "msg": "fail_to_login" })
  }
}

const actions = {
  loginAction: loginAction
}


const store = createStore({
  state: user.state,
  mutations: user.mutations,
  actions: actions,
  getters: user.getters
})

const fakePostList = [
  { id: 1, title: 'title1' },
  { id: 2, title: 'title2' }
]

// Following lines tell Jest to mock any call to `axios.get`
// and to return `fakePostList` instead
jest.mock('axios', () => ({
  post: jest.fn(() => fakePostList)
}))

test('loads posts on button click', async () => {
  const wrapper = mount(Login, {
    global: {
      plugins: [store]
    }
  })

  await wrapper.get('#loginBtn').trigger('click')
})
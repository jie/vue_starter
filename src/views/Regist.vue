<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div
      class="
        max-w-md
        w-full
        space-y-8
        border-solid border
        p-5
        rounded-3xl
        shadow-xl
        bg-gray-100
      "
    >
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-blue-900">
          {{ $t("login.regist_a_new_account") }}
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          {{ $t("base.or") }}
          <router-link
            :to="{ name: 'Login' }"
            class="font-medium text-blue-800 hover:text-myBlue-primary"
          >
            {{ $t("login.sign_in_to_your_account") }}
          </router-link>
        </p>
      </div>
      <div class="mt-8 space-y-6" method="POST">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="nickname" class="sr-only">{{ $t("base.email") }}</label>
            <input
              id="nickname"
              name="nickname"
              v-model="nickname"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-myBlue-light
                focus:border-blue-800
                focus:z-10
                sm:text-sm
              "
              :placeholder="$t('base.nickname')"
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">{{
              $t("base.email")
            }}</label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              v-model="email"
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                focus:outline-none
                focus:ring-myBlue-light
                focus:border-blue-800
                focus:z-10
                sm:text-sm
              "
              :placeholder="$t('base.email')"
            />
          </div>
          <div>
            <label for="password" class="sr-only">{{
              $t("base.password")
            }}</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                focus:outline-none
                focus:ring-myBlue-light
                focus:border-blue-800
                focus:z-10
                sm:text-sm
              "
              :placeholder="$t('base.password')"
            />
          </div>
          <div>
            <label for="password" class="sr-only">{{
              $t("base.repeat_password")
            }}</label>
            <input
              id="repeat_password"
              name="repeat_password"
              type="password"
              v-model="repeat_password"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                focus:outline-none
                focus:ring-myBlue-light
                focus:border-blue-800
                focus:z-10
                sm:text-sm
              "
              :placeholder="$t('base.repeat_password')"
            />
          </div>
          <div class="relative">
            <label for="captcha_code" class="sr-only">{{
              $t("base.captcha_code")
            }}</label>
            <input
              id="captcha_code"
              name="captcha_code"
              required
              v-model="captcha_code"
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-myBlue-primary
                focus:border-blue-800
                focus:z-10
                sm:text-sm
              "
              :placeholder="$t('base.captcha_code')"
            />
            <img
              class="absolute right-1 top-1 z-10 rounded-md"
              @click="createCaptchaImage"
              :src="captchaSrc"
              alt=""
              style="height: 30px"
            />
          </div>
        </div>

        <div>
          <button
            @click="regist"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-blue-800
              hover:bg-myBlue-primary
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-myBlue-light
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg
                class="
                  h-5
                  w-5
                  text-myBlue-primary
                  group-hover:text-myBlue-light
                "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            {{ $t("base.regist") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import moment from "moment";
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState({
    currentUser: (state) => state.currentUser,
  }),
  data() {
    return {
      email: "",
      nickname: "",
      password: "",
      repeat_password: "",
      captcha_code: "",
      captchaSrc: "",
      captcha_key: ""
    };
  },

  async created() {
    await this.getToken();
    await this.createCaptchaImage();
  },
  methods: {
    async getToken() {
      let token = sessionStorage.getItem("sd_session_token");
      let params = {}
      if(token) {
        params.token = token
      }

      let result = await axios.post(
        "/platform/api/account/get_session_token",
        params
      );
      console.log(result);
      if(result.data.code !== '0') {
        alert(result.data.message)
        sessionStorage.removeItem("sd_session_token")
        return
      }
      console.log(' result.data.data.token:',  result.data.data.token)
      sessionStorage.setItem("sd_session_token", result.data.data.token)

    },
    async regist() {
      let token = sessionStorage.getItem("sd_session_token");
      let result = await axios.post(
        "/platform/api/account/regist",
        {
          nickname: this.nickname,
          email: this.email,
          password: this.password,
          captcha_code: this.captcha_code,
          token: token,
          captcha_key: this.captcha_key
        }
      );
      console.log(result);
      if(result.data.code !== 0) {
        alert(result.data.message)
      }
    },
    async createCaptchaImage() {
      let token = sessionStorage.getItem("sd_session_token");
      let result = await axios.post(
        "/platform/api/account/captcha/create_image",
        {
          token: token,
          case: "regist",
        }
      );
      console.log(result);
      this.captcha_key = result.data.data.image
      this.captchaSrc = `/platform/api/account/captcha/image/${result.data.data.image}?case=regist`;
    },
  },
};
</script>

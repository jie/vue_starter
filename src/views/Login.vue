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
          {{ $t("login.sign_in_to_your_account") }}
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          {{ $t("base.or") }}
          <router-link
            :to="{ name: 'Regist' }"
            class="font-medium text-blue-800 hover:text-myBlue-primary"
          >
            {{ $t("login.regist_a_new_account") }}
          </router-link>
        </p>
      </div>
      <div class="mt-8 space-y-6" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">{{
              $t("base.email")
            }}</label>
            <input
              id="email-address"
              name="email"
              type="email"
              v-model="email"
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
                focus:ring-myBlue-primary
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
                focus:ring-myBlue-primary
                focus:border-blue-800
                focus:z-10
                sm:text-sm
              "
              :placeholder="$t('base.password')"
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
              @click="refreshCaptchaImage"
              :src="currentCaptchaImage.url"
              alt=""
              style="height: 30px"
            />
          </div>
        </div>
        <div>
          <button
            @click="login"
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
              focus:ring-2
              focus:bg-myBlue-light
              focus:bg-myBlue-primary
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
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
            {{ $t("base.signin") }}
          </button>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="
                h-4
                w-4
                text-myBlue-light
                focus:ring-myBlue-primary
                border-myBlue-primary
                rounded
              "
            />
            <label
              for="remember_me"
              class="ml-2 block text-sm text-blue-800 hover:text-myBlue-primary"
            >
              {{ $t("login.remember_me") }}
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-blue-800 hover:text-myBlue-primary"
            >
              {{ $t("login.forget_your_password") }}
            </a>
          </div>
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
    currentUser: (state) => state.user.currentUser,
    currentCaptchaImage: (state) => state.user.currentCaptchaImage,
  }),
  data() {
    var timestamp = moment().format("YYYYMMDDHHMMSS");
    return {
      email: "",
      password: "",
      captchaSrc: "",
      captcha_code: "",
    };
  },

  async created() {
    await this.$store.dispatch("user/getSessionToken");
    await this.$store.dispatch("user/getCaptchaImage", { case: "login" });
  },
  methods: {
    async getToken() {},
    async login() {
      this.$store.dispatch("user/loginAction", {
        email: this.email,
        password: this.password,
        code: this.captcha_code,
        captcha_key: this.currentCaptchaImage.key,
      });
    },
    async refreshCaptchaImage() {
      await this.$store.dispatch("user/getCaptchaImage", { case: "login" });
    },
  },
};
</script>

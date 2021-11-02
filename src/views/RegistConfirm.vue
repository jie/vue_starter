<template>
<div>Loading</div>
</template>


<script>
import axios from "axios";
import moment from "moment";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
        token: ""
    };
  },

  async created() {
    await this.getToken();
    await this.confirmRegistration();
  },
  methods: {
    async getToken() {
      let token = sessionStorage.getItem("sd_session_token");
      let params = {};
      if (token) {
        params.token = token;
      }

      let result = await axios.post(
        "/platform/api/account/get_session_token",
        params
      );
      console.log(result);
      if (result.data.code !== "0") {
        sessionStorage.removeItem("sd_session_token");
        return;
      }
      this.token = result.data.data.token
      console.log(" result.data.data.token:", result.data.data.token);
      sessionStorage.setItem("sd_session_token", result.data.data.token);
    },
    async confirmRegistration() {
      let regist_token = this.$route.params.regist_token;
      let result = await axios.post(
        "/platform/api/account/regist_confirm",
        {
            "regist_token": regist_token,
            "token": this.token,
            "target_token": this.$route.query.token
        }
      );
      console.log(result);
      if (result.data.code !== "0") {
        this.$router.push({
            name: 'Home'
        })
        return;
      }
    }
  }
};
</script>

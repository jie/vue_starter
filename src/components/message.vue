<template>
  <div
    class="wrapper fixed top-3 right-3 border rounded-md p-3 shadow-lg"
    v-if="isShow"
  >
    <div class="">{{ type }}</div>
    <div class="content" v-html="currentErrMsg"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState({
    currentErrMsg: function (state) {
    //     console.log('1212121:', state)
    //   this.isShow = true;
    //   setTimeout(() => {
    //     this.isShow = false;
    //   }, 2000);
      return state.user.currentErrMsg;
    },
  }),
  watch: {},
  props: {
    position: {
      type: String,
      default: () => {
        return "right-top";
      },
    },
  },
  data() {
    return {
      isShow: false,
      type: "",
      content: "",
    };
  },
  created() {},
  methods: {
    showMessage(type, content) {
      this.type = type;
      this.content = content;
      this.isShow = true;
    },
  },
};
</script>

<style scoped>
.wrapper {
  min-width: 260px;
  text-align: left;
}
</style>
<template>
  <div>
    <Message ref="Message" />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
<script>
import Message from "./components/message.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Message
  },
  created() {
    // this.$nextTick(()=> {
    //   this.$refs.Message.showMessage('error', '11122121212')
      
    // })
  }
};
</script>
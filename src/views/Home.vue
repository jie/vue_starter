<template>
  <div class="home">
    <div class="bg-blue-800" style="height: 80px;">
      <Myheader :settings="settings"/>
    </div>
    <div class="body">
      <Mybody :settings="settings"></Mybody>
      <Myworkflow :settings="settings"></Myworkflow>
    </div>
    <div class="foot">
      <Myfooter :settings="settings"></Myfooter>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Myheader from "@/components/header.vue";
import Mybody from "@/components/body.vue";
import Myfooter from "@/components/footer.vue";
import Myworkflow from "@/components/workflow.vue";
import homepageSettings from "@/data/homepage"

export default {
  name: "Home",
  components: {
    Myheader,
    Mybody,
    Myfooter,
    Myworkflow
  },
  data() {
    return {
      settings: homepageSettings
    };
  },
};
</script>

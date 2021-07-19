<template>
  <div class="home">
    <HomeHeader msg="Welcome to Your Vue.js App" :menuArray="menuArray" />
    <HomeIntro />
    <div style="height: 30px; width: 100%;"></div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/HomeHeader.vue";
import HomeIntro from "@/components/HomeIntro.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeIntro,
    Footer
  },
  data() {
    return {
      menuArray: [
        {
          title: "Product",
        },
        {
          title: "Features",
        },
        {
          title: "Marketplace",
        },
        {
          title: "Company2",
        }
      ],
    };
  },
};
</script>

<template>
  <footer class="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-center font-bold text-3xl w-full text-blue-900">
            {{ $transData("name", settings.links) }}
          </h2>
          <p
            class="
              mt-2
              text-3xl
              leading-8
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          ></p>
        </div>
      </div>
    </div>

    <div
      class="
        max-w-screen-lg
        xl:max-w-screen-xl
        mx-auto
        px-4
        sm:px-6
        md:px-8
        text-gray-400
        dark:text-gray-300
      "
    >
      <ul class="text-lg font-light pb-8 flex flex-wrap justify-center">
        <li
          class="w-1/2 md:w-1/3 lg:w-1/3"
          v-for="linkgroup in settings.links.items"
        >
          <div class="text-center">
            <h2 class="text-md uppercase mb-4 text-gray-500 font-bold">
              {{ $transData("title", linkgroup) }}
            </h2>
            <ul>
              <li
                v-for="item in linkgroup.items"
                class="
                  mb-4
                  hover:text-gray-800
                  dark:hover:text-white
                  transition-colors
                  duration-200
                "
              >
                <a href="#">{{ $transData("name", item) }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div
        class="
          text-center
          pt-9
          sm:pt-12
          text-blue-900
          font-bold
          flex
          items-center
          justify-center
        "
      >
        {{ $transData("name", settings.copyright) }}
      </div>
      <div
        class="
          text-center
          pt-9
          sm:pt-5
          font-bold
          flex
          items-center
          justify-center
        "
      >
        <a href="{{settings.record_no.link}}">{{ $transData("name", settings.record_no) }}</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    settings: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  name: "Footer",
});
</script>

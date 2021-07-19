<template>
  <footer class="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Links
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </div>
    </div>

    <div
      class="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300"
    >
      <ul class="text-lg font-light pb-8 flex flex-wrap justify-center">
        <li class="w-1/2 md:w-1/3 lg:w-1/3">
          <div class="text-center">
            <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
              Components
            </h2>
            <ul>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> Elements </a>
              </li>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> Forms </a>
              </li>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> Commerces </a>
              </li>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> Navigation </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="w-1/2 md:w-1/3 lg:w-1/3">
          <div class="text-center">
            <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
              Contacts
            </h2>
            <ul>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> Github </a>
              </li>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> Facebook </a>
              </li>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> Twitter </a>
              </li>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> LinkedIn </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="w-1/2 md:w-1/3 lg:w-1/3">
          <div class="text-center">
            <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
              Customization
            </h2>
            <ul>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> Settings </a>
              </li>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> Themes </a>
              </li>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> Plugins </a>
              </li>
              <li
                class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <a href="#"> LinkedIn </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div
        class="text-center pt-10 sm:pt-12 font-light flex items-center justify-center"
      >
        Created by Joe
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
  props: {
    msg: String
  }
})
</script>

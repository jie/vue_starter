<template>
  <div class="container md:flex mr-auto ml-auto">
    <div class="md:w-1/2 md:md-width">
      <img
        :src="settings.welcome.chart"
        alt=""
        class="chart md:chart-md"
        style="height: 400px; width: 100%"
      />
    </div>
    <div class="md:md-width md:w-1/2 flex flex-col justify-center items-center">
      <div class="text-4xl font-bold pb-6">{{$transData('name', settings.welcome)}}</div>
      <div class="text-xl pb-6 italic">
        {{$transData('summary', settings.welcome)}}
      </div>
      <div
        class="
          rounded-full
          py-3
          px-6
          inline-block
          text-gray-50
          bg-blue-800
          font-bold
        "
      >
        {{$transData('button_text', settings.welcome)}}
      </div>
    </div>
  </div>
  <div class="container md:flex mt-20 md:mt-0 ml-auto mr-auto">
    <div class="md:w-1/2 md:md-width flex flex-col justify-center items-center p-5">
      <div class="text-2xl font-bold pb-6">{{$transData('name', settings.get_start)}}</div>
      <div class="p-6 bg-indigo-500 text-gray-50 rounded-2xl shadow-xl">
        {{$transData('text', settings.get_start)}}
      </div>
    </div>
    <div class="md:w-1/2 md:md-width">
      <img
        :src="settings.get_start.chart"
        alt=""
        class="chart md:chart-md"
        style="height: 400px; width: 100%"
      />
    </div>
  </div>
  <h2 class="text-md font-bold text-3xl mt-20 text-blue-900">
    {{$transData('name', settings.projects)}}
  </h2>
  <div class="container md:grid grid-cols-2 gap-10 mr-auto ml-auto pt-10">
    <div class="p-5 card m-5 md:m-0" v-for="item in settings.projects.items">
      <div class="flex justify-center items-center" style="height: 200px">
        <img
          :src="item.image"
          alt=""
          style="height: 200px"
        />
      </div>
      <div class="">
        <div class="font-bold text-lg">{{$transData('name', item)}}</div>
        <div>
          {{$transData('summary', item)}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      default:()=>{
        return{}
      }
    }
  }
};
</script>

<style scoped>
.card {
  @apply border-2 rounded-xl shadow-lg;
}
</style>



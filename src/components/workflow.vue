<template>
  <div class="container mt-20 ml-auto mr-auto">
    <div class="text-center font-bold text-3xl w-full text-blue-900">{{$transData('name', settings.workflow)}}</div>
    <div class="mt-5 pl-5 pr-5 box-border">
      <div
        :class="{
          workflow: true,
          left: item.by.includes('platform') ? true : false,
        }"
        v-for="(item, index) in settings.workflow.items"
        :key="item.id"
      >
        <div
          class="
            md:w-56
            flex-1 flex flex-col
            md:flex-row
            justify-center
            items-center
            text-xl
            font-bold
          "
        >
          <img :src="item.chart" alt="" />
        </div>
        <div
          class="
            flex-1 flex flex-col
            justify-center
            items-center
            text-xl
            font-bold
          "
        >
          <div>{{$transData('name', item)}}</div>
        </div>
        <div
          class="
            top-1/2
            left-0
            rounded-full
            bg-gray-400
            w-10
            h-10
            absolute
            text-gray-50 text-xl
            font-bold
          "
          style="margin-left: -20px; margin-top: -20px; line-height: 40px"
        >
          {{ index + 1 }}
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
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.workflow {
  @apply md:flex max-w-3xl p-5 m-auto md:h-64 border-l-2 relative;
}
.workflow.left {
  @apply md:flex max-w-3xl p-5 m-auto md:h-64 border-l-2 relative flex-row-reverse;
}
</style>
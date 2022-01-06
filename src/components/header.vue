<template>
  <div class="h-full container shadow-lg" style="margin: 0 auto">
    <div class="flex w-full h-full">
      <div class="logo h-full flex items-center">
        <img src="../assets/helloSaas.png" alt="" style="height: 50px" />
      </div>
      <div
        class="menu hidden md:flex h-full flex-row-reverse flex-1 items-center"
      >
        <div class="flex h-full items-center">
          <div
            class="
              flex
              pl-4
              pr-4
              h-full
              items-center
              justify-center
              relative
              text-base
            "
            v-for="item in currentMenu"
            :key="item.name"
          >
            <router-link
              v-if="item.link"
              :to="item.link"
              class="
                text-gray-200 text-center
                font-bold
                flex
                justify-center
                items-center
              "
              ><span v-if="!item.icon">{{ $transData("name", item) }}</span>
              <icon-park
                :type="item.icon.type"
                :size="item.icon.size"
                theme="filled"
                fill="#fff"
                v-else
              />
            </router-link>

            <div
              v-else
              class="
                text-gray-200 text-center
                font-bold
                flex
                justify-center
                items-center
              "
              @click="onToggleSubmenu(item)"
            >
              <span>{{ $transData("name", item) }}</span>
              <icon-park
                type="down"
                size="18"
                theme="filled"
                fill="#fff"
                v-if="item.items"
                class="inline-block font-light ml-2"
              />
            </div>

            <div
              class="
                sub_items
                absolute
                bg-blue-800
                top-20
                left-0
                text-gray-50
                rounded-bl-lg rounded-br-lg
                filter
                drop-shadow-lg
              "
              v-if="item.items && item.show_sub"
            >
              <div
                class="pl-4 pr-4 h-9 leading-9 text-sm"
                v-for="sub_item in item.items"
                :key="$transData('name', sub_item)"
                @click="onClickSubmenuItem(item, sub_item)"
              >
                {{ $transData("name", sub_item) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex md:hidden h-full justify-end items-center flex-1">
        <icon-park
          type="hamburger-button"
          size="56"
          theme="filled"
          fill="#fff"
          v-if="!isShowMobileMenu"
          @click="isShowMobileMenu = !isShowMobileMenu"
        />
        <icon-park
          type="close"
          size="46"
          theme="filled"
          fill="#fff"
          v-else
          @click="isShowMobileMenu = !isShowMobileMenu"
        />
      </div>
    </div>
    <div
      class="md:hidden absolute left-0 w-full"
      v-if="isShowMobileMenu"
      style="top: 80px; background-color: #1d40af"
    >
      <div
        class="h-12"
        style="border-bottom: 1px dashed #f9f9f9; line-height: 48px"
        v-for="item in settings.menu.items"
        :key="$transData('name', item)"
      >
        <router-link
          v-if="item.link"
          :to="item.link"
          class="text-gray-200 text-center font-bold text-lg"
          >{{ $transData("name", item) }}</router-link
        >
        <div
          v-else
          class="text-gray-200 text-center font-bold text-lg h-12"
          style="line-height: 48px"
          @click="onToggleSubmenu(item)"
        >
          <span>{{ $transData("name", item) }}</span
          ><icon-park
            type="down"
            size="18"
            theme="filled"
            fill="#fff"
            v-if="item.items"
            class="inline-block font-light ml-2"
          />
        </div>
        <div v-if="item.items" class="bg-blue-800 mt-0">
          <div
            v-for="sub_item in item.items"
            :key="$transData('name', sub_item)"
            class="text-gray-200 text-center font-bold text-lg h-10 leading-10"
            @click="onClickSubmenuItem(item, sub_item)"
          >
            {{ $transData("name", sub_item) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/style.css";
</style>

<script>
import { mapState, mapActions } from "vuex";
import { IconPark } from "@icon-park/vue-next/es/all";
export default {
  props: {
    settings: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  components: {
    IconPark,
  },
  computed: mapState({
    currentUser: (state) => {
      return state.user.currentUser;
    },
    currentMenu: function () {
      let items = [];
      for (let item of this.settings.menu.items) {
        if (item.link == "/account/login" || item.link == "/account/regist") {
          if (this.currentUser) {
            continue;
          }
        } else if (item && item.link == "/user/profile") {
          if (!this.currentUser) {
            continue;
          }
        }
        items.push(item);
      }
      return items;
    },
  }),
  created() {
    console.log("current_user1111:", this.currentUser);
  },
  data() {
    return {
      isShowMobileMenu: false,
    };
  },
  methods: {
    onToggleSubmenu(item) {
      item.show_sub = !item.show_sub;
    },
    onClickSubmenuItem(item, sub_item) {
      if (item.type === "language") {
        this.setLanguage(sub_item);
        setTimeout(() => {
          item.show_sub = false;
        }, 300);
      }
    },
    setLanguage(item) {
      this.$i18n.locale = item.value;
      localStorage.setItem("locale", item.value);
    },
    isShowMenuItem(item) {
      console.log(item);
      console.log("current_user:", this.currentUser);
      if (
        item &&
        (item.link == "/account/login" || item.link == "/account/regist")
      ) {
        if (this.currentUser) {
          return false;
        }
      } else if (item && item.link == "/user/profile") {
        if (!this.currentUser) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>
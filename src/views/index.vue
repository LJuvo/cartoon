<template>
  <div class="acg">
    <div class="acg-header">{{menuTitle}}</div>
    <div class="acg-content">
      <router-view></router-view>
    </div>
    <div class="acg-footer">
      <menu-model :initarr="menus" @on-checked-menu="onMenuChanged"></menu-model>
    </div>
  </div>
</template>

<script>
import { appRouter } from "../router/defines";
export default {
  components: {
    MenuModel: () => import("../components/basic/menu")
  },
  data() {
    return {
      menus: appRouter.children,
      menuTitle: "ACG"
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onMenuChanged(type) {
      if (type === "logout") {
        this.$store.dispatch("logout");
      } else {
        this.$router.push({ path: type });
        let title = _.find(this.menus, { path: type });
        this.menuTitle = title.name;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.acg {
  position: relative;
  height: 100%;
  width: 100%;
  background: #efefef;
  &-header {
    background: #ffffff;
    height: 64px;
    line-height: 64px;
    font-size: 22px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #dddddd;
  }
  &-content {
    height: calc(100vh - 114px);
    padding: 16px;
    overflow: hidden;
    overflow-y: auto;
  }
  &-footer {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    background: #ffffff;
    // box-shadow: 3px 3px 12px #c0c0c0;
    border-top: 1px solid #dddddd;
  }
}
</style>
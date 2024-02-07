<script lang="ts" setup>
import NavTabs from "@/layout/NavTabs.vue";
import Menu from "@/layout/Menu.vue";

const menu = [
    {
        title: "控制台",
        path:'/console'   
    },
    {
        title: "权限管理",
        path: "/auth",
        children: [
            {
                title: "系统菜单",
                path: "/system/menu",
            },
            {
                title: "管理员",
                path: "/system/user"
            },
            {
                title: "用户角色",
                path:'/system/role'
            }
        ]
    },
    {
        title: "设备管理",
        path:'/device'
    },
    {
        title: "工单管理",
        path:"/work/order"
    }
]
</script>
<template>
  <ElContainer class="layout-container">
    <ElAside class="layout-aside" router defeault-active="0">
      <ElMenu  router  class="layout-menu">
        <Menu :option="menu"></Menu>
      </ElMenu>
    </ElAside>
    <ElContainer class="layout-main">
      <ElHeader class="layout-header"><NavTabs></NavTabs></ElHeader>
      <ElMain>
        <RouterView></RouterView>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<style lang="scss" scope>
.layout-container {
    height: 100vh;
    width:100vw;
    overflow: hidden;
    background-color: #f1f1f1;
  .layout-aside {
    width: 220px;
    padding:  0;
    margin:0;
    .layout-menu {
      width: 220px;
      height: 100vh;
      border:none;
    }
  }
  .layout-main {
    padding: 0;
    margin: 0;
  .layout-header {
    height: 40px;
    background-color: #ffffff;
  }
  }
}
</style>

<script lang="ts" setup>
import { ElContainer, ElHeader, ElMenu } from 'element-plus'
import NavMenu from '@/views/layout/NavMenu.vue'
import { ref } from 'vue'
const menu = ref([
    {
        title: '控制台',
        path: '/console',
    },
    {
        title: '权限管理',
        path: '/auth',
        children: [
            {
                title: '管理员',
                path: '/system/user',
            },
            {
                title: '系统菜单',
                path: '/system/menu',
            },
            {
                title: '角色管理',
                path: '/system/role',
            },
        ],
    },
])
</script>
<template>
    <ElContainer>
        <ElAside width="200px">
            <ElMenu :router="true" default-active="1">
                <NavMenu :option="menu" path-key="path"></NavMenu>
            </ElMenu>
        </ElAside>
        <ElContainer>
            <ElHeader height="50">header</ElHeader>
            <ElMain>
                <RouterView />
            </ElMain>
        </ElContainer>
    </ElContainer>
</template>
<style lang="scss" scope></style>


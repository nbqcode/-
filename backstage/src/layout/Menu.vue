<script lang="ts" setup>
interface MenuItem{
    title: string
    path: string
    icon?:string
    children?:Array<MenuItem>
}

defineProps<{
    option:Array<MenuItem>
}>()
defineOptions({
    name:"NavMenu"
})
</script>
<template>
    <template v-for="item in option">
    <ElSubMenu v-if="item.children?.length" :index="item.path">
        <template #title>
            {{ item.title }}
        </template>
        <NavMenu :option="item.children"></NavMenu>
    </ElSubMenu>
    <ElMenuItem v-else :index="item.path">{{ item.title }}</ElMenuItem>
    </template>
</template>

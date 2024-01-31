<script lang="ts" setup generic="T extends NavMenu">
export interface NavMenu {
  title: string;
  children?: NavMenu[];
  [props: string]: any;
}
const props = defineProps<{
  option: NavMenu[];
  pathKey: keyof T;
}>();
</script>
<template>
  <template v-for="(item, index) in option">
    <template v-if="item.children?.length">
      <ElSubMenu :index="item[pathKey]">
        <template #title>
          {{ item.title }}
        </template>
        <NavMenu :option="item.children" :path-key="pathKey"></NavMenu>
      </ElSubMenu>
    </template>
    <ElMenuItem v-else :index="item[pathKey]">{{ item.title }} </ElMenuItem>
  </template>
</template>

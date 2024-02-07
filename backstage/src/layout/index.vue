<script lang="ts" setup>
    import Menu  from "@/layout/Menu.vue";
    
</script>
<template>
    <ElContainer>
        <ElAside width="220px" router  defeault-active="0">
            <ElMenu>
                <Menu></Menu>
            </ElMenu>   
       </ElAside>
       <ElContainer>
            <ElHeader>
                this is of header 
            </ElHeader>
            <ElMain>
                fsdfsf
                <RouterView></RouterView>
            </ElMain>
       </ElContainer>
    </ElContainer>
</template>
<style lang="scss" scope>
   .layout{
        
   }
</style>
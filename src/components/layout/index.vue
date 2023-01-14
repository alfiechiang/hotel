<template>
    <div class="container">
        <div class="left">

            <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#191A24"
            text-color="white"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group>
                        <template #title><span>Group One</span></template>
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title><span>item four</span></template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <template #title>Navigator Two</template>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon>
                        <document />
                    </el-icon>
                    <template #title>Navigator Three</template>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
            </el-menu>

        </div>
        <div class="right">
            <div class="top"></div>
            <div class="content"></div>
        </div>
    </div>
</template>
<script setup lang="ts" >

</script>
<style lang="scss" scoped>
.el-menu {
    border-right: 0;
  }
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

    .left {
        width: 15vw;
        height: 100vh;
        padding: 10px;
        background: #191A24;
    }

    .right {
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        .top {
            width: 100vw;
            height: 70px;
            border: 0.5px solid gray;
        }

        .content {
            background: #EEF2F5;
            width: 100%;
            height: 100%;

        }
    }
}
</style>
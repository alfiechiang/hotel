<template>
    <div class="container">
        <div class="left" :style="{background:themeColor}">

            <el-menu default-active="2" class="el-menu-vertical-demo" :background-color="themeColor" text-color="white">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><Avatar /></el-icon>
                        <span>帳戶管理</span>
                    </template>
                    <el-menu-item index="2">
                        <el-icon><User /></el-icon>
                        <template #title>個人中心</template>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item index="3" disabled>
                    <el-icon>
                        <document />
                    </el-icon>
                    <template #title>客房管理</template>
                </el-menu-item>
            </el-menu>

        </div>
        <div class="right">
            <div class="top">
                <div class="avatar">
                    <img src="@/assets/avatar.jpeg" alt="">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            mr.奇森
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item><el-icon><UserFilled /></el-icon>個人資訊</el-dropdown-item>
                                <el-dropdown-item @click="changeThemeColor"><el-icon><Setting /></el-icon>切換主題</el-dropdown-item>

                                <el-dropdown-item @click="logout" ><el-icon><Promotion /></el-icon>登出</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts" >

import {ref} from 'vue';




    let themeColor = ref("#191A24");
    const changeThemeColor = () =>{
        themeColor.value ="#223e36"
    }

    const logout = ()=>{
        alert("Logout");
    }




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
    }

    .right {
        width: 85vw;
        height: 100vh;
        padding-bottom: 10px;

        .top {
            width: 100%;
            height: 8vh;
            border-bottom: 0.1px solid gray;
            display: flex;
            flex-direction: row-reverse;

            .avatar {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 150px;
                height: 100%;
                color: #606268;

                img {
                    margin-right: 10px;
                    max-height: 50%;
                    border-radius: 50%;

                }
                span{
                    cursor: pointer;

                }
            }
        }

        .content {
            background: #EEF2F5;
            width: 100%;
            height:92vh;
            padding: 20px;
            overflow: hidden;

        }
       
    }
}
</style>
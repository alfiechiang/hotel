<template>
    <div id="person">
        <div class="title">
            <h4>用戶訊息</h4>
        </div>
        <div class="item">
            <span>帳號：</span>
            <el-input v-model="account" disabled />
        </div>
        <div class="img-item">
            <span>頭像：</span>
            <el-image style="width:100px;height:100px;border-radius:50%;margin-left: 20px;" :src="url" />
        </div>
        <div class="item">
            <span>暱稱：</span>
            <el-input disabled />
        </div>
        <div class="item">
            <span>角色：</span>
            <el-input disabled />
        </div>
    </div>

</template>
<script setup lang="ts">
const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

const account ="Rice"

</script>
<style lang="scss">
#person {
    width: 100%;
    height: 100%;

    .title {
        width: 100%;
        height: 30px;
        border-left: 8px solid #429DFF;
        padding-left: 15px;
        display: flex;
        align-items: center;
    }

    .img-item {
        margin-top: 20px;
        height: 100px;
        width: 500px;
        display: flex;
    }

    .item {
        margin-top: 20px;
        height: 40px;
        width: 500px;
        display: flex;
        text-align: center;

        span {
            width: 60px;
            height: 40px;
            display: flex;
            align-items: center;
        }

    }

}
</style>
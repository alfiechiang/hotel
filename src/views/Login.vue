<template>
    <div class="container">
        <div class="login-box">
            <div class="item">
                <h1>Bing 酒店管理系統</h1>
            </div>
            <div class="item" style="margin-top:40px">
                <span>帳號：</span>
                <el-input size="large"  placeholder="請輸入帳號" />
            </div>
            <div class="item">
                <span>密碼：</span>
                <el-input size="large" type="password" show-password placeholder="請輸入密碼" />
            </div>
                <el-button  round type="primary" class="login-button" size="large">登入</el-button>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
    .container {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(to bottom,rgb(18,55,80),lightblue);
        display: flex;
        align-items: center;
        justify-content: center;
        .login-box{
           
            .item{
                display: flex;
                margin: 20px 0;
                align-items: center;
                h1{
                    flex: 1;
                    text-align: center;
                }
            }
            span{
                width: 60px;
            }
            color: white;
            padding: 25px;
            width: 500px;
            height: 400px;
            border-radius: 20px;

            .login-button{
                margin-top: 30px;
                text-align: center;
                width: 100%;
            }
        }
    }
    
</style>
<template>



    <div class="box">
        <el-button color="#626aef">新增房型</el-button>

        <div class="content">
            <el-table  ref="dataTableRef" :data="List" style="width:100%">
                <el-table-column prop="name" label="房間名稱" width="120" />
                <el-table-column prop="price" label="價格" width="120" />
                <el-table-column prop="bed_num" label="床位數" width="600" />
                <el-table-column fixed="right" label="Operations" width="120">
                    <template #default>
                        <el-button link type="primary" size="small">編輯</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>



    </div>



</template>
<script setup lang="ts">

import request from '@/utils/request';
import {reactive,toRefs,onBeforeMount} from 'vue';


export interface RoomTypeList  {
    ID :number
    roomID: number
    name:string
    price:number
    bed_num:number
}



const state = reactive({
    List :[]

})
const {
    List
} = toRefs(state);


const tableData = [
  {
    roomID: 1,
    name: 'Tom',
    price: 123,
    bed_num:4
  },
]



const roomTypeList = async()=>{
   await request({
      url: '/admin/roomtype',
      method: 'get',
   }).then((res) => {

    List.value =res.data

   })
}

onBeforeMount(() => {
    roomTypeList();
})









</script>
<style lang="scss">

.box {
    width: 100%;
    height: 500px;
    padding: 20px;
    background: white;
}

</style>
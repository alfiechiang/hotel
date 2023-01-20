<template>
    <div class="box">
        <el-table :data="tableData" style="width: 100%" max-height="250">
            <el-table-column prop="name" label="角色ID" width="350" />
            <el-table-column prop="state" label="角色名稱" width="350" />
           
            <el-table-column fixed="right" label="操作" width="500">
              <template #default="scope">
                <div class="operation ">
                    <el-button type="primary" size="small">編輯</el-button>
                    <el-button type="primary" size="small">刪除</el-button>
                    
                </div>
              
              </template>
            </el-table-column>
          </el-table>
    </div>
</template>
<script  setup lang="ts">

import {ref} from 'vue'
const tableData = ref([
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])

</script>
<style>
    .box{
        width: 100%;
        height: 100%;
        background: white;
        overflow: hidden;

    }

    .operation {
        margin-left: 70px;
        width: 200px;
        height: 50px;
        display: flex;
        align-items: center;
    }
</style>
<template>
    <div class="box">

        <el-button color="#626aef" class="addrole">新增角色</el-button>

        <el-table :data="tableData" style="width:100%;margin-left: 30px;" max-height="250">
            <el-table-column prop="name" label="角色ID" width="350" />
            <el-table-column prop="state" label="角色名稱" width="350" />

            <el-table-column fixed="right" label="操作" width="500">
                <template #default="scope">
                    <div class="operation ">
                        <el-button type="primary" size="small">編輯</el-button>
                        <el-button type="danger" size="small">刪除</el-button>

                    </div>

                </template>
            </el-table-column>
        </el-table>
        <div class="pager">
            <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 50]"
            layout="total, sizes, prev, pager, next, jumper" :total="400" />

        </div>
       
    </div>
</template>
<script  setup lang="ts">

import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(10)




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
.box {
    width: 100%;
    height: 100%;
    background: white;
    overflow: hidden;

}

.addrole {
    margin: 20px 0px 30px 20px;
}

.operation {
    margin-left: 70px;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
}

.pager {
    margin-top: 250px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
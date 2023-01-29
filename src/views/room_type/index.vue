<template>



    <div class="box">
        <el-button color="#626aef" @click="createDialogVisible = true">新增房型</el-button>

        <div class="content">
            <el-table ref="dataTableRef" :data="List" :cell-style="{ width: '100%', height: '50px' }">
                <el-table-column prop="typeID" label="房型編號" width="120" />

                <el-table-column prop="name" label="房間名稱" width="120" />
                <el-table-column prop="price" label="價格" width="120" />
                <el-table-column prop="bed_num" label="床位數" width="600" />
                <el-table-column fixed="right" label="Operations" width="120">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click="onEdit(scope.row)">編輯</el-button>
                        <el-button type="primary" size="small" @click="handleImgDialog(scope.row)">照片</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <div class="pager">
            <el-pagination current-page="4" page-size="10" :page-sizes="[10, 20, 30, 40]"
                layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange" :total="total" />
        </div>

        <el-dialog v-model="createDialogVisible" title="新增房型" width="50%">
            <el-form :model="form" label-width="68px">
                <el-form-item label="房型編號">
                    <el-input v-model.number="form.typeID" />
                </el-form-item>
                <el-form-item label="房型名稱">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="價錢">
                    <el-input v-model.number="form.price" />
                </el-form-item>
                <el-form-item label="床位數">
                    <el-select v-model.number="form.bed_num" placeholder="請選擇床位數">
                        <el-option label="1" value=1 />
                        <el-option label="2" value="2" />
                        <el-option label="3" value="3" />
                        <el-option label="4" value="4" />
                        <el-option label="5" value="5" />
                        <el-option label="6" value="6" />
                    </el-select> </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">新增</el-button>
                    <el-button @click="onCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>



        <el-dialog v-model="editDialogVisible" title="編輯房型" width="50%">
            <el-form :model="form" label-width="68px">
                <el-form-item label="房型編號">
                    <el-input v-model.number="form.typeID" />
                </el-form-item>
                <el-form-item label="房型名稱">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="價錢">
                    <el-input v-model.number="form.price" />
                </el-form-item>
                <el-form-item label="床位數">
                    <el-select v-model.number="form.bed_num" placeholder="請選擇床位數">
                        <el-option label="1" value=1 />
                        <el-option label="2" value="2" />
                        <el-option label="3" value="3" />
                        <el-option label="4" value="4" />
                        <el-option label="5" value="5" />
                        <el-option label="6" value="6" />
                    </el-select> </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onUpdate">更新</el-button>
                    <el-button @click="onCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <el-dialog v-model="imgdialogVisible" title="照片牆" width="60%">
            <el-upload v-model:file-list="fileList" name="image" action="http://localhost:3000/admin/upload"
                list-type="picture-card" :on-success="uploadImg" :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <el-icon>
                    <Plus />
                </el-icon>
            </el-upload>

            <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog> <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="imgdialogVisible = false">
                        確定
                    </el-button>
                </span>
            </template>
        </el-dialog>


    </div>



</template>
<script setup lang="ts">

import request from '@/utils/request';
import { reactive, toRefs, onBeforeMount, ref } from 'vue';
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps, UploadUserFile } from 'element-plus'



export interface RommTypeSearch {
    page: number | undefined;
    page_size: number | undefined;
}

export interface RommTypeForm {
    name: string | undefined;
    price: number;
    typeID: number
    bed_num: number;
}

const state = reactive({
    List: [],
    search: {} as RommTypeSearch,
    form: {} as RommTypeForm
})
const {
    List,
    search,
    form
} = toRefs(state);



let currentPage = ref(1)
let total = ref(0)
let pageSize = ref(10)
const handleCurrentChange = (val: number) => {
    currentPage.value = val
    roomTypeList()
}

const onCancel = () => {
    createDialogVisible.value = false
    editDialogVisible.value = false
    form.value = {} as RommTypeForm
}

const onSubmit = async () => {

    await request({
        url: '/admin/roomtype',
        method: "post",
        data: form.value
    }).then((res: any) => {
        if (res.code == 200) {
            ElMessage({ message: '新增成功', type: 'success' })
        }

    })
    roomTypeList()
    form.value = {} as RommTypeForm
    createDialogVisible.value = false

}

const onEdit = async (row: any) => {
    await request({
        url: '/admin/' + row.typeID + '/roomtype',
        method: 'get',
    }).then((res: any) => {
        form.value = res.data

    })
    editDialogVisible.value = true
}


const onUpdate = async () => {
    await request({
        url: '/admin/roomtype/' + form.value.typeID,
        method: "put",
        data: form.value
    }).then((res: any) => {
        if (res.code == 200) {
            ElMessage({ message: '更新成功', type: 'success' })

        }

        roomTypeList()
        editDialogVisible.value = false
        form.value = {} as RommTypeForm
    })
}

const roomTypeList = async () => {

    search.value.page = currentPage.value;
    search.value.page_size = pageSize.value;
    await request({
        url: '/admin/roomtype',
        method: 'get',
        params: search.value
    }).then((res) => {

        List.value = res.data.data
        total.value = res.data.total

    })
}

onBeforeMount(() => {
    roomTypeList();
})

const createDialogVisible = ref(false)
const editDialogVisible = ref(false)

//圖片上傳
const fileList = ref<UploadUserFile[]>([])

const imgdialogVisible = ref(false)
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url!
    dialogVisible.value = true
}

const handleImgDialog = async(row: any) => {
    typeID =row.typeID
    fileList.value =[]

    await request({
        url:"/admin/roomtype/img",
        method:"get",
        params:{typeID:row.typeID}
    }).then((res:any)=>{
        res.data.forEach((item:any)=>{
            fileList.value.push({
                name:item.img_name,
                url:"http://"+item.img_url
            })
        })
        console.log(fileList.value)
    })

    imgdialogVisible.value = true
}

let typeID =0
const uploadImg = async(res: any) => {

    let imgUrl =res.data.img_url
    let imgName=res.data.img_name

    await request({
        url: '/admin/upload/roomtype_img',
        method: 'post',
        data: {img_url:imgUrl,typeID:typeID,img_name:imgName}
    }).then((res:any) => {
        if (res.code == 200) {
            ElMessage({ message: '新增成功', type: 'success' })
        }
    })
}

</script>
<style lang="scss">
.box {
    width: 100%;
    height: 670px;
    padding: 20px;
    background: white;
}

.pager {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
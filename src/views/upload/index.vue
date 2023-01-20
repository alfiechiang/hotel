<template >
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden;"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>
<script setup lang="ts">

import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const mode = ref('default')
const editorRef = shallowRef()
let html =ref("")


// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
    setTimeout(() => {
        valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    }, 1500)
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...',MENU_CONF: {} }


editorConfig.MENU_CONF['uploadImage'] = {
      server: '/api/upload-img',
      // server: '/api/upload-img-10s', // test timeout
      // server: '/api/upload-img-failed', // test failed
      // server: '/api/xxx', // test 404

      timeout: 5 * 1000, // 5s

      fieldName: 'custom-fileName',
      meta: { token: 'xxx', a: 100 },
      metaWithUrl: true, // join params to url
      headers: { Accept: 'text/x-json' },

      maxFileSize: 10 * 1024 * 1024, // 10M

      base64LimitSize: 5 * 1024, // insert base64 format, if file's size less than 5kb

      onBeforeUpload(file:any) {
        console.log('onBeforeUpload', file)

        return file // will upload this file
        // return false // prevent upload
      },
      onProgress(progress:any) {
        console.log('onProgress', progress)
      },
      onSuccess(file:any, res:any) {
        console.log('onSuccess', file, res)
      },
      onFailed(file:any, res:any) {
        alert(res.message)
        console.log('onFailed', file, res)
      },
      onError(file:any, err:any, res:any) {
        alert(err.message)
        console.error('onError', file, err, res)
      },


    }


    editorConfig.MENU_CONF['uploadImage'] = {
     server: 'localhost:8081/api/upload',
}



    const handleCreated = (editor:any) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

</script>
<style>
    
</style>
<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      v-for="item in table"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      :width="item.width">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref } from 'vue'
const table = [{
  prop: 'schoolId',
  label: '学校ID',
  width: '100'
}, {
  prop: 'schoolName',
  label: '学校名称',
  width: '120'
}, {
  prop: 'schoolAddress',
  label: '学校地址',
  width: '120'
}, {
  prop: 'schoolPhone',
  label: '学校电话',
  width: '150'
}, {
  prop: 'schoolMailbox',
  label: '学校邮箱',
  width: '150'
}, {
  prop: 'typeId',
  label: '学校类型',
  width: '120'
}, {
  prop: 'schoolType',
  label: '学校性质',
  width: '120'
}, {
  prop: 'schoolBrief',
  label: '学校简介',
  width: '120'
}]
const tableData = ref([{
  date: '2016-05-02',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1518 弄',
  zip: 200333
}, {
  date: '2016-05-04',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1517 弄',
  zip: 200333
}, {
  date: '2016-05-01',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1519 弄',
  zip: 200333
}, {
  date: '2016-05-03',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1516 弄',
  zip: 200333
}])
</script>

<style scoped>

</style>

<template>
  <div>
    查询条件
    <div class="dynamic-item-line"></div>
    <div class="as7">
      <div class="as8">
        用户账号：
        <input style="width: 200px; height: 12px; font-size: 10px; padding-left: 12px;" placeholder="请&nbsp;输&nbsp;入&nbsp;账&nbsp;号"/>
      </div>
      <div class="as8">
        真实姓名：
        <input style="width: 200px; height: 12px; font-size: 10px; padding-left: 12px;" placeholder="请&nbsp;输&nbsp;入&nbsp;账&nbsp;号"/>
      </div>
      <div class="as8">
        用户类型：
        <input style="width: 200px; height: 12px; font-size: 10px; padding-left: 12px;" placeholder="请&nbsp;输&nbsp;入&nbsp;账&nbsp;号"/>
      </div>
      <div class="as9">
        <button type="button">查&nbsp;&nbsp;询</button>
      </div>
    </div>
    <div class="as10">
      <el-row class="mb-4">
          <el-button @click="dialogFormVisible = true" style="background-color: #67c23a; color: #ffffff;">添加用户</el-button>
          <el-button type="primary">同步流程</el-button>
          <el-button type="warning">导入</el-button>
          <el-button type="danger">回收站</el-button>
          <el-button type="info">高级查询</el-button>
        </el-row>
    </div>
    <div class="dynamic-item-line"></div>
    数据列表
    <div class="user_table">
      <table>
        <tr>
          <th id="goxuan"><input type="checkbox"/></th>
          <th>用户账号</th>
          <th>用户名称</th>
          <th>头像</th>
          <th>用户类型</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
        <tr>
          <th id="goxuan"><input type="checkbox"/></th>
          <th>dengwei</th>
          <th>邓炜</th>
          <th>相片</th>
          <th>管理员</th>
          <th>2021-12-27 11:30:02</th>
          <th style="color: #0076fe;">编&nbsp;辑&nbsp;&nbsp;更&nbsp;多</th>
        </tr>
        <tr>
          <th id="goxuan"><input type="checkbox"/></th>
          <th>dengwei</th>
          <th>邓炜</th>
          <th>相片</th>
          <th>管理员</th>
          <th>2021-12-27 11:30:02</th>
          <th style="color: #0076fe;">编&nbsp;辑&nbsp;&nbsp;更&nbsp;多</th>
        </tr>
        <tr>
          <th id="goxuan"><input type="checkbox"/></th>
          <th>dengwei</th>
          <th>邓炜</th>
          <th>相片</th>
          <th>管理员</th>
          <th>2021-12-27 11:30:02</th>
          <th style="color: #0076fe;">编&nbsp;辑&nbsp;&nbsp;更&nbsp;多</th>
        </tr>
        <tr>
          <th id="goxuan"><input type="checkbox"/></th>
          <th>dengwei</th>
          <th>邓炜</th>
          <th>相片</th>
          <th>管理员</th>
          <th>2021-12-27 11:30:02</th>
          <th style="color: #0076fe;">编&nbsp;辑&nbsp;&nbsp;更&nbsp;多</th>
        </tr>
      </table>
    </div>
  </div>
  <el-dialog v-model="dialogFormVisible" title="添加用户">
    <div style=" margin-left: 50px; font-size: 12px; display: flex;">
      <div style="color: red;">*</div>用户头像：
      <input type="text" style="width: 72px; height: 74px; font-size: 22px; padding-left: 12px;" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&nbsp;"/>
    </div>
    <div class="dynamic-item-line"></div>
    <div style=" margin-left: 50px; font-size: 12px; display: flex;">
      <div style="color: red;">*</div>真实姓名:
      <input type="text" style="width: 370px; height: 12px; font-size: 10px; padding-left: 3px; margin-left: 8px;" placeholder="请&nbsp;输&nbsp;入&nbsp;真&nbsp;实&nbsp;姓&nbsp;名"/>
    </div>
    <div class="dynamic-item-line"></div>
    <div style=" margin-left: 50px; font-size: 12px; display: flex;">
      <div style="color: red;">*</div>登录账号:
      <input type="text" style="width: 370px; height: 12px; font-size: 10px; padding-left: 3px; margin-left: 8px;" placeholder="请&nbsp;输&nbsp;入&nbsp;登&nbsp;录&nbsp;账&nbsp;号"/>
    </div>
    <div class="dynamic-item-line"></div>
    <div style=" margin-left: 50px; font-size: 12px; display: flex;">
      <div style="color: red;">*</div>登录密码:
      <input type="text" style="width: 370px; height: 12px; font-size: 10px; padding-left: 3px; margin-left: 8px;" placeholder="请&nbsp;输&nbsp;入&nbsp;登&nbsp;录&nbsp;密&nbsp;码"/>
    </div>
    <div class="dynamic-item-line"></div>
    <div style=" margin-left: 50px; font-size: 12px; display: flex;">
      <div style="color: red;">*</div>确认密码:
      <input type="text" style="width: 370px; height: 12px; font-size: 10px; padding-left: 3px; margin-left: 8px;" placeholder="请&nbsp;输&nbsp;入&nbsp;确&nbsp;认&nbsp;密&nbsp;码"/>
    </div>
    <div class="dynamic-item-line"></div>
    <div style="font-size: 12px; margin-left: 50px;">
      <div style="display: flex;">
        <div style="color: red; margin-top: 8px;">*</div>
        <el-form-item  label="用户类型:">
          <el-radio-group>
            <el-radio label="管理员" />
            <el-radio label="老师" />
          </el-radio-group>
        </el-form-item>
      </div>
    </div>
    <div style="display: flex; margin-left: 375px;">
      <div class="as12">
        <button type="button">保&nbsp;存</button>
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
const dialogFormVisible = ref(false)
</script>

<style>
/* .dynamic-item-line {
     margin: 15px 0;
     height: 1px;
     background-color: rgba(0, 0, 0, 0.05);
   } */
  .as7 {
     display: flex;
   }
   .as8 {
     margin-left: 10px;
     font-size: 15px;
   }
   .as9 {
     margin-left: 10px;
     margin-top: -6px;
   }
   .as9 button {
     width: 170%;
     height: 28px;
     border: none;
     background: #0076fe;
     color: #FFFFFF;
     font-size: 10px;
     font-weight: bold;
     border-radius: 5px;
     margin-top: 4px;
   }
   .as10 {
     margin-top: 10px;
     font-size: 11px;
   }
   .as12 button {
     width: 80%;
     height: 26px;
     border: none;
     background: #0076fe;
     color: #FFFFFF;
     font-size: 10px;
     font-weight: bold;
     border-radius: 5px;
     margin-top: -10px;
     margin-left: 40px;
   }
   .user_table {
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
   }
   .user_table table {
     width: 100%;
     margin: 30px;
   }
   .user_table table, table tr th {
     border: 1px solid #ccc;
     border-collapse: collapse;
     height: 40px;
   }
   .user_table table tr th {
     padding: 5px 10px;
   }
</style>

<template>
  <div class="platform">
     <p>微&nbsp;问&nbsp;答&nbsp;云&nbsp;管&nbsp;理&nbsp;平&nbsp;台</p>
  </div>
  <div class="welcome">
    <div class="as5"><!-- <img src="../assets/align-right.png"/> -->
    <i class="iconfont icon-align-right"></i>
    </div>
    <a2>欢迎进入微问答云管理平台</a2>
    <div class="as1"><!-- <img src="../fangdajing .png"/> -->
    <i class="iconfont icon-Magnifier"></i>
    </div>
    <div class="as2"><!-- <img src="../assets/zhuyi.png"/> -->
    <i class="iconfont icon-jinggao"></i>
    </div>
    <div class="as3"><!-- <img src="../assets/lingdang.png"/> -->
    <i class="iconfont icon-lingdang"></i>
    </div>
    <a>欢迎您，超级管理员</a>
    <div class="as4"><!-- <img src="../assets/kaiguan.png"/> -->
    <i class="iconfont icon-tuichudenglu"></i>
    </div>
    <a1>退出登录</a1>
  </div>
  <div class="list"><!-- <img src="../assets/shouye.png"/> -->
  <i class="iconfont icon-fangzi"></i>
  首页
  </div>
<!-- <div class="list1"><img src="../assets/xitongguanli.png"/>
  <i class="iconfont icon-xitongguanli-"></i>
  系统管理
  </div>
  <div class="list3">用户管理</div>
  <div class="list3">角色管理</div>
  <div class="list3">菜单管理</div>
  <div class="list3">租户管理</div>
  <div class="list3">部门管理</div>
  <div class="list3">我的部门</div>
  <div class="list3">职务管理</div>
  <div class="list3">数据字曲</div>
  <div class="list3">分类字典</div>
  <div class="details">首页</div> -->
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
        >
          <el-sub-menu index="1" style="height: calc(100vh - 60px);">
            <template #title>
              <el-icon><location /></el-icon>
              <div class="list1">
              <i class="iconfont icon-xitongguanli-"></i>
              系统管理
              </div>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-0" @click="addTab('/manage/school')">学校管理</el-menu-item>
              <el-menu-item index="1-1" @click="addTab('/manage/user')">用户管理</el-menu-item>
              <el-menu-item index="1-2">角色管理</el-menu-item>
              <el-menu-item index="1-3">菜单管理</el-menu-item>
              <el-menu-item index="1-4">租户管理</el-menu-item>
              <el-menu-item index="1-5">部门管理</el-menu-item>
              <el-menu-item index="1-6">我的部门</el-menu-item>
              <el-menu-item index="1-7">职务管理</el-menu-item>
              <el-menu-item index="1-8">数据字曲</el-menu-item>
              <el-menu-item index="1-9">分类字典</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
    <div>
      <el-tabs
          v-model="editableTabsValue"
          type="card"
          class="demo-tabs"
          closable
          @tab-remove="removeTab"
        >
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{ item.content }}
          </el-tab-pane>
        </el-tabs>
        <div style="margin-left: 200px;">
          <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: '首页',
    name: '1',
    content: '首页'
  }
])
const addTab = (targetName, string) => {
  // const newTabName = `${++tabIndex}`
  editableTabs.value.push({
    title: '用户管理',
    name: targetName
  })
  editableTabsValue.value = targetName
  router.push({ path: targetName })
}
const removeTab = (targetName, string) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }
  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>

<style>
  .platform {
    float: left;
    width: 25%;
    height: 21px;
    background-color: #409eff;
    align-items: center;
    font-weight: bold;
    box-shadow: 4px -3px 10px rgba(0, 0, 0, 0.1);
  }
  .platform p {
    color: aliceblue;
    margin-left: 32px;
  }
  .welcome {
    float: right;
    height: 21px;
    width: 75%;
    background-color: #409eff;
    align-items: center;
    color: aliceblue;
    font-size: 10px;
    display: flex;
    align-items: center;
  }
  .welcome a {
    margin-left: 15px;
    font-size: 7px;
  }
  .welcome a1 {
    display: flex;
    margin-left: 2px;
    font-size: 7px;
  }
  .welcome a2 {
    display: flex;
    margin-left: -25px;
  }
  .as1 .iconfont {
    display: flex;
    height: 9px;
    width: 11px;
    margin-left: 575px;
    font-size: 9px;
  }
  .as2 .iconfont {
    display: flex;
    height: 11px;
    width: 11px;
    margin-left: 15px;
    font-size: 11px;
  }
  .as3 .iconfont {
    display: flex;
    height: 11px;
    width: 11px;
    margin-left: 15px;
    font-size: 11px;
  }
  .as4 .iconfont {
    display: flex;
    height: 11px;
    width: 11px;
    margin-left: 35px;
    font-size: 11px;
  }
  .as5 .iconfont {
    display: flex;
    height: 11px;
    width: 11px;
    margin-left: -45px;
    font-size: 14px;
  }
  .list {
    height: 50px;
    width: 169px;
    color: #409eff;
    display: flex;
    margin-left: 19px;
    align-items: center;
    font-size: 13px;
    box-shadow: 4px -3px 10px rgba(0, 0, 0, 0.1);
  }
  .list3 {
    height: 50px;
    width: 150px;
    color: black;
    display: flex;
    margin-left: 69px;
    align-items: center;
    font-size: 13px;
    box-shadow: 4px -3px 10px rgba(0, 0, 0, 0.1);
  }
  .list .iconfont {
    display: flex;
    height: 15px;
    width: 15px;
    margin-right: 5px;
    top: 39px;
    left: 52px;
    font-size: 13px
  }
  .list1 .iconfont {
    display: flex;
    height: 55px;
    width: 15px;
    margin-right: 4px;
  }
  .list1 {
    height: 50px;
    width: 169px;
    color: black;
    display: flex;
    margin-left: -28px;
    align-items: center;
    font-size: 13px;
  }
  .details {
    display: flex;
    margin-top: -535px;
    margin-left: 265px;
    font-size: 12px;
    color: #409eff;
  }
  .tac {
    width: 377px;
    position: fixed;
  }
  .demo-tabs {
    margin-left: 200px;
    margin-top: -40px;
  }
  .dynamic-item-line {
    margin: 15px 0;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.05);
  }
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
  .as11 button {
    width: 80%;
    height: 26px;
    border: none;
    background: #FFFFFF;
    color: #0076fe;
    font-size: 10px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: -10px;
    margin-left: 40px;
    border: 1px solid #808080;
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
  .div2 {
    position: relative;
    z-index: 2;
  }
</style>

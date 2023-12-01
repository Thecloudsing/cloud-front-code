import {defineComponent, ref} from "vue";
import {RouterView, useRouter} from 'vue-router'
import {ElCol, ElMenu, ElMenuItem, ElMenuItemGroup, ElRow, ElSubMenu, ElTabPane, ElTabs} from "element-plus";
import './index.css'

export default defineComponent({
    name: "Home",
    components: {
        ElCol,
        ElMenu,
        ElMenuItem,
        ElMenuItemGroup,
        ElRow,
        ElSubMenu,
        ElTabPane,
        ElTabs,
        RouterView
    },
    props: {},
    emits: {},
    slots: {},
    setup() {
        const router = useRouter()
        const editableTabsValue = ref<string | number>('2')
        const editableTabs = ref([
            {
                title: '首页',
                name: '1',
                content: '首页'
            }
        ])
        const addTab = (targetName: string) => {
            // const newTabName = `${++tabIndex}`
            editableTabs.value.push({
                title: '用户管理',
                name: targetName,
                content: '用户管理'
            })
            editableTabsValue.value = targetName
            router.push({path: targetName})
        }
        const removeTab = (targetName: string | number) => {
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
        const routers = [
            {
                index: '1-1',
                name: '学校管理',
                onClick: () => addTab('/manage/school')
            }, {
                index: '1-2',
                name: '用户管理',
                onClick: () => {
                }
            }, {
                index: '1-3',
                name: '角色管理',
                onClick: () => {
                }
            }, {
                index: '1-4',
                name: '菜单管理',
                onClick: () => {
                }
            }, {
                index: '1-5',
                name: '租户管理',
                onClick: () => {
                }
            }, {
                index: '1-6',
                name: '部门管理',
                onClick: () => {
                }
            }, {
                index: '1-7',
                name: '我的部门',
                onClick: () => {
                }
            }, {
                index: '1-8',
                name: '职务管理',
                onClick: () => {
                }
            }, {
                index: '1-9',
                name: '数据字曲',
                onClick: () => {
                }
            }, {
                index: '1-10',
                name: '分类字典',
                onClick: () => {
                }
            }
        ]
        return {
            routers,
            editableTabsValue,
            editableTabs,
            addTab,
            removeTab
        }
    },
    render() {
        return (
            <div>
                <div class="platform">
                    <p>微&nbsp;问&nbsp;答&nbsp;云&nbsp;管&nbsp;理&nbsp;平&nbsp;台</p>
                </div>
                <div class="welcome">
                    <div class="as5">
                        {/*<img src="../assets/align-right.png"/>*/}
                        <i class="iconfont icon-align-right"></i>
                    </div>
                    <div>

                    </div>
                    <span class="a2">欢迎进入微问答云管理平台</span>
                    <div class="as1">
                        {/*<img src="../fangdajing .png"/>*/}
                        <i class="iconfont icon-Magnifier"></i>
                    </div>
                    <div class="as2">
                        {/*<img src="../assets/zhuyi.png"/>*/}
                        <i class="iconfont icon-jinggao"></i>
                    </div>
                    <div class="as3">
                        {/*<img src="../assets/lingdang.png"/>*/}
                        <i class="iconfont icon-lingdang"></i>
                    </div>
                    <a>欢迎您，超级管理员</a>
                    <div class="as4">
                        {/*<img src="../assets/kaiguan.png"/>*/}
                        <i class="iconfont icon-tuichudenglu"></i>
                    </div>
                    <a1>退出登录</a1>
                </div>
                <div class="list">
                    {/*<img src="../assets/shouye.png"/>*/}
                    <i class="iconfont icon-fangzi"></i>
                    首页
                </div>
                <ElRow class="tac">
                    <ElCol span={12}>
                        <ElMenu
                            default-active="2"
                            class="el-menu-vertical-demo"
                        >
                            <ElSubMenu
                                index="1"
                                style={{
                                    height: 'calc(100vh - 60px)'
                                }}
                                v-slots={{
                                    title: () => (
                                        <>
                                            <el-icon>
                                                <location/>
                                            </el-icon>
                                            <div class="list1">
                                                <i class="iconfont icon-xitongguanli-"></i>
                                                系统管理
                                            </div>
                                        </>
                                    )
                                }}
                            >
                                <ElMenuItemGroup>
                                    {this.routers.map((item) =>
                                        <ElMenuItem index={item.index} onClick={item.onClick}>{item.name}</ElMenuItem>
                                    )}
                                </ElMenuItemGroup>
                            </ElSubMenu>
                        </ElMenu>
                    </ElCol>
                </ElRow>
                <div>
                    <ElTabs
                        onUpdate:modelValue={(tab) => {
                            this.editableTabsValue = tab
                        }}
                        modelValue={this.editableTabsValue}
                        type="card"
                        class="demo-tabs"
                        closable
                        onTabRemove={this.removeTab}
                    >
                        {this.editableTabs.map((tab, index) => (
                                <ElTabPane
                                    key={tab.name}
                                    label={tab.title}
                                    name={tab.name}
                                    closable={index !== 0}
                                >
                                    {tab.content}
                                </ElTabPane>
                            )
                        )}
                    </ElTabs>
                    <div style={{
                        marginLeft: '200px'
                    }}>
                        <RouterView></RouterView>
                    </div>
                </div>
            </div>
        )
    }
});

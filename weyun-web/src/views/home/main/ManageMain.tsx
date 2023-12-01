import {ref} from "vue";
import {defineComponent} from "vue";
import {ElDialog, ElFormItem, ElRadio, ElRadioGroup, ElRow, ElButton} from "element-plus";
import "./index.css"

export default defineComponent({
    name: "ManageMain",
    components: {ElDialog, ElFormItem, ElRadio, ElRadioGroup, ElRow, ElButton},
    props: {},
    slots: {},
    emits: [],
    setup() {
        const dialogFormVisible = ref(false)
        return {
            dialogFormVisible
        }
    },
    render() {
        return (
            <div>
                <div>
                    查询条件
                    <div class="dynamic-item-line"></div>
                    <div class="as7">
                        <div class="as8">
                            用户账号：
                            <input style={{
                                width: '200px',
                                height: '12px',
                                fontSize: '10px',
                                paddingLeft: '12px'
                            }} placeholder="请&nbsp;输&nbsp;入&nbsp;账&nbsp;号"/>
                        </div>
                        <div class="as8">
                            真实姓名：
                            <input style={{
                                width: '200px',
                                height: '12px',
                                fontSize: '10px',
                                paddingLeft: '12px'
                            }} placeholder="请&nbsp;输&nbsp;入&nbsp;账&nbsp;号"/>
                        </div>
                        <div class="as8">
                            用户类型：
                            <input style={{
                                width: '200px',
                                height: '12px',
                                fontSize: '10px',
                                paddingLeft: '12px'
                            }} placeholder="请&nbsp;输&nbsp;入&nbsp;账&nbsp;号"/>
                        </div>
                        <div class="as9">
                            <button type="button">查&nbsp;&nbsp;询</button>
                        </div>
                    </div>
                    <div class="as10">
                        <ElRow class="mb-4">
                            <ElButton onClick={() => {
                                this.dialogFormVisible = true
                            }}
                                       style={{
                                           background: '#409eff',
                                           color: '#ffffff'
                                       }}>添加用户
                            </ElButton>
                            <ElButton type="primary">同步流程</ElButton>
                            <ElButton type="warning">导入</ElButton>
                            <ElButton type="danger">回收站</ElButton>
                            <ElButton type="info">高级查询</ElButton>
                        </ElRow>
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
                <ElDialog onUpdate:modelValue={(value) => this.dialogFormVisible = value} title="添加用户">
                    <div
                        style={{
                            marginLeft: '50px',
                            fontSize: '12px',
                            display: 'flex'
                        }}
                    >
                        <div style={{
                            color: 'red'
                        }}>*
                        </div>
                        用户头像：
                        <input type="text" style={{
                            width: '72px',
                            height: '74px',
                            fontSize: '22px',
                            paddingLeft: '12px'
                        }} placeholder="&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&nbsp;"/>
                    </div>
                    <div class="dynamic-item-line"></div>
                    <div style={{
                        marginLeft: '50px',
                        fontSize: '12px',
                        display: 'flex'
                    }}>
                        <div style={{
                            color: 'red'
                        }}>*
                        </div>
                        真实姓名:
                        <input type="text" style={{
                            width: '370px',
                            height: '12px',
                            fontSize: '10px',
                            paddingLeft: '3px',
                            marginLeft: '8px'
                        }} placeholder="请&nbsp;输&nbsp;入&nbsp;真&nbsp;实&nbsp;姓&nbsp;名"/>
                    </div>
                    <div class="dynamic-item-line"></div>
                    <div style={{
                        marginLeft: '50px',
                        fontSize: '12px',
                        display: 'flex'
                    }}>
                        <div style={{
                            color: 'red'
                        }}>*
                        </div>
                        登录账号:
                        <input type="text" style={{
                            width: '370px',
                            height: '12px',
                            fontSize: '10px',
                            paddingLeft: '3px',
                            marginLeft: '8px'
                        }} placeholder="请&nbsp;输&nbsp;入&nbsp;登&nbsp;录&nbsp;账&nbsp;号"/>
                    </div>
                    <div class="dynamic-item-line"></div>
                    <div style={{
                        marginLeft: '50px',
                        fontSize: '12px',
                        display: 'flex'
                    }}>
                        <div style={{
                            color: 'red'
                        }}>*
                        </div>
                        登录密码:
                        <input type="text" style={{
                            width: '370px',
                            height: '12px',
                            fontSize: '10px',
                            paddingLeft: '3px',
                            marginLeft: '8px'
                        }} placeholder="请&nbsp;输&nbsp;入&nbsp;登&nbsp;录&nbsp;密&nbsp;码"/>
                    </div>
                    <div class="dynamic-item-line"></div>
                    <div style={{
                        marginLeft: '50px',
                        fontSize: '12px',
                        display: 'flex'
                    }}>
                        <div style={{
                            color: 'red'
                        }}>*
                        </div>
                        确认密码:
                        <input type="text" style={{
                            width: '370px',
                            height: '12px',
                            fontSize: '10px',
                            paddingLeft: '3px',
                            marginLeft: '8px'
                        }} placeholder="请&nbsp;输&nbsp;入&nbsp;确&nbsp;认&nbsp;密&nbsp;码"/>
                    </div>
                    <div class="dynamic-item-line"></div>
                    <div style={{
                        fontSize: '12px',
                        marginLeft: '50px',
                    }}>
                        <div style={{display: 'flex'}}>
                            <div style={{color: 'red', marginTop: '8px'}}>*</div>
                            <ElFormItem label="用户类型:">
                                <ElRadioGroup>
                                    <ElRadio label="管理员"/>
                                    <ElRadio label="老师"/>
                                </ElRadioGroup>
                            </ElFormItem>
                        </div>
                    </div>
                    <div style={{display: 'flex', marginLeft: '375px'}}>
                        <div class="as12">
                            <button type="button">保&nbsp;存</button>
                        </div>
                    </div>
                </ElDialog>
            </div>
        )
    }
});

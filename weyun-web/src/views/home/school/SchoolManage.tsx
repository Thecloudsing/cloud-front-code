import {defineComponent, onMounted, ref} from "vue";
import {ElButton, ElTable, ElTableColumn} from "element-plus";
import {SchoolApi} from "@/service/apis";
import {SchoolQueryType} from "@/service/types";

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

export default defineComponent({
    name: "SchoolManage",
    components: {
        ElButton,
        ElTable,
        ElTableColumn
    },
    setup() {
        const tableData = ref<SchoolQueryType[]>([]);
        onMounted(async () => {
            const data = await SchoolApi.query({})
            if (!data) return
            tableData.value = data
        })
        console.log(ElTableColumn)
        const handleClick = (row: any) => {
            console.log(row)
        }
        return {
            tableData,
            handleClick
        }
    },
    render() {
        return (
            <ElTable
                data={this.tableData}
                border
                style={{
                    width: '100%'
                }}>
                {table.map((item, index) => {
                    return (
                        <ElTableColumn
                            key={index}
                            prop={item.prop}
                            label={item.label}
                            width={item.width}
                            align="center">
                        </ElTableColumn>
                    )
                })}
                <ElTableColumn
                    fixed="right"
                    label="操作"
                    width="150"
                    v-slots={{
                        default: (scope: any) => {
                            return (
                                <>
                                   <ElButton type="text" size="small">编辑</ElButton>
                                    <ElButton onClick={() => {
                                        this.tableData.splice(scope.$index, 1);
                                    }} type="text" size="small">删除</ElButton>
                                </>
                            )
                        },
                    }}
                />
            </ElTable>
        )
    }
});

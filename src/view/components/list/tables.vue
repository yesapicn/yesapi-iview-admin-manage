<template>
  <div>
    <Card>
      <list ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
  </div>
</template>

<script>
import List from '_c/list'
import { getListData } from '@/api/data'
export default {
  name: 'tables_page',
  components: {
    List
  },
  data () {
    return {
      columns: [
        {title: 'catalog', key: 'catalog'},
        {title: '标题', key: 'title', editable: true},
        {title: '关键字', key: 'keywords'},
        {title: '描述', key: 'description'},
        {title: '内容', key: 'content'},
        {title: '点击量', key: 'click_num', sortable: true},
        {title: '发表日期', key: 'create_time'},
        {title: '发布的类型', key: 'publish_type'},
        {
          title: 'Handle',
          key: 'handle',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              })
            }
          ]
        }
      ],
      tableData: []
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
    getListData().then(res => {
      this.tableData = res.data.list
    })
  }
}
</script>

<style>

</style>

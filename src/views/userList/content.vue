<template>
	<div>
		<!-- 人员列表 -->
		<el-table :data="tableData" style="width: 100%">
			<el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
			<el-table-column prop="name" label="姓名" width="180"></el-table-column>
			<el-table-column prop="username" label="user姓名" width="180"></el-table-column>
			<el-table-column prop="phone" label="电话"></el-table-column>
			<el-table-column prop="website" label="网站"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="warning" plain icon="el-icon-edit" @click="userPrint(scope.row)">打印</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 打印预览 -->
		<printPreview v-show="printOpenDialog" @closePreview="closePreview" ref="DYZJ"></printPreview>
	</div>
</template>

<script>
	// 导入打印预览
	import printPreview from "../../components/printPreview.vue"
	
	export default {
		components: {
			printPreview
		},
		data() {
			return {
				// 打印弹框状态
				printOpenDialog: false,
				// 列表数据
				tableData: []
			}
		},
		methods: {
			// 打印
			userPrint: function(row) {
				// 显示报表容器弹框
				this.printOpenDialog = true;
				// 调用子集打印方法
				// 路径
				const path = "/report-design/statistics/user.rdlx-json" ;
				var params = {
					ReportParams: [
						{
							Name:'userId',
							Value:[row.id],
						},
					]
				}
				this.$refs.DYZJ.printFun(path,params);
			},
			// 关闭预览弹框
			closePreview: function(data) {
				if (data === false) {
					this.printOpenDialog = false;
				} else {
					this.printOpenDialog = true;
				}
			},
			// 获取列表
			getUserListDatas: function() {
				this.$axios({
					url: "http://jsonplaceholder.typicode.com/users",
					method: "get"
				}).then(res => {
					this.tableData = res.data;
				})
			}
		},
		created() {
			this.getUserListDatas();
		}
	}
</script>

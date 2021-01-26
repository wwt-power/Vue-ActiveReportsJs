<template>
	<div>
		<div id="viewer-host" v-show="reportStatus">
			<JSViewer ref="reportViewer"></JSViewer>
		</div>

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
	</div>
</template>

<script>
	import {Viewer} from "@grapecity/activereports-vue";
	import "@grapecity/activereports/styles/ar-js-ui.css";
	import "@grapecity/activereports/styles/ar-js-viewer.css";

	import "@grapecity/activereports/pdfexport";
	import "@grapecity/activereports/htmlexport";
	import "@grapecity/activereports/xlsxexport";
	import "@grapecity/activereports-localization";

	export default {
		components: {
			JSViewer: Viewer,
		},
		data() {
			return {
				reportStatus:false,
				// 列表数据
				tableData: [],
				// 详情数据
				userDetail: {}
			}
		},
		methods: {
			// 打印
			userPrint: function(row) {
				// 显示报表容器
				this.reportStatus = true;
				//加载报表
				this.$refs.reportViewer.Viewer().open("/report-design/statistics/user.rdlx-json",
					{
						ReportParams: [
							{
								Name:'userId',
								Value:[row.id],
							},
						],
					},
					{language: 'zh'}
				);
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

<style>
</style>

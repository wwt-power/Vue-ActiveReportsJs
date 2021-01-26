<template>
	<div>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
			<el-table-column prop="name" label="姓名" width="180"></el-table-column>
			<el-table-column prop="username" label="user姓名" width="180"></el-table-column>
			<el-table-column prop="phone" label="电话"></el-table-column>
			<el-table-column prop="website" label="网站"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button
						size="mini" type="warning" 
						plain icon="el-icon-edit" 
						@click="userPrint(scope.row)"
					>打印</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 列表数据
				tableData: [],
				// 详情数据
				userDetail:{}
			}
		},
		methods: {
			// 打印
			userPrint: function(row) {
				console.log(row.id);
				this.$axios({
					url: "http://jsonplaceholder.typicode.com/users",
					method: "get",
					params: {id:row.id}
				}).then(res => {
					this.userDetail = res.data[0];
					console.log(this.userDetail);
				})
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

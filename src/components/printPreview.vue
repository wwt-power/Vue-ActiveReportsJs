<template>
	<div class="printFullscreen">
		<!-- 顶部页面标题 header *************** 开始 -->
		<printOpenTitle v-bind:printOpenTitle="printOpenTitle" @exitFun="exitPreview"></printOpenTitle>
		<!-- 顶部页面标题 header *************** 结束 -->
		<div class="printScrollBar">
			<el-scrollbar style="height:100%">
				<div id="viewer-host">
					<JSViewer ref="reportViewer"></JSViewer>
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>

<script>
	import printOpenTitle from "./printOpenTitle.vue"
	import {
		Viewer
	} from "@grapecity/activereports-vue";
	import "@grapecity/activereports/styles/ar-js-ui.css";
	import "@grapecity/activereports/styles/ar-js-viewer.css";

	import "@grapecity/activereports/pdfexport";
	import "@grapecity/activereports/htmlexport";
	import "@grapecity/activereports/xlsxexport";
	import "@grapecity/activereports-localization";

	export default {
		components: {
			JSViewer: Viewer,
			printOpenTitle
		},
		data() {
			return {
				// 弹框名称
				printOpenTitle: "打印预览"
			}
		},
		methods: {
			// 打印
			printFun: function(path, params) {
				//加载报表
				this.$refs.reportViewer.Viewer().open(path, params);
			},
			// 退出
			exitPreview: function() {
				this.$emit('closePreview', false);
			}
		},
		mounted() {
			// this.$refs.reportViewer.Viewer().toolbar.updateLayout({
			//   default: [
			//     "$zoom",
			//     "$split",
			//     "$fullscreen",
			//     "$split",
			//     "$print",
			//     "$split",
			//     "$about",
			//   ],
			//   fullscreen: ["$fullscreen", "$split", "$print", "$split", "$about"],
			//   mobile: ["$navigation", "$split", "$about"],
			// });
			// 侧边栏隐藏
			this.$refs.reportViewer.Viewer().toggleSidebar();
		}
	}
</script>

<style scoped>
	/* 滚动条 */
	.printScrollBar{
		width: 100%;
		/* height: calc(100% - 60px); */
	}
	.printFullscreen >>> .gcv-document-view{
		height: calc(100% - 111px);
	}
	.printFullscreen >>> .gcv-header-container--fullscreen{
		position: fixed;
	}
	.printFullscreen >>> .gc-viewer{
		background: #eff3f9;
	}
</style>

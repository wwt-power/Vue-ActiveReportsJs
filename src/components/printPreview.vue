<template>
	<div class="printFullscreen">
		<!-- 顶部页面标题 header *************** 开始 -->
		<printOpenTitle v-bind:printOpenTitle="printOpenTitle" @exitFun="exitPreview"></printOpenTitle>
		<!-- 顶部页面标题 header *************** 结束 -->
		<div id="viewer-host">
			<JSViewer ref="reportViewer"></JSViewer>
		</div>
	</div>
</template>

<script>
	import printOpenTitle from "./printOpenTitle.vue"
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
			printOpenTitle
		},
		data(){
			return{
				// 弹框名称
				printOpenTitle:"打印预览"
			}
		},
		methods:{
			// 打印
			printFun: function(path,params) {
				//加载报表
				this.$refs.reportViewer.Viewer().open(path , params);
			},
			// 退出
			exitPreview:function(){
				this.$emit('closePreview',false);
			}
		}
	}
</script>

<style>
</style>

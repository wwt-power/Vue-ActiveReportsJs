<template>
	<div id="designer-host"></div>
</template>

<script>
	import {
		Designer as ReportDesigner
	} from "@grapecity/activereports/reportdesigner";
	import "@grapecity/activereports-localization/dist/designer/zh-locale";

	import "@grapecity/activereports/styles/ar-js-ui.css";
	import "@grapecity/activereports/styles/ar-js-designer.css";

	export default {
		name: "DesignerHost",
		mounted: function() {
			new ReportDesigner("#designer-host", {
				language: "zh"
			});
		},
	};
</script>

<style scoped>
	#designer-host {
		margin: 0 auto;
		width: 100%;
		height: 100vh;
	}
</style>

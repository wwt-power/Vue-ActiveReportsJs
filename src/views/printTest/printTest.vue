<template>
  <div id="viewer-host">
    <JSViewer
      :report="{
        Uri: '../report-design/statistics/cs02.rdlx-json',
      }"
      language="zh"
      ref="reportViewer"
    ></JSViewer>
  </div>
</template>


<script>
  import { Viewer } from "@grapecity/activereports-vue";
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
  mounted() {
    this.$refs.reportViewer.Viewer().toolbar.updateLayout({
      default: [
        "$zoom",
        "$split",
        "$fullscreen",
        "$split",
        "$print",
        "$split",
        "$about",
      ],
      fullscreen: ["$fullscreen", "$split", "$print", "$split", "$about"],
      mobile: ["$navigation", "$split", "$about"],
    });
    //viewer.toggleToolbar(false);    //隐藏整个工具栏。
    // 侧边栏隐藏
    this.$refs.reportViewer.Viewer().toggleSidebar();
    //（FitToWidth）宽度自适应   （FitPage）整页显示
    this.$refs.reportViewer.Viewer().zoom = 'FitToWidth';


  }
};

</script>

<style scoped="scoped">
  #viewer-host {
    width: 100%;
    height: 500px;
  }
</style>

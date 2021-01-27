<template>
	<div class="population_title">
		<dl class="clear">
			<dd>
				<h3>{{printOpenTitle}}</h3>
			</dd>
			<dt>
				<ul class="clear">
					<li>
						<button class="popt_exit" plain v-on:click="exitProcessing">
							<i class="iconfont icon-wwt_exit"></i>退出预览
						</button>
					</li>
				</ul>
			</dt>
		</dl>
	</div>
</template>

<script>
	export default {
		props: ["printOpenTitle"],
		methods: {
			// 退出办理
			exitProcessing: function() {
				this.$emit('exitFun');
			}
		}
	}
</script>

<template>
	<view class="news-detail">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间: {{detail.addTime | formatDate}}</text>
			<text>浏览次数:{{detail.click}}</text>
		</view>
		<view class="content">
			
			<rich-text :nodes="detail.zhaiyao"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				detail: {}
			}
		},
		methods: {
			async getNewsDetail() {
				const res = await this.$myRequest({
					url: 'api/getNews?id=' + this.id
				})
				this.detail = res.data.message
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getNewsDetail()
		}
	}
</script>

<style lang="scss">
	.news-detail {
		font-size: 30rpx;
		padding: 0 20rpx;

		.title {
			text-align: center;
			width: 710rpx;
			display: block;
			margin: 20rpx 0;
		}

		.info {
			display: flex;
			justify-content: space-between;
		}
	}
</style>

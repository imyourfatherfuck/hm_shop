<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view v-for="(item,index) in cates" :class="currentIndex === index ? 'active' : ''" :key="item.id" @click="leftClick(index,item.id)">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData" :key="item.id">
				<image @click="preViewImage(item.imgUrl)" :src="item.imgUrl" />
				{{item.title}}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				currentIndex: 0,
				secondData: []
			}
		},
		onLoad() {
			this.getPicdsCate()
		},
		methods: {
			async getPicdsCate() {
				const res = await this.$myRequest({
					url: 'api/getimgcategory'
				})
				this.cates = res.data.message
				this.leftClick(0, this.cates[0].id)
			},
			async leftClick(index, id) {
				this.currentIndex = index
				const res = await this.$myRequest({
					url: '/api/getimages/?cateId=' + id
				})
				this.secondData = res.data.message
			},
			preViewImage(current) {
				const urls = this.secondData.map(item => {
					return item.imgUrl
				})
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			.active {
				background: $shop-color;
				color: #fff
			}
		}

		.right {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;

			.item {
				image {
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}

				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>

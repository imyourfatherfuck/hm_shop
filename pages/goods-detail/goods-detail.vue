<template>
	<view class="goods-detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{info.sellPrice}}</text>
				<text>￥{{info.marketPrice}}</text>
			</view>
			<view class="goods-name">
				{{info.title}}
			</view>
		</view>
		<view class="line"></view>
		
		<view class="box2">
			<view>货号: SD156489784156</view>
			<view>库存: {{info.stockQuantity}}</view>
		</view>
		<view class="line"></view>
		
		<view class="box3">
			<view class="title">详情介绍</view>
			<view class="content">{{info.zhaiyao}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				swipers: [],
				info: {}
			}
		},
		methods: {
			async getSwipers() {
				const res = await this.$myRequest({
					url: 'api/getDetailSwipers?pid=' + this.id
				})
				this.swipers = res.data.message
			},
			async getGoodsById(){
				const res = await this.$myRequest({
					url: 'api/getGoodsById?id='+this.id
				})
				this.info = res.data.message
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getSwipers()
			this.getGoodsById()
		}
	}
</script>

<style lang="scss">
	.goods-detail {
		swiper {
			height: 700rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.box1 {
			padding: 10px;

			.price {
				font-size: 34rpx;
				color: $shop-color;
				line-height: 80rpx;
				text:nth-child(2) {
					font-size: 30rpx;
					color: #ccc;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}
		}
		.box2 {
			padding: 0 10px;
			font-size: 30rpx;
			line-height: 60rpx;
		}
		.box3 {
			.title {
				font-size: 30rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 60rpx;
			}
			.content {
				font-size: 26rpx;
				padding: 10px;
				color: #333;
			}
			
		}
		.goods-name {
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}
	
	.line {
		height: 10rpx;
		width: 750rpx;
		background: #eee;
	}
</style>

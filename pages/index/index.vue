<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img" />
			</swiper-item>
		</swiper>
		
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item">
				<view class="iconfont icon-ziyuan"></view>
				<text>黑马超市</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</view>
		</view>
		
		
		<!-- 推荐商品区域 -->
		<view class="hot-goods">
			<view class="tit">推荐商品</view>
			<view class="goods-list">
				<view class="goods-item" v-for="item in goods">
					<image :src="item.imgUrl"/>
					<view class="price">
						<text>￥{{item.sellPrice}}</text>
						<text>￥{{item.marketPrice}}</text>
					</view>
					<view class="name">
						{{item.title}}
					</view>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [],
				goods: []
			}
		},
		onLoad() {
			this.getSwipers()
			this.getGoods()
		},
		methods: {
			//获取轮播图数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: 'api/swipers/findAll'
				})
				this.swipers = res.data.message
			},
			async getGoods() {
				const res = await this.$myRequest({
					///api/getgoods?pageIndex=3&pageSize=5
					url: 'api/getgoods?pageIndex=1'
				})
				console.log(res)
				this.goods = res.data.message
				
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;
			image {
				height: 100%;
				width: 100%;
			}	
		}
		.nav {
			display: flex;
			.nav-item {
				flex: 1;
				text-align: center;
				view {
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}
				.icon-tupian {
					font-size: 40rpx;
				}
				text {
					font-size: 30rpx;
				}
			}
		}
		
		.hot-goods{
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
		}
		
		.goods-list {
			padding: 0 15rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.goods-item {
				background: #fff;
				width: 355rpx;
				margin: 10px 0;
				padding: 15rpx;
				box-sizing: border-box;
				image {
					width: 80%;
					height: 150px;
					display: block;
					margin: auto;
				}
				.price {
					color: $shop-color;
					font-size: 36rpx;
					margin: 20rpx 0 6px 0;
					text:nth-child(2) {
						color: #ccc;
						font-size: 28rpx;
						margin-left: 16rpx;
						text-decoration: line-through;
					}
				}
				
				.name {
					font-size: 28rpx;
					line-height: 50rpx;
					padding-bottom: 15rpx;
					padding-top: 10rpx;
				}
			}
		}
	}
	
</style>

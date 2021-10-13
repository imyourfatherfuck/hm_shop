<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img" />
			</swiper-item>
		</swiper>

		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>

		</view>


		<!-- 推荐商品区域 -->
		<view class="hot-goods">
			<view class="tit">推荐商品</view>
			<goods-list :goods="goods" @goodsItemClick="goGoodsDetail" />
		</view>

	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list'
	export default {
		data() {
			return {
				pageIndex: 1,
				swipers: [],
				goods: [],
				navs: [{
					icon: 'iconfont icon-ziyuan',
					title: '黑马超市',
					path: '/pages/goods/goods'
				}, {
					icon: 'iconfont icon-guanyuwomen',
					title: '联系我们',
					path: '/pages/contact/contact'
				}, {
					icon: 'iconfont icon-tupian',
					title: '社区图片',
					path: '/pages/pics/pics'
				}, {
					icon: 'iconfont icon-shipin',
					title: '学习视频',
					path: '/pages/videos/videos'
				}]
			}
		},
		components: {
			goodsList
		},
		onLoad() {
			this.getSwipers()
			this.getGoodsList()
		},
		methods: {
			//获取轮播图数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: 'api/swipers/findAll'
				})
				this.swipers = res.data.message
			},
			async getGoodsList() {
				const res = await this.$myRequest({
					///api/getgoods?pageIndex=3&pageSize=5
					url: 'api/getgoods?pageIndex=' + this.pageIndex
				})
				this.goods = res.data.message

			},

			//导航跳转
			navItemClick(url) {
				uni.navigateTo({
					url
				})
			},
			//跳转到商品详情页
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
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

		.hot-goods {
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
	}
</style>

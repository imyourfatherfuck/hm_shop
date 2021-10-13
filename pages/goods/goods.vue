<template>
	<view class="goods-list">
		<goods-list @goodsItemClick="goGoodsDetail"  :goods="goods"></goods-list>
		<view class="is-over" v-if="flag">-----我是有底线的-----</view>
	</view>

</template>

<script>
	import goodsList from '../../components/goods-list/goods-list'
	export default {
		data() {
			return {
				pageIndex: 1,
				flag: false,
				goods: []
			}
		},
		components: {
			goodsList
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			if (this.goods.length < this.pageIndex * 10) {
				this.flag = true
				return
			}
			this.pageIndex++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.pageIndex = 1
			this.goods = []
			this.flag = false
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh()
				})
			}, 1000)

		},
		methods: {
			async getGoodsList(callBack) {
				const res = await this.$myRequest({
					url: 'api/getgoods?pageIndex=' + this.pageIndex
				})
				this.goods = [...this.goods, ...res.data.message]
				callBack && callBack()
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
	.goods-list {
		background: #eee;
	}

	.is-over {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
</style>

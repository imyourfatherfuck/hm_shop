<template>
	<view class="goods-list">
		<view class="goods-item" v-for="item in goods" :key="item.id" @click="navigator(item.id)">
			<image :src="item.imgUrl" />
			<view class="price">
				<text>￥{{item.sellPrice}}</text>
				<text>￥{{item.marketPrice}}</text>
			</view>
			<view class="name">
				{{item.title}}
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:{
			goods:{
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {
			navigator(id) {
				this.$emit('goodsItemClick', id)
			}
		}
	}
</script>

<style lang="scss">
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
</style>

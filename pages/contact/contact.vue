<template>
	<view class="contact">
		<image class="image" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"/>
		<view class="info">
			<view @click="callPhone('0535-123456789')">联系电话: 123456789(点击拨打)</view>
			<view>校区地址:山东省烟台市开发区重庆大街</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="markers" :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scale: 14,
				latitude: 37.682038,
				longitude: 121.082752,
				markers: [{
					latitude: 37.681981,
					longitude: 121.08275,
					iconPath: "../../static/hmlogo.png",
					width: 30,
					height: 30
				}]
			}
		},
		methods: {
			callPhone(phoneNumber) {
				uni.makePhoneCall({
					phoneNumber
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.image {
			width: 750rpx;
			height: 320rpx;
		}
		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>

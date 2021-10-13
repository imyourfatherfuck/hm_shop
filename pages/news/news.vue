<template>
	<view class="news">
		<news-item :newsList="newsList" @itemClick="goDetail"></news-item>
	</view>
</template>

<script>
	import NewsItem from '../../components/news-item/news-item'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		components:{
			NewsItem
		},
		onLoad(){
			this.getNews()
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: 'api/getnewslist'
				})
				this.newsList = res.data.message
			},
			goDetail(id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.news {
		
	}
</style>

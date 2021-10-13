import Vue from 'vue'
import App from './App'
import { myRequest } from './utils/api.js'

Vue.prototype.$myRequest = myRequest
Vue.filter('formatDate',date => {
	const newDate = new Date(date)
	const year = newDate.getFullYear()
	const month = newDate.getMonth() + 1
	const day = newDate.getDate()
	return year + '-' + month + '-' + day
})


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

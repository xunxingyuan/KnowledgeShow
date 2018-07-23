var lists = []
$(document).ready(function(){

	axios.get('/api/public/query').then(function (res) {
		if(res.data.code === 200){
			res.data.data.lists.forEach(function (value) {
				value.modify = new Date(value.modify).toLocaleString()
			})
			lists = res.data.data.lists
			$('#question').tmpl(lists).appendTo("#content")
		}
	})
})
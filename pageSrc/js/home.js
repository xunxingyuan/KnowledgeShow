(function () {

})()

$(document).ready(function(){
	var lists = [
		{
			"id": "1531992037697_2415",
			"author": "xun",
			"title": "测试分享",
			"preview": "这是一个关于内容的部分",
			"type": 0,
			"price": 20,
			"modify": 1531992037697,
			"count": 0
		},
		{
			"id": "1531992054917_6569",
			"author": "xun",
			"title": "测试分享",
			"preview": "这是一个关于内容的部分",
			"type": 0,
			"price": 20,
			"modify": 1531992054917,
			"count": 0
		}
	]
	console.log($('#question'))
	$('#question').tmpl(lists).appendTo("#content")
})
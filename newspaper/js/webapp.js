//var allUrl = "http://192.168.199.143:8081/lnet/";
//var allUrl = "http://192.168.1.204:9081/lnet/";
var allUrl = "http://apps.lianziapp.com:8081/lnet/";
var newUrl='http://apps.lianziapp.com:8081/lznet/';
var app = angular.module('rupterApp', ['ui.router']);
window.onload = function() {
		var titlee = document.title;
		var uuu = navigator.userAgent;
		if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) == true) {
			console.log('ios')
			window.webkit.messageHandlers.ios.postMessage({
				title: titlee
			});
		}
	}
	//------------------------------------------------------------------------------
	//截取标题长度添加省略号
app.filter('limitToNum', function() {
	return function(input, num) {
		if(input.length > num) {
			input = input.substring(0, num) + "...";
		}
		return input;
	};
});

//-----------------------------------------------------------------------------
//路由跳转
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider

		.state('vipNews', { //商会页
		url: '/vipNews',
		templateUrl: 'vipNews.html'
	})

	//	.state('vipNewsList', { //新闻详情页
	//			url: '/vipNews/vipNewsList?lianId&id',
	//			templateUrl: 'vipNewsList.html'
	//		})
	.state('busNews', { //商会页
		url: '/busNews',
		templateUrl: 'busNews.html'
	})

	//	.state('busNewsList', { //新闻详情页
	//			url: '/busNews/busNewsList?industryId&type&id',
	//			templateUrl: 'busNewsList.html'
	//		})
	//获取url地址中的联Id
	$urlRouterProvider.otherwise('/vipNews');
});

//--------------------------------------------------------------------------------
//联网站
app.controller("vipNews", ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//频道title
	document.title = '会员联报';
	var uuu = navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) == true) {
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({
			title: '会员联报'
		});
	}

	//获取url地址中的联Id
	$scope.orgid = $location.search().lianId;
	$scope.userId = $location.search().userId;

	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		//		"orgId": $scope.orgid,
		"lianId": $scope.orgid,
		"userId": $scope.userId,
		"pageSize": 7,
		"pageNum": $scope.pageNum
	};

	$http({
		url: allUrl + 'lian/report',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
		}
		console.log(data)
			//隐藏加载条
		$scope.loaddingHide = true;
		//处理数据
		$scope.data = [];
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.DivClass = function(e) {
			if(!e) {
				return 'news_only';
			} else {
				return 'news_left';
			}
		}
		$scope.imgShow = function(e) {
			if(e == 1) {
				return false;
			} else {
				return true;
			}
		}

		function paixu() {
			$scope.time = [];
			$scope.dat = [];
			for(var i = 0; i < $scope.data.length; i++) {
				if($scope.time.indexOf($scope.data[i].createDate) == -1) {
					$scope.time.push($scope.data[i].createDate)
				}
			}
			for(var i = 0; i < $scope.time.length; i++) {
				var geshi = {
					time: '',
					Da: []
				}
				geshi.time = $scope.time[i]

				for(var j = 0; j < $scope.data.length; j++) {
					if($scope.data[j].createDate == $scope.time[i]) {
						geshi.Da.push($scope.data[j])
					}
				}
				$scope.dat.push(geshi)
			}
		}

		paixu()

		//-----------------------------------------------------------------------------------
		//按顺序执行懒加载【防止出现先出现第3页的内容，再出现第二页的内容】
		$scope.zhixing = 1
		$scope.loadShow = false;
		window.onscroll = function() {

			function lan() {
				//声明  scrollTop  值
				$scope.loadShow = true;
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {

					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"lianId": $scope.orgid,
						"userId": $scope.userId,
						"pageSize": 7,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'lian/report',
						method: "post",
						headers: {
							'Content-Type': 'application/json'
						},
						data: $scope.params,
					}).success(function(data) {
						$scope.zhixing = 1;
						for(var i = 0; i < data.ctn.list.length; i++) {
							$scope.data.push(data.ctn.list[i])
						}
						paixu()
					})
				}
				if($scope.pageNum == $scope.lastPage) {
					$scope.loadShow = false;
				}

			}
			lan()

			function topRef(divName) {
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				//  touchstart事件
				document.body.addEventListener('touchstart', touchstart, false);
				//  touchmove 事件
				document.body.addEventListener('touchmove', touchmove, false);
				//  touchend  事件
				document.body.addEventListener('touchend', touchend, false);
				$scope.topLoad = 0;

				function touchstart(ev) {
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.evy = touch.pageY;
					if(top == 0) {
						$scope.stop = 1;
					} else {
						$scope.stop = 0;
					};
				};
				//---------------------------------------------------------------------
				function touchmove(ev) {

					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					//					ev.preventDefault();
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					//					var newsNew = document.getElementById(divName);
					$scope.yP = $scope.My - $scope.evy;
					//					newsNew.style.top=$scope.yP+'px';
					if($scope.stop == 1 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2);
						$scope.tLoad = 1;
					} else {
						window.event.cancelBubble = true;
						$scope.tLoad = 0;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.tLoad == 1 && $scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"lianId": $scope.orgid,
								"userId": $scope.userId,
								"pageSize": 7,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'lian/report',
								method: "post",
								headers: {
									'Content-Type': 'application/json'
								},
								data: $scope.refr,
							}).success(function(data) {
								console.log(data)
								$scope.pageNum = 1;
								$scope.yP = 0;
								$(divName).stop().delay(1000).animate({
									"top": 0 + 'px'
								}, 'linear', function() {
									$('.topLoad').html('请求刷新');
								});
								$('.topLoad').html('刷新成功');
								$scope.data = data.ctn.list;
								paixu()
								lan()
							})

						})
					} else {
						$(divName).stop().animate({
							"top": 0 + 'px'
						}, 'linear', function() {})
					}
				}
			}
			topRef('#vipNews')
		}
	}).error(function() {
		console.log('失败')
	})
	$scope.vipClick = function(moduleId, ctnId, ctnName, autoId,orgId) {

		function select() {
			if(moduleId == 9001) { //联系我们
				var skip = newUrl+"relation/index.html#/index?orgId=" + orgId;
				return false;
			} else if(moduleId == 9002) { //领导班子
				var skip = newUrl+"chamber/index.html#/channel/commerce/lead/lead_dilist?orgId=" + orgId + "&smallId=" + autoID;
				console.log('2')
				return false;
			} else if(moduleId == 9003) { //商会章程
				var skip = newUrl+"chamber/index.html#/channel/commerce/statutes?orgId=" + orgId;
				console.log('3')
			} else if(moduleId == 9005) { //新闻动态
				var skip = newUrl+"chamber/index.html#/channel/commerce/news_trend/all_list" + "?orgId=" + orgId + '&ctnId=' + ctnId + '&moduleId=' + moduleId + '&ctnName=' + ctnName;
				console.log('adf')

			} else if(moduleId == 9006) { //企业简介
				var skip = newUrl+"channel/commerce/company_summary?orgId=" + orgId;
				console.log('6')
			} else if(moduleId == 9007) { //商会简介
				var skip = newUrl+"chamber/index.html#/channel/commerce/summary?orgId=" + orgId;
				console.log('7')
			}
			return skip;
		}
		var skipp = select()
		console.log(skipp)

		
		window.location.href = skipp;
		
		
	}
}]);

//新闻列表
app.controller("busNews", ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//频道title
	document.title = '商务动态';
	var uuu = navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) == true) {
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({
			title: '商务动态'
		});
	}
	//获取url地址中的联Id
	$scope.orgid = $location.search().industryId;
	$scope.type = $location.search().type;
	$scope.userId = $location.search().userId;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	if($scope.type==3){
		$scope.typeId=1;
	}else if($scope.type==4){
		$scope.typeId=2;
	}else if($scope.type==5){
		$scope.typeId=3;
	}
	$scope.params = {
		"industryId": $scope.orgid,
		"typeId": $scope.typeId,
		"userId":$scope.userId,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	console.log($scope.params)
	$http({
		url: allUrl + 'industry/report',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
		}
		console.log(data)
			//隐藏加载条
		$scope.loaddingHide = true;
		//处理数据
		$scope.data = [];
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.DivClass = function(e) {
			if(!e) {
				return 'news_only';
			} else {
				return 'news_left';
			}
		}
		$scope.imgShow = function(e) {
			if(e == 1) {
				return false;
			} else {
				return true;
			}
		}
		
		function paixu() {
			$scope.time = [];
			$scope.dat = [];
			for(var i = 0; i < $scope.data.length; i++) {
				if($scope.time.indexOf($scope.data[i].createDate) == -1) {
					$scope.time.push($scope.data[i].createDate)
				}
			}
			for(var i = 0; i < $scope.time.length; i++) {
				var geshi = {
					time: '',
					Da: []
				}
				geshi.time = $scope.time[i]

				for(var j = 0; j < $scope.data.length; j++) {
					if($scope.data[j].createDate == $scope.time[i]) {
						geshi.Da.push($scope.data[j])
					}
				}
				$scope.dat.push(geshi)
			}
		}
		paixu()

		//-----------------------------------------------------------------------------------
		//按顺序执行懒加载【防止出现先出现第3页的内容，再出现第二页的内容】
		//懒加载
		$scope.zhixing = 1
		$scope.loadShow = false;
		window.onscroll = function() {
			function lan() {
				//声明  scrollTop  值

				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.loadShow = true;
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"industryId": $scope.orgid,
						"typeId": $scope.typeId,
						"userId":$scope.userId,
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'industry/report',
						method: "post",
						headers: {
							'Content-Type': 'application/json'
						},
						data: $scope.params,
					}).success(function(data) {
						$scope.zhixing = 1;
						for(var i = 0; i < data.ctn.list.length; i++) {
							$scope.data.push(data.ctn.list[i])
						}
						paixu();
						//								window.location.href ='index.html#/index?pageNum='+$scope.pageNum;
					})
				}
				if($scope.pageNum == $scope.lastPage) {
					$scope.loadShow = false;
				}
			}
			lan()

			function topRef(divName) {
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				//  touchstart事件
				document.body.addEventListener('touchstart', touchstart, false);
				//  touchmove 事件
				document.body.addEventListener('touchmove', touchmove, false);
				//  touchend  事件
				document.body.addEventListener('touchend', touchend, false);
				$scope.topLoad = 0;

				function touchstart(ev) {
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.evy = touch.pageY;
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					if(top == 0) {
						$scope.stop = 1;
					} else {
						$scope.stop = 0
					}
				};
				//---------------------------------------------------------------------
				function touchmove(ev) {

					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					//					ev.preventDefault();
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					//					var newsNew = document.getElementById(divName);
					$scope.yP = $scope.My - $scope.evy;
					//					newsNew.style.top=$scope.yP+'px';
					
					if($scope.stop == 1 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2);
						$scope.tLoad = 1;
					} else {
						window.event.cancelBubble = true;
						$scope.tLoad = 0;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.tLoad == 1 && $scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"industryId": $scope.orgid,
								"typeId": $scope.typeId,
								"userId":$scope.userId,
								"pageSize": 10,
								"pageNum": $scope.pageNum
							}

							$http({
								url: allUrl + 'industry/report',
								method: "post",
								headers: {
									'Content-Type': 'application/json'
								},
								data: $scope.refr,
							}).success(function(data) {
								
								$scope.pageNum = 1;
								$scope.yP = 0;
								$(divName).stop().delay(1000).animate({
									"top": 0 + 'px'
								}, 'linear', function() {
									$('.topLoad').html('请求刷新');
								});
								$('.topLoad').html('刷新成功');
								$scope.data = data.ctn.list;
								paixu()
								lan()
							})

						})
					} else {
						$(divName).stop().animate({
							"top": 0 + 'px'
						}, 'linear', function() {})
					}
				}
			}
			topRef('#busNews')
		}
	}).error(function() {
		console.log('失败')
	})
	$scope.busClick = function(moduleId, ctnId,ctnName, autoId,orgId) {
		
		function select() {
			if(moduleId == 9001) { //联系我们
				var skip = newUrl+"relation/index.html#/index?orgId=" + orgId;
				return false;
			} else if(moduleId == 9002) { //领导班子
				var skip = newUrl+"chamber/index.html#/channel/commerce/lead/lead_dilist?orgId=" + orgId + "&smallId=" + autoID;
				console.log('2')
				return false;
			} else if(moduleId == 9003) { //商会章程
				var skip = newUrl+"chamber/index.html#/channel/commerce/statutes?orgId=" + orgId;
				console.log('3')
			} else if(moduleId == 9005) { //新闻动态
				var skip = newUrl+"chamber/index.html#/channel/commerce/news_trend/all_list" + "?orgId=" + orgId + '&ctnId=' + ctnId + '&moduleId=' + moduleId + '&ctnName=' + ctnName;
				console.log('adf')

			} else if(moduleId == 9006) { //企业简介
				var skip = newUrl+"channel/commerce/company_summary?orgId=" + orgId;
				console.log('6')
			} else if(moduleId == 9007) { //商会简介
				var skip = newUrl+"chamber/index.html#/channel/commerce/summary?orgId=" + orgId;
				console.log('7')
			}
			return skip;
		}
		var skipp = select()
		console.log(skipp)

		
		window.location.href = skipp;
		
	}
}]);

//-----------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
//新闻详情
app.controller('vipNewsList', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//页面title
	document.title = '会员联报';
	var uuu = navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) == true) {
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({
			title: '会员联报'
		});
	}
	//获取url中的组织id
	$scope.orgid = $location.search().lianId;
	$scope.autoId = $location.search().id;
	$scope.params = {
		"orgId": $scope.orgid,
		"autoId": $scope.autoId,
		'moduleId': $scope.moduleId,
	}
	$http({
		url: allUrl + 'news/id',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//隐藏加载条
		$scope.loaddingHide = true;
		$scope.vipNewsList = data.ctn;
		$('.content').html($scope.vipNewsList.content)
	})
}]);

app.controller('busNewsList', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//设置页面title
	document.title = '商务动态';
	var uuu = navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) == true) {
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({
			title: '商务动态'
		});
	}
	//获取url中的组织id
	$scope.orgid = $location.search().lianId;
	$scope.autoId = $location.search().id;
	$scope.params = {
		"orgId": $scope.orgid,
		"autoId": $scope.autoId,
	};
	$http({
		url: allUrl + 'news/id',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//隐藏加载条
		$scope.loaddingHide = true;
		$scope.busNewsList = data.ctn;
		$('.content').html($scope.busNewsList.content)
	});
}]);

app.filter('resetTime', function() {
	return function(obj) {
		var newTime = new Date().getTime();
		var ttime = [];
		ttime[0] = obj.substring(0, 4);
		ttime[1] = parseInt(obj.substring(5, 7) - 1);
		ttime[2] = obj.substring(8, 10)
		var oldTime = new Date(ttime[0], ttime[1], ttime[2]).getTime();
		var chaTime = newTime - oldTime;
		var day = parseInt(chaTime / 1000 / 3600 / 24);
		if(day == 0) {
			return '今天';
		} else if(day == 1) {
			return '昨天';
		} else {
			return ttime[1]+'月'+ttime[2]+'日';
		}
	};
});
//--------------------------------------------------------------------------------------
//转换时间锉
app.filter('dateTime', function() {
	return function(obj) {
		var time = new Date(obj);
		var hour = time.getHours();
		var minute = time.getMinutes();
		if(String(minute).length == 1) {
			minute = '0' + minute
		}
		var dateT = hour + ':' + minute;
		return dateT;
	};
});
app.filter('bigDate', function() {
	return function(obj) {
		var time = new Date(obj);
		var year = time.getFullYear();
		var month = time.getMonth() + 1;
		var day = time.getDate();
		var dateT = year + '/' + month + '/' + day;
		if(isNaN(year) == true || isNaN(month) == true || isNaN(day) == true) {
			return '';
		} else {
			return dateT;
		}
	};
});
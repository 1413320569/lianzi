//var allUrl = "http://192.168.1.204:9081/lnet/";
var allUrl = "http://apps.lianziapp.com:8081/lnet/";
//var allUrl = "http://192.168.199.143:8081/lnet/";
var app = angular.module('rupterApp', ['ui.router']);
window.onload=function(){
	
	var uuu=navigator.userAgent;
	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	onresize = function() {
		document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	};
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
	.state('channel', { //频道也
		url: '/channel',
		templateUrl: 'channel.html'
	})
	.state('commerce', { //商会页
		url: '/channel/commerce',
		templateUrl: 'consult.html'
	})
//	.state('company', { //企业页
//		url: '/channel/company',
//		templateUrl: 'company.html'
//	})

	//商会部分
	.state('summary', { //商会简介
		url: '/channel/commerce/summary?orgId',
		templateUrl: 'summary.html',
	})

	.state('statutes', { //商会章程
		url: '/channel/commerce/statutes?orgId',
		templateUrl: 'statutes.html'
	})

	.state('lead', { //领导班子
		url: '/channel/commerce/lead?orgId',
		templateUrl: 'lead.html'
	})

	.state('lead_dilist', { //领导信息
		url: '/channel/commerce/lead/lead_dilist?orgId&smallId&ctnId',
		templateUrl: 'lead_dilist.html'
	})

	.state('news_trend', { //新闻动态
		url: '/channel/commerce/news_trend?orgId',
		templateUrl: 'news_trend.html'
	})

	.state('all_list', { //新闻动态
		url: '/channel/commerce/news_trend/all_list?orgId&ctnId',
		templateUrl: 'all_list.html'
	})

	.state('mien', { //会员风采
		url: '/channel/commerce/mien?orgId',
		templateUrl: 'mien.html'
	})

	.state('mine_list', { //会员风采
		url: '/channel/commerce/mien/mine_list?orgId&ctnId',
		templateUrl: 'mine_list.html'
	})

	.state('talkwidth', { //互动交流
		url: '/channel/commerce/talkwidth?orgId',
		templateUrl: 'talkwidth.html'
	})

	.state('talkwidth_list', { //互动交流
		url: '/channel/commerce/talkwidth/talkwidth_list?orgId&ctnId',
		templateUrl: 'talkwidth_list.html'
	})

	.state('notice', { //互动交流
		url: '/channel/commerce/notice?orgId',
		templateUrl: 'notice.html'
	})

	.state('notice_list', { //互动交流
		url: '/channel/commerce/notice/notice_list?orgId&ctnId',
		templateUrl: 'notice_list.html'
	})

	.state('public', { //商会刊物
		url: '/channel/commerce/public?orgId',
		templateUrl: 'public.html'
	})

	.state('public_list', { //商会刊物
		url: '/channel/commerce/public/public_list?orgId&ctnId',
		templateUrl: 'public_list.html'
	})

	.state('honor', { //商会荣誉
		url: '/channel/commerce/honor?orgId',
		templateUrl: 'honor.html'
	})

	.state('honor_list', { //商会荣誉
		url: '/channel/commerce/honor/honor_list?orgId&ctnId',
		templateUrl: 'honor_list.html'
	})

	//企业部分
	.state('company_summary', { //企业简介
		url: '/channel/commerce/company_summary?orgId',
		templateUrl: 'company_summary.html'
	})

	.state('company_lead', { //企业管理
		url: '/channel/commerce/company_lead?orgId',
		templateUrl: 'company_lead.html'
	})

	.state('company_lead_dilist', { //企业管理详情
		url: '/channel/commerce/company_lead/company_lead_dilist?orgId&smallId&ctnId',
		templateUrl: 'company_lead_dilist.html'
	})

	.state('company_honor', { //企业荣誉
		url: '/channel/commerce/company_honor?orgId',
		templateUrl: 'company_honor.html'
	})

	.state('company_honor_list', { //企业荣誉详情
		url: '/channel/commerce/company_honor/company_honor_list?orgId&ctnId',
		templateUrl: 'company_honor_list.html'
	})

	.state('company_compet', { //企业荣誉
		url: '/channel/commerce/company_compet?orgId',
		templateUrl: 'company_compet.html'
	})

	.state('company_compet_list', { //企业荣誉详情
			url: '/channel/commerce/company_compet/company_compet_list?orgId&ctnId',
			templateUrl: 'company_compet_list.html'
		})
		.state('company_culture', { //企业文化
			url: '/channel/commerce/company_culture?orgId',
			templateUrl: 'company_culture.html'
		})
		.state('company_culture_dilist', { //企业荣誉详情
			url: '/channel/commerce/company_culture/company_culture_dilist?orgId&ctnId',
			templateUrl: 'company_culture_dilist.html'
		})
		.state('company_news', { //企业新闻动态
			url: '/channel/commerce/company_news?orgId',
			templateUrl: 'company_news.html'
		})
		.state('company_news_list', { //企业新闻动态详情
			url: '/channel/commerce/company_news/company_news_list?orgId&ctnId',
			templateUrl: 'company_news_list.html'
		})

	.state('company_notice', { //企业新闻动态
		url: '/channel/commerce/company_notice?orgId',
		templateUrl: 'company_notice.html'
	})

	.state('company_notice_list', { //企业新闻动态详情
		url: '/channel/commerce/company_notice/company_notice_list?orgId&ctnId',
		templateUrl: 'company_notice_list.html'
	})

	.state('company_product', { //企业新闻动态
		url: '/channel/commerce/company_product?orgId',
		templateUrl: 'company_product.html'
	})

	.state('company_product_list', { //企业新闻动态详情
		url: '/channel/commerce/company_product/company_product_list?orgId&ctnId',
		templateUrl: 'company_product_list.html'
	})

	$urlRouterProvider.otherwise('/channel/commerce');
});
//频道部分---------------------------------------------
app.controller('channel',['$scope','$location','$http',function($scope,$location,$http){
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	var uuu=navigator.userAgent;


}])
app.controller('company', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//获取url地址中的组织id，组织typet
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	$scope.orgid = $location.search().orgId;
	$scope.orgType = $location.search().orgType;
}]);
//商会部分
//-------------------------------------------------------------------------------
//中国电子商会
app.controller('commerce', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	var uuu=navigator.userAgent;
	onresize = function() {
		document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	};
	//获取url地址中的组织id，组织typet
	//频道title
	$scope.orgName = $location.search().orgName;
	document.title=$scope.orgName;
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: $scope.orgName});
	}	
	$scope.orgid = $location.search().orgId;
	$scope.orgType = $location.search().orgType;
	if($scope.orgType.substring(0,3)=='A01'){
		$scope.companyShow=false;
		$scope.commerceShow=true;
	}else if($scope.orgType.substring(0,1)=='C'){
		$scope.companyShow=true;
		$scope.commerceShow=false;
	};
}]);

//--------------------------------------------------------------------------------
//中国电子商会简介
app.controller('summary', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title；
	
	document.title='商会简介';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '商会简介'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//获取数据
	$scope.params = {
		"orgId": $scope.orgid,
	}
	$http({
		url: allUrl + "orgIntroduction/commerce/get",
		method: "post",
		headers: {
			'Content-Type': 'application/json',
		},
		data: $scope.params
	}).success(function(data) {
		console.log(data)
		//加载条隐藏
		$scope.loaddingHide=true;
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
		}else{
			
			console.log(data);
			$scope.data = data.ctn;
		}
		
	}).error(function() {
		alert("获取失败")
	})
}]);

//-----------------------------------------------------------------------------
//中国电子商会章程
app.controller('statutes', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='商会章程';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '商会章程'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//获取数据
	$scope.params = {
		"orgId": $scope.orgid
	}
	$http({
		url: allUrl + "rules/get",
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params
	}).success(function(data) {
		console.log(data)
		//加载条隐藏
		$scope.loaddingHide=true;
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}else{
			$scope.data = data.ctn;
			$('.content').html($scope.data.rulesCtn)
		}
		
		
	}).error(function() {
		alert("获取失败")
	})
}]);

//--------------------------------------------------------------------------------
app.filter('leadPic', function() {
	return function(obj) {
		if(obj == null) {
			return 'images/lead_Pic.png';
		} else {
			return obj;
		}
	};
});
//----------------------------------------------------------
//领导班子
app.controller('lead', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='领导班子';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '领导班子'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//图片判定
	
	$scope.params = {
		"orgId": $scope.orgid,
	}
	$http({
		url: allUrl + 'leader/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data){
		//加载条隐藏
		$scope.loaddingHide=true;
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}else{
			$scope.data = data.ctn;
			$scope.imgShow=function(imgUrl){
				if(imgUrl){
					return imgUrl;
				}else{
					return "images/lead_Pic.png";
				}
			}	
		}
		
		
	})
}]);

//--------------------------------------------------------------------------------
//会员风采
app.controller('mien', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {

	//频道title
	document.title='会员风采';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '会员风采'});
	}	
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
//	定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":201,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		console.log(data)
		//隐藏加载条
		$scope.loaddingHide=true;
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}else{
		
			//处理数据
			$scope.data = []
			$scope.data = data.ctn.list;
			//最后一页的页数
			$scope.lastPage = data.ctn.lastPage;
			//封装的排序方法     页面逻辑
			$scope.divClass = function(e) {
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
			window.onscroll = function() {
				$scope.loadShow = true;
	
				function lan() {
					//声明  scrollTop  值
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
						$scope.pageNum++;
						$scope.zhixing = 0;
						$scope.params = {
							"orgId": $scope.orgid,
							"typeId":201,
							"pageSize": 10,
							"pageNum": $scope.pageNum
						};
						$http({
							url: allUrl + 'news/get',
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
					}else{
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
							$scope.stop = 0;
						}
					};
					//---------------------------------------------------------------------
					function touchmove(ev) {
						var top = document.documentElement.scrollTop || document.body.scrollTop;
						var ev = ev || event;
						var touch = ev.touches[0];
						$scope.My = touch.pageY;
						$scope.yP = $scope.My - $scope.evy;
						if($scope.stop == 1 && $scope.yP > 0) {
							ev.preventDefault();
							$(divName).css('top', $scope.yP / 2);
							$scope.tLoad = 1;
						} else {
							$scope.tLoad = 0;
							window.event.cancelBubble = true;
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
									"orgId": $scope.orgid,
									"typeId":201,
									"pageSize": 10,
									"pageNum": 1
								}
	
								$http({
									url: allUrl + 'news/get',
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
				topRef('#mien')
			}
		}
		
	}).error(function() {
		console.log('失败')
	})
}]);

//会员风采详情
app.controller('mine_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='会员风采';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '会员风采'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		"orgId": $scope.orgid,
		"autoId": $scope.ctnId,
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
		$scope.loaddingHide=true;
		$scope.mineList = data.ctn;
		$('.content').html($scope.mineList.content)
	})
}]);

//-------------------------------------------------------------------------------
//领导班子详情
app.controller('lead_dilist', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='领导班子';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '领导班子'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	$scope.smallId = $location.search().smallId;

	$scope.params = {
		"orgId": $scope.orgid,
		"autoId": $scope.smallId,
	}
	$http({
		url: allUrl + 'leader/id',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.leadDilist = data.ctn
		$scope.imgShow=function(imgUrl){
			if(imgUrl){
				return imgUrl;
			}else{
				return "images/lead_Pic.png";
			}
		}
	})
	$scope.sendLead = function(e) {
		$rootScope.leadDilist = e;
	}

}]);

//-------------------------------------------------------------------------------------------
//新闻动态
app.controller('news_trend', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	
	//频道title
	
	document.title='新闻动态';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '新闻动态'});
	}	
	
		
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().id;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":205,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		console.log(data)
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.data = []
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.divClass = function(e) {
			if(!e) {
				return 'news_only';
			} else {
				return 'news_left';
			}
		}
//		$scope.imgShow = function(e) {
//			if(e == 1) {
//				return false;
//			} else {
//				return true;
//			}
//		}

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
		console.log($scope.dat)
		//-----------------------------------------------------------------------------------
		//按顺序执行懒加载【防止出现先出现第3页的内容，再出现第二页的内容】
		$scope.zhixing = 1;
		$scope.loadShow = false;
		window.onscroll = function() {
			$scope.loadShow = true;

			function lan() {
				//声明  scrollTop  值
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"orgId": $scope.orgid,
						"typeId":205,
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'news/get',
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
				} else {
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
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					$scope.yP = $scope.My - $scope.evy;
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
					if($scope.tLoad == 1&&$scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"orgId": $scope.orgid,
								"typeId":205,
								"pageSize": 10,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'news/get',
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
			topRef('#news_trend')
		}
	}).error(function() {
		console.log('失败')
	})
}]);

//新闻动态详情
app.controller('all_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
//频道title
	$scope.ctnName = $location.search().ctnName;	
	if($scope.ctnName){
		document.title=$scope.ctnName;
		var uuu=navigator.userAgent;
		if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
			console.log('ios')
			window.webkit.messageHandlers.ios.postMessage({title: $scope.ctnName});
		}
	}else{
		document.title='新闻动态';
		var uuu=navigator.userAgent;
		if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
			console.log('ios')
			window.webkit.messageHandlers.ios.postMessage({title: '新闻动态'});
		}	
	}
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		orgId: $scope.orgid,
		autoId: $scope.ctnId,
	}
	$http({
		url: allUrl + 'news/id',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		console.log(data)
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.allList = data.ctn;
		$('.content').html($scope.allList.content)
	})
}]);

//-------------------------------------------------------------------------------------------
//互动交流
app.controller('talkwidth', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='互动交流';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '互动交流'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":202,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.data = [];
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.divClass = function(e) {
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
		window.onscroll = function() {
			$scope.loadShow = true;

			function lan() {
				//声明  scrollTop  值
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"orgId": $scope.orgid,
						"typeId":202,	
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'news/get',
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
				} else {
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

				};
				//---------------------------------------------------------------------
				function touchmove(ev) {
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					$scope.yP = $scope.My - $scope.evy;
					if(top == 0 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2)
					} else {
						window.event.cancelBubble = true;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"orgId": $scope.orgid,
								"typeId":202,
								"pageSize": 10,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'news/get',
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
			topRef('#talkwidth')
		}
	}).error(function() {
		console.log('失败')
	})

}]);

//互动交流详情
app.controller('talkwidth_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='互动交流';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '互动交流 '});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		orgId: $scope.orgid,
		autoId: $scope.ctnId,
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
		$scope.loaddingHide=true;
		$scope.talkwidthList = data.ctn;
		$('.content').html($scope.talkwidthList.content)
	})
}]);

//-------------------------------------------------------------------------------------------
//通知公告
app.controller('notice', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='通知公告';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '通知公告'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":203,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.data = [];
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.divClass = function(e) {
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
		window.onscroll = function() {
			$scope.loadShow = true;

			function lan() {
				//声明  scrollTop  值
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"orgId": $scope.orgid,
						"typeId":203,
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'news/get',
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
				} else {
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

				};
				//---------------------------------------------------------------------
				function touchmove(ev) {
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					$scope.yP = $scope.My - $scope.evy;
					if(top == 0 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2)
					} else {
						window.event.cancelBubble = true;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"orgId": $scope.orgid,
								"typeId":203,
								"pageSize": 10,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'news/get',
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
			topRef('#notice')
		}
	}).error(function() {
		console.log('失败')
	})
}]);

//通知公告详情
app.controller('notice_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='通知公告';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '通知公告'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		orgId: $scope.orgid,
		autoId: $scope.ctnId,
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
		$scope.loaddingHide=true;
		$scope.noticeList = data.ctn;
		$('.content').html($scope.noticeList.content)
	})
}]);

//-------------------------------------------------------------------------------------------
//商会刊物
app.controller('public', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='商会刊物';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '商会刊物'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":204,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.data = []
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.divClass = function(e) {
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
		window.onscroll = function() {
			$scope.loadShow = true;

			function lan() {
				//声明  scrollTop  值
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"orgId": $scope.orgid,
						"typeId":204,
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'news/get',
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
				} else {
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

				};
				//---------------------------------------------------------------------
				function touchmove(ev) {
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					$scope.yP = $scope.My - $scope.evy;
					if(top == 0 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2)
					} else {
						window.event.cancelBubble = true;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"orgId": $scope.orgid,
								"typeId":204,
								"pageSize": 10,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'news/get',
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
			topRef('#public')
		}
	}).error(function() {
		console.log('失败')
	})
}]);

//商会刊物详情
app.controller('public_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='商会刊物';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '商会刊物'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		orgId: $scope.orgid,
		autoId: $scope.ctnId,
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
		$scope.loaddingHide=true;
		$scope.publicList = data.ctn;
		$('.content').html($scope.publicList.content)
	})
}]);

//-------------------------------------------------------------------------------------------
//商会荣誉
app.controller('honor', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='商会荣誉';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '商会荣誉'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	$scope.moduleId = $location.search().moduleId;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":208,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		console.log(data)
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		
		$scope.data = []
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.divClass = function(e) {
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
		window.onscroll = function() {
			$scope.loadShow = true;

			function lan() {
				//声明  scrollTop  值
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"orgId": $scope.orgid,
						"typeId":208,
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'news/get',
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
				} else {
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

				};
				//---------------------------------------------------------------------
				function touchmove(ev) {
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					$scope.yP = $scope.My - $scope.evy;
					if(top == 0 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2)
					} else {
						window.event.cancelBubble = true;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"orgId": $scope.orgid,
								"typeId":208,
								"pageSize": 10,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'news/get',
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
			topRef('#honor')
		}
	}).error(function() {
		console.log('失败')
	})
}]);

//商会荣誉详情
app.controller('honor_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='商会荣誉';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '商会荣誉'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		orgId: $scope.orgid,
		autoId: $scope.ctnId,
	}
	console.log($scope.params)
	$http({
		url: allUrl + 'news/id',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		console.log(data)
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.honorList = data.ctn;
		$('.content').html($scope.honorList.content)
	})

}]);

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//企业部分

//企业简介
app.controller('company_summary', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='企业简介';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '企业简介'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//获取数据
	$scope.params = {
		"orgId": $scope.orgid,
	}
	$http({
		url: allUrl + "orgIntroduction//enterprise/get",
		method: "post",
		headers: {
			'Content-Type': 'application/json',
		},
		data: $scope.params
	}).success(function(data) {
		console.log(data)
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		console.log(data);
		$scope.data = data.ctn;
	}).error(function() {
		alert("获取失败")
	})
}]);

//-------------------------------------------------------------------------------------------
//企业管理
app.controller('company_lead', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
//频道title
	document.title='管理团队';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '管理团队'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	$scope.params = {
		orgId: $scope.orgid
	}
	$http({
		url: allUrl + 'leader/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.data = data.ctn;

	})
}]);

//企业管理详情
app.controller('company_lead_dilist', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
//频道title
	document.title='管理团队';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '管理团队'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	$scope.smallId = $location.search().smallId;

	$scope.params = {
		orgId: $scope.orgid,
		autoId: $scope.smallId,
	}
	$http({
		url: allUrl + 'leader/id',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.companyLeadDilist = data.ctn;

	})
}]);

//-------------------------------------------------------------------------------------------
//企业荣誉
app.controller('company_honor', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
//频道title
	document.title='企业荣誉';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '企业荣誉'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":210,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.data = []
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.divClass = function(e) {
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
		window.onscroll = function() {
			$scope.loadShow = true;

			function lan() {
				//声明  scrollTop  值
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"orgId": $scope.orgid,
						"typeId":210,
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'news/get',
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
				} else {
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

				};
				//---------------------------------------------------------------------
				function touchmove(ev) {
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					$scope.yP = $scope.My - $scope.evy;
					if(top == 0 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2)
					} else {
						window.event.cancelBubble = true;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"orgId": $scope.orgid,
								"typeId":210,
								"pageSize": 10,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'news/get',
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
			topRef('#companyHonor')
		}
	}).error(function() {
		console.log('失败')
	})
}]);

//企业荣誉详情
app.controller('company_honor_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='企业荣誉';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '企业荣誉'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		orgId: $scope.orgid,
		autoId: $scope.ctnId,
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
		$scope.loaddingHide=true;
		$scope.companyHonorList = data.ctn;
		$('.content').html($scope.companyHonorList.content)
	})
}]);

//-------------------------------------------------------------------------------------------
//资格资质
app.controller('company_compet', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='资格资质';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '资格资质'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":211,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.data = [];
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.divClass = function(e) {
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
		window.onscroll = function() {
			$scope.loadShow = true;

			function lan() {
				//声明  scrollTop  值
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"orgId": $scope.orgid,
						"typeId":211,
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'news/get',
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
				} else {
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

				};
				//---------------------------------------------------------------------
				function touchmove(ev) {
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					$scope.yP = $scope.My - $scope.evy;
					if(top == 0 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2)
					} else {
						window.event.cancelBubble = true;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"orgId": $scope.orgid,
								"typeId":211,
								"pageSize": 10,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'news/get',
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
			topRef('#companyCompet')
		}
	}).error(function() {
		console.log('失败')
	})
}]);

//资格资质详情
app.controller('company_compet_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='资格资质';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '资格资质'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		"orgId": $scope.orgid,
		"autoId": $scope.ctnId,
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
		$scope.loaddingHide=true;
		$scope.companyCompetList = data.ctn;
		$('.content').html($scope.companyCompetList.content)
	})
}]);

//-------------------------------------------------------------------------------------------
//企业文化
app.controller('company_culture', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='企业文化';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '企业文化'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":209,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.data = [];
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.divClass = function(e) {
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
		window.onscroll = function() {
			$scope.loadShow = true;

			function lan() {
				//声明  scrollTop  值
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"orgId": $scope.orgid,
						"typeId":209,
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'news/get',
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
				} else {
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

				};
				//---------------------------------------------------------------------
				function touchmove(ev) {
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					$scope.yP = $scope.My - $scope.evy;
					if(top == 0 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2)
					} else {
						window.event.cancelBubble = true;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"orgId": $scope.orgid,
								"typeId":209,
								"pageSize": 10,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'news/get',
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
			topRef('#companyCulture')
		}
	}).error(function() {
		console.log('失败')
	})
}]);

//企业文化详情

app.controller('company_culture_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='企业文化';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '企业文化'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		orgId: $scope.orgid,
		autoId: $scope.ctnId,
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
		$scope.loaddingHide=true;
		$scope.companyCultureList = data.ctn;
		$('.content').html($scope.companyCultureList.content)
	})
}]);

//-------------------------------------------------------------------------------------------
//企业新闻
app.controller('company_news', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
//频道title
	document.title='新闻动态';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '新闻动态'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":205,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		console.log(data)
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.data = [];
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.divClass = function(e) {
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
		window.onscroll = function() {
			$scope.loadShow = true;

			function lan() {
				//声明  scrollTop  值
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"orgId": $scope.orgid,
						"typeId":205,
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'news/get',
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
				} else {
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

				};
				//---------------------------------------------------------------------
				function touchmove(ev) {
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					$scope.yP = $scope.My - $scope.evy;
					if(top == 0 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2)
					} else {
						window.event.cancelBubble = true;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"orgId": $scope.orgid,
								"typeId":205,
								"pageSize": 10,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'news/get',
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
			topRef('#companyNews')
		}
	}).error(function() {
		console.log('失败')
	})
}]);

//企业新闻详情
app.controller('company_news_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='新闻动态';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '新闻动态 '});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		orgId: $scope.orgid,
		autoId: $scope.ctnId,
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
		$scope.loaddingHide=true;
		$scope.companyNewsList = data.ctn;
		$('.content').html($scope.companyNewsList.content)
	})

}]);

//-------------------------------------------------------------------------------------------
//企业通知公告
app.controller('company_notice', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='通知公告';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '通知公告'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":203,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.data = [];
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.divClass = function(e) {
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
		window.onscroll = function() {
			$scope.loadShow = true;

			function lan() {
				//声明  scrollTop  值
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"orgId": $scope.orgid,
						"typeId":203,
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'news/get',
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
				} else {
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

				};
				//---------------------------------------------------------------------
				function touchmove(ev) {
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					$scope.yP = $scope.My - $scope.evy;
					if(top == 0 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2)
					} else {
						window.event.cancelBubble = true;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"orgId": $scope.orgid,
								"typeId":203,
								"pageSize": 10,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'news/get',
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
			topRef('#companyNotice')
		}
	}).error(function() {
		console.log('失败')
	})
}]);

//企业通知公告详情
app.controller('company_notice_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='通知公告';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '通知公告'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		orgId: $scope.orgid,
		autoId: $scope.ctnId,
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
		$scope.loaddingHide=true;
		$scope.companyNoticeList = data.ctn;
		$('.content').html($scope.companyNoticeList.content)
	})
}]);

//-------------------------------------------------------------------------------------------
//产品服务
app.controller('company_product', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='产品快讯';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '产品快讯'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url地址中的联Id
	$scope.orgid = $location.search().orgId;
	//定义的初始页数
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {
		"orgId": $scope.orgid,
		"typeId":206,
		"pageSize": 10,
		"pageNum": $scope.pageNum
	};
	$http({
		url: allUrl + 'news/get',
		method: "post",
		headers: {
			'Content-Type': 'application/json'
		},
		data: $scope.params,
	}).success(function(data) {
		//模块内容空白  处理方式
		if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
			$scope.nowShow=false;
		}
		//隐藏加载条
		$scope.loaddingHide=true;
		$scope.data = []
		$scope.data = data.ctn.list;
		//最后一页的页数
		$scope.lastPage = data.ctn.lastPage;
		//封装的排序方法     页面逻辑
		$scope.divClass = function(e) {
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
		window.onscroll = function() {
			$scope.loadShow = true;

			function lan() {
				//声明  scrollTop  值
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage && $scope.zhixing == 1) {
					$scope.pageNum++;
					$scope.zhixing = 0;
					$scope.params = {
						"orgId": $scope.orgid,
						"typeId":206,
						"pageSize": 10,
						"pageNum": $scope.pageNum
					};
					$http({
						url: allUrl + 'news/get',
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
				} else {
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

				};
				//---------------------------------------------------------------------
				function touchmove(ev) {
					var top = document.documentElement.scrollTop || document.body.scrollTop;
					var ev = ev || event;
					var touch = ev.touches[0];
					$scope.My = touch.pageY;
					$scope.yP = $scope.My - $scope.evy;
					if(top == 0 && $scope.yP > 0) {
						ev.preventDefault();
						$(divName).css('top', $scope.yP / 2)
					} else {
						window.event.cancelBubble = true;
					};
				}
				//----------------------------------------------------------------------

				function touchend(ev) {
					var ev = ev || event;
					if($scope.yP >= $('.topLoad').height()) {
						$(divName).stop().animate({
							"top": $('.topLoad').height() + 'px'
						}, 'linear', function() {
							$('.topLoad').html('正在刷新，请稍后...');
							$scope.refr = {
								"orgId": $scope.orgid,
								"typeId":206,
								"pageSize": 10,
								"pageNum": 1
							}

							$http({
								url: allUrl + 'news/get',
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
			topRef('#companyProduct')
		}
	}).error(function() {
		console.log('失败')
	})
}]);

//产品服务详情
app.controller('company_product_list', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	//频道title
	document.title='产品快讯';
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '产品快讯'});
	}	
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	//获取url中的组织id
	$scope.orgid = $location.search().orgId;
	$scope.ctnId = $location.search().ctnId;
	$scope.params = {
		orgId: $scope.orgid,
		autoId: $scope.ctnId,
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
		$scope.loaddingHide=true;
		$scope.companyProductList = data.ctn;
		$('.content').html($scope.companyProductList.content)
	})

}]);
//-------------------------------------------------------------------------------------------
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
// 处理时间戳
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
// 处理时间戳
app.filter('detailTime', function() {
	return function(obj) {
		var time = new Date(obj);
		var year = time.getFullYear();
		var month = time.getMonth() + 1;
		var day = time.getDate();
		var dateT = year + '年' + month + '月' + day+'日';
		if(isNaN(year) == true || isNaN(month) == true || isNaN(day) == true) {
			return '';
		} else {
			return dateT;
		}

	};
});
//根据时间返回相应的字段
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
			return obj
		}
	};
});
app.filter('ctnName', function() {
	return function(obj) {
		
		if(obj == 201) {
			return '会员风采';
		} else if(obj == 202) {
			return '互动交流';
		} else if(obj == 203) {
			return '通知公告';
		} else if(obj == 204) {
			return '商会刊物';
		} else if(obj == 205) {
			return '新闻动态';
		} else if(obj == 206) {
			return '产品(服务)快讯';
		} else if(obj == 208) {
			return '通知公告';
		} else if(obj == 209) {
			return '商会荣誉';
		} else if(obj == 210) {
			return '企业荣誉';
		} else if(obj == 211) {
			return '资格资质';
		}
	};
});
// typeId 

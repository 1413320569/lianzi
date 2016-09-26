
//var allUrl = "http://192.168.1.204:9081/lnet/";
var allUrl = "http://apps.lianziapp.com:8081/lnet/";
var newUrl='http://apps.lianziapp.com:8081/lznet/';
//var allUrl = "http://192.168.199.143:8081/lnet/";
var app = angular.module('rupterApp', ['ui.router']);
//-----------------------------------------------------------------------------
//路由跳转
app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('index', { //商会页
		url: '/index',
		templateUrl: 'home_page.html'
	})
	.state('dialist', { //新闻详情页
		url: '/home_page/dialist?orgId&id',
		templateUrl: 'dialist.html'
	})

	$urlRouterProvider.otherwise('/index');
});

//--------------------------------------------------------------------------------
//新闻列表

app.controller("home_page", ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	document.documentElement.style.fontSize = innerWidth / 16+'px';
//	针对安卓的首页写的暂时的解决方案
	var uuu=navigator.userAgent;
	if(uuu.indexOf('Android') > -1 || uuu.indexOf('Linux') > -1){
		$scope.height=$location.search().height;
		document.body.style.marginTop=$scope.height+'px';
	}
	//title标题
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '新闻动态'});
	}
	//频道title
		
	//获取url中的组织id
	$scope.orgid=$location.search().orgId;
	//————————————————————————————————————————————————————
	//获取后台数据
	//	allUrl = "http://192.168.199.141:8081/lnet/";
	$scope.pageNum = 1;
	//往后台传的参数
	$scope.params = {"orgId": $scope.orgid,"pageSize": 7,"pageNum": $scope.pageNum};

	//未处理的数据
	$scope.data = []
	//请求头条
	$http({
		url: allUrl + 'home/top',//   home/top
		method: "post",
		headers: {'Content-Type': 'application/json'},
		data: $scope.params,
	}).success(function(data){
		//隐藏加载条
		$scope.loaddingHide=true;
		if(data.ctn){
			$scope.data[0] = data.ctn;
			$scope.firstTop=1;
		}else{
			$scope.data=[];
			$scope.firstTop=0;
		}
		
		//请求其他数据
		$http({
			url: allUrl + 'home/msg',   //   home/msg
			method: "post",
			headers: {'Content-Type': 'application/json'},
			data: $scope.params,
		}).success(function(data) {
			console.log(data)
			if(data.ctn==null||data.ctn.length==0||data.code!=2000){
				$scope.noData=true;
			}
			for(var i = 0; i < data.ctn.list.length; i++) {
				$scope.data.push(data.ctn.list[i]);
			};
			if($scope.firstTop==1){
				for(var i=1;i<$scope.data.length;i++){
					if($scope.data[i].autoId==$scope.data[0].autoId){
						$scope.data.splice(i,1);
					}
				};	
			}
			//获取页数
			$scope.lastPage=data.ctn.lastPage;
			//前台页面返回的css
			$scope.liClass = function(index,e) {
				if(index==0&&e.imgType==1){
					return 'list_first'
				}else if((index!=0&&e.imgUrl)||(index==0&&e.imgType!=1&&e.imgUrl)){
					return ''
				}else{
					return 'top_change'
				}
				
//				if(index == 0&&e.imgType==1) {
//					return 'list_first';
//				} else if(e.imgType==0 &&!e.imgUrl){
//					return 'top_change'
//				}else {
//					return ''
//				} 
			}
			$scope.imgShow = function(index,imgType,imgUrl) {
				if(imgUrl){
					return true;
				}else{
					return false;
				}
			}
			//页面逻辑  封装   因为调用了$scope方法，所以只能放在作用域里面
			function paixu(){
				$scope.time=[];
				$scope.dat=[];
				for(var i=0;i<$scope.data.length;i++){
					if($scope.time.indexOf($scope.data[i].createDate)==-1){
						$scope.time.push($scope.data[i].createDate)
					}
				}
				if($scope.firstTop==1){
					$scope.dat.push({
						time:$scope.data[0].createDate,
						Da:[$scope.data[0]]
					})
				}
				
				for(var i=0;i<$scope.time.length;i++){
					var geshi={time:'',Da:[]};
					geshi.time=$scope.time[i];
//					for(var j=1;j<$scope.data.length;j++){
//						if($scope.data[j].createDate==$scope.time[i]){
//							geshi.Da.push($scope.data[j]);
//						};
//					};
					$scope.exist=0;
					if($scope.firstTop==1){
						for(var j=1;j<$scope.data.length;j++){
							if($scope.data[j].createDate==$scope.time[i]){
								geshi.Da.push($scope.data[j]);
								$scope.exist=1;
								
							};
							
							
						};
					}else if($scope.firstTop==0){
						for(var j=0;j<$scope.data.length;j++){
							if($scope.data[j].createDate==$scope.time[i]){
								geshi.Da.push($scope.data[j]);
								$scope.exist=1;
							};
							
						};
					}
					if($scope.exist==1){
						$scope.dat.push(geshi);
					}
					
				};
				console.log($scope.dat)
			};
			//执行
			
			paixu()
			//---------------------------------------------------
			//-----------------------------------------------------
			//懒加载
				$scope.zhixing=1;//定义一个参数，保证页面按照顺序，一次一次执行懒加载；
				$scope.loadShow=false;//最下面的加载模块 ，刚进去定义  隐藏
				window.onscroll=function(){
					function lan(){
						//声明  scrollTop  值  通过判断scrollTop的值来确定是否执行懒加载；
						
						var top = document.documentElement.scrollTop || document.body.scrollTop;
						if(top >= document.body.clientHeight - window.innerHeight - 200 && $scope.pageNum < $scope.lastPage&&$scope.zhixing==1){
							$scope.loadShow=true;
							$scope.pageNum++;
							$scope.zhixing=0;
							$scope.params = {"orgId": $scope.orgid,"pageSize": 7,"pageNum": $scope.pageNum};
							$http({
								url:allUrl+'home/msg',
								method: "post",
								headers: {'Content-Type': 'application/json'},
								data: $scope.params,
							}).success(function(data){
								$scope.zhixing=1;
								for(var i=0;i<data.ctn.list.length;i++){
									$scope.data.push(data.ctn.list[i])
								}
								paixu();
//								window.location.href ='index.html#/index?pageNum='+$scope.pageNum;
							})
						}
						if($scope.pageNum==$scope.lastPage){
							$scope.loadShow=false;
						}
					}	
					lan()
					//上拉刷新
					function topRef(divName){
						var top = document.documentElement.scrollTop || document.body.scrollTop;
						//  touchstart事件
						document.body.addEventListener('touchstart', touchstart, false);
						//  touchmove 事件
						document.body.addEventListener('touchmove', touchmove, false);
						//  touchend  事件
						document.body.addEventListener('touchend', touchend, false);
						$scope.topLoad=0;
						function touchstart(ev) {//封装的touchstart事件
							var top = document.documentElement.scrollTop || document.body.scrollTop;
							var ev = ev || event;
							var touch = ev.touches[0];
							$scope.evy = touch.pageY;
							//判断当前的    scrollTop   页面是否在顶部，只有触屏式页面在顶部才能执行刷新
							if(top==0){
								$scope.stop=1;
							}else{
								$scope.stop=0;
							};
						};
						//---------------------------------------------------------------------
						function touchmove(ev) {
							var top = document.documentElement.scrollTop || document.body.scrollTop;
							var ev = ev || event;
	//						ev.preventDefault();
							
							var touch = ev.touches[0];
							$scope.My = touch.pageY;
							var home_page = document.getElementById(divName);
							$scope.yP = $scope.My - $scope.evy;
							if($scope.stop == 1&&$scope.yP>0) {
								ev.preventDefault();//阻止浏览器的默认 下拉
								home_page.style.top = $scope.yP/2 + 'px';
								$scope.tLoad=1;//为下面判断是否刷新提供参数
							} else {
								$scope.tLoad=0;
								window.event.cancelBubble = true;
							};
							
						}
						//----------------------------------------------------------------------
						
						function touchend(ev) {
							var ev = ev || event;
	//						ev.preventDefault();
							var home_page = document.getElementById(divName);
							//从上面获取参数，决定是否刷新
							if($scope.tLoad==1&&$scope.yP >= $('#topLoad').height()) {
								$('#home_page').stop().animate({"top": $('#topLoad').height() + 'px'}, 'linear', function() {
									$('#topLoad').html('正在刷新，请稍后...');
									$scope.refr = {"orgId": $scope.orgid,"pageSize": 7,"pageNum": 1}
									$http({
										url: allUrl + 'home/top',
										method: "post",
										headers: {'Content-Type': 'application/json'},
										data: $scope.params,
									}).success(function(data){
										$scope.data=[];
//										$scope.data[0] = data.ctn;
										if(data.ctn){
											$scope.data[0] = data.ctn;
											$scope.firstTop=1;
										}else{
											$scope.data=[];
											$scope.firstTop=0;
										}
										$http({
											url: allUrl + 'home/msg',
											method: "post",
											headers: {'Content-Type': 'application/json'},
											data: $scope.refr,
										}).success(function(data) {
											$scope.pageNum=1;
											$scope.yP = 0;
											$('#home_page').stop().delay(1000).animate({"top": 0 + 'px'}, 'linear',function(){
												$('#topLoad').html('请求刷新');
											});
											$('#topLoad').html('刷新成功');
											for(var t=0;t<data.ctn.list.length;t++){
												$scope.data.push(data.ctn.list[t])
											}
											if($scope.firstTop==1){
												for(var t=1;t<$scope.data.length;t++){
													if($scope.data[0].autoId==$scope.data[t].autoId){
														$scope.data.splice(t,1)
													}
												}	
											}
											
											paixu()
											lan()
										})
									})
								})
							} else {
								$('#home_page').stop().animate({"top": 0 + 'px'}, 'linear', function() {})
							}
						}	
					}
					topRef('home_page')	
				}

		}).error(function() {
			console.log('失败')
		})
	
	}).error(function(e) {
		console.log('失败')
	})

	//-----------------------------------------------------------
	//没有后台数据时做的上拉刷新的效果

	//-------------------------------------------------------------------------------------------------------------------
	//点击进入详情界面，iox和android的接口

	
	$scope.Click=function(moduleId,ctnId,ctnName){
		
		function select() {
			if(moduleId == 9001) { //联系我们
				var skip = newUrl+"relation/index.html#/index?orgId=" + $scope.orgId;
				return false;
			} else if(moduleId == 9002) { //领导班子
				var skip = newUrl+"chamber/index.html#/channel/commerce/lead/lead_dilist?orgId=" + $scope.orgId + "&smallId=" + autoID;
				console.log('2')
				return false;
			} else if(moduleId == 9003) { //商会章程
				var skip = newUrl+"chamber/index.html#/channel/commerce/statutes?orgId=" + $scope.orgid;
				console.log('3')
			} else if(moduleId == 9005) { //新闻动态
				var skip = newUrl+"chamber/index.html#/channel/commerce/news_trend/all_list" + "?orgId=" + $scope.orgid + '&ctnId=' + ctnId + '&moduleId=' + moduleId + '&ctnName=' + ctnName;
				console.log('adf')

			} else if(moduleId == 9006) { //企业简介
				var skip = newUrl+"channel/commerce/company_summary?orgId=" + $scope.orgid;
				console.log('6')
			} else if(moduleId == 9007) { //商会简介
				var skip = newUrl+"chamber/index.html#/channel/commerce/summary?orgId=" + $scope.orgid;
				console.log('7')
			}
			return skip;
		}
		var skipp = select()
		console.log(skipp)

		$scope.uuu = navigator.userAgent;
		if(!!$scope.uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) == true) {
			window.webkit.messageHandlers.ios.postMessage({
				body: skipp
			});

		} else if($scope.uuu.indexOf('Android') > -1 || $scope.uuu.indexOf('Linux') > -1) {
			lianWebMain.gotoNewPager(skipp);
		} else {
			window.location.href = skipp;
		}
		
		
		
	}
	
	//-------------------------------------------------------------------------------------------------
	
	//---------------------------------------------------------------------------------------------

}]);
	
//------------------------------------------------------------



//-----------------------------------------------------------------------------------
//新闻详情
app.controller('dialist', ['$scope', '$http', '$rootScope', '$state', '$location', function($scope, $http, $rootScope, $state, $location) {
	document.documentElement.style.fontSize = innerWidth / 16+'px';//进入页面初始化字体大小
	//频道title
	var uuu=navigator.userAgent;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '新闻动态'});
	}	
	//获取url中的组织id
	$scope.orgid=$location.search().orgId;
	$scope.autoId=$location.search().id;
	$scope.params={
		orgId:$scope.orgid,
		autoId:$scope.autoId,
	}
	$http({
    	url:allUrl + 'news/id',
		method: "post",
		headers: {'Content-Type': 'application/json'},
		data: $scope.params,
   }).success(function(data){
   		console.log(data)
   		$scope.loaddingHide=true;
    	$scope.homePage_detail=data.ctn;
    	$('.content').html($scope.homePage_detail.content) 
    })

}]);

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
//根据时间返回相应的字段
app.filter('resetTime', function() {
	return function(obj) {
		var newTime=new Date().getTime();
		var ttime=[];
		ttime[0]=obj.substring(0,4);
		ttime[1]=parseInt(obj.substring(5,7)-1);
		ttime[2]=obj.substring(8,10)
		var oldTime=new Date(ttime[0],ttime[1],ttime[2]).getTime();
		var chaTime=newTime-oldTime;
		var day=parseInt(chaTime / 1000 / 3600 / 24);
		if(day==0){
			return '今天';
		}else if(day==1){
			return '昨天';
		}else{
			return obj
		}
	};
});

//-----------------------------------------------------------------------
//转换时间锉
app.filter('dateTime', function() {
	return function(obj) {
		var time=new Date(obj);
		var hour=time.getHours();
		var minute=time.getMinutes();
		if(String(minute).length==1){minute='0'+minute}
		var dateT=hour+':'+minute;
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
//  ctnTypeId
app.filter('CTID', function() {
	return function(ctnTypeId) {
		if(ctnTypeId==201){//会员风采
			var moduleName='会员风采'
		}else if(ctnTypeId==202){//互动交流
			var moduleName= '互动交流';
			return false;
		}else if(ctnTypeId==203){//通知公告
			var moduleName=  '通知公告';
			return false;
		}else if(ctnTypeId==204){//商会刊物
			var moduleName=  '商会刊物';
			return false;
		}else if(ctnTypeId==205){//新闻动态
			var moduleName=  '新闻动态';
			return false;
		}else if(ctnTypeId==206){//产品快讯
			var moduleName=  '产品快讯';
			return false;
		}else if(ctnTypeId==208){//商会荣誉
			var moduleName=  '商会荣誉';
			return false;
		}else if(ctnTypeId==209){//企业文化
			var moduleName=  '企业文化';
			return false;
		}else if(ctnTypeId==210){//企业荣誉
			var moduleName=  '企业荣誉';
			return false;
		}else if(ctnTypeId==211){//资格资质
			var moduleName=  '资格资质';
			return false;
		}
		return moduleName;
		

	}
})

		

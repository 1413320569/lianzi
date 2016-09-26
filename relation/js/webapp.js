
//var allUrl = "http://192.168.1.204:9081/lnet/";
var allUrl = "http://apps.lianziapp.com:8081/lnet/";
var app=angular.module('rupterApp',['ui.router']);
var uuu=navigator.userAgent;
window.onload=function(){
	var titlee=document.title;
	if(!!uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: titlee});
	}	
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//路由跳转
app.config(function($stateProvider, $urlRouterProvider,$locationProvider){
	$stateProvider
	
  .state('index',{//商会页
		url:'/index',
		templateUrl:'relation.html'
	 })
	$urlRouterProvider.otherwise('/index');
});

//--------------------------------------------------------------------------------
//联系我们
app.controller('relation',['$scope','$http','$rootScope','$state','$location',function($scope,$http,$rootScope,$state,$location){
	document.documentElement.style.fontSize = innerWidth / 16+'px';
	//频道title
	$scope.uuu=navigator.userAgent;
	if(!!$scope.uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
		console.log('ios')
		window.webkit.messageHandlers.ios.postMessage({title: '联系我们'});
	}	
	
	
//	window.webkit.messageHandlers.ios.postMessage({tit: titlee});
    $scope.call=function(telll){
    	console.log(telll)
//  	window.webkit.messageHandlers.ios.postMessage({tit: titlee});
		if(!!$scope.uuu.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)==true){
			console.log('ios')
			window.webkit.messageHandlers.ios.postMessage({tel:telll});
		}else if($scope.uuu.indexOf('Android') > -1 || $scope.uuu.indexOf('Linux') > -1){
			console.log('安卓')
			tellphone.call(telll);
		}
    }
    $scope.orgid=$location.search().orgId;
    $scope.params={
    	orgId:$scope.orgid,
    }
    $http({
    	url:allUrl + 'contact/get',
		method: "post",
		headers: {'Content-Type': 'application/json'},
		data: $scope.params,
    }).success(function(data){
    	if(data.ctn==null||data.ctn.length==0||data.code!=2000){
			$scope.noData=true;
		}
    	//隐藏加载条
		$scope.loaddingHide=true;
		console.log(data)
		$scope.relationInfo={contactPeople:'无',contactPhone:'无',contactAddress:'无'};
		$scope.relationInfo=data.ctn;

    })
    $scope.relationInfo={
    	imgSrc:'imgage/relation.png',
    	name:'李慧',
    	tel:'10086',
    	telAddress:'北京市丰台区方庄地区芳城'
    }
}]);
//--------------------------------------------------------------------------------

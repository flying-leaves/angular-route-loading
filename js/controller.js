/**
 * Created by Administrator on 2016/11/8 0008.
 */
angular.module('controller',[])
    .controller("classCtrl",["$scope","Article",function ($scope,Article) {
        // 调用数据加载
        Article.class();
        // 接收广播数据
        $scope.$on("classData",function (event,data) {
        // console.log(event);   event????
        $scope.classList=data;
    })
}])
    .controller("listCtrl",["$scope","Article","$stateParams",function ($scope,Article,$stateParams) {
        // 设置默认page值
        var page = 0;
        // 设置初始list
        $scope.listList = [];
        // 设置为1,使刷新或者第一次进入时能够进行加载
        $scope.listLength = 1;

        $scope.$on("listData",function (event,data) {
            $scope.listLength = data.length;
            // 合并加载数据
            $scope.listList = $scope.listList.concat(data);
            //广播停止下拉加载
            $scope.$broadcast('scroll.infiniteScrollComplete');
        })

        //下拉加载
        $scope.loadMore = function () {
            page++;
            Article.list($stateParams.id,page);
        }
}])
    .controller('detailCtrl',["$scope","Article","$stateParams",function ($scope,Article,$stateParams) {
        console.log($stateParams);
        Article.detail($stateParams.aid);
        $scope.$on("detailData",function (event,data) {
            $scope.detailList=data;
        })
    }])
    .controller("talkClassCtrl",["$scope","Talk",function ($scope,Talk) {
        Talk.class();
        $scope.$on("talkClassData",function (event,data) {
            $scope.talkClassList = data;
        })
    }])
    .controller("talkListCtrl",["$scope","Talk","$stateParams",function ($scope,Talk,$stateParams) {

        var page = 0;
        $scope.talkListList=[];
        $scope.dataLength  = 1;
        $scope.$on("talkListData",function (e,data) {
            $scope.dataLength  = data.length;
            $scope.talkListList = $scope.talkListList.concat(data);
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
        $scope.loadMore = function () {
            page++;
            Talk.list($stateParams.fid, page);
        }
    }])
    .controller("talkDetailCtrl",["$scope","Talk","$stateParams",function ($scope,Talk,$stateParams) {
        Talk.detail($stateParams.tid);
        $scope.$on("talkDetailData",function (e,data) {
            $scope.talkDetailList = data;
        })
    }])

    
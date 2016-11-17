/**
 * Created by Administrator on 2016/11/8 0008.
 */
angular.module("service",[])
.service("Article",["$http","$rootScope",function ($http,$rootScope) {
    return {
        //文章分类
        "class":function () {
            //jsonp请求 请求地址
            $http.jsonp("http://www.phonegap100.com/appapi.php",{
                //请求参数
                "params":{
                    "a":"getPortalCate",
                    //callback
                    "callback":"JSON_CALLBACK"
                }
            }).then(function (res) {
                // console.log(res);
                //数据广播
                $rootScope.$broadcast('classData',res.data.result);
            },function (error) {
                console.log(error);
            })
        },
        //文章列表
        "list":function (catId,num) {
            $http.jsonp("http://www.phonegap100.com/appapi.php",{
                "params":{
                    "a": "getPortalList",
                    "catid": catId,
                    "page": num,
                    "callback": "JSON_CALLBACK"
                }
            }).then(function (res) {
                console.log(res.data.result);
                $rootScope.$broadcast("listData",res.data.result);
            },function (error) {
                console.log(error);
            })
        },
        //文章详情
        "detail":function (aid) {
            $http.jsonp("http://www.phonegap100.com/appapi.php",{
                "params":{
                    "a":"getPortalArticle",
                    "aid":aid,
                    "callback":"JSON_CALLBACK"
                }
            }).then(function (res) {
                console.log(res.data.result);
                $rootScope.$broadcast("detailData",res.data.result);
            },function (error) {
                console.log(error);
            })
        }
    }
}])
.service("Talk",["$http","$rootScope",function ($http,$rootScope) {
    return {
        "class":function () {
            //http://www.phonegap100.com/appapi.php?a=getThreadCate
            $http.jsonp("http://www.phonegap100.com/appapi.php",{
                "params":{
                    "a":"getThreadCate",
                    "callback":"JSON_CALLBACK"
                }
            }).then(function (res) {
                console.log(res);
                $rootScope.$broadcast("talkClassData",res.data.result);

            },function (error) {
                console.log(error)
            })
        },
        "list":function (fid,page) {
            //http://www.phonegap100.com/appapi.php?a=getThreadList&fid=2&page=1
            $http.jsonp("http://www.phonegap100.com/appapi.php",{
                "params":{
                    "a":"getThreadList",
                    "fid":fid,
                    "page":page,
                    "callback":"JSON_CALLBACK"
                }
            }).then(function (res) {
                console.log(res);
                $rootScope.$broadcast("talkListData",res.data.result)
            },function (error) {
                console.log(error);
            })
        },
        "detail":function (tid) {
            //http://www.phonegap100.com/appapi.php?a=getThreadContent&tid=138
            $http.jsonp("http://www.phonegap100.com/appapi.php",{
                "params":{
                    "a":"getThreadContent",
                    "tid":tid,
                    "callback":"JSON_CALLBACK"
                }
            }).then(function (res) {
                console.log(res);
                $rootScope.$broadcast("talkDetailData",res.data.result)
            },function (error) {
                console.log(error)
            })
        }



    }
}])

/**
 * Created by Administrator on 2016/11/8 0008.
 */
angular.module('myApp',["ionic","controller","service"])
    .config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
        // 文章栏路由
        $stateProvider
            .state("tab",{
            url:"/tab",
            templateUrl:"template/tab.html",
            // 一直加载
            abstract: true
        })
            // 文章分类栏路由
            .state("tab.articleClass",{
                url:"/articleClass",
                views:{
                    "article-view":{
                        templateUrl:"template/articleClass.html",
                        controller:"classCtrl"
                    }
                }
        })
            // 文章列表路由
            .state("tab.articleList",{
                url:"/articleList/:id",
                views:{
                    "article-view":{
                        templateUrl:"template/articleList.html",
                        controller:"listCtrl"
                    }
                }
            })
            //文章详情路由
            .state("tab.articleDetail",{
                url:"/articleDetail/:aid",
                views:{
                    "article-view":{
                        templateUrl:"template/articleDetail.html",
                        controller:"detailCtrl"
                    }
                }
            })

            .state("tab.talkClass",{
                url:"/talkClass",
                views:{
                    "talk-view":{
                        templateUrl:"template/talkClass.html",
                        controller:"talkClassCtrl"
                    }
                }
            })

            .state("tab.talkList",{
                url:"/talkList/:fid",
                views:{
                    "talk-view":{
                        templateUrl:"template/talkList.html",
                        controller:"talkListCtrl"
                    }
                }
            })
            .state("tab.talkDetail",{
                url:"/talkDetail/:tid",
                views:{
                    "talk-view":{
                        templateUrl:"template/talkDetail.html",
                        controller:"talkDetailCtrl"
                    }
                }
            })

        //默认加载页面
        $urlRouterProvider.otherwise("/tab/articleClass")

    }])
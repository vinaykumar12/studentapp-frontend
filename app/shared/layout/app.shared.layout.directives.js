/**
 * Created by vinnu on 4/4/2016.
 */
angular.module('app.shared.directives')
    .directive('headerDir',function(){
        return {
            restrict:'E',
            templateUrl:'app/shared/layout/app.shared.layout.header.html',
            link:function(scope,element,attrs){

            }
        }

    })
    .directive('sidebarDir',function(){
        return {
            restrict:'E',
            templateUrl:'app/shared/layout/app.shared.layout.side-bar.html',
            link:function(scope,element,attrs){

            }
        }

    })
    .directive('mainDir',function(){
        return {
            restrict:'E',
            templateUrl:'app/shared/layout/app.shared.layout.main.html',
            link:function(scope,element,attrs){

            }
        }

    })
    .directive('footerDir',function(){
        return {
            restrict:'E',
            templateUrl:'app/shared/layout/app.shared.layout.footer.html',
            link:function(scope,element,attrs){

            }
        }

    });
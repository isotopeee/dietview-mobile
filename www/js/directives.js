angular.module('app.directives', [])

.directive('blankDirective', [function(){

}])

.directive('chatMessage', [function(){
     return {
        restrict: 'E',
        scope: {
            message: '@',
            type: '@',
            icon: '@'
        },
        templateUrl: 'templates/chat-message.html',
        link: linker
    }

    function linker($scope, $elems, $attrs){}
}]);

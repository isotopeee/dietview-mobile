angular.module('app.controllers', [])
  
.controller('dieteticsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
   
.controller('chatBotCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
   
.controller('diViewCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
   
.controller('messagingCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
   
.controller('subscriptionsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
   
.controller('foodBuddyCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

}])
   
.controller('settingsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$state', 'loadingService',
function ($scope, $stateParams, $state, loadingService) {
    var vm = this;
    vm.profile = {};
    vm.login = login;

    function login(profile){
        console.log(profile);
        loadingService.showLoading();
        setTimeout(function() {
            $state.go('tabsController.dietetics');
            loadingService.hideLoading();
        }, 2000);
    }

}])
   
.controller('signupCtrl', ['$scope', '$stateParams', '$state', 
function ($scope, $stateParams, $state) {
    var vm = this;
    vm.profile = {};
    vm.signUp = signUp;

    function signUp(profile){
        console.log(profile);
        setTimeout(function() {
            $state.go('tabsController.dietetics');    
        }, 2000);
    }

}])

.controller('profileCtrl', ['$scope', '$stateParams', function(){
    var vm = this;
    vm.profile = {};
    vm.saveChanges = saveChanges;


    function saveChanges(profile){
        console.log(profile);
    }
}])
 
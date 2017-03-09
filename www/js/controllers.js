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
      
.controller('menuCtrl', ['$scope', '$stateParams', '$state', 'User',
function ($scope, $stateParams, $state, User) {
    var vm = this;
    vm.logout = logout;

    function logout(){
        User.logout({}).$promise.then(function(value, responseHeaders){
            console.log('Successfully logged out!');
            console.log(value);
            $state.go('login');
        }, function(err){
            console.log('Stacktrace ' + JSON.stringify(err));
        })
    }

}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$state', 'User',
function ($scope, $stateParams, $state, User) {
    var vm = this;
    vm.profile = {};
    vm.login = login;

    function login(profile){
        
        profile.realm = 'dietview';
        User.login({rememberMe: true}, profile).$promise.then(function(value, responseHeaders){
            console.log(value);
            clearForm();
            $state.go('tabsController.dietetics');
        }).catch(function(err){
            alert('Invalid username/password.');
            console.log('Stacktrace: ' + JSON.stringify(err));
        });
    }

    function clearForm(){
        vm.profile = {};
    }
}])
   
.controller('signupCtrl', ['$scope', '$stateParams', '$state', 'User',
function ($scope, $stateParams, $state, User) {
    var vm = this;
    vm.data = {};
    vm.signUp = signUp;

    function signUp(data){

        data.user.account = {};
        data.user.account.vitals = {};
        data.user.messages = [];
        data.user.activeSubscription = {};
        data.subscriptions = [];
        data.status = 'active';
        data.user.realm = 'dietview';

        if(confirmPassword(data.user.password, vm.confirmPassword)){
            User.create({}, data.user).$promise.then(function(value, responseHeaders){
                console.log(value);
                clearForm();
            }).catch(function(err){
                console.log(err);
            });
        }else{
            alert('Please make sure your password and confirm password is the same!');
        }
    }

    function confirmPassword(password, confirmPassword){
        return password === confirmPassword? true : false;
    }

    function clearForm(){
        vm.data = {};
    }
}])

.controller('profileCtrl', ['$scope', '$stateParams', 'User', 'bmiService', function($scope, $stateParams, User, bmiService){
    var vm = this;
    vm.data = {};
    vm.saveChanges = saveChanges;
    vm.computeBMI = computeBMI;

    loadProfile();

    function loadProfile(){
        var user = User.getCachedCurrent();
        if(user === null){
            User.getCurrent().$promise.then(function(value, responseHeaders){
                value.account.profile.birthday = new Date(value.account.profile.birthday);
                vm.data = value;
            });
        }
        else{
            user.account.profile.birthday = new Date(user.account.profile.birthday);
            vm.data = user;
        }   
    }

    function saveChanges(data){
        console.log(data);
        User.prototype$updateAttributes(data).$promise.then(function(value, responseHeaders){
            console.log(value);
        }, function(err){
            console.log(err);
        })
    }

    /**
     * Used in ng-change event
     */

    function computeBMI(heightFt, heightInc, weight){
        vm.data.account.vitals.bmi = bmiService
            .computeBMI(vm.data.account.vitals.height.feet, vm.data.account.vitals.height.inches, vm.data.account.vitals.weight);
        vm.data.account.vitals.status = bmiService.bmiStatus(vm.data.account.vitals.bmi);
    }
}])
 
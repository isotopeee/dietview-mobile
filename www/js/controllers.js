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

.controller('vitalTrackerCtrl', ['$scope', '$stateParams', 'vitalTrackerService', 'popupService',
function($scope, $stateParams, vitalTrackerService, popupService){
    var vm = this;
    vm.data = {};
    vm.exerciseLevels = [];
    vm.loadExerciseLevel = loadExerciseLevel;
    vm.calculate = calculate;

    loadExerciseLevel();

    function loadExerciseLevel(){
        vitalTrackerService.getExerciseLevel().then(function(data){
            vm.exerciseLevels = data;
        });
    }

    function calculate(data){
        console.log(data);
        var res = vitalTrackerService.calculate(data);
        console.log(res);
        var message = ['<b>' +  res + '</b>', ' calories/day to maintain.'].join('');
        popupService.alertPopup('Total Calories Including Exercise', message);
    }

    function clearForm(){
        vm.data = {};
    }
    
}])
   
.controller('foodBuddyCtrl', ['$scope', '$stateParams', 'MealPlan', 'User',
function ($scope, $stateParams, MealPlan, User) {
    var vm = this;

    loadRecommendations();

    function loadRecommendations(){

        var userID = User.getCurrentId();
        console.log(userID);
        MealPlan.recommendations({userId : userID}).$promise.then(function(value, responseHeaders){
            console.log(value);
        }).catch(function(err){
            console.log(err);
        });
    } 
}])
   
.controller('settingsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', '$state', 'User', '$ionicHistory',
function ($scope, $stateParams, $state, User, $ionicHistory) {
    var vm = this;
    vm.logout = logout;

    function logout(){
        User.logout({}).$promise.then(function(value, responseHeaders){
            $ionicHistory.removeBackView();
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true,
                historyRoot: true
            });
            $state.go('login');
        }, function(err){
            console.log('Stacktrace ' + JSON.stringify(err));
        })
    }

}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$state', 'User', 'facebookPluginService', 'signupService', 'loadingService', 'loginService',
function ($scope, $stateParams, $state, User, facebookPluginService, signupService, loadingService, loginService) {
    var vm = this;
    vm.profile = {};
    vm.login = login;
    vm.loginFacebook = loginFacebook;

    function login(profile){

        loginService.login(profile).then(function(value){
            clearForm();
            $state.go('tabsController.dietetics');
        }).catch(function(err){
            loadingService.errorNotify(err, 5000);
        });
    }

    function clearForm(){
        vm.profile = {};
    }

    function loginFacebook(){

        // facebookPluginService.createUserAccount(function(data){
        //     facebookPluginService.isExistingUserHasFacebookProp(data.user.email)
        //         .then(function(hasFbProp){
        //             if(hasFbProp){
        //                 vm.login(data.user);
        //             }
        //             else{
        //                 signupService.signUp(data).then(function(value){
        //                     vm.login(data.user);
        //                 });
        //             }

        //         })
        //         .catch(function(err){
        //             loadingService.errorNotify(err, 5000);
        //         });
        // });


        facebookPluginService.createUserAccount(function(data){
            signupService.signUp(data).then(function(value){
                    vm.login(data.user);
                }).catch(function(err){
                    //Handle existing user here

                    facebookPluginService.isExistingUserHasFacebookProp(data.user.email)
                        .then(function(hasFbProp){
                            if(hasFbProp)
                                vm.login(data.user);
                            else
                                loadingService.errorNotify(err, 5000);
                        });
                });
        });
    }
}])
   
.controller('signupCtrl', ['$scope', '$stateParams', '$state', 'signupService', 'loadingService',
function ($scope, $stateParams, $state, signupService, loadingService) {
    var vm = this;
    vm.data = {};
    vm.signUp = signUp;
    vm.confirmPassword = '';
    vm.checkPassword = checkPassword;

    function signUp(data){

        if(checkPassword(data.user.password, vm.confirmPassword)){
            signupService.signUp(data).then(function(value){
                clearForm();
                loadingService.successNotify('Successfully created! Please verify your email.', 5000);
            }).catch(function(err){
                loadingService.errorNotify(err, 5000);
            });
        }else{
            alert('Please make sure your password and confirm password is the same!');
        }
    }

    function checkPassword(password, confirmPassword){
        return password === confirmPassword? true : false;
    }

    function clearForm(){
        vm.data = {};
        vm.confirmPassword = '';
    }
}])

.controller('profileCtrl', ['$scope', '$stateParams', 'User', 'bmiService', 'loadingService',
function($scope, $stateParams, User, bmiService, loadingService){
    var vm = this;
    vm.data = {};
    vm.saveChanges = saveChanges;
    vm.computeBMI = computeBMI;

    loadProfile();

    function loadProfile(){
        User.getCurrent().$promise.then(function(value, responseHeaders){
            console.log(value);
            if(value.account.hasOwnProperty('profile')){
                value.account.vitals.weight = Number.parseInt(value.account.vitals.weight);
                if(value.account.profile.hasOwnProperty('birthday')){
                    value.account.profile.birthday = new Date(value.account.profile.birthday);        
                }
            }
            
            vm.data = value;
        });
    }

    function saveChanges(data){
        console.log(data);
        User.prototype$updateAttributes(data).$promise.then(function(value, responseHeaders){
            console.log(value);
            loadingService.successNotify('Successfully updated!');
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
 
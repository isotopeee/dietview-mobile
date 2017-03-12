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
            console.log($ionicHistory.viewHistory());
            $state.go('login');
        }, function(err){
            console.log('Stacktrace ' + JSON.stringify(err));
        })
    }

}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$state', 'User', 'facebookPluginService', 'signupService',
function ($scope, $stateParams, $state, User, facebookPluginService, signupService) {
    var vm = this;
    vm.profile = {};
    vm.login = login;
    vm.loginFacebook = loginFacebook;

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

    function loginFacebook(){

        // User.deleteById({
        //     id: '228da7b8e0a59223959c206cd9bbf517'
        // }).$promise.then((value, responseHeaders) => {
        //     console.log(value, responseHeaders);
        // });

        // facebookPluginService.login(function(login){
        //     var accessToken = login.authResponse.accessToken,
        //         userID = login.authResponse.userID;
        //     facebookPluginService.getUserProfile(function(userProfile){
        //         console.log(userProfile);
        //         var data = {
        //             user: {
        //                 email: 'johnmichaelubas.santos@benilde.edu.ph', //userProfile.email
        //                 username: [userProfile.first_name, userProfile.last_name].join(''),
        //                 password: userID,
        //                 account: {
        //                     profile: {
        //                         firstname: userProfile.first_name,
        //                         lastname: userProfile.last_name,
        //                         gender: userProfile.gender
        //                     }
        //                 }
        //             }
        //         };
        //         data.user.account.social = {
        //             facebook: {
        //                 profile: data.user.account.profile,
        //                 accessToken: accessToken
        //             }
        //         };

        //         signupService.signUp(data).then(function(value){
        //             console.log(value);

        //             vm.login(data.user);

        //         }).catch(function(err){
        //             //Handle existing user here
        //             // console.log(err);
        //             User.findOne({
        //                 filter: {
        //                     where: {
        //                         email: data.user.email
        //                     }
        //                 }
        //             }).$promise.then(function(value, responseHeaders){
        //                 if(!value.hasOwnProperty('error')){
        //                     //Record is really existing
        //                     if(value.account.hasOwnProperty('social')){
        //                         if(value.account.social.hasOwnProperty('facebook')){
        //                             vm.login(data.user);
        //                         }else{
        //                             throw new Error('Invalid Login by Facebook');
        //                         }
        //                     }
        //                 }
        //             });
        //         });
        //         // signupService.signUp(data, function(value, responseHeaders){
        //         //     if(value.hasOwnProperty('error')){
        //         //         if(value.error.status === 422 || value.error.statusCode === 422){
        //         //             //Record existing
        //         //             //Get user's record
        //         //             //Check if fb property is existing
        //         //             if(data.user.account.hasOwnProperty('social')){
        //         //                 if(data.user.account.social.hasOwnProperty('facebook')){
        //         //                     //Continue to login
        //         //                     vm.login(data.user);
        //         //                 }else{
        //         //                     throw new Error('Login by Facebook: Invalid login');
        //         //                 }
        //         //             }
        //         //         }
        //         //     }else{
        //         //         data.user.account = {
        //         //             social: {
        //         //                 facebook: {
        //         //                     profile: data.user.account.profile,
        //         //                     accessToken: accessToken
        //         //                 }
        //         //             }
        //         //         };
        //         //         vm.login(data.user);
        //         //     }
        //         // });
        //     });
        // });
    }

}])
   
.controller('signupCtrl', ['$scope', '$stateParams', '$state', 'signupService',
function ($scope, $stateParams, $state, signupService) {
    var vm = this;
    vm.data = {};
    vm.signUp = signUp;

    function signUp(data){

        if(confirmPassword(data.user.password, vm.confirmPassword)){
            signupService.signUp(data, function(value, responseHeaders){
                console.log(value);
                clearForm();
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
        vm.confirmPassword = '';
    }
}])

.controller('profileCtrl', ['$scope', '$stateParams', 'User', 'bmiService', function($scope, $stateParams, User, bmiService){
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
 
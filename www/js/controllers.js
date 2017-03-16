angular.module('app.controllers', [])
  
.controller('dieteticsCtrl', ['$scope', '$stateParams', 'User',
function ($scope, $stateParams, User) {
    var vm = this;

    loadSubscriptions();

    function loadSubscriptions(){
        var userId = User.getCurrentId();
        User.subscriptions({id : userId }).$promise.then(function(value, responseHeaders){
            console.log(value);
        });
    }

}])
   
.controller('chatBotCtrl', ['$scope', '$stateParams', '$ionicScrollDelegate', 'chatbotService', 'User', 'textToSpeechService',
function ($scope, $stateParams, $ionicScrollDelegate, chatbotService, User, textToSpeechService) {
    var vm = this;
    vm.toggleChat = toggleChat;
    vm.isChatEnable = false;
    vm.sendMessage = sendMessage;
    vm.chatbotService = chatbotService;
    vm.isLoading = false;
    vm.user = {};

    getUserProfile();

    function sendMessage(type, message){
       
        vm.message = '';
        vm.isLoading = true;
        chatbotService.sendMessage(type, message)
            .then(function(botMessage){
                var message_object = {
                    timestamp: new Date(),
                    type: 'friend',
                    message: botMessage
                };
                vm.isLoading = false;
                chatbotService.messages.push(message_object);
                var isTTSEnable = JSON.parse(window.localStorage.getItem('TTS'));
                if(isTTSEnable){
                    textToSpeechService.speakText(botMessage, function(){
                        // Nothing to do
                    });
                }
                
            });
        $ionicScrollDelegate.resize();
        $ionicScrollDelegate.scrollBottom(true);
    }

    function toggleChat(){
        vm.isChatEnable = !vm.isChatEnable;
    }

    function getUserProfile(){
        User.getCurrent().$promise.then(function(value, responseHeaders){
            vm.user = value;
            vm.isChatEnable = true;
        });
    }

}])
   
.controller('diViewCtrl', ['$scope', '$stateParams', 'MealPlan', 'User', 'subscriptionService', 'modalService',
function ($scope, $stateParams, MealPlan, User, subscriptionService, modalService) {
    var vm = this;
    vm.recommendations = [];
    vm.loadMealPlans = loadMealPlans;
    vm.subscribe = subscribe;
    vm.viewDetails = viewDetails;
    vm.selectedMealPlan = {};
    vm.modalService = modalService;

    loadMealPlans();

    function loadMealPlans(){
        MealPlan.find({}).$promise.then(function(value, responseHeaders){
            console.log(value);
            vm.recommendations = value;
        });
    }

    function subscribe(mealPlan){
        subscriptionService.subscribe(mealPlan, new Date());
    }

    function viewDetails(mealPlan){
        vm.selectedMealPlan = mealPlan;
        modalService.showModal($scope, 'templates/foodBuddyModal.html');
    }
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
        data.exerciseLevel = JSON.parse(data.exerciseLevel);
        var exerciseLevel = data.exerciseLevel.level; //Get copy
        data.exerciseLevel = data.exerciseLevel.value;
        vitalTrackerService.calculate(data).then(function(eer){
            var message = [
                '<p> Age: ' + data.age + '</p>', 
                '<p> Gender: ' + data.gender + '</p>',
                '<p> Height: ' + [data.height.feet, data.height.inches].join('\'') + '</p>',
                '<p> Weight: ' + vm.data.weight + '</p>',
                '<p> Exercise Level: ' + exerciseLevel + '</p>',
                '<b>' +  eer + '</b>', ' calories/day to maintain.'
                ].join('');
            popupService.alertPopup('Total Calories Including Exercise', message);
            clearForm();    
        });
    }

    function clearForm(){
        vm.data = {};
    }
    
}])

.controller('mealPlannerCtrl', ['$scope', '$stateParams', 'MealItem', 
    'actionSheetService', '$ionicScrollDelegate', 'modalService', 'loadingService',
function($scope, $stateParams, MealItem, actionSheetService, $ionicScrollDelegate, modalService, loadingService){
    var vm = this;
    vm.data = {};    
    vm.meals = [];
    vm.types = [];
    vm.selectedMeals = {
        meals: [],
        totalCalories: 0
    };
    vm.totalSelected = 0;
    vm.foodType = 'dairy';
    vm.openActionSheet = openActionSheet;
    vm.modalService = modalService;
    vm.onToggleIngredient = onToggleIngredient;
    vm.viewSelectedItems = viewSelectedItems;
    vm.removeSelectedIngredient = removeSelectedIngredient;

    loadIngredients();

    function loadIngredients(){
        MealItem.find({}).$promise.then(function(value, responseHeaders){
            vm.meals = value;
            getIngredientTypes(vm.meals);
        });
    }

    function getIngredientTypes(meals){
        for(var i = 0; i <= meals.length - 1; i++){
            if(meals[i].hasOwnProperty('type')){
                if(!vm.types.includes(meals[i].type)){
                    vm.types.push(meals[i].type);
                }
            }
        }
    }

    function openActionSheet(){
        var buttons = [
            { text: '<i class="icon ion-arrow-up-c"></i> Scroll Top'},
            { text: '<i class="icon ion-bag"></i> View Selected Items'}
        ];
        actionSheetService.showActionSheet(buttons, 'Meal Planner', '', 'Cancel', 
        function cancel(){
            // Cancel callback    
        }, function buttonClicked(index){
            switch(index){
                case 0: 
                    $ionicScrollDelegate.scrollTop(true);
                    break;
                case 1:
                    viewSelectedItems();
                    break;
            }
        });
    }

    function viewSelectedItems(){
        modalService.showModal($scope, 'templates/mealPlannerModal.html');
    }

    function onToggleIngredient(selectedMealID, selectedMeal){
        selectedMealID ? addSelectedIngredient(selectedMeal) : removeSelectedIngredient(selectedMeal);
    }

    function addSelectedIngredient(selectedMeal){
        vm.selectedMeals.meals.push(selectedMeal);
        vm.selectedMeals.totalCalories += selectedMeal.calories;
    }

    function removeSelectedIngredient(selectedMeal){
        vm.selectedMeals.meals = vm.selectedMeals.meals.filter(function(meal){
            if(meal.id === selectedMeal.id){
                vm.selectedMeals.totalCalories -= selectedMeal.calories;
                vm.data.selectedMeal[meal.id] = false;
                return false;
            }
            return true;
        });
    }
}])
   
.controller('foodBuddyCtrl', ['$scope', '$stateParams', 'MealPlan', 'subscriptionService', 'User',
    'modalService',
function ($scope, $stateParams, MealPlan, subscriptionService, User, modalService) {
    var vm = this;
    vm.user = {};
    vm.recommendations = [];
    vm.subscribe = subscribe;
    vm.viewDetails = viewDetails;
    vm.selectedMealPlan = {};
    vm.modalService = modalService;

    loadRecommendations();

    function loadRecommendations(){

        var userID = User.getCurrentId();
        console.log(userID);
        MealPlan.recommendations({userId : userID}).$promise.then(function(value, responseHeaders){
            console.log(value);
            vm.recommendations = value.recommendations;
        }).catch(function(err){
            console.log(err);
        });
    } 

    function subscribe(mealPlan){
        subscriptionService.subscribe(mealPlan, new Date());
    }

    function viewDetails(mealPlan){
        vm.selectedMealPlan = mealPlan;
        modalService.showModal($scope, 'templates/foodBuddyModal.html');
    }
}])
   
.controller('settingsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    var vm = this;
    vm.enableTTS = enableTTS;
    vm.isTTSEnable = false;

    init();

    function init(){
        vm.isTTSEnable = window.localStorage.getItem('TTS');
    }

    function enableTTS(status){
        window.localStorage.setItem('TTS', status);
    }

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
 
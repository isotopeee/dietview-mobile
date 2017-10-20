angular.module('app.controllers', [])

  .controller('dieteticsCtrl', ['$scope', '$cordovaCamera', '$cordovaFile', '$cordovaFileTransfer', '$cordovaDevice', '$ionicPopup', '$cordovaActionSheet', '$stateParams', 'TM_MealMealPlan', 'User', 'Subscription', 'modalService', 'platformService', 'API', '$state',
    function($scope, $cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice, $ionicPopup, $cordovaActionSheet, $stateParams, TM_MealMealPlan, User, Subscription, modalService, platformService, API, $state) {
      var vm = this;
      vm.subscriptions = [];
      vm.viewDetails = viewDetails;
      vm.modalService = modalService;
      vm.loadImage = loadImage;
      vm.selectPicture = selectPicture;
      vm.pathForImage = pathForImage;
      $scope.image = null;

      loadSubscriptions();

      function loadSubscriptions() {
        var userId = User.getCurrentId();
        var filter = {
          include: ['mealPlan']
        }
        Subscription.find({
          filter: filter
        }).$promise.then(function(value, responseHeaders) {
          value = value.filter(function(s) {
            if (s.userId === userId) {
              return true;
            }
            return false;
          });
          vm.subscriptions = value;
          console.log(value);
        });
      }

      function loadImage(subscription) {
        var options = {
          title: 'Select Image Source',
          buttonLabels: ['Load from Library', 'Use Camera'],
          addCancelButtonWithLabel: 'Cancel',
          androidEnableCancelButton: true,
        };

        $cordovaActionSheet.show(options).then(function(btnIndex) {
          var type = null;
          if (btnIndex === 1) {
            type = Camera.PictureSourceType.PHOTOLIBRARY;
          } else if (btnIndex === 2) {
            type = Camera.PictureSourceType.CAMERA;
          }
          if (type !== null) {
            console.log(type);
            vm.selectPicture(type, subscription);
          }
        });
      }

      // Take image with the camera or from library and store it inside the app folder
      // Image will not be saved to users Library.
      function selectPicture(sourceType,subscription) {
        var options = {
          quality: 100,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: sourceType,
          saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imagePath) {
            // Grab the file name of the photo in the temporary directory
            var currentName = imagePath.replace(/^.*[\\\/]/, '');

            //Create a new name for the photo
            var d = new Date(),
              n = d.getTime(),
              newFileName = n + ".jpg";
              console.log(newFileName);
            // If you are trying to load image from the gallery on Android we need special treatment!
            if (platformService.getPlatform() === 'android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
              window.FilePath.resolveNativePath(imagePath, function(entry) {
                window.resolveLocalFileSystemURL(entry, success, fail);

                function fail(e) {
                  console.error('Error: ', e);
                }

                function success(fileEntry) {
                  var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
                  // Only copy because of access rights
                  $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success) {
                    $scope.image = newFileName;
                    uploadImage(subscription);
                  }, function(error) {
                    alert('Error', error.exception);
                  });
                }
              });
            } else {
              var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
              // Move the file to permanent storage
              $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function(success) {
                $scope.image = newFileName;
                uploadImage(subscription);
              }, function(error) {
                alert('Error', error.exception);
              });
            }
          },
          function(err) {
            // Not always an error, maybe cancel was pressed...
          });
      }


      // Returns the local path inside the app for an image
      function pathForImage(image) {
        if (image === null) {
          return '';
        } else {
          return cordova.file.dataDirectory + image;
        }
      }

      function uploadImage(subscription) {
        // Destination URL
        // TODO: To be replaced by static url of API Server
        console.log('uploadImage()');
        var url = API.URL_BASE + "api/subscriptions/upload";
        console.log(url);
        // File for Upload
        var targetPath = vm.pathForImage($scope.image);

        // File name only
        var filename = $scope.image;

        var options = {
          fileKey: "file",
          fileName: filename,
          chunkedMode: false,
          mimeType: "multipart/form-data",
          params: {
            'fileName': filename
          }
        };


        $cordovaFileTransfer.upload(url, targetPath, options).then(function(result) {
          var image = JSON.parse(result.response);
          var imagePath = API.URL_BASE + image.path;
          updateSubscriptionPayment(subscription, imagePath);
        });
      }

      function updateSubscriptionPayment(subscription, imagePath) {
        var now = new Date();

        subscription.paymentDetails.image = imagePath;
        subscription.paymentDetails.isPaid = true;
        subscription.$upsert().then(function (data) {
          alert("Payment Details Uploaded. Your payment will be processed within 24 hours.");
          console.log(data);
          $state.reload();
        });
      }

      function viewDetails(mealPlan) {
        console.log(mealPlan);
        var filter = {
          where: {
            mealPlanId: mealPlan.id
          },
          include: {
            relation: 'meal',
          },
          order: 'day ASC'
        };

        TM_MealMealPlan.find({
          filter: filter
        }).$promise.then(function(data) {
          mealPlan.meals = _sortMealPlanMeals(data);
          mealPlan.image = changeMealPlanImageUrl(mealPlan.image);
          vm.selectedMealPlan = mealPlan;
          modalService.showModal($scope, 'templates/foodBuddyModal.html');
        });
      }

      function _sortMealPlanMeals(mealPlanMealData) {
        var mealPlanMeals = [];
        var mealPlanMeal = null;
        var lastItem = null;
        lastItem = mealPlanMealData[mealPlanMealData.length - 1];

        for (var i = 0; i < lastItem.day; i++) {
          mealPlanMeal = {
            breakfast: null,
            lunch: null,
            dinner: null,
            snack: null
          };
          mealPlanMeals.push(mealPlanMeal);
        }
        // IDEA: Sort meal plan meals data
        mealPlanMealData.forEach(function(mealPlanMeal) {
          mealPlanMeal.meal.image = changeMealImageUrl(mealPlanMeal.meal.image)
          mealPlanMeals[mealPlanMeal.day - 1][mealPlanMeal.meal.type] = mealPlanMeal.meal;
        });
        return mealPlanMeals;
      }

      function changeMealImageUrl(mealImageUrl) {
        var newUrl = mealImageUrl.replace('http://localhost:3000/', API.URL_BASE);
        return newUrl;
      }

      function changeMealPlanImageUrl(mealPlanImageUrl) {
        var newUrl = mealPlanImageUrl.replace('http://localhost:3000/', API.URL_BASE);
        return newUrl;
      }
    }
  ])

  .controller('chatBotCtrl', ['$scope', '$stateParams', '$ionicScrollDelegate', 'chatbotService', 'User', 'textToSpeechService',
    function($scope, $stateParams, $ionicScrollDelegate, chatbotService, User, textToSpeechService) {
      var vm = this;
      vm.toggleChat = toggleChat;
      vm.isChatEnable = false;
      vm.sendMessage = sendMessage;
      vm.chatbotService = chatbotService;
      vm.isLoading = false;
      vm.user = {};

      getUserProfile();

      function sendMessage(type, message) {

        vm.message = '';
        vm.isLoading = true;
        chatbotService.sendMessage(type, message)
          .then(function(botMessage) {
            if (botMessage.length === 0) {
              botMessage = 'Sorry, I didn\'t quite get that';
            }
            var message_object = {
              timestamp: new Date(),
              type: 'friend',
              message: botMessage
            };
            vm.isLoading = false;
            chatbotService.messages.push(message_object);
            var isTTSEnable = JSON.parse(window.localStorage.getItem('TTS'));
            if (isTTSEnable) {
              textToSpeechService.speakText(botMessage, function() {
                // Nothing to do
              });
            }

          });
        $ionicScrollDelegate.resize();
        $ionicScrollDelegate.scrollBottom(true);
      }

      function toggleChat() {
        vm.isChatEnable = !vm.isChatEnable;
      }

      function getUserProfile() {
        User.getCurrent().$promise.then(function(value, responseHeaders) {
          vm.user = value;
          vm.isChatEnable = true;
        });
      }

    }
  ])

  .controller('diViewCtrl', ['$scope', '$stateParams', 'TM_MealMealPlan', 'MealPlan', 'User', 'subscriptionService', 'modalService', 'loadingService', 'API',
    function($scope, $stateParams, TM_MealMealPlan, MealPlan, User, subscriptionService, modalService, loadingService, API) {
      var vm = this;
      vm.recommendations = [];
      vm.loadMealPlans = loadMealPlans;
      vm.subscribe = subscribe;
      vm.viewDetails = viewDetails;
      vm.selectedMealPlan = {};
      vm.modalService = modalService;

      loadMealPlans();

      function loadMealPlans() {
        MealPlan.find({}).$promise.then(function(mealPlans, responseHeaders) {
          mealPlans.forEach(function (mealPlan) {
            mealPlan.image = changeMealPlanImageUrl(mealPlan.image);
          });
          console.log(mealPlans);
          vm.recommendations = mealPlans;
        });
      }

      function subscribe(mealPlan) {
        var filter = {
          where: {
            mealPlanId: mealPlan.id
          },
          include: {
            relation: 'meal',
          },
          order: 'day ASC'
        };
        TM_MealMealPlan.find({
          filter: filter
        }).$promise.then(function(data) {
          mealPlan.meals = _sortMealPlanMeals(data);
          subscriptionService.subscribe(mealPlan, new Date());
        });
      }

      function viewDetails(mealPlan) {
        var filter = {
          where: {
            mealPlanId: mealPlan.id
          },
          include: {
            relation: 'meal',
          },
          order: 'day ASC'
        };

        TM_MealMealPlan.find({
          filter: filter
        }).$promise.then(function(data) {
          mealPlan.meals = _sortMealPlanMeals(data);
          mealPlan.image = changeMealPlanImageUrl(mealPlan.image);
          vm.selectedMealPlan = mealPlan;
          modalService.showModal($scope, 'templates/foodBuddyModal.html');
        });
      }

      function _sortMealPlanMeals(mealPlanMealData) {
        var mealPlanMeals = [];
        var mealPlanMeal = null;
        var lastItem = null;
        lastItem = mealPlanMealData[mealPlanMealData.length - 1];

        for (var i = 0; i < lastItem.day; i++) {
          mealPlanMeal = {
            breakfast: null,
            lunch: null,
            dinner: null,
            snack: null
          };
          mealPlanMeals.push(mealPlanMeal);
        }
        // IDEA: Sort meal plan meals data
        mealPlanMealData.forEach(function(mealPlanMeal) {
          mealPlanMeal.meal.image = changeMealImageUrl(mealPlanMeal.meal.image);
          mealPlanMeals[mealPlanMeal.day - 1][mealPlanMeal.meal.type] = mealPlanMeal.meal;
        });
        return mealPlanMeals;
      }

      function changeMealImageUrl(mealImageUrl) {
        var newUrl = mealImageUrl.replace('http://localhost:3000/', API.URL_BASE);
        return newUrl;
      }

      function changeMealPlanImageUrl(mealPlanImageUrl) {
        var newUrl = mealPlanImageUrl.replace('http://localhost:3000/', API.URL_BASE);
        return newUrl;
      }
    }
  ])

  .controller('messagingCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {


    }
  ])

  .controller('subscriptionsCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {

    }
  ])

  .controller('vitalTrackerCtrl', ['$scope', '$stateParams', 'vitalTrackerService', 'popupService',
    function($scope, $stateParams, vitalTrackerService, popupService) {
      var vm = this;
      vm.data = {};
      vm.exerciseLevels = [];
      vm.loadExerciseLevel = loadExerciseLevel;
      vm.calculate = calculate;

      loadExerciseLevel();

      function loadExerciseLevel() {
        vitalTrackerService.getExerciseLevel().then(function(data) {
          vm.exerciseLevels = data;
        });
      }

      function calculate(data) {
        console.log(data);
        data.exerciseLevel = JSON.parse(data.exerciseLevel);
        var exerciseLevel = data.exerciseLevel.level; //Get copy
        data.exerciseLevel = data.exerciseLevel.value;
        vitalTrackerService.calculate(data).then(function(eer) {
          var message = [
            '<p> Age: ' + data.age + '</p>',
            '<p> Gender: ' + data.gender + '</p>',
            '<p> Height: ' + [data.height.feet, data.height.inches].join('\'') + '</p>',
            '<p> Weight: ' + vm.data.weight + '</p>',
            '<p> Exercise Level: ' + exerciseLevel + '</p>',
            '<b>' + eer + '</b>', ' calories/day to maintain.'
          ].join('');
          popupService.alertPopup('Total Calories Including Exercise', message);
          clearForm();
        });
      }

      function clearForm() {
        vm.data = {};
      }

    }
  ])

  .controller('mealPlannerCtrl', ['$scope', '$stateParams', 'MealItem',
    'actionSheetService', '$ionicScrollDelegate', 'modalService', 'loadingService',
    function($scope, $stateParams, MealItem, actionSheetService, $ionicScrollDelegate, modalService, loadingService) {
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

      function loadIngredients() {
        MealItem.find({}).$promise.then(function(value, responseHeaders) {
          vm.meals = value;
          getIngredientTypes(vm.meals);
        });
      }

      function getIngredientTypes(meals) {
        for (var i = 0; i <= meals.length - 1; i++) {
          if (meals[i].hasOwnProperty('type')) {
            if (!vm.types.includes(meals[i].type)) {
              vm.types.push(meals[i].type);
            }
          }
        }
      }

      function openActionSheet() {
        var buttons = [{
            text: '<i class="icon ion-arrow-up-c"></i> Scroll Top'
          },
          {
            text: '<i class="icon ion-bag"></i> View Selected Items'
          }
        ];
        actionSheetService.showActionSheet(buttons, 'Meal Planner', '', 'Cancel',
          function cancel() {
            // Cancel callback
          },
          function buttonClicked(index) {
            switch (index) {
              case 0:
                $ionicScrollDelegate.scrollTop(true);
                break;
              case 1:
                viewSelectedItems();
                break;
            }
          });
      }

      function viewSelectedItems() {
        modalService.showModal($scope, 'templates/mealPlannerModal.html');
      }

      function onToggleIngredient(selectedMealID, selectedMeal) {
        selectedMealID ? addSelectedIngredient(selectedMeal) : removeSelectedIngredient(selectedMeal);
      }

      function addSelectedIngredient(selectedMeal) {
        vm.selectedMeals.meals.push(selectedMeal);
        vm.selectedMeals.totalCalories += selectedMeal.calories;
      }

      function removeSelectedIngredient(selectedMeal) {
        vm.selectedMeals.meals = vm.selectedMeals.meals.filter(function(meal) {
          if (meal.id === selectedMeal.id) {
            vm.selectedMeals.totalCalories -= selectedMeal.calories;
            vm.data.selectedMeal[meal.id] = false;
            return false;
          }
          return true;
        });
      }
    }
  ])

  .controller('foodBuddyCtrl', ['$scope', '$stateParams', 'TM_MealMealPlan', 'MealPlan', 'subscriptionService', 'User',
    'modalService', 'API',
    function($scope, $stateParams, TM_MealMealPlan, MealPlan, subscriptionService, User, modalService, API) {
      var vm = this;
      vm.user = {};
      vm.recommendations = [];
      vm.subscribe = subscribe;
      vm.viewDetails = viewDetails;
      vm.selectedMealPlan = {};
      vm.modalService = modalService;

      loadRecommendations();

      function loadRecommendations() {

        var userID = User.getCurrentId();
        console.log(userID);
        MealPlan.recommendations({
          userId: userID
        }).$promise.then(function(value, responseHeaders) {
          value.recommendations.forEach(function (recommendation) {
            recommendation.image = changeMealPlanImageUrl(recommendation.image);
          })
          vm.recommendations = value.recommendations;
        }).catch(function(err) {
          console.log(err);
        });
      }

      function subscribe(mealPlan) {
        var filter = {
          where: {
            mealPlanId: mealPlan.id
          },
          include: {
            relation: 'meal',
          },
          order: 'day ASC'
        };
        TM_MealMealPlan.find({
          filter: filter
        }).$promise.then(function(data) {
          mealPlan.meals = _sortMealPlanMeals(data);
          subscriptionService.subscribe(mealPlan, new Date());
        });
      }

      function viewDetails(mealPlan) {
        var filter = {
          where: {
            mealPlanId: mealPlan.id
          },
          include: {
            relation: 'meal',
          },
          order: 'day ASC'
        };

        TM_MealMealPlan.find({
          filter: filter
        }).$promise.then(function(data) {
          mealPlan.meals = _sortMealPlanMeals(data);
          mealPlan.image = changeMealPlanImageUrl(mealPlan.image);
          vm.selectedMealPlan = mealPlan;
          modalService.showModal($scope, 'templates/foodBuddyModal.html');
        });
      }

      function _sortMealPlanMeals(mealPlanMealData) {
        var mealPlanMeals = [];
        var mealPlanMeal = null;
        var lastItem = null;
        lastItem = mealPlanMealData[mealPlanMealData.length - 1];

        for (var i = 0; i < lastItem.day; i++) {
          mealPlanMeal = {
            breakfast: null,
            lunch: null,
            dinner: null,
            snack: null
          };
          mealPlanMeals.push(mealPlanMeal);
        }
        // IDEA: Sort meal plan meals data
        mealPlanMealData.forEach(function(mealPlanMeal) {
          mealPlanMeal.meal.image = changeMealImageUrl(mealPlanMeal.meal.image);
          mealPlanMeals[mealPlanMeal.day - 1][mealPlanMeal.meal.type] = mealPlanMeal.meal;
        });
        return mealPlanMeals;
      }

      function changeMealImageUrl(mealImageUrl) {
        var newUrl = mealImageUrl.replace('http://localhost:3000/', API.URL_BASE);
        return newUrl;
      }

      function changeMealPlanImageUrl(mealPlanImageUrl) {
        var newUrl = mealPlanImageUrl.replace('http://localhost:3000/', API.URL_BASE);
        return newUrl;
      }
    }
  ])

  .controller('settingsCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {
      var vm = this;
      vm.enableTTS = enableTTS;
      vm.isTTSEnable = false;

      init();

      function init() {
        vm.isTTSEnable = window.localStorage.getItem('TTS');
      }

      function enableTTS(status) {
        window.localStorage.setItem('TTS', status);
      }

    }
  ])

  .controller('menuCtrl', ['$scope', '$stateParams', '$state', 'User', '$ionicHistory',
    function($scope, $stateParams, $state, User, $ionicHistory) {
      var vm = this;
      vm.logout = logout;

      function logout() {
        User.logout({}).$promise.then(function(value, responseHeaders) {
          $ionicHistory.removeBackView();
          $ionicHistory.clearHistory();
          $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true,
            historyRoot: true
          });
          $state.go('login');
        }, function(err) {
          console.log('Stacktrace ' + JSON.stringify(err));
        })
      }

    }
  ])

  .controller('loginCtrl', ['$cookies', '$scope', '$stateParams', '$state', 'User', 'facebookPluginService', 'signupService', 'loadingService', 'loginService', 'LoopBackAuth',
    function($cookies, $scope, $stateParams, $state, User, facebookPluginService, signupService, loadingService, loginService, LoopBackAuth) {
      var vm = this;
      vm.profile = {};
      vm.login = login;
      // vm.loginFacebook = loginFacebook;

      activate();

      function activate() {
        const accessTokenId = $cookies.get('access_token');
        const userId = $cookies.get('userId');

        if (accessTokenId && userId) {
          LoopBackAuth.setUser(
            accessTokenId, userId, userId);
          LoopBackAuth.rememberMe = false
          LoopBackAuth.save();

          $cookies.remove('access_token');
          $cookies.remove('userId');

          $state.go('profileTabs.profile');
        }
      }

      function login(profile) {

        loginService.login(profile).then(function(value) {
          clearForm();
          $state.go('profileTabs.profile');
        }).catch(function(err) {
          loadingService.errorNotify(err, 5000);
        });
      }

      function clearForm() {
        vm.profile = {};
      }

      // function loginFacebook() {

      //   // facebookPluginService.createUserAccount(function(data){
      //   //     facebookPluginService.isExistingUserHasFacebookProp(data.user.email)
      //   //         .then(function(hasFbProp){
      //   //             if(hasFbProp){
      //   //                 vm.login(data.user);
      //   //             }
      //   //             else{
      //   //                 signupService.signUp(data).then(function(value){
      //   //                     vm.login(data.user);
      //   //                 });
      //   //             }

      //   //         })
      //   //         .catch(function(err){
      //   //             loadingService.errorNotify(err, 5000);
      //   //         });
      //   // });


      //   facebookPluginService.createUserAccount(function(data) {
      //     signupService.signUp(data).then(function(value) {
      //       vm.login(data.user);
      //     }).catch(function(err) {
      //       //Handle existing user here

      //       facebookPluginService.isExistingUserHasFacebookProp(data.user.email)
      //         .then(function(hasFbProp) {
      //           if (hasFbProp)
      //             vm.login(data.user);
      //           else
      //             loadingService.errorNotify(err, 5000);
      //         });
      //     });
      //   });
      // }
    }
  ])

  .controller('signupCtrl', ['$scope', '$stateParams', '$state', 'signupService', 'loadingService', 'modalService',
    function($scope, $stateParams, $state, signupService, loadingService, modalService) {
      var vm = this;
      vm.data = {};
      vm.signUp = signUp;
      vm.confirmPassword = '';
      vm.checkPassword = checkPassword;
      vm.showTerms = showTerms;

      function signUp(data) {

        if (checkPassword(data.user.password, vm.confirmPassword)) {
          signupService.signUp(data).then(function(value) {
            clearForm();
            loadingService.successNotify('Successfully created! Please verify your email.', 5000);
            $state.go('login');
          }).catch(function(err) {
            loadingService.errorNotify(err, 5000);
          });
        } else {
          alert('Please make sure your password and confirm password is the same!');
        }
      }

      function checkPassword(password, confirmPassword) {
        return password === confirmPassword ? true : false;
      }

      function clearForm() {
        vm.data = {};
        vm.confirmPassword = '';
      }

      function showTerms() {
        modalService.showModal($scope, 'templates/termsModal.html');
      }
    }
  ])

  .controller('profileCtrl', ['$scope', '$stateParams', 'User', 'bmiService', 'loadingService',
    function($scope, $stateParams, User, bmiService, loadingService) {
      var vm = this;
      vm.data = {};
      vm.saveChanges = saveChanges;
      vm.computeBMI = computeBMI;

      loadProfile();

      function loadProfile() {
        User.getCurrent().$promise.then(function(value, responseHeaders) {
          console.log(value);
          if (value.account.hasOwnProperty('profile')) {
            value.account.vitals.weight = Number.parseInt(value.account.vitals.weight);
            if (value.account.profile.hasOwnProperty('birthday')) {
              value.account.profile.birthday = new Date(value.account.profile.birthday);
            }
          }

          vm.data = value;
        });
      }

      function saveChanges(data) {
        console.log(data);
        User.prototype$updateAttributes(data).$promise.then(function(value, responseHeaders) {
          console.log(value);
          loadingService.successNotify('Successfully updated!');
        }, function(err) {
          console.log(err);
        })
      }

      /**
       * Used in ng-change event
       */

      function computeBMI(heightFt, heightInc, weight) {
        vm.data.account.vitals.bmi = bmiService
          .computeBMI(vm.data.account.vitals.height.feet, vm.data.account.vitals.height.inches, vm.data.account.vitals.weight);
        vm.data.account.vitals.status = bmiService.bmiStatus(vm.data.account.vitals.bmi);
      }
    }
  ])

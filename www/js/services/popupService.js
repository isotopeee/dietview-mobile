angular
    .module('app.services')
    .service('popupService', popupService);

    function popupService($ionicPopup){
        var vm = this;
        vm.alertPopup = alertPopup;

        function alertPopup(title, text){
            return $ionicPopup.alert({
                title: title,
                template: text
            }).then(function(popup){
                return popup;
            });
        }
    }

    popupService.$inject = ['$ionicPopup'];
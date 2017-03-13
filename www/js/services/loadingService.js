angular
    .module('app.services')
    .service('loadingService', loadingService);
    
function loadingService($ionicLoading){
    var vm = this;
    vm.showLoading = showLoading;
    vm.hideLoading = hideLoading;
    vm.successNotify = successNotify;
    vm.errorNotify = errorNotify;

    function showLoading(config){
        var defaultConfig = {
            template: config.template || 'Please wait... <ion-spinner></ion-spinner>',
            noBackdrop: config.noBackdrop || false,
            duration: config.duration || 0 
        };

        return $ionicLoading.show({
            template: defaultConfig.template,
            noBackdrop: defaultConfig.noBackdrop,
            duration: defaultConfig.duration
        }).then(function(){
            return 'LoadingService: showLoading';
        });
    }

    function hideLoading(){
        return $ionicLoading.hide()
            .then(function(){
                return 'LoadingService: hideLoading';
            });
    }
    
    function successNotify(message, duration){
        return vm.showLoading({
            template: [message, '<i class="icon ion-checkmark balanced">'].join(' '),
            noBackdrop: true,
            duration: duration || 3000
        }).then(function(){
            return 'LoadingService: successNotify';
        });
    }

    function errorNotify(message, duration){
        return vm.showLoading({
            template: [message, '<i class="icon ion-sad assertive">'].join(' '),
            noBackdrop: true,
            duration: duration || 3000
        }).then(function(){
            return 'LoadingService: successNotify';
        });
    }
}

loadingService.$inject = ['$ionicLoading'];
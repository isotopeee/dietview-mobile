angular
    .module('app.services', [])
    .service('loadingService', loadingService);
    
function loadingService($ionicLoading){
    var vm = this;
    vm.showLoading = showLoading;
    vm.hideLoading = hideLoading;

    function showLoading(){
        return $ionicLoading.show({
            template: 'Please wait...'
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
}

loadingService.$inject = ['$ionicLoading'];

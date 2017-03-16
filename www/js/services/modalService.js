angular
    .module('app.services')
    .service('modalService', modalService);

    function modalService($ionicModal){
        var vm = this;
        vm.modal;
        vm.showModal = showModal;
        vm.hideModal = hideModal;

        function initModal($scope, templateUrl){
            return $ionicModal.fromTemplateUrl(templateUrl, {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal){
                $scope.modal = modal;
                vm.modal = modal;
                return modal;
            });
        }

        function showModal($scope, templateUrl){
            return initModal($scope, templateUrl).then(function(modal){
                vm.modal.show();
                return modal;
            });
        }

        function hideModal(){
            vm.modal.hide();
        }
    }

    modalService.$inject = ['$ionicModal'];
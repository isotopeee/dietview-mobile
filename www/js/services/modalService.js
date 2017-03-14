angular
    .module('app.services')
    .service('modalService', modalService);

    function modalService($ionicModal){
        var vm = this;
        vm.showModal = showModal;

        function showModal($scope, templateUrl){
            return $ionicModal.fromTemplateUrl(templateUrl, {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal){
                $scope.modal = modal;
                return modal;
            })
        }
    }

    modalService.$inject = ['$ionicModal'];
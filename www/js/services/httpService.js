angular
    .module('app.services')
    .service('httpService', httpService);

    function httpService($http){
        var vm = this;
        vm.getRequest = getRequest;

        function getRequest(url, data){
            var config = {
                url: url || '',
                method: 'GET',
                data: data
            };

            return $http(config).then(function(data){
                return data;
            }).catch(function(err){
                return err;
            });
        }
    }

    httpService.$inject = ['$http'];
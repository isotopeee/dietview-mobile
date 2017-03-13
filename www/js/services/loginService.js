angular 
    .module('app.services')
    .service('loginService', loginService);

    function loginService(User){
        var vm = this;
        vm.login = login;

        function login(data){

            data.realm = 'dietview';
            return User.login({rememberMe: true}, data).$promise.then(function(value, responseHeaders){
                if(value.hasOwnProperty('error')){
                    throw new Error(JSON.stringify(value.error));
                }
                console.log(value);
                return value.$promise;
            }).catch(function(err){
                err = JSON.parse(err.message);
                throw new Error(err.message);
            });
        }
    }

    loginService.$inject = ['User'];
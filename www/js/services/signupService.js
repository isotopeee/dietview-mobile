angular 
    .module('app.services')
    .service('signupService', signupService);

    function signupService(User){
        var vm = this;
        vm.signUp = signUp;

        function signUp(data, callback){
            if(!data.user.hasOwnProperty('account')){
                data.user.account = {};
                data.user.account.profile = {};
            }
            
            data.user.account.vitals = {};
            data.user.messages = [];
            data.user.activeSubscription = {};
            data.user.subscriptions = [];
            data.user.status = 'active';
            data.user.realm = 'dietview';
            data.user.account.role = 'customer';
            
            console.log(data.user);

            return User.create({}, data.user).$promise.then(function(value, responseHeaders){
                if(value.hasOwnProperty('error')){
                    throw new Error(JSON.stringify(value.error));
                }
                return value.$promise;
            }).catch(function(err){
                err = JSON.parse(err.message);
                throw new Error(err.message);
            });
        }
    }

    signupService.$inject = ['User'];
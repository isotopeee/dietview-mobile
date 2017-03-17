angular
    .module('app.services')
    .service('subscriptionService', subscriptionService);

    function subscriptionService(User, Subscription){
        var vm = this;
        vm.subscribe = subscribe;

        function subscribe(mealPlan, startDate){
            var data = {
                customer: {},
                paymentDetails: {
                    isPaid: false,
                    total: mealPlan.price,
                    image: ''
                },
                mealPlan: mealPlan,
                subscriptionDate: new Date(),
                startDate: startDate,
                endDate: startDate,
                type: mealPlan.type,
                remarks: '',
                status: 'pending',
                isActive: false,
                userId: 0
            };

            return getUserProfile().then(function(user){
                data.customer = user;
                data.userId = user.id;
                data.endDate = addDays(data.startDate, mealPlan.meals.length);
                
                return User.subscriptions.create({id: data.userId}, data).$promise.then(function(value, responseHeaders){
                    return value;
                });
            });
        }



        function getUserProfile(){
            return User.getCurrent().$promise.then(function(value, responseHeaders){
                return value;
            }).catch(function(err){
                throw new Error('Subscription Service: ' + err);
            });
        }

        function addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
    }

    subscriptionService.$inject = ['User', 'Subscription'];
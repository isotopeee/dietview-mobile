angular
    .module('app.interceptors', [])
    .factory('loadingInterceptor', loadingInterceptor);

function loadingInterceptor($injector){
    
    return {
        request: function(config){
            var loadingService = $injector.get('loadingService');
            if(!config.url.includes('bot')){
                loadingService.showLoading({});
            }
            return config;
        },
        requestError: function(config){
            return defaultBehaviour(config);
        },
        response: function(res){
            return defaultBehaviour(res);
        },
        responseError: function(res){
            return defaultBehaviour(res);
        }
    }
    function defaultBehaviour(opt){
        var loadingService = $injector.get('loadingService');
        return loadingService.hideLoading().then(function(){
            return opt;
        });
    }
}

loadingInterceptor.$inject = ['$injector'];
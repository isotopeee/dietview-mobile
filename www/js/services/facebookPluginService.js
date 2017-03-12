angular
    .module('app.services')
    .service('facebookPluginService', facebookPluginService);

function facebookPluginService(platformService){
    var vm = this;
    vm.login = login;
    vm.getProfilePicture = getProfilePicture;
    vm.getUserProfile = getUserProfile;
    vm.getUserLocation = getUserLocation;

    function login(successCallback){

        if(platformService.isWebView()){
            facebookConnectPlugin
                .login(['public_profile'], successCallback, 
                function errorCallback(error){
                    throw error;
                });
        }else{
            throw 'Browser not supported.';
        }
    }

    function getProfilePicture(userID, successCallback){

        /**
         * API: https://developers.facebook.com/docs/graph-api/reference/user/picture/
         * 
         * By default this edge will return a 302 redirect to the picture image.
         * To get access to the data about the picture, please include redirect=false in your query.
         * 
         *  */ 

        facebookConnectPlugin
            .api('/' + userID + '/picture?redirect=false', ["public_profile"], successCallback, 
            function errorCallback(error){
                throw error;
            });
    }

    function getUserProfile(successCallback){
        facebookConnectPlugin
            .api('/me?fields=name,first_name,last_name,email,birthday,gender,location', ['public_profile', 'user_birthday', 'user_location'], successCallback,
            function errorCallback(error){
                throw error;
            });
    }

    function getUserLocation(successCallback){
        facebookConnectPlugin
            .api('/me/locations', successCallback, 
            function errorCallback(error){
                throw error;
            });
    }

    function logout(successCallback){
        facebookConnectPlugin
            .logout(successCallback, 
            function errorCallback(error){
                throw error;
            });
    }
}

facebookPluginService.$inject = ['platformService'];
angular
    .module('app.services')
    .service('facebookPluginService', facebookPluginService);

function facebookPluginService(platformService){
    var vm = this;
    vm.login = login;
    vm.getProfilePicture = getProfilePicture;
    vm.getUserProfile = getUserProfile;
    vm.getUserLocation = getUserLocation;
    vm.createUserAccount = createUserAccount;
    vm.isExistingUserHasFacebookProp = isExistingUserHasFacebookProp;

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

    function createUserAccount(callback){
        vm.login(function(fbLoginData){
            var fbAccessToken = fbLoginData.authResponse.accessToken,
                fbUserID = fbLoginData.authResponse.userID;
            vm.getUserProfile(function(fbUserProfile){
                var data = createUserWithFacebookProp(fbUserID, fbAccessToken, fbUserProfile);

                callback(data);
            });
        });
    }

    function createUserWithFacebookProp(fbUserID, fbAccessToken, fbUserProfile){

        if(!fbUserID || !fbAccessToken || !fbUserProfile)
            throw new Error('Failed to create User with Facebook Prop');
        if(!fbUserProfile.hasOwnProperty('first_name') || !fbUserProfile.hasOwnProperty('last_name') 
            || !fbUserProfile.hasOwnProperty('gender') || !fbUserProfile.hasOwnProperty('email'))
            throw new Error('fbUserProfile missing props')

        var data = {
            user: {
                email: fbUserProfile.email,
                username: [fbUserProfile.first_name, fbUserProfile.last_name].join('').toLowerCase(),
                password: fbUserID,
                account: {
                    profile: {
                        firstname: fbUserProfile.first_name,
                        lastname: fbUserProfile.last_name,
                        gender: fbUserProfile.gender
                    }
                }
            }
        };
        data.user.account.social = {
            facebook: {
                profile: data.user.account.profile,
                accessToken: fbAccessToken,
                userID: fbUserID
            }
        };

        return data;
    }

    function isExistingUserHasFacebookProp(email){
        return User.findOne({
            filter: {
                where: {
                    email: email
                }
            }
        }).$promise.then(function(value, responseHeaders){
             if(!value.hasOwnProperty('error')){
                if(value.account.hasOwnProperty('social')){
                    if(value.account.social.hasOwnProperty('facebook')){
                        return true;
                    }else{
                        return false;
                    }
                }
            }
        });
    }
}

facebookPluginService.$inject = ['platformService'];
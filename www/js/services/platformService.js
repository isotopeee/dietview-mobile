angular.module('app.services')
    .service('platformService', platformService);

function platformService(){
    var vm = this;
    vm.getPlatform = getPlatform;
    vm.isAndroid = isAndroid;
    vm.isBrowser = isBrowser;
    vm.isIOS = isIOS;
    vm.isWebView = isWebView;

    function getPlatform(){
        return ionic.Platform.platform();
    }

    function isAndroid(){
        return ionic.Platform.isAndroid();
    }

    function isBrowser(){
        return getPlatform() === 'win32' ? true : false;
    }

    function isIOS(){
        return ionic.Platform.isIOS();
    }

    function isWebView(){
        return ionic.Platform.isWebView();
    }
}

platformService.$inject = [];
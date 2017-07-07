(function() {
    'use strict';

    angular
        .module('app.services')
        .service('API', API);

    API.$inject = [];

    /* @ngInject */
    function API() {
        this.URL_BASE = 'http://192.168.7.52:3000/';
        // this.URL_BASE = 'https://dietview-api.mybluemix.net/';
    }
})();

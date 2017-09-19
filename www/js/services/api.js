(function() {
    'use strict';

    angular
        .module('app.services')
        .service('API', API);

    API.$inject = [];

    /* @ngInject */
    function API() {
        // this.URL_BASE = 'http://localhost:3000/';
        this.URL_BASE = 'http://dietview-api.mybluemix.net/';
    }
})();

// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Email",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Emails/:id",
          { 'id': '@id' },
          {
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Email#modelName
        * @propertyOf lbServices.Email
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Email`.
        */
        R.modelName = "Email";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.subscriptions.findById() instead.
            "prototype$__findById__subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/subscriptions/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.subscriptions.destroyById() instead.
            "prototype$__destroyById__subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/subscriptions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.subscriptions.updateById() instead.
            "prototype$__updateById__subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/subscriptions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.messages.findById() instead.
            "prototype$__findById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.messages.destroyById() instead.
            "prototype$__destroyById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.messages.updateById() instead.
            "prototype$__updateById__messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/users/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use User.subscriptions() instead.
            "prototype$__get__subscriptions": {
              isArray: true,
              url: urlBase + "/users/:id/subscriptions",
              method: "GET",
            },

            // INTERNAL. Use User.subscriptions.create() instead.
            "prototype$__create__subscriptions": {
              url: urlBase + "/users/:id/subscriptions",
              method: "POST",
            },

            // INTERNAL. Use User.subscriptions.destroyAll() instead.
            "prototype$__delete__subscriptions": {
              url: urlBase + "/users/:id/subscriptions",
              method: "DELETE",
            },

            // INTERNAL. Use User.subscriptions.count() instead.
            "prototype$__count__subscriptions": {
              url: urlBase + "/users/:id/subscriptions/count",
              method: "GET",
            },

            // INTERNAL. Use User.messages() instead.
            "prototype$__get__messages": {
              isArray: true,
              url: urlBase + "/users/:id/messages",
              method: "GET",
            },

            // INTERNAL. Use User.messages.create() instead.
            "prototype$__create__messages": {
              url: urlBase + "/users/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use User.messages.destroyAll() instead.
            "prototype$__delete__messages": {
              url: urlBase + "/users/:id/messages",
              method: "DELETE",
            },

            // INTERNAL. Use User.messages.count() instead.
            "prototype$__count__messages": {
              url: urlBase + "/users/:id/messages/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/users",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/users/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#changePassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * change user password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/users/reset-password",
              method: "POST",
            },

            // INTERNAL. Use Subscription.user() instead.
            "::get::Subscription::user": {
              url: urlBase + "/Subscriptions/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Message.user() instead.
            "::get::Message::user": {
              url: urlBase + "/Messages/:id/user",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";

    /**
     * @ngdoc object
     * @name lbServices.User.subscriptions
     * @header lbServices.User.subscriptions
     * @object
     * @description
     *
     * The object `User.subscriptions` groups methods
     * manipulating `Subscription` instances related to `User`.
     *
     * Call {@link lbServices.User#subscriptions User.subscriptions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#subscriptions
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries subscriptions of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::get::User::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.subscriptions#count
             * @methodOf lbServices.User.subscriptions
             *
             * @description
             *
             * Counts subscriptions of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.subscriptions.count = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::count::User::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.subscriptions#create
             * @methodOf lbServices.User.subscriptions
             *
             * @description
             *
             * Creates a new instance in subscriptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.create = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::create::User::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.subscriptions#createMany
             * @methodOf lbServices.User.subscriptions
             *
             * @description
             *
             * Creates a new instance in subscriptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.createMany = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::createMany::User::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.subscriptions#destroyAll
             * @methodOf lbServices.User.subscriptions
             *
             * @description
             *
             * Deletes all subscriptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.subscriptions.destroyAll = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::delete::User::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.subscriptions#destroyById
             * @methodOf lbServices.User.subscriptions
             *
             * @description
             *
             * Delete a related item by id for subscriptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for subscriptions
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.subscriptions.destroyById = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::destroyById::User::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.subscriptions#findById
             * @methodOf lbServices.User.subscriptions
             *
             * @description
             *
             * Find a related item by id for subscriptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for subscriptions
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.findById = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::findById::User::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.subscriptions#updateById
             * @methodOf lbServices.User.subscriptions
             *
             * @description
             *
             * Update a related item by id for subscriptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `fk` – `{*}` - Foreign key for subscriptions
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.updateById = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::updateById::User::subscriptions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.messages
     * @header lbServices.User.messages
     * @object
     * @description
     *
     * The object `User.messages` groups methods
     * manipulating `Message` instances related to `User`.
     *
     * Call {@link lbServices.User#messages User.messages()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#messages
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries messages of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::get::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#count
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Counts messages of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.messages.count = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::count::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#create
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Creates a new instance in messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.create = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::create::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#createMany
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Creates a new instance in messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.createMany = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::createMany::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#destroyAll
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Deletes all messages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.messages.destroyAll = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::delete::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#destroyById
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Delete a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.messages.destroyById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::destroyById::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#findById
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Find a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.findById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::findById::User::messages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.messages#updateById
             * @methodOf lbServices.User.messages
             *
             * @description
             *
             * Update a related item by id for messages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - user id
             *
             *  - `fk` – `{*}` - Foreign key for messages
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R.messages.updateById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::updateById::User::messages"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.MealItem
 * @header lbServices.MealItem
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `MealItem` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "MealItem",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/MealItems/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use MealItem.meals.findById() instead.
            "prototype$__findById__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/:fk",
              method: "GET",
            },

            // INTERNAL. Use MealItem.meals.destroyById() instead.
            "prototype$__destroyById__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use MealItem.meals.updateById() instead.
            "prototype$__updateById__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/:fk",
              method: "PUT",
            },

            // INTERNAL. Use MealItem.meals.link() instead.
            "prototype$__link__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use MealItem.meals.unlink() instead.
            "prototype$__unlink__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use MealItem.meals.exists() instead.
            "prototype$__exists__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use MealItem.meals() instead.
            "prototype$__get__meals": {
              isArray: true,
              url: urlBase + "/MealItems/:id/meals",
              method: "GET",
            },

            // INTERNAL. Use MealItem.meals.create() instead.
            "prototype$__create__meals": {
              url: urlBase + "/MealItems/:id/meals",
              method: "POST",
            },

            // INTERNAL. Use MealItem.meals.destroyAll() instead.
            "prototype$__delete__meals": {
              url: urlBase + "/MealItems/:id/meals",
              method: "DELETE",
            },

            // INTERNAL. Use MealItem.meals.count() instead.
            "prototype$__count__meals": {
              url: urlBase + "/MealItems/:id/meals/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#create
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/MealItems",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#createMany
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/MealItems",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#upsert
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/MealItems",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#replaceOrCreate
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/MealItems/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#upsertWithWhere
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/MealItems/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#exists
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/MealItems/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#findById
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/MealItems/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#replaceById
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/MealItems/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#find
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/MealItems",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#findOne
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/MealItems/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#updateAll
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/MealItems/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#deleteById
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/MealItems/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#count
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/MealItems/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#prototype$updateAttributes
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/MealItems/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealItem#createChangeStream
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/MealItems/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Meal.mealItems.findById() instead.
            "::findById::Meal::mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/:fk",
              method: "GET",
            },

            // INTERNAL. Use Meal.mealItems.destroyById() instead.
            "::destroyById::Meal::mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealItems.updateById() instead.
            "::updateById::Meal::mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Meal.mealItems.link() instead.
            "::link::Meal::mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Meal.mealItems.unlink() instead.
            "::unlink::Meal::mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealItems.exists() instead.
            "::exists::Meal::mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Meal.mealItems() instead.
            "::get::Meal::mealItems": {
              isArray: true,
              url: urlBase + "/Meals/:id/mealItems",
              method: "GET",
            },

            // INTERNAL. Use Meal.mealItems.create() instead.
            "::create::Meal::mealItems": {
              url: urlBase + "/Meals/:id/mealItems",
              method: "POST",
            },

            // INTERNAL. Use Meal.mealItems.createMany() instead.
            "::createMany::Meal::mealItems": {
              isArray: true,
              url: urlBase + "/Meals/:id/mealItems",
              method: "POST",
            },

            // INTERNAL. Use Meal.mealItems.destroyAll() instead.
            "::delete::Meal::mealItems": {
              url: urlBase + "/Meals/:id/mealItems",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealItems.count() instead.
            "::count::Meal::mealItems": {
              url: urlBase + "/Meals/:id/mealItems/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.MealItem#patchOrCreate
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.MealItem#updateOrCreate
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.MealItem#patchOrCreateWithWhere
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.MealItem#update
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.MealItem#destroyById
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.MealItem#removeById
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.MealItem#patchAttributes
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.MealItem#modelName
        * @propertyOf lbServices.MealItem
        * @description
        * The name of the model represented by this $resource,
        * i.e. `MealItem`.
        */
        R.modelName = "MealItem";

    /**
     * @ngdoc object
     * @name lbServices.MealItem.meals
     * @header lbServices.MealItem.meals
     * @object
     * @description
     *
     * The object `MealItem.meals` groups methods
     * manipulating `Meal` instances related to `MealItem`.
     *
     * Call {@link lbServices.MealItem#meals MealItem.meals()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.MealItem#meals
             * @methodOf lbServices.MealItem
             *
             * @description
             *
             * Queries meals of MealItem.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::get::MealItem::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealItem.meals#count
             * @methodOf lbServices.MealItem.meals
             *
             * @description
             *
             * Counts meals of MealItem.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.meals.count = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::count::MealItem::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealItem.meals#create
             * @methodOf lbServices.MealItem.meals
             *
             * @description
             *
             * Creates a new instance in meals of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.create = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::create::MealItem::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealItem.meals#createMany
             * @methodOf lbServices.MealItem.meals
             *
             * @description
             *
             * Creates a new instance in meals of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.createMany = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::createMany::MealItem::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealItem.meals#destroyAll
             * @methodOf lbServices.MealItem.meals
             *
             * @description
             *
             * Deletes all meals of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.meals.destroyAll = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::delete::MealItem::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealItem.meals#destroyById
             * @methodOf lbServices.MealItem.meals
             *
             * @description
             *
             * Delete a related item by id for meals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.meals.destroyById = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::destroyById::MealItem::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealItem.meals#exists
             * @methodOf lbServices.MealItem.meals
             *
             * @description
             *
             * Check the existence of meals relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.exists = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::exists::MealItem::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealItem.meals#findById
             * @methodOf lbServices.MealItem.meals
             *
             * @description
             *
             * Find a related item by id for meals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.findById = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::findById::MealItem::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealItem.meals#link
             * @methodOf lbServices.MealItem.meals
             *
             * @description
             *
             * Add a related item by id for meals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.link = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::link::MealItem::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealItem.meals#unlink
             * @methodOf lbServices.MealItem.meals
             *
             * @description
             *
             * Remove the meals relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.meals.unlink = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::unlink::MealItem::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealItem.meals#updateById
             * @methodOf lbServices.MealItem.meals
             *
             * @description
             *
             * Update a related item by id for meals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealItem id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.updateById = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::updateById::MealItem::meals"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Meal
 * @header lbServices.Meal
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Meal` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Meal",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Meals/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Meal.mealItems.findById() instead.
            "prototype$__findById__mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/:fk",
              method: "GET",
            },

            // INTERNAL. Use Meal.mealItems.destroyById() instead.
            "prototype$__destroyById__mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealItems.updateById() instead.
            "prototype$__updateById__mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Meal.mealItems.link() instead.
            "prototype$__link__mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Meal.mealItems.unlink() instead.
            "prototype$__unlink__mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealItems.exists() instead.
            "prototype$__exists__mealItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealItems/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Meal.mealPlans.findById() instead.
            "prototype$__findById__mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/:fk",
              method: "GET",
            },

            // INTERNAL. Use Meal.mealPlans.destroyById() instead.
            "prototype$__destroyById__mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealPlans.updateById() instead.
            "prototype$__updateById__mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Meal.mealPlans.link() instead.
            "prototype$__link__mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Meal.mealPlans.unlink() instead.
            "prototype$__unlink__mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealPlans.exists() instead.
            "prototype$__exists__mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Meal.mealItems() instead.
            "prototype$__get__mealItems": {
              isArray: true,
              url: urlBase + "/Meals/:id/mealItems",
              method: "GET",
            },

            // INTERNAL. Use Meal.mealItems.create() instead.
            "prototype$__create__mealItems": {
              url: urlBase + "/Meals/:id/mealItems",
              method: "POST",
            },

            // INTERNAL. Use Meal.mealItems.destroyAll() instead.
            "prototype$__delete__mealItems": {
              url: urlBase + "/Meals/:id/mealItems",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealItems.count() instead.
            "prototype$__count__mealItems": {
              url: urlBase + "/Meals/:id/mealItems/count",
              method: "GET",
            },

            // INTERNAL. Use Meal.mealPlans() instead.
            "prototype$__get__mealPlans": {
              isArray: true,
              url: urlBase + "/Meals/:id/mealPlans",
              method: "GET",
            },

            // INTERNAL. Use Meal.mealPlans.create() instead.
            "prototype$__create__mealPlans": {
              url: urlBase + "/Meals/:id/mealPlans",
              method: "POST",
            },

            // INTERNAL. Use Meal.mealPlans.destroyAll() instead.
            "prototype$__delete__mealPlans": {
              url: urlBase + "/Meals/:id/mealPlans",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealPlans.count() instead.
            "prototype$__count__mealPlans": {
              url: urlBase + "/Meals/:id/mealPlans/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#create
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Meals",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#createMany
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Meals",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#upsert
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Meals",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#replaceOrCreate
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Meals/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#upsertWithWhere
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Meals/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#exists
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Meals/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#findById
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Meals/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#replaceById
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Meals/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#find
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Meals",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#findOne
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Meals/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#updateAll
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Meals/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#deleteById
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Meals/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#count
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Meals/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#prototype$updateAttributes
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Meals/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#createChangeStream
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Meals/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Meal#upload
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Upload meal image
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `path` – `{string=}` -
             */
            "upload": {
              url: urlBase + "/Meals/upload",
              method: "POST",
            },

            // INTERNAL. Use MealItem.meals.findById() instead.
            "::findById::MealItem::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/:fk",
              method: "GET",
            },

            // INTERNAL. Use MealItem.meals.destroyById() instead.
            "::destroyById::MealItem::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use MealItem.meals.updateById() instead.
            "::updateById::MealItem::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/:fk",
              method: "PUT",
            },

            // INTERNAL. Use MealItem.meals.link() instead.
            "::link::MealItem::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use MealItem.meals.unlink() instead.
            "::unlink::MealItem::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use MealItem.meals.exists() instead.
            "::exists::MealItem::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealItems/:id/meals/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use MealItem.meals() instead.
            "::get::MealItem::meals": {
              isArray: true,
              url: urlBase + "/MealItems/:id/meals",
              method: "GET",
            },

            // INTERNAL. Use MealItem.meals.create() instead.
            "::create::MealItem::meals": {
              url: urlBase + "/MealItems/:id/meals",
              method: "POST",
            },

            // INTERNAL. Use MealItem.meals.createMany() instead.
            "::createMany::MealItem::meals": {
              isArray: true,
              url: urlBase + "/MealItems/:id/meals",
              method: "POST",
            },

            // INTERNAL. Use MealItem.meals.destroyAll() instead.
            "::delete::MealItem::meals": {
              url: urlBase + "/MealItems/:id/meals",
              method: "DELETE",
            },

            // INTERNAL. Use MealItem.meals.count() instead.
            "::count::MealItem::meals": {
              url: urlBase + "/MealItems/:id/meals/count",
              method: "GET",
            },

            // INTERNAL. Use MealPlan.meals.findById() instead.
            "::findById::MealPlan::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/:fk",
              method: "GET",
            },

            // INTERNAL. Use MealPlan.meals.destroyById() instead.
            "::destroyById::MealPlan::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use MealPlan.meals.updateById() instead.
            "::updateById::MealPlan::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/:fk",
              method: "PUT",
            },

            // INTERNAL. Use MealPlan.meals.link() instead.
            "::link::MealPlan::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use MealPlan.meals.unlink() instead.
            "::unlink::MealPlan::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use MealPlan.meals.exists() instead.
            "::exists::MealPlan::meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use MealPlan.meals() instead.
            "::get::MealPlan::meals": {
              isArray: true,
              url: urlBase + "/MealPlans/:id/meals",
              method: "GET",
            },

            // INTERNAL. Use MealPlan.meals.create() instead.
            "::create::MealPlan::meals": {
              url: urlBase + "/MealPlans/:id/meals",
              method: "POST",
            },

            // INTERNAL. Use MealPlan.meals.createMany() instead.
            "::createMany::MealPlan::meals": {
              isArray: true,
              url: urlBase + "/MealPlans/:id/meals",
              method: "POST",
            },

            // INTERNAL. Use MealPlan.meals.destroyAll() instead.
            "::delete::MealPlan::meals": {
              url: urlBase + "/MealPlans/:id/meals",
              method: "DELETE",
            },

            // INTERNAL. Use MealPlan.meals.count() instead.
            "::count::MealPlan::meals": {
              url: urlBase + "/MealPlans/:id/meals/count",
              method: "GET",
            },

            // INTERNAL. Use TM_MealMealPlan.meal() instead.
            "::get::TM_MealMealPlan::meal": {
              url: urlBase + "/TM_MealMealPlans/:id/meal",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Meal#patchOrCreate
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Meal#updateOrCreate
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Meal#patchOrCreateWithWhere
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Meal#update
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Meal#destroyById
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Meal#removeById
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Meal#patchAttributes
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Meal#modelName
        * @propertyOf lbServices.Meal
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Meal`.
        */
        R.modelName = "Meal";

    /**
     * @ngdoc object
     * @name lbServices.Meal.mealItems
     * @header lbServices.Meal.mealItems
     * @object
     * @description
     *
     * The object `Meal.mealItems` groups methods
     * manipulating `MealItem` instances related to `Meal`.
     *
     * Call {@link lbServices.Meal#mealItems Meal.mealItems()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Meal#mealItems
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Queries mealItems of Meal.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R.mealItems = function() {
          var TargetResource = $injector.get("MealItem");
          var action = TargetResource["::get::Meal::mealItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealItems#count
             * @methodOf lbServices.Meal.mealItems
             *
             * @description
             *
             * Counts mealItems of Meal.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.mealItems.count = function() {
          var TargetResource = $injector.get("MealItem");
          var action = TargetResource["::count::Meal::mealItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealItems#create
             * @methodOf lbServices.Meal.mealItems
             *
             * @description
             *
             * Creates a new instance in mealItems of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R.mealItems.create = function() {
          var TargetResource = $injector.get("MealItem");
          var action = TargetResource["::create::Meal::mealItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealItems#createMany
             * @methodOf lbServices.Meal.mealItems
             *
             * @description
             *
             * Creates a new instance in mealItems of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R.mealItems.createMany = function() {
          var TargetResource = $injector.get("MealItem");
          var action = TargetResource["::createMany::Meal::mealItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealItems#destroyAll
             * @methodOf lbServices.Meal.mealItems
             *
             * @description
             *
             * Deletes all mealItems of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.mealItems.destroyAll = function() {
          var TargetResource = $injector.get("MealItem");
          var action = TargetResource["::delete::Meal::mealItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealItems#destroyById
             * @methodOf lbServices.Meal.mealItems
             *
             * @description
             *
             * Delete a related item by id for mealItems.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealItems
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.mealItems.destroyById = function() {
          var TargetResource = $injector.get("MealItem");
          var action = TargetResource["::destroyById::Meal::mealItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealItems#exists
             * @methodOf lbServices.Meal.mealItems
             *
             * @description
             *
             * Check the existence of mealItems relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealItems
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R.mealItems.exists = function() {
          var TargetResource = $injector.get("MealItem");
          var action = TargetResource["::exists::Meal::mealItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealItems#findById
             * @methodOf lbServices.Meal.mealItems
             *
             * @description
             *
             * Find a related item by id for mealItems.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealItems
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R.mealItems.findById = function() {
          var TargetResource = $injector.get("MealItem");
          var action = TargetResource["::findById::Meal::mealItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealItems#link
             * @methodOf lbServices.Meal.mealItems
             *
             * @description
             *
             * Add a related item by id for mealItems.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealItems
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R.mealItems.link = function() {
          var TargetResource = $injector.get("MealItem");
          var action = TargetResource["::link::Meal::mealItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealItems#unlink
             * @methodOf lbServices.Meal.mealItems
             *
             * @description
             *
             * Remove the mealItems relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealItems
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.mealItems.unlink = function() {
          var TargetResource = $injector.get("MealItem");
          var action = TargetResource["::unlink::Meal::mealItems"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealItems#updateById
             * @methodOf lbServices.Meal.mealItems
             *
             * @description
             *
             * Update a related item by id for mealItems.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealItems
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealItem` object.)
             * </em>
             */
        R.mealItems.updateById = function() {
          var TargetResource = $injector.get("MealItem");
          var action = TargetResource["::updateById::Meal::mealItems"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Meal.mealPlans
     * @header lbServices.Meal.mealPlans
     * @object
     * @description
     *
     * The object `Meal.mealPlans` groups methods
     * manipulating `MealPlan` instances related to `Meal`.
     *
     * Call {@link lbServices.Meal#mealPlans Meal.mealPlans()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Meal#mealPlans
             * @methodOf lbServices.Meal
             *
             * @description
             *
             * Queries mealPlans of Meal.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R.mealPlans = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::get::Meal::mealPlans"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealPlans#count
             * @methodOf lbServices.Meal.mealPlans
             *
             * @description
             *
             * Counts mealPlans of Meal.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.mealPlans.count = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::count::Meal::mealPlans"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealPlans#create
             * @methodOf lbServices.Meal.mealPlans
             *
             * @description
             *
             * Creates a new instance in mealPlans of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R.mealPlans.create = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::create::Meal::mealPlans"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealPlans#createMany
             * @methodOf lbServices.Meal.mealPlans
             *
             * @description
             *
             * Creates a new instance in mealPlans of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R.mealPlans.createMany = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::createMany::Meal::mealPlans"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealPlans#destroyAll
             * @methodOf lbServices.Meal.mealPlans
             *
             * @description
             *
             * Deletes all mealPlans of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.mealPlans.destroyAll = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::delete::Meal::mealPlans"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealPlans#destroyById
             * @methodOf lbServices.Meal.mealPlans
             *
             * @description
             *
             * Delete a related item by id for mealPlans.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealPlans
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.mealPlans.destroyById = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::destroyById::Meal::mealPlans"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealPlans#exists
             * @methodOf lbServices.Meal.mealPlans
             *
             * @description
             *
             * Check the existence of mealPlans relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealPlans
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R.mealPlans.exists = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::exists::Meal::mealPlans"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealPlans#findById
             * @methodOf lbServices.Meal.mealPlans
             *
             * @description
             *
             * Find a related item by id for mealPlans.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealPlans
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R.mealPlans.findById = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::findById::Meal::mealPlans"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealPlans#link
             * @methodOf lbServices.Meal.mealPlans
             *
             * @description
             *
             * Add a related item by id for mealPlans.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealPlans
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R.mealPlans.link = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::link::Meal::mealPlans"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealPlans#unlink
             * @methodOf lbServices.Meal.mealPlans
             *
             * @description
             *
             * Remove the mealPlans relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealPlans
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.mealPlans.unlink = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::unlink::Meal::mealPlans"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Meal.mealPlans#updateById
             * @methodOf lbServices.Meal.mealPlans
             *
             * @description
             *
             * Update a related item by id for mealPlans.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Meal id
             *
             *  - `fk` – `{*}` - Foreign key for mealPlans
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R.mealPlans.updateById = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::updateById::Meal::mealPlans"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.MealPlan
 * @header lbServices.MealPlan
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `MealPlan` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "MealPlan",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/MealPlans/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use MealPlan.subscriptions.findById() instead.
            "prototype$__findById__subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/subscriptions/:fk",
              method: "GET",
            },

            // INTERNAL. Use MealPlan.subscriptions.destroyById() instead.
            "prototype$__destroyById__subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/subscriptions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use MealPlan.subscriptions.updateById() instead.
            "prototype$__updateById__subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/subscriptions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use MealPlan.meals.findById() instead.
            "prototype$__findById__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/:fk",
              method: "GET",
            },

            // INTERNAL. Use MealPlan.meals.destroyById() instead.
            "prototype$__destroyById__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use MealPlan.meals.updateById() instead.
            "prototype$__updateById__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/:fk",
              method: "PUT",
            },

            // INTERNAL. Use MealPlan.meals.link() instead.
            "prototype$__link__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use MealPlan.meals.unlink() instead.
            "prototype$__unlink__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use MealPlan.meals.exists() instead.
            "prototype$__exists__meals": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/meals/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use MealPlan.subscriptions() instead.
            "prototype$__get__subscriptions": {
              isArray: true,
              url: urlBase + "/MealPlans/:id/subscriptions",
              method: "GET",
            },

            // INTERNAL. Use MealPlan.subscriptions.create() instead.
            "prototype$__create__subscriptions": {
              url: urlBase + "/MealPlans/:id/subscriptions",
              method: "POST",
            },

            // INTERNAL. Use MealPlan.subscriptions.destroyAll() instead.
            "prototype$__delete__subscriptions": {
              url: urlBase + "/MealPlans/:id/subscriptions",
              method: "DELETE",
            },

            // INTERNAL. Use MealPlan.subscriptions.count() instead.
            "prototype$__count__subscriptions": {
              url: urlBase + "/MealPlans/:id/subscriptions/count",
              method: "GET",
            },

            // INTERNAL. Use MealPlan.meals() instead.
            "prototype$__get__meals": {
              isArray: true,
              url: urlBase + "/MealPlans/:id/meals",
              method: "GET",
            },

            // INTERNAL. Use MealPlan.meals.create() instead.
            "prototype$__create__meals": {
              url: urlBase + "/MealPlans/:id/meals",
              method: "POST",
            },

            // INTERNAL. Use MealPlan.meals.destroyAll() instead.
            "prototype$__delete__meals": {
              url: urlBase + "/MealPlans/:id/meals",
              method: "DELETE",
            },

            // INTERNAL. Use MealPlan.meals.count() instead.
            "prototype$__count__meals": {
              url: urlBase + "/MealPlans/:id/meals/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#create
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/MealPlans",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#createMany
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/MealPlans",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#upsert
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/MealPlans",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#replaceOrCreate
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/MealPlans/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#upsertWithWhere
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/MealPlans/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#exists
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/MealPlans/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#findById
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/MealPlans/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#replaceById
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/MealPlans/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#find
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/MealPlans",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#findOne
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/MealPlans/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#updateAll
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/MealPlans/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#deleteById
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/MealPlans/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#count
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/MealPlans/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#prototype$updateAttributes
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/MealPlans/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#createChangeStream
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/MealPlans/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#upload
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * upload meal plan image
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `path` – `{string=}` -
             */
            "upload": {
              url: urlBase + "/MealPlans/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#recommendations
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Get recommended meals
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `req` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `recommendations` – `{*=}` -
             */
            "recommendations": {
              url: urlBase + "/MealPlans/recommendations",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#uploadWithDB
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `path` – `{string=}` -
             */
            "uploadWithDB": {
              url: urlBase + "/MealPlans/uploadWithDB",
              method: "GET",
            },

            // INTERNAL. Use Meal.mealPlans.findById() instead.
            "::findById::Meal::mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/:fk",
              method: "GET",
            },

            // INTERNAL. Use Meal.mealPlans.destroyById() instead.
            "::destroyById::Meal::mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealPlans.updateById() instead.
            "::updateById::Meal::mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Meal.mealPlans.link() instead.
            "::link::Meal::mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Meal.mealPlans.unlink() instead.
            "::unlink::Meal::mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealPlans.exists() instead.
            "::exists::Meal::mealPlans": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Meals/:id/mealPlans/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Meal.mealPlans() instead.
            "::get::Meal::mealPlans": {
              isArray: true,
              url: urlBase + "/Meals/:id/mealPlans",
              method: "GET",
            },

            // INTERNAL. Use Meal.mealPlans.create() instead.
            "::create::Meal::mealPlans": {
              url: urlBase + "/Meals/:id/mealPlans",
              method: "POST",
            },

            // INTERNAL. Use Meal.mealPlans.createMany() instead.
            "::createMany::Meal::mealPlans": {
              isArray: true,
              url: urlBase + "/Meals/:id/mealPlans",
              method: "POST",
            },

            // INTERNAL. Use Meal.mealPlans.destroyAll() instead.
            "::delete::Meal::mealPlans": {
              url: urlBase + "/Meals/:id/mealPlans",
              method: "DELETE",
            },

            // INTERNAL. Use Meal.mealPlans.count() instead.
            "::count::Meal::mealPlans": {
              url: urlBase + "/Meals/:id/mealPlans/count",
              method: "GET",
            },

            // INTERNAL. Use Subscription.mealPlan() instead.
            "::get::Subscription::mealPlan": {
              url: urlBase + "/Subscriptions/:id/mealPlan",
              method: "GET",
            },

            // INTERNAL. Use TM_MealMealPlan.mealPlan() instead.
            "::get::TM_MealMealPlan::mealPlan": {
              url: urlBase + "/TM_MealMealPlans/:id/mealPlan",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.MealPlan#patchOrCreate
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#updateOrCreate
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#patchOrCreateWithWhere
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#update
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#destroyById
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#removeById
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.MealPlan#patchAttributes
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.MealPlan#modelName
        * @propertyOf lbServices.MealPlan
        * @description
        * The name of the model represented by this $resource,
        * i.e. `MealPlan`.
        */
        R.modelName = "MealPlan";

    /**
     * @ngdoc object
     * @name lbServices.MealPlan.subscriptions
     * @header lbServices.MealPlan.subscriptions
     * @object
     * @description
     *
     * The object `MealPlan.subscriptions` groups methods
     * manipulating `Subscription` instances related to `MealPlan`.
     *
     * Call {@link lbServices.MealPlan#subscriptions MealPlan.subscriptions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.MealPlan#subscriptions
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Queries subscriptions of MealPlan.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::get::MealPlan::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.subscriptions#count
             * @methodOf lbServices.MealPlan.subscriptions
             *
             * @description
             *
             * Counts subscriptions of MealPlan.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.subscriptions.count = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::count::MealPlan::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.subscriptions#create
             * @methodOf lbServices.MealPlan.subscriptions
             *
             * @description
             *
             * Creates a new instance in subscriptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.create = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::create::MealPlan::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.subscriptions#createMany
             * @methodOf lbServices.MealPlan.subscriptions
             *
             * @description
             *
             * Creates a new instance in subscriptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.createMany = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::createMany::MealPlan::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.subscriptions#destroyAll
             * @methodOf lbServices.MealPlan.subscriptions
             *
             * @description
             *
             * Deletes all subscriptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.subscriptions.destroyAll = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::delete::MealPlan::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.subscriptions#destroyById
             * @methodOf lbServices.MealPlan.subscriptions
             *
             * @description
             *
             * Delete a related item by id for subscriptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `fk` – `{*}` - Foreign key for subscriptions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.subscriptions.destroyById = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::destroyById::MealPlan::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.subscriptions#findById
             * @methodOf lbServices.MealPlan.subscriptions
             *
             * @description
             *
             * Find a related item by id for subscriptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `fk` – `{*}` - Foreign key for subscriptions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.findById = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::findById::MealPlan::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.subscriptions#updateById
             * @methodOf lbServices.MealPlan.subscriptions
             *
             * @description
             *
             * Update a related item by id for subscriptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `fk` – `{*}` - Foreign key for subscriptions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.updateById = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::updateById::MealPlan::subscriptions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.MealPlan.meals
     * @header lbServices.MealPlan.meals
     * @object
     * @description
     *
     * The object `MealPlan.meals` groups methods
     * manipulating `Meal` instances related to `MealPlan`.
     *
     * Call {@link lbServices.MealPlan#meals MealPlan.meals()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.MealPlan#meals
             * @methodOf lbServices.MealPlan
             *
             * @description
             *
             * Queries meals of MealPlan.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::get::MealPlan::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.meals#count
             * @methodOf lbServices.MealPlan.meals
             *
             * @description
             *
             * Counts meals of MealPlan.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.meals.count = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::count::MealPlan::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.meals#create
             * @methodOf lbServices.MealPlan.meals
             *
             * @description
             *
             * Creates a new instance in meals of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.create = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::create::MealPlan::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.meals#createMany
             * @methodOf lbServices.MealPlan.meals
             *
             * @description
             *
             * Creates a new instance in meals of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.createMany = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::createMany::MealPlan::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.meals#destroyAll
             * @methodOf lbServices.MealPlan.meals
             *
             * @description
             *
             * Deletes all meals of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.meals.destroyAll = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::delete::MealPlan::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.meals#destroyById
             * @methodOf lbServices.MealPlan.meals
             *
             * @description
             *
             * Delete a related item by id for meals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.meals.destroyById = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::destroyById::MealPlan::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.meals#exists
             * @methodOf lbServices.MealPlan.meals
             *
             * @description
             *
             * Check the existence of meals relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.exists = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::exists::MealPlan::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.meals#findById
             * @methodOf lbServices.MealPlan.meals
             *
             * @description
             *
             * Find a related item by id for meals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.findById = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::findById::MealPlan::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.meals#link
             * @methodOf lbServices.MealPlan.meals
             *
             * @description
             *
             * Add a related item by id for meals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.link = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::link::MealPlan::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.meals#unlink
             * @methodOf lbServices.MealPlan.meals
             *
             * @description
             *
             * Remove the meals relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.meals.unlink = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::unlink::MealPlan::meals"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.MealPlan.meals#updateById
             * @methodOf lbServices.MealPlan.meals
             *
             * @description
             *
             * Update a related item by id for meals.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - MealPlan id
             *
             *  - `fk` – `{*}` - Foreign key for meals
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meals.updateById = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::updateById::MealPlan::meals"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Subscription
 * @header lbServices.Subscription
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Subscription` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Subscription",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Subscriptions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Subscription.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/Subscriptions/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Subscription.mealPlan() instead.
            "prototype$__get__mealPlan": {
              url: urlBase + "/Subscriptions/:id/mealPlan",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#create
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Subscriptions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#createMany
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Subscriptions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#upsert
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Subscriptions",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#replaceOrCreate
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Subscriptions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#upsertWithWhere
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Subscriptions/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#exists
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Subscriptions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#findById
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Subscriptions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#replaceById
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Subscriptions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#find
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Subscriptions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#findOne
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Subscriptions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#updateAll
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Subscriptions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#deleteById
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Subscriptions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#count
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Subscriptions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#prototype$updateAttributes
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subscription id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Subscriptions/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#createChangeStream
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Subscriptions/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#upload
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * upload subscription payment details
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `path` – `{string=}` -
             */
            "upload": {
              url: urlBase + "/Subscriptions/upload",
              method: "POST",
            },

            // INTERNAL. Use User.subscriptions.findById() instead.
            "::findById::User::subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/subscriptions/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.subscriptions.destroyById() instead.
            "::destroyById::User::subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/subscriptions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.subscriptions.updateById() instead.
            "::updateById::User::subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/subscriptions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.subscriptions() instead.
            "::get::User::subscriptions": {
              isArray: true,
              url: urlBase + "/users/:id/subscriptions",
              method: "GET",
            },

            // INTERNAL. Use User.subscriptions.create() instead.
            "::create::User::subscriptions": {
              url: urlBase + "/users/:id/subscriptions",
              method: "POST",
            },

            // INTERNAL. Use User.subscriptions.createMany() instead.
            "::createMany::User::subscriptions": {
              isArray: true,
              url: urlBase + "/users/:id/subscriptions",
              method: "POST",
            },

            // INTERNAL. Use User.subscriptions.destroyAll() instead.
            "::delete::User::subscriptions": {
              url: urlBase + "/users/:id/subscriptions",
              method: "DELETE",
            },

            // INTERNAL. Use User.subscriptions.count() instead.
            "::count::User::subscriptions": {
              url: urlBase + "/users/:id/subscriptions/count",
              method: "GET",
            },

            // INTERNAL. Use MealPlan.subscriptions.findById() instead.
            "::findById::MealPlan::subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/subscriptions/:fk",
              method: "GET",
            },

            // INTERNAL. Use MealPlan.subscriptions.destroyById() instead.
            "::destroyById::MealPlan::subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/subscriptions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use MealPlan.subscriptions.updateById() instead.
            "::updateById::MealPlan::subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/MealPlans/:id/subscriptions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use MealPlan.subscriptions() instead.
            "::get::MealPlan::subscriptions": {
              isArray: true,
              url: urlBase + "/MealPlans/:id/subscriptions",
              method: "GET",
            },

            // INTERNAL. Use MealPlan.subscriptions.create() instead.
            "::create::MealPlan::subscriptions": {
              url: urlBase + "/MealPlans/:id/subscriptions",
              method: "POST",
            },

            // INTERNAL. Use MealPlan.subscriptions.createMany() instead.
            "::createMany::MealPlan::subscriptions": {
              isArray: true,
              url: urlBase + "/MealPlans/:id/subscriptions",
              method: "POST",
            },

            // INTERNAL. Use MealPlan.subscriptions.destroyAll() instead.
            "::delete::MealPlan::subscriptions": {
              url: urlBase + "/MealPlans/:id/subscriptions",
              method: "DELETE",
            },

            // INTERNAL. Use MealPlan.subscriptions.count() instead.
            "::count::MealPlan::subscriptions": {
              url: urlBase + "/MealPlans/:id/subscriptions/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Subscription#patchOrCreate
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Subscription#updateOrCreate
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Subscription#patchOrCreateWithWhere
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Subscription#update
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Subscription#destroyById
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Subscription#removeById
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Subscription#patchAttributes
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subscription id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Subscription#modelName
        * @propertyOf lbServices.Subscription
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Subscription`.
        */
        R.modelName = "Subscription";


            /**
             * @ngdoc method
             * @name lbServices.Subscription#user
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Fetches belongsTo relation user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subscription id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Subscription::user"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Subscription#mealPlan
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Fetches belongsTo relation mealPlan.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Subscription id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R.mealPlan = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::get::Subscription::mealPlan"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Message
 * @header lbServices.Message
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Message` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Message",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Messages/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Message.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/Messages/:id/user",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#create
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Messages",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#createMany
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Messages",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#upsert
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Messages",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#replaceOrCreate
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Messages/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#upsertWithWhere
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Messages/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#exists
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Messages/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#findById
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Messages/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#replaceById
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Messages/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#find
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Messages",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#findOne
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Messages/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#updateAll
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Messages/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#deleteById
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Messages/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#count
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Messages/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#prototype$updateAttributes
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Message id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Messages/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Message#createChangeStream
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Messages/change-stream",
              method: "POST",
            },

            // INTERNAL. Use User.messages.findById() instead.
            "::findById::User::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.messages.destroyById() instead.
            "::destroyById::User::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.messages.updateById() instead.
            "::updateById::User::messages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/messages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.messages() instead.
            "::get::User::messages": {
              isArray: true,
              url: urlBase + "/users/:id/messages",
              method: "GET",
            },

            // INTERNAL. Use User.messages.create() instead.
            "::create::User::messages": {
              url: urlBase + "/users/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use User.messages.createMany() instead.
            "::createMany::User::messages": {
              isArray: true,
              url: urlBase + "/users/:id/messages",
              method: "POST",
            },

            // INTERNAL. Use User.messages.destroyAll() instead.
            "::delete::User::messages": {
              url: urlBase + "/users/:id/messages",
              method: "DELETE",
            },

            // INTERNAL. Use User.messages.count() instead.
            "::count::User::messages": {
              url: urlBase + "/users/:id/messages/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Message#patchOrCreate
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Message#updateOrCreate
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Message#patchOrCreateWithWhere
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Message#update
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Message#destroyById
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Message#removeById
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Message#patchAttributes
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Message id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Message` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Message#modelName
        * @propertyOf lbServices.Message
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Message`.
        */
        R.modelName = "Message";


            /**
             * @ngdoc method
             * @name lbServices.Message#user
             * @methodOf lbServices.Message
             *
             * @description
             *
             * Fetches belongsTo relation user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Message id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Message::user"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.VitalTracker
 * @header lbServices.VitalTracker
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VitalTracker` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "VitalTracker",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/VitalTrackers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#create
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/VitalTrackers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#createMany
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/VitalTrackers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#upsert
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/VitalTrackers",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#replaceOrCreate
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/VitalTrackers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#upsertWithWhere
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/VitalTrackers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#exists
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/VitalTrackers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#findById
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/VitalTrackers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#replaceById
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/VitalTrackers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#find
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/VitalTrackers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#findOne
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/VitalTrackers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#updateAll
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/VitalTrackers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#deleteById
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/VitalTrackers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#count
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/VitalTrackers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#prototype$updateAttributes
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - VitalTracker id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/VitalTrackers/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#createChangeStream
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/VitalTrackers/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#eer
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Get daily caloric intake
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `req` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `eer` – `{number=}` -
             */
            "eer": {
              url: urlBase + "/VitalTrackers/eer",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#patchOrCreate
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#updateOrCreate
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#patchOrCreateWithWhere
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#update
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#destroyById
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#removeById
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.VitalTracker#patchAttributes
             * @methodOf lbServices.VitalTracker
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - VitalTracker id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VitalTracker` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.VitalTracker#modelName
        * @propertyOf lbServices.VitalTracker
        * @description
        * The name of the model represented by this $resource,
        * i.e. `VitalTracker`.
        */
        R.modelName = "VitalTracker";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Task
 * @header lbServices.Task
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Task` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Task",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Tasks/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Task#create
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Tasks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#createMany
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Tasks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#upsert
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Tasks",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#replaceOrCreate
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Tasks/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#upsertWithWhere
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Tasks/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#exists
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Tasks/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#findById
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Tasks/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#replaceById
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Tasks/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#find
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Tasks",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#findOne
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Tasks/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#updateAll
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Tasks/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#deleteById
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Tasks/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#count
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Tasks/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#prototype$updateAttributes
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Tasks/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Task#createChangeStream
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Tasks/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Task#patchOrCreate
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Task#updateOrCreate
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Task#patchOrCreateWithWhere
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Task#update
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Task#destroyById
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Task#removeById
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Task#patchAttributes
             * @methodOf lbServices.Task
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Task id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Task` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Task#modelName
        * @propertyOf lbServices.Task
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Task`.
        */
        R.modelName = "Task";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.TM_MealMealPlan
 * @header lbServices.TM_MealMealPlan
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `TM_MealMealPlan` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "TM_MealMealPlan",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/TM_MealMealPlans/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use TM_MealMealPlan.meal() instead.
            "prototype$__get__meal": {
              url: urlBase + "/TM_MealMealPlans/:id/meal",
              method: "GET",
            },

            // INTERNAL. Use TM_MealMealPlan.mealPlan() instead.
            "prototype$__get__mealPlan": {
              url: urlBase + "/TM_MealMealPlans/:id/mealPlan",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#create
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/TM_MealMealPlans",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#createMany
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/TM_MealMealPlans",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#upsert
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/TM_MealMealPlans",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#replaceOrCreate
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/TM_MealMealPlans/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#upsertWithWhere
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/TM_MealMealPlans/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#exists
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/TM_MealMealPlans/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#findById
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/TM_MealMealPlans/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#replaceById
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/TM_MealMealPlans/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#find
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/TM_MealMealPlans",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#findOne
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/TM_MealMealPlans/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#updateAll
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/TM_MealMealPlans/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#deleteById
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/TM_MealMealPlans/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#count
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/TM_MealMealPlans/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#prototype$updateAttributes
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - TM_MealMealPlan id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/TM_MealMealPlans/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#createChangeStream
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/TM_MealMealPlans/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#patchOrCreate
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#updateOrCreate
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#patchOrCreateWithWhere
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#update
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#destroyById
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#removeById
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#patchAttributes
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - TM_MealMealPlan id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `TM_MealMealPlan` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.TM_MealMealPlan#modelName
        * @propertyOf lbServices.TM_MealMealPlan
        * @description
        * The name of the model represented by this $resource,
        * i.e. `TM_MealMealPlan`.
        */
        R.modelName = "TM_MealMealPlan";


            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#meal
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Fetches belongsTo relation meal.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - TM_MealMealPlan id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Meal` object.)
             * </em>
             */
        R.meal = function() {
          var TargetResource = $injector.get("Meal");
          var action = TargetResource["::get::TM_MealMealPlan::meal"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.TM_MealMealPlan#mealPlan
             * @methodOf lbServices.TM_MealMealPlan
             *
             * @description
             *
             * Fetches belongsTo relation mealPlan.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - TM_MealMealPlan id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `MealPlan` object.)
             * </em>
             */
        R.mealPlan = function() {
          var TargetResource = $injector.get("MealPlan");
          var action = TargetResource["::get::TM_MealMealPlan::mealPlan"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);

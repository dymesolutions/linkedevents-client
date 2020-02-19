/**
 * Linked Events information API
 * Linked Events provides categorized data on events and places using JSON-LD format.  Events can be searched by date and location. Location can be exact address or larger area such as neighbourhood or borough  JSON-LD format is streamlined using include mechanism. API users can request that certain fields are included directly into the result, instead of being hyperlinks to objects.  Several fields are multilingual. These are implemented as object with each language variant as property. In this specification each multilingual field has (fi,sv,en) property triplet as example.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/Keyword', 'model/KeywordSet', 'model/Place'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/InlineResponse2004'), require('../model/Keyword'), require('../model/KeywordSet'), require('../model/Place'));
  } else {
    // Browser globals (root is window)
    if (!root.LinkedeventsClient) {
      root.LinkedeventsClient = {};
    }
    root.LinkedeventsClient.FilterApi = factory(root.LinkedeventsClient.ApiClient, root.LinkedeventsClient.InlineResponse2002, root.LinkedeventsClient.InlineResponse2003, root.LinkedeventsClient.InlineResponse2004, root.LinkedeventsClient.Keyword, root.LinkedeventsClient.KeywordSet, root.LinkedeventsClient.Place);
  }
}(this, function(ApiClient, InlineResponse2002, InlineResponse2003, InlineResponse2004, Keyword, KeywordSet, Place) {
  'use strict';

  /**
   * Filter service.
   * @module api/FilterApi
   * @version 0.0.16
   */

  /**
   * Constructs a new FilterApi. 
   * @alias module:api/FilterApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Creates new keyword
     * Endpoint for creating new keywords
     * @param {Object} opts Optional parameters
     * @param {module:model/Keyword} opts.keywordObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Keyword} and HTTP response
     */
    this.keywordCreateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['keywordObject'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Keyword;

      return this.apiClient.callApi(
        '/keyword/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates new keyword
     * Endpoint for creating new keywords
     * @param {Object} opts Optional parameters
     * @param {module:model/Keyword} opts.keywordObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Keyword}
     */
    this.keywordCreate = function(opts) {
      return this.keywordCreateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a keyword
     * Deletes a keyword
     * @param {String} id Identifier for the keyword to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.keywordDeleteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling keywordDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/keyword/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a keyword
     * Deletes a keyword
     * @param {String} id Identifier for the keyword to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.keywordDelete = function(id) {
      return this.keywordDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of keywords used for describing events
     * &lt;h2 id&#x3D;\&quot;using-keyword-endpoint\&quot;&gt;Using the keyword endpoint&lt;/h2&gt; &lt;p&gt;Here, categories for events are listed. Events in each category can be found at the &lt;code&gt;event&lt;/code&gt; endpoint using the query parameter &lt;code&gt;keyword&lt;/code&gt;. The common keywords used in all events originate from the &lt;a href&#x3D;\&quot;https://finto.fi/yso/en/\&quot;&gt;general Finnish ontology (yso)&lt;/a&gt;, hence the format &lt;code&gt;yso:p4354&lt;/code&gt;. Default ordering is decreasing order by the number of events found.&lt;/p&gt; &lt;h4 id&#x3D;\&quot;keyword-text\&quot;&gt;Keyword text&lt;/h4&gt; &lt;p&gt;To find keywords that contain a specific string, use the query parameter &lt;code&gt;text&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;keyword/?text&#x3D;lapset &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?text&#x3D;lapset\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;keyword-source\&quot;&gt;Keyword source&lt;/h4&gt; &lt;p&gt;Will restrict keywords to a specific data source.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;keyword/?data_source&#x3D;yso &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?data_source&#x3D;yso\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;showing-all-keyword\&quot;&gt;Showing all keywords&lt;/h4&gt; &lt;p&gt;By default, only those keywords which have listed events are displayed. You may display keywords with zero &lt;code&gt;n_events&lt;/code&gt; with the     query parameter &lt;code&gt;show_all_keywords&lt;/code&gt;.&lt;/p&gt; 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {Array.<String>} opts.include Embed given reference-type fields directly into the response, otherwise they are returned as URI references.
     * @param {Boolean} opts.showAllKeywords Show all keywords, including those that are not associated with any events. Otherwise such keywords are hidden. When show_all_keywords is specified, no other filter is applied, **except** \&quot;filter\&quot; (match for keywords beginning with string)
     * @param {String} opts.dataSource Search for keywords (**note**: NOT events) that come from the specified data source (see data source in keyword definition).
     * @param {String} opts.text Search for keywords (**note**: NOT events) that contain the given string. This applies even when show_all_keywords is specified.
     * @param {String} opts.sort Sort the returned keywords in the given order. Possible sorting criteria are &#39;n_events&#39;, &#39;id&#39;, &#39;name&#39;, &#39;data_source&#39;. The default ordering is &#39;-data_source&#39;, &#39;-n_events&#39;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    this.keywordListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'show_all_keywords': opts['showAllKeywords'],
        'data_source': opts['dataSource'],
        'text': opts['text'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/keyword/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a list of keywords used for describing events
     * &lt;h2 id&#x3D;\&quot;using-keyword-endpoint\&quot;&gt;Using the keyword endpoint&lt;/h2&gt; &lt;p&gt;Here, categories for events are listed. Events in each category can be found at the &lt;code&gt;event&lt;/code&gt; endpoint using the query parameter &lt;code&gt;keyword&lt;/code&gt;. The common keywords used in all events originate from the &lt;a href&#x3D;\&quot;https://finto.fi/yso/en/\&quot;&gt;general Finnish ontology (yso)&lt;/a&gt;, hence the format &lt;code&gt;yso:p4354&lt;/code&gt;. Default ordering is decreasing order by the number of events found.&lt;/p&gt; &lt;h4 id&#x3D;\&quot;keyword-text\&quot;&gt;Keyword text&lt;/h4&gt; &lt;p&gt;To find keywords that contain a specific string, use the query parameter &lt;code&gt;text&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;keyword/?text&#x3D;lapset &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?text&#x3D;lapset\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;keyword-source\&quot;&gt;Keyword source&lt;/h4&gt; &lt;p&gt;Will restrict keywords to a specific data source.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;keyword/?data_source&#x3D;yso &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?data_source&#x3D;yso\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;showing-all-keyword\&quot;&gt;Showing all keywords&lt;/h4&gt; &lt;p&gt;By default, only those keywords which have listed events are displayed. You may display keywords with zero &lt;code&gt;n_events&lt;/code&gt; with the     query parameter &lt;code&gt;show_all_keywords&lt;/code&gt;.&lt;/p&gt; 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {Array.<String>} opts.include Embed given reference-type fields directly into the response, otherwise they are returned as URI references.
     * @param {Boolean} opts.showAllKeywords Show all keywords, including those that are not associated with any events. Otherwise such keywords are hidden. When show_all_keywords is specified, no other filter is applied, **except** \&quot;filter\&quot; (match for keywords beginning with string)
     * @param {String} opts.dataSource Search for keywords (**note**: NOT events) that come from the specified data source (see data source in keyword definition).
     * @param {String} opts.text Search for keywords (**note**: NOT events) that contain the given string. This applies even when show_all_keywords is specified.
     * @param {String} opts.sort Sort the returned keywords in the given order. Possible sorting criteria are &#39;n_events&#39;, &#39;id&#39;, &#39;name&#39;, &#39;data_source&#39;. The default ordering is &#39;-data_source&#39;, &#39;-n_events&#39;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    this.keywordList = function(opts) {
      return this.keywordListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return information for single keyword
     * @param {String} id Same as id in keyword schema
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Keyword} and HTTP response
     */
    this.keywordRetrieveWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling keywordRetrieve");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Keyword;

      return this.apiClient.callApi(
        '/keyword/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return information for single keyword
     * @param {String} id Same as id in keyword schema
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Keyword}
     */
    this.keywordRetrieve = function(id) {
      return this.keywordRetrieveWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return as list of keyword_sets for grouping keywords
     * Unlike other endpoints, keyword_sets do not support filtering. It is expected that the full result set will remain small enough.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {Array.<String>} opts.include Embed given reference-type fields directly into the response, otherwise they are returned as URI references.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    this.keywordSetListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/keyword_set/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return as list of keyword_sets for grouping keywords
     * Unlike other endpoints, keyword_sets do not support filtering. It is expected that the full result set will remain small enough.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {Array.<String>} opts.include Embed given reference-type fields directly into the response, otherwise they are returned as URI references.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    this.keywordSetList = function(opts) {
      return this.keywordSetListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return information about single keyword_set
     * @param {String} id Same as id in keyword_set schema
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/KeywordSet} and HTTP response
     */
    this.keywordSetRetrieveWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling keywordSetRetrieve");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = KeywordSet;

      return this.apiClient.callApi(
        '/keyword_set/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return information about single keyword_set
     * @param {String} id Same as id in keyword_set schema
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/KeywordSet}
     */
    this.keywordSetRetrieve = function(id) {
      return this.keywordSetRetrieveWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a keyword
     * Keywords can be updated if the user has appropriate access permissions.
     * @param {String} id Identifier for the keyword to be updated
     * @param {Object} opts Optional parameters
     * @param {module:model/Keyword} opts.keywordObject Keyword object that should replace the existing keyword
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Keyword} and HTTP response
     */
    this.keywordUpdateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['keywordObject'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling keywordUpdate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Keyword;

      return this.apiClient.callApi(
        '/keyword/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a keyword
     * Keywords can be updated if the user has appropriate access permissions.
     * @param {String} id Identifier for the keyword to be updated
     * @param {Object} opts Optional parameters
     * @param {module:model/Keyword} opts.keywordObject Keyword object that should replace the existing keyword
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Keyword}
     */
    this.keywordUpdate = function(id, opts) {
      return this.keywordUpdateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates new place
     * Endpoint for creating new places
     * @param {Object} opts Optional parameters
     * @param {module:model/Place} opts.placeObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Place} and HTTP response
     */
    this.placeCreateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['placeObject'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Place;

      return this.apiClient.callApi(
        '/place/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates new place
     * Endpoint for creating new places
     * @param {Object} opts Optional parameters
     * @param {module:model/Place} opts.placeObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Place}
     */
    this.placeCreate = function(opts) {
      return this.placeCreateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a place
     * Deletes a place
     * @param {String} id Identifier for the place to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.placeDeleteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling placeDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/place/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a place
     * Deletes a place
     * @param {String} id Identifier for the place to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.placeDelete = function(id) {
      return this.placeDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns list of places used for describing events
     * &lt;h2 id&#x3D;\&quot;using-place-endpoint\&quot;&gt;Using the place endpoint&lt;/h2&gt; &lt;p&gt;Here, locations for events are listed. Events in each location can be found at the &lt;code&gt;event&lt;/code&gt; endpoint using the query parameter &lt;code&gt;location&lt;/code&gt;. Most locations     originate from the &lt;a href&#x3D;\&quot;https://servicemap.hel.fi\&quot;&gt;Helsinki service point registry (tprek)&lt;/a&gt;, hence the id format &lt;code&gt;tprek:28473&lt;/code&gt;. An easy way to locate service points is         to browse our &lt;a href&#x3D;\&quot;https://servicemap.hel.fi\&quot;&gt;Service Map&lt;/a&gt;, which uses the same location ids, e.g. &lt;code&gt;servicemap.hel.fi/unit/28473&lt;/code&gt;.&lt;/p&gt; &lt;h4 id&#x3D;\&quot;district\&quot;&gt;District&lt;/h4&gt; &lt;p&gt;To restrict the retrieved places to city district(s), use the query parameter &lt;code&gt;division&lt;/code&gt;, separating values by commas if you wish to query for several divisions.&lt;/p&gt; &lt;p&gt;City of Helsinki neighborhoods (kaupunginosa), districts (peruspiiri) and subdistricts (osa-alue) are supported.     &lt;a href&#x3D;\&quot;http://kartta.hel.fi/?setlanguage&#x3D;en&amp;e&#x3D;25498873&amp;n&#x3D;6674660&amp;r&#x3D;16&amp;w&#x3D;***&amp;l&#x3D;Karttasarja%2Ckaupunginosat%2Cosaalueet_WFS%2Cperuspiiri_WFS&amp;o&#x3D;100%2C100%2C100%2C100&amp;swtab&#x3D;kaikki\&quot;&gt;         Check the divisions on the Helsinki map service.&lt;/a&gt; &lt;/p&gt; &lt;p&gt;You may query either by specific OCD division type &lt;code&gt;peruspiiri:malmi&lt;/code&gt;, or by division name &lt;code&gt;malmi&lt;/code&gt;. The latter query checks all divisions with the name, regardless of division type.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;place/?division&#x3D;malmi &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?division&#x3D;malmi\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;ordering\&quot;&gt;Ordering&lt;/h4&gt; &lt;p&gt;Default ordering is decreasing order by the number of events found.     You may also order results by &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;street_address&lt;/code&gt; or &lt;code&gt;postal_code&lt;/code&gt;.     For example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;place/?sort&#x3D;name &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?sort&#x3D;name\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;showing-all-places\&quot;&gt;Showing all places&lt;/h4&gt; &lt;p&gt;By default, only those locations which have listed events are displayed. You may display locations with zero &lt;code&gt;n_events&lt;/code&gt; with the     query parameter &lt;code&gt;show_all_places&lt;/code&gt;.&lt;/p&gt; 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {Boolean} opts.showAllPlaces Show all places, including those that are not hosting any events. Otherwise such places are hidden. When show_all_places is specified, no other filter is applied.
     * @param {String} opts.division You may filter places by specific OCD division id, or by division name. The latter query checks all divisions with the name, regardless of division type.
     * @param {String} opts.dataSource Search for places that come from specified data source
     * @param {String} opts.text 
     * @param {String} opts.sort Sort the returned places in the given order. Possible sorting criteria are &#39;n_events&#39;, &#39;id&#39;, &#39;name&#39;, &#39;street_address&#39; and &#39;postal_code&#39;. The default ordering is &#39;-n_events&#39;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    this.placeListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'show_all_places': opts['showAllPlaces'],
        'division': opts['division'],
        'data_source': opts['dataSource'],
        'text': opts['text'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/place/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns list of places used for describing events
     * &lt;h2 id&#x3D;\&quot;using-place-endpoint\&quot;&gt;Using the place endpoint&lt;/h2&gt; &lt;p&gt;Here, locations for events are listed. Events in each location can be found at the &lt;code&gt;event&lt;/code&gt; endpoint using the query parameter &lt;code&gt;location&lt;/code&gt;. Most locations     originate from the &lt;a href&#x3D;\&quot;https://servicemap.hel.fi\&quot;&gt;Helsinki service point registry (tprek)&lt;/a&gt;, hence the id format &lt;code&gt;tprek:28473&lt;/code&gt;. An easy way to locate service points is         to browse our &lt;a href&#x3D;\&quot;https://servicemap.hel.fi\&quot;&gt;Service Map&lt;/a&gt;, which uses the same location ids, e.g. &lt;code&gt;servicemap.hel.fi/unit/28473&lt;/code&gt;.&lt;/p&gt; &lt;h4 id&#x3D;\&quot;district\&quot;&gt;District&lt;/h4&gt; &lt;p&gt;To restrict the retrieved places to city district(s), use the query parameter &lt;code&gt;division&lt;/code&gt;, separating values by commas if you wish to query for several divisions.&lt;/p&gt; &lt;p&gt;City of Helsinki neighborhoods (kaupunginosa), districts (peruspiiri) and subdistricts (osa-alue) are supported.     &lt;a href&#x3D;\&quot;http://kartta.hel.fi/?setlanguage&#x3D;en&amp;e&#x3D;25498873&amp;n&#x3D;6674660&amp;r&#x3D;16&amp;w&#x3D;***&amp;l&#x3D;Karttasarja%2Ckaupunginosat%2Cosaalueet_WFS%2Cperuspiiri_WFS&amp;o&#x3D;100%2C100%2C100%2C100&amp;swtab&#x3D;kaikki\&quot;&gt;         Check the divisions on the Helsinki map service.&lt;/a&gt; &lt;/p&gt; &lt;p&gt;You may query either by specific OCD division type &lt;code&gt;peruspiiri:malmi&lt;/code&gt;, or by division name &lt;code&gt;malmi&lt;/code&gt;. The latter query checks all divisions with the name, regardless of division type.&lt;/p&gt; &lt;p&gt;Example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;place/?division&#x3D;malmi &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?division&#x3D;malmi\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;ordering\&quot;&gt;Ordering&lt;/h4&gt; &lt;p&gt;Default ordering is decreasing order by the number of events found.     You may also order results by &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;street_address&lt;/code&gt; or &lt;code&gt;postal_code&lt;/code&gt;.     For example:&lt;/p&gt; &lt;pre&gt;&lt;code&gt;place/?sort&#x3D;name &lt;/code&gt;&lt;/pre&gt; &lt;p&gt;&lt;a href&#x3D;\&quot;?sort&#x3D;name\&quot; title&#x3D;\&quot;json\&quot;&gt;See the result&lt;/a&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;showing-all-places\&quot;&gt;Showing all places&lt;/h4&gt; &lt;p&gt;By default, only those locations which have listed events are displayed. You may display locations with zero &lt;code&gt;n_events&lt;/code&gt; with the     query parameter &lt;code&gt;show_all_places&lt;/code&gt;.&lt;/p&gt; 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page request particular page in paginated results
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {Boolean} opts.showAllPlaces Show all places, including those that are not hosting any events. Otherwise such places are hidden. When show_all_places is specified, no other filter is applied.
     * @param {String} opts.division You may filter places by specific OCD division id, or by division name. The latter query checks all divisions with the name, regardless of division type.
     * @param {String} opts.dataSource Search for places that come from specified data source
     * @param {String} opts.text 
     * @param {String} opts.sort Sort the returned places in the given order. Possible sorting criteria are &#39;n_events&#39;, &#39;id&#39;, &#39;name&#39;, &#39;street_address&#39; and &#39;postal_code&#39;. The default ordering is &#39;-n_events&#39;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    this.placeList = function(opts) {
      return this.placeListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return information for single place
     * @param {String} id Id as defined in place model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Place} and HTTP response
     */
    this.placeRetrieveWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling placeRetrieve");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Place;

      return this.apiClient.callApi(
        '/place/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return information for single place
     * @param {String} id Id as defined in place model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Place}
     */
    this.placeRetrieve = function(id) {
      return this.placeRetrieveWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a place
     * Place can be updated if the user has appropriate access permissions.
     * @param {String} id Identifier for the place to be updated
     * @param {Object} opts Optional parameters
     * @param {module:model/Place} opts.placeObject Place object that should replace the existing place.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Place} and HTTP response
     */
    this.placeUpdateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['placeObject'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling placeUpdate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Place;

      return this.apiClient.callApi(
        '/place/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a place
     * Place can be updated if the user has appropriate access permissions.
     * @param {String} id Identifier for the place to be updated
     * @param {Object} opts Optional parameters
     * @param {module:model/Place} opts.placeObject Place object that should replace the existing place.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Place}
     */
    this.placeUpdate = function(id, opts) {
      return this.placeUpdateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));

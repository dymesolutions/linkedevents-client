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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LinkedeventsClient) {
      root.LinkedeventsClient = {};
    }
    root.LinkedeventsClient.LanguageName = factory(root.LinkedeventsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LanguageName model module.
   * @module model/LanguageName
   * @version 0.0.17
   */

  /**
   * Constructs a new <code>LanguageName</code>.
   * Translation for the language name. Properties shown here are examples, it is suggested that every language supported has its name translated to every other language. Users of the API cannot rely on any translations being present.
   * @alias module:model/LanguageName
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>LanguageName</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LanguageName} obj Optional instance to populate.
   * @return {module:model/LanguageName} The populated <code>LanguageName</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fi')) {
        obj['fi'] = ApiClient.convertToType(data['fi'], 'String');
      }
      if (data.hasOwnProperty('sv')) {
        obj['sv'] = ApiClient.convertToType(data['sv'], 'String');
      }
      if (data.hasOwnProperty('en')) {
        obj['en'] = ApiClient.convertToType(data['en'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the language in Finnish
   * @member {String} fi
   */
  exports.prototype['fi'] = undefined;
  /**
   * Name of the language in Swedish
   * @member {String} sv
   */
  exports.prototype['sv'] = undefined;
  /**
   * Name of the language in English
   * @member {String} en
   */
  exports.prototype['en'] = undefined;



  return exports;
}));



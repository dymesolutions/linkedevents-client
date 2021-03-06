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
    root.LinkedeventsClient.PlacePosition = factory(root.LinkedeventsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PlacePosition model module.
   * @module model/PlacePosition
   * @version 0.0.22
   */

  /**
   * Constructs a new <code>PlacePosition</code>.
   * geographic position of the place specified using subset of GeoJSON
   * @alias module:model/PlacePosition
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PlacePosition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlacePosition} obj Optional instance to populate.
   * @return {module:model/PlacePosition} The populated <code>PlacePosition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('coordinates')) {
        obj['coordinates'] = ApiClient.convertToType(data['coordinates'], ['Number']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * coordinates in format specified by type property
   * @member {Array.<Number>} coordinates
   */
  exports.prototype['coordinates'] = undefined;
  /**
   * interpretation of the coordinates property. Only point is supported in this version
   * @member {module:model/PlacePosition.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "Point"
     * @const
     */
    "Point": "Point"  };


  return exports;
}));



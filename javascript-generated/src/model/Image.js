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
    root.LinkedeventsClient.Image = factory(root.LinkedeventsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Image model module.
   * @module model/Image
   * @version 0.0.18
   */

  /**
   * Constructs a new <code>Image</code>.
   * Images are used as pictures for events, places and organizers.
   * @alias module:model/Image
   * @class
   * @param url {String} The image file URL.
   */
  var exports = function(url) {
    var _this = this;








    _this['url'] = url;



  };

  /**
   * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Image} obj Optional instance to populate.
   * @return {module:model/Image} The populated <code>Image</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('publisher')) {
        obj['publisher'] = ApiClient.convertToType(data['publisher'], 'String');
      }
      if (data.hasOwnProperty('created_time')) {
        obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
      }
      if (data.hasOwnProperty('last_modified_time')) {
        obj['last_modified_time'] = ApiClient.convertToType(data['last_modified_time'], 'Date');
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
      }
      if (data.hasOwnProperty('last_modified_by')) {
        obj['last_modified_by'] = ApiClient.convertToType(data['last_modified_by'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('cropping')) {
        obj['cropping'] = ApiClient.convertToType(data['cropping'], 'String');
      }
      if (data.hasOwnProperty('license')) {
        obj['license'] = ApiClient.convertToType(data['license'], 'String');
      }
      if (data.hasOwnProperty('@id')) {
        obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
      }
    }
    return obj;
  }

  /**
   * image id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The organization responsible for the image.
   * @member {String} publisher
   */
  exports.prototype['publisher'] = undefined;
  /**
   * Creation time for the image.
   * @member {Date} created_time
   */
  exports.prototype['created_time'] = undefined;
  /**
   * Time this image was modified in the datastore behind the API (not necessarily in the originating system)
   * @member {Date} last_modified_time
   */
  exports.prototype['last_modified_time'] = undefined;
  /**
   * URL reference to the user that created this record (user endpoint)
   * @member {String} created_by
   */
  exports.prototype['created_by'] = undefined;
  /**
   * URL reference to the user that last modfied this record (user endpoint)
   * @member {String} last_modified_by
   */
  exports.prototype['last_modified_by'] = undefined;
  /**
   * The image file URL.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Cropping data for the image.
   * @member {String} cropping
   */
  exports.prototype['cropping'] = undefined;
  /**
   * License data for the image. May be \"cc_by\" (default) or \"event_only\". The latter license restricts use of the image and is specified on the API front page.
   * @member {String} license
   */
  exports.prototype['license'] = undefined;
  /**
   * @member {String} @id
   */
  exports.prototype['@id'] = undefined;



  return exports;
}));



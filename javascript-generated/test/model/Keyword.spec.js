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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LinkedeventsClient);
  }
}(this, function(expect, LinkedeventsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LinkedeventsClient.Keyword();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Keyword', function() {
    it('should create an instance of Keyword', function() {
      // uncomment below and update the code to test Keyword
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be.a(LinkedeventsClient.Keyword);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be();
    });

    it('should have the property originId (base name: "origin_id")', function() {
      // uncomment below and update the code to test the property originId
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be();
    });

    it('should have the property createdTime (base name: "created_time")', function() {
      // uncomment below and update the code to test the property createdTime
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedTime (base name: "last_modified_time")', function() {
      // uncomment below and update the code to test the property lastModifiedTime
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be();
    });

    it('should have the property aggregate (base name: "aggregate")', function() {
      // uncomment below and update the code to test the property aggregate
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be();
    });

    it('should have the property dataSource (base name: "data_source")', function() {
      // uncomment below and update the code to test the property dataSource
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "created_by")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedBy (base name: "last_modified_by")', function() {
      // uncomment below and update the code to test the property lastModifiedBy
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be();
    });

    it('should have the property altLabels (base name: "alt_labels")', function() {
      // uncomment below and update the code to test the property altLabels
      //var instane = new LinkedeventsClient.Keyword();
      //expect(instance).to.be();
    });

  });

}));

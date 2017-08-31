/**
 * Linked Events information API
 * Linked Events provides categorized data on events and places using JSON-LD format.  Events can be searched by date and location. Location can be exact address or larger area such as neighbourhood or borough  JSON-LD format is streamlined using include mechanism. API users can request that certain fields are included directly into the result, instead of being hyperlinks to objects.  Several fields are multilingual. These are implemented as object with each language variant as property. In this specification each multilingual field has (fi,sv,en) property triplet as example.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The PlaceName model module.
* @module model/PlaceName
* @version 0.0.1
*/
export default class PlaceName {
    /**
    * Constructs a new <code>PlaceName</code>.
    * Name of the place, multilingual
    * @alias module:model/PlaceName
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PlaceName</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PlaceName} obj Optional instance to populate.
    * @return {module:model/PlaceName} The populated <code>PlaceName</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlaceName();

            
            
            

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
    * place name in Finnish
    * @member {String} fi
    */
    fi = undefined;
    /**
    * place name in Swedish
    * @member {String} sv
    */
    sv = undefined;
    /**
    * place name in English
    * @member {String} en
    */
    en = undefined;








}


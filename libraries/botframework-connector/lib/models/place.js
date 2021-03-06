/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.1.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Place class.
 * @constructor
 * Place (entity type: "https://schema.org/Place")
 *
 * @member {object} [address] Address of the place (may be `string` or complex
 * object of type `PostalAddress`)
 *
 * @member {object} [geo] Geo coordinates of the place (may be complex object
 * of type `GeoCoordinates` or `GeoShape`)
 *
 * @member {object} [hasMap] Map to the place (may be `string` (URL) or complex
 * object of type `Map`)
 *
 * @member {string} [type] The type of the thing
 *
 * @member {string} [name] The name of the thing
 *
 */
class Place {
  constructor() {
  }

  /**
   * Defines the metadata of Place
   *
   * @returns {object} metadata of Place
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Place',
      type: {
        name: 'Composite',
        className: 'Place',
        modelProperties: {
          address: {
            required: false,
            serializedName: 'address',
            type: {
              name: 'Object'
            }
          },
          geo: {
            required: false,
            serializedName: 'geo',
            type: {
              name: 'Object'
            }
          },
          hasMap: {
            required: false,
            serializedName: 'hasMap',
            type: {
              name: 'Object'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Place;

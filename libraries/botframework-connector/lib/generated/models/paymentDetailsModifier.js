/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Provides details that modify the PaymentDetails based on payment method
 * identifier
 *
 */
class PaymentDetailsModifier {
  /**
   * Create a PaymentDetailsModifier.
   * @member {array} [supportedMethods] Contains a sequence of payment method
   * identifiers
   * @member {object} [total] This value overrides the total field in the
   * PaymentDetails dictionary for the payment method identifiers in the
   * supportedMethods field
   * @member {string} [total.label] Human-readable description of the item
   * @member {object} [total.amount] Monetary amount for the item
   * @member {string} [total.amount.currency] A currency identifier
   * @member {string} [total.amount.value] Decimal monetary value
   * @member {string} [total.amount.currencySystem] Currency system
   * @member {boolean} [total.pending] When set to true this flag means that
   * the amount field is not final.
   * @member {array} [additionalDisplayItems] Provides additional display items
   * that are appended to the displayItems field in the PaymentDetails
   * dictionary for the payment method identifiers in the supportedMethods
   * field
   * @member {object} [data] A JSON-serializable object that provides optional
   * information that might be needed by the supported payment methods
   */
  constructor() {
  }

  /**
   * Defines the metadata of PaymentDetailsModifier
   *
   * @returns {object} metadata of PaymentDetailsModifier
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PaymentDetailsModifier',
      type: {
        name: 'Composite',
        className: 'PaymentDetailsModifier',
        modelProperties: {
          supportedMethods: {
            required: false,
            serializedName: 'supportedMethods',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          total: {
            required: false,
            serializedName: 'total',
            type: {
              name: 'Composite',
              className: 'PaymentItem'
            }
          },
          additionalDisplayItems: {
            required: false,
            serializedName: 'additionalDisplayItems',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PaymentItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'PaymentItem'
                  }
              }
            }
          },
          data: {
            required: false,
            serializedName: 'data',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = PaymentDetailsModifier;
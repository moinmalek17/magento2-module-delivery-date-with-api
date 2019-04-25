define([
    'Magento_Checkout/js/model/quote'
], function (quote) {
    'use strict';

    return function (deliveryDate) {
        quote.deliveryDate(deliveryDate);
    };
});
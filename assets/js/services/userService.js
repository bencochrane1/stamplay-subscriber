'use strict';

angular.module('subscribe.service')

.factory(function($q, $stamplay) {

    var user = $stamplay.User().Model;

    return {
        login: function() {
            return user.login('facebook');
        },
        logout: function() {
            return user.logout();
        },
        isLogged: function() {
            return user.isLogged();
        },
        saveAddress: function(address, city, zipcode) {

        },
        getUserModel: function() {

        },
        createCard: function(cardObj) {

        },
        subscribe: function(planId) {

        },
        unsubscribe: function() {

        }
    }

})


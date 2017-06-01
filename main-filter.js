(function () {
    "use strict";
    mainModule.filter("camelize", function () {
        return function (input, value) {
            //if (!value) { return ''; }
            if (!input) {
                return '';
            }

            return input
            .replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); })
            .replace(/\s/g, '')
            .replace(/^(.)/, function ($1) {
                return $1.toUpperCase();
            });
        };
    });
    mainModule.filter('dateLocalize', function () {
        return function (utcDate) {
            return new Date(utcDate + 'Z').getTime();
        };
    });
}());
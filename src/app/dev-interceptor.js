angular.module('BlurAdmin')
    .factory('devInterceptor', [function () {
        var myInterceptor = {
            request: function(config) {
                // CONDITIONS WHERE WE DO NOT WANT TO MODIFY HTTP REQUESTS
                if (window.environmentSettings.type !== 'DEV') { return config; } 
                if (!config.url.endsWith('.html')) { return config; }
                if (config.url.indexOf('uib/template/') > -1) { return config; }
                if (config.url.endsWith('toast.html')) { return config; }
                if (config.url.indexOf('bootstrap/') > -1) { return config; }
                if (config.url.indexOf('smart-table/') > -1) { return config; }
        
                // MODIFY HTTP REQUEST
                config.url = window.environmentSettings.baseUrl + '/' + config.url;
                return config;
            }
        };

        return myInterceptor;
    }]);
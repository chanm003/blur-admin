(function () {

    angular.module('BlurAdmin.common', ['toastr'])
      .factory('logger', ['$log', 'toastr', logger])
      .factory('common', ['$q', '$rootScope', '$timeout', '$uibModal', 'logger', common]);


    // BEGIN LOGGER
  function logger($log, toastr) {
      var service = {
          log: log,
            logError: logError,
            logSuccess: logSuccess,
            logWarning: logWarning
      };
      
      return service;
      
      // #region public members
      function log(message, data, source, showNotification) {
          writeLog(message, data, source, showNotification, "info");
      }
      
      function logError(message, data, source, showNotification) {
            writeLog(message, data, source, showNotification, "error");
      }
      
      function logSuccess(message, data, source, showNotification) {
            writeLog(message, data, source, showNotification, "success");
      }
      
      function logWarning(message, data, source, showNotification) {
            writeLog(message, data, source, showNotification, "warning");
      }
      // #endregion
  
      // #region private members
      // universal method for writing notifications
      function writeLog(message, data, source, showNotification, notificationType) {
            showNotification = showNotification || true;
  
            // write to angular log, & specify error if it is an error
            var write = (notificationType === 'error') ? $log.error : $log.log;
            source = source ? '[' + source + '] ' : '';
            write(source, message, data);
  
          if (showNotification) {
              // if informational messages not specified to be shown, stop
              if (!commonConfig.settings.showDebugNotiSetting) {
                  return;
              } 
                          
              //notification type, message
              toastr[notificationType](message);
          }
      }
      // #endregion
  }
  //END LOGGER
  
  
    // BEGIN COMMON
  function common($q, $rootScope, $timeout, $uibModal, logger) {
      var service = {
          // passthough common angular dependencies
          $broadcast: $broadcast,
          $q: $q,
          $timeout: $timeout,
          // my services
          logger: logger,
          showBusyModal: showBusyModal    	
      };

      return service;

      // passthrough of the angular $broadcast service
      function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
      }

      function showBusyModal(){
          return $uibModal.open({
              animation: true,
              templateUrl: commonConfig.settings.baseUrl + "/src/app/common/busyModal.html",
              size: 'md',
              backdrop: 'static',
              resolve: {}
          });	
      }
   }
})();




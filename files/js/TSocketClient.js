(function () { 
  var obj =  function () {
    
      this.socket = null;

      this.connection = function(url) {
        this.socket = io(url);
      }
      this.getRoomClients = function() {
        var cp = new crowdProcess(), _f = {};
       _f('A') = function(cbk) {
          cbk(true);
       }      
       cp.serial(
          _f,
         function() {
           alert('TSocketClient2');
         }, 6000
       )
      }
  }
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
      module.exports = obj;
  } else {
      window.TSocketClient = obj; 
  }
})();
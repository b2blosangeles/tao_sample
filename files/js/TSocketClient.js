(function () { 
  var obj =  function () {
    
      this.socket = null;

      this.connection = function(url, cbk) {
        this.socket = io(url);
        socket.on('connect', function(){
          console.log('--connnected-b->');
          console.log(this.socket.id);
          cbk();
        }
        
      }
    
      this.getUniqueId = function(cbk) {
        this.socket.emit('askUniqueId'); 
        this.socket.on('uniqueId', function(data){
             cbk(data);
        });  
       }
    
      this.getRoomClients = function() {
        var cp = new crowdProcess(), _f = {};
       _f['A'] = function(cbk) {
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

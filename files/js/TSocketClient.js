(function () { 
  var obj =  function () {
      this.socket = null;
      this.events = {}
    
      this.emit = function (k, data) {
        var me = this;
        me.socket.emit(k, data); 
      }

      this.joinRoom = function (room, id) { 
         me = this;
         me.socket.emit('clientRequest', {
                cmd : 'sendToRoom',
                room : room,
                data : {
                  client_id : id,
                  code : 'joinRoom'
                }
              });
      }
      this.sendToRoom = function (room, data, id) { 
         me = this;
         me.socket.emit('clientRequest', {
                cmd : 'sendToRoom',
                room : room,
                data : {
                  client_id : (id) ? id : null,
                  code : 'sendData',
                  data : encodeURIComponent(JSON.stringify(data))
                }
              });
      }
      this.setClientId = function (v) {
          var me = this;
          me.socket.emit('setClientId', v);
      }
    
      this.addEvent = function (key, func) {
          var me = this;
          if (key) me.events[key] =  func;  
          if (me.socket) me.setupEvent();
      }
      this.setupEvent = function () {
        var me = this;
        for (var o in me.events) {
             me.socket.off(o);
             me.socket.on(o, (function(o) { return function(data) {
                  if (typeof me.events[o] === 'function') {
                      me.events[o](data.data);
                  }
             }})(o))
        }   
      }
      this.connection = function(url, cbk) {
        var me = this;
        me.socket = io(url);
        me.setupEvent();
         me.socket.on('uniqueId', function(income_data) {
             me.UUID = income_data;
             console.log(me.UUID);
             if (typeof cbk == 'function') { 
                cbk();
             }  
        });/*
        me.socket.on('connect', function(dd){
        });*/
      }
      this.disConnect = function() {
        var me = this;
      //  me.socket.close();
       // me.socket.emit('disconnect');
      }
  }
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
      module.exports = obj;
  } else {
      window.TSocketClient = obj; 
  }
})();

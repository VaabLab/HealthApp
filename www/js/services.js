angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'ALBERT EINSTEIN',
    time: '10:00',
    time2: '10:00'
  }, {
    id: 1,
    name: 'ALBERT SABIN',
    time: '10:00',
    time2: '10:00'
  }, {
    id: 2,
    name: 'CEMA HOSPITAL',
    time: '10:00',
    time2: '10:00'
    //time2: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'CRUZ AZUL',
    time: '11:00',
    time2: '10:00'
  }, {
    id: 4,
    name: 'CRUZ VERMELHA',
    time: '10:00',
    time2: '10:00'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Cads', function() {
  // Might use a resource here that returns a JSON array

    var cad = [{
    id: 0,
    email: 'v@v.com',
    senha: '01071992',
    nome: 'Vagner'
   }];


  return {
    all: function() {
      return cad;
    },
    remove: function(chat) {
      cad.splice(cad.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < cad.length; i++) {
        if (cad[i].id === parseInt(chatId)) {
          return cad[i];
        }
      }
      return null;
    }
  };
});


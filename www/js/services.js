angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'ALBERT EINSTEIN',
    time: '10:00 min',
    time2: '20:00 min',
    end : 'Avenida Albert Einsten- Morumbi, SP',
    tel:'(11) 2151-1233'
  }, {
    id: 1,
    name: 'ALBERT SABIN',
    time: '12:00 min',
    time2: '5:00 min',
    end : 'Lapa, SP',
    tel:' não consta'
  }, {
    id: 2,
    name: 'CEMA HOSPITAL',
    time: '50:00 min',
    time2: '20:00 min',
    end : 'R. do Oratório- Parque da Mooca - SP',
    tel:''
    //time2: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'CRUZ AZUL',
    time: '30:00 min',
    time2: '30:00 min',
    end : 'Av. Lins de Vasconcelos Cambuci- SP',
    tel:'(11) 3348-4000'
  }, {
    id: 4,
    name: 'CRUZ VERMELHA',
    time: '40:00 min',
    time2: '15:00 min',
    end : 'Av. Moreira Guimarães- Indianópolis-  SP',
    tel:'(11) 5056-8667'
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
    email: 'vagner@gmail.com',
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


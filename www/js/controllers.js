angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})

/*
* Controller de print da lista de todos Hospitais
*/

.controller('HospitaisCtrl', function($scope, Chats) {
  $scope.hospitais = Chats.all();
})


/*
* Controller do Ticket
*/
.controller('ticketCtrl', function($scope, $stateParams, Chats ,$ionicModal, $timeout, $state, $ionicLoading, $ionicPopup, $http) {

   $scope.ticket = Chats.get($stateParams.ticket);
  
})


/*
* Controller (gerado de ticket)
*/
.controller('ticketGeradoCtrl', function($scope, $stateParams, Chats, Cads, $ionicModal, $timeout, $state, $ionicLoading, $ionicPopup) {


  $scope.show1 = function(timer) {



    $ionicLoading.show({

    template: 'Aguarde...',
    noBackdrop : false,
    hideOnStateChange : false,
    duration : timer
  

    });
  };

  $scope.ticket = Chats.get($stateParams.ticket);

  $scope.show1(5000);

  $scope.status = false;

  $scope.ticket = Chats.get($stateParams.ticket);

  $timeout(function() {
    $scope.status = true;
  }, 5000);

})


/*
* Controller não implementado
*/
.controller('PesquisaCtrl', function($scope, Chats) {

})


/*
* Controller não implementado
*/
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

/*
* Controller não implementado
*/
.controller('MapCtrl', function($scope) {

})


/*
* Controller não implementado
*/
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})


/*
* Controller controle de login , cadastro, esqueci minha senha
*/
.controller('WelcomeCtrl', function($scope, $ionicModal, $timeout, $state, $ionicLoading, $ionicPopup, $http, Cads) {
  
  

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  // LOADING TIMER 2000 Ms
  $scope.show1 = function(timer) {
    $ionicLoading.show({
    template: 'Aguarde...',
    noBackdrop : false,
    hideOnStateChange : false,
    duration : timer
  
    });
  };

  $ionicModal.fromTemplateUrl('templates/cadastro.html', {
    scope: $scope
  }).then(function(modal1) {
    $scope.modal1 = modal1;
  });
    
  $scope.closeCadastro = function() {
    $scope.modal1.hide();
  };
  
  
  $scope.cadastro = function() {
    $scope.modal1.show();
  };

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  })
  .then(function(modal) {
    $scope.modal = modal;
  });
  
  // FHECHAR MODAL
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  
  // ABRIR MODAL
  $scope.loginOpen = function() {
    $scope.modal.show();
  };
  

  // LOADING TIMER 3000 Ms
  $scope.show = function() {
    $ionicLoading.show({
    template: 'Aguarde...',
    noBackdrop : false,
    hideOnStateChange : false,
    duration : '3000'
  
    });
  };

  // LOADING TIMER 2000 Ms
  $scope.show1 = function(timer) {
    $ionicLoading.show({
    template: 'Aguarde...',
    noBackdrop : false,
    hideOnStateChange : false,
    duration : timer
  
    });
  };

  // LOADING
  $scope.hide = function(){
    $ionicLoading.hide();
  };


  $scope.loginOpen = function() {
    $scope.modal.show();
  };

  // Close do Moodal 
  $scope.closeSenha = function() {
    $scope.modal2.hide();
  };

  // Open do Modal
  $scope.senhaRecupera = function() {
    $scope.modal2.show();
  };

  $scope.cadastroData = {
    data: new Date()
  };

  $scope.showAlertSenha = function() {
     var alertPopup = $ionicPopup.alert({
     title: 'Sua senha não é Segura',
     template: 'Tente Novamente !',
     delay : '4000',
     buttons: [
    {text: '<b>Ok</b>',
    type: 'button-positive'}]
     });
     alertPopup.then(function(res) {
     console.log('Obrigado');
     });
  };
  
  $scope.showAlertName = function() {
     var alertPopup = $ionicPopup.alert({
    title: 'Informe seu nome Completo',
    template: 'Tente Novamente !',
    delay : '4000',
    buttons: [
    {text: '<b>Ok</b>',
    type: 'button-positive'}]
     });
   };

  $scope.cadastro = function() {
    $scope.modal1.show();
  };

  $scope.closeCadastro = function() {
    $scope.modal1.hide();
  };


  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Email ou Login incorretos',
      template: 'Tente Novamente',
      delay : '4000',
      buttons: [
        {text: '<b>Ok</b>',
        type: 'button-positive'}]
    });
    alertPopup.then(function(res) {
      console.log('Email ou Login incorretos');
    });
  };


  $scope.showAlertCadastroRealizado = function() {
     var alertPopup = $ionicPopup.alert({
     title: 'Cadastro Realizado com Êxito',
     template: '',
     delay : '4000',
     buttons: [
    {text: '<b>Ok</b>',
    type: 'button-positive'}]
     });
     alertPopup.then(function(res) {
      console.log('Obrigado');
     });
  };

  $scope.doCadastro = function() {
    if ($scope.cadastroData.password.length < 6){ // Validação Senha
      $scope.show();  
      $timeout(function() {
        $scope.showAlertSenha();
      }, 3000);
    }else if($scope.cadastroData.nome.length < 13){ // Validação Nome
      $scope.show();  
      $timeout(function() {
        $scope.showAlertName();
      }, 3000);
    }else{ // Se tudo der certi, ira enviar os dados para o PHP enviando parametros
     

     // Cads.cad.email = $scope.cadastroData.email;
     // console.log(Cads.cad.email);
     $scope.cadastroData.data;
     $scope.cadastroData.email;
     $scope.cadastroData.password;
      
      $timeout(function() {
        $scope.showAlertCadastroRealizado();
        $scope.closeCadastro();
      },500);
     //Enviar dados para array

      
      
     }
  
  };
  

  $scope.login = function(data) {
    
    var cad = Cads.get(0);

    if ((data.username == cad.email) && (data.password ==  cad.senha)) {
      $scope.show1(5000);
      $timeout(function() {
        $scope.closeLogin();
        $scope.show1(1000);
        $state.go('tab.dash', {}, {reload: true});

      }, 5000);
    }else{
      $scope.showAlert();
    }

  };
  
});




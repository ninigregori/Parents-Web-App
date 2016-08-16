// When click on link (which will be send via text message) open Register Screen
//localhost.../index/abcd
//User puts in data >first name , >last name, >email address
//send token/link back to server including <firstname>, <lastname>,<email>+<abcd>
//save user token

var app = angular.module('app',[]);

app.controller('Main', function() {
  console.log('hi');



});

// (function(){
// function authInterceptor(API, auth) {
//   return {
//     // automatically attach Authorization header
//     request: function(config) {
//       return config;
//     },
//     // If a token was sent back, save it
//     response: function(res) {
//       return res;
//     },
//   }
// }
//
// function authService($window) {
//   var self = this;
//
//   // Add JWT methods here
// }
//
// //User puts in data >first name , >last name, >email address
// function userService($http, API, auth) {
//   var self = this;
//   function handleRequest(res) {
// var token = res.data ? res.data.token : null;
// if(token) { console.log('JWT:', token); }
// self.message = res.data.message;
// }
//   // add authentication methods here
//   self.register = function(fname, lname, email) {
//     return $http.post(API + '/auth/register', {
//            fname: fname,
//            lname: lname,
//            email: email
//       })
//   }
// }
// // Main Controller
// function MainCtrl(user, auth) {
//   var self = this;
//
//   function handleRequest(res) {
//     var token = res.data ? res.data.token : null;
//     if(token) { console.log('JWT:', token); }
//     self.message = res.data.message;
//   }
//
//   self.register = function() {
//     user.register(self.fname, self.lname, self.email)
//       .then(handleRequest, handleRequest, handleRequest)
//   }
//
//   self.isAuthed = function() {
//     return auth.isAuthed ? auth.isAuthed() : false
//   }
// }
//
// angular.module('app', [])
// .factory('authInterceptor', authInterceptor)
// .service('user', userService)
// .service('auth', authService)
// .constant('API', 'http://test-routes.herokuapp.com')
// .config(function($httpProvider) {
//   $httpProvider.interceptors.push('authInterceptor');
// })
// .controller('Main', MainCtrl)
// })();
//
//
//
//
// //send token/link back to server including <firstname>, <lastname>,<email>+<abcd>
//
// var postApp = angular.module('postApp', []);
// // Controller function and passing $http service and $scope var.
// postApp.controller('postController', function($scope, $http) {
//   // create a blank object to handle form data.
//     $scope.user = {};
//   // calling our submit function.
//     $scope.submitForm = function() {
//     // Posting data to php file
//     $http({
//       method  : 'POST',
//       url     : 'clone.php',
//       data    : $scope.user, //forms user object
//       headers : {'Content-Type': 'application/x-www-form-urlencoded'}
//      })
//       .success(function(data) {
//         if (data.errors) {
//           // Showing errors.
//           $scope.errorName = data.errors.name;
//           $scope.errorUserName = data.errors.username;
//           $scope.errorEmail = data.errors.email;
//         } else {
//           $scope.message = data.message;
//         }
//       });
//     };
// });


// Verify user in data base
// http://ec2-54-88-245-245.compute-1.amazonaws.com/playbrush/api/v1.0/authenticate/id/<ob_id>

// send information back to the server
// http://ec2-54-88-245-245.compute-1.amazonaws.com/playbrush/api/v1.0/authenticate/update/id/<unique>/first_name/<first_name>/last_name/<last_name>/email/<email>/password/<password>/



//http://ec2-54-88-245-245.compute-1.amazonaws.com/playbrush/api/v1.0/authenticate/update/id/abcde/first_name/Tolulope/last_name/Ogunsina/email/tolu@playbrush.io/password/pass/

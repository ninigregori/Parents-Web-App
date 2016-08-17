  // Link received via text message + SPECIAL ID - login screen opens when click on link
  // http://ec2-54-88-245-245.compute-1.amazonaws.com/playbrush/api/v1.0/authenticate/id/<ob_id>

var app = angular.module('app',[]);

app.controller('Main', function( $scope, $http ) {
//  console.log('hi');
  var main = this;
  main.info = function() {
    var user = {
      fname: main.fname,
      lname: main.lname,
      email: main.email
    }
    console.log(user);
  }
//cache user id from url

    //blank object to handle form data
  //  $scope.user = {};
     // calling our submit function
    $scope.submitForm = function( $http ) {
       // Adding data to api and send itback to server
      return $http.post({
         method  : 'POST',
         url     : 'http://ec2-54-152-102-95.compute-1.amazonaws.com/playbrush/api/v1.0/add_user_to_profile' + 'fname' + 'lname' + 'email',
         data    : $scope.user,
         headers : {'JSON.stringify': 'playbrush_id: pb_id, fname: main.fname, lname: main.lname, email: main.email'}
        });

      }
});


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

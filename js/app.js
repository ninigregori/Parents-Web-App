// Link received via text message + SPECIAL ID - login screen opens when click on link
// http://ec2-54-88-245-245.compute-1.amazonaws.com/playbrush/api/v1.0/authenticate/id/<ob_id>

var app = angular.module('app',[]);

app.controller('Main', function( $scope, $http ) {
  //  console.log('hi');
  var main = this;
  main.info = function() {
    if ( main.fname === '' || typeof( main.fname ) === 'undefined' ) {
      console.log('escape');
      return;
    }
    var user = {
      fname: main.fname,
      lname: main.lname,
      email: main.email
    }
    console.log(user);
  }
  // $http.post({
  //  method  : 'POST',
  //  url     : 'http://ec2-54-152-102-95.compute-1.amazonaws.com/playbrush/api/v1.0/add_user_to_profile',
  //  data    : user,
  //  dataType: 'jsonp',

  //  headers : {'JSON.stringify': 'playbrush_id: pb_id, fname: main.fname, lname: main.lname, email: main.email'}
  // });

});

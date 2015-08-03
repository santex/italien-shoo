'use strict';

angular.module('prerushApp', ['ui.bootstrap'])
  .controller('startUp', function($scope, $http, $modal, $log) {

//console.log(window.jsonSrc);
    var portal = window.portal ||  "de";
    portal = portal.toLowerCase();
    var jsonSrc =  "json/"+portal+".json";

    
    var country_code = portal.toUpperCase();


    // keep a form-state
    $scope.isSubmitted = false;

    $scope.trySubmit = false;

    // the string, the user has input as domainname
    $scope.domainName;

    $scope.category = "";

    // hold the: Wunschliste
    $scope.domainNotepad = [];
    $scope.count = 0;

    // keep notepad-array after cleaning, for #thankyoumodal
    $scope.domainTransmitted = [];

    $scope.tld = [];
    $scope.active_id = 0;
    $scope.tldCategories = [];

    // retrieve JSON 
    $http({
      method: 'GET',
      url: jsonSrc

    }).success(function(result) {
      $scope.tld = result;
    });

    // reverse an array - needed for the notePad
    $scope.reverse = function(array) {
      var copy = [].concat(array);
      return copy.reverse();
    }

    $scope.validate = function(){              
        $scope.trySubmit = true;           
    };
    
   
    $scope.shortdomain = function(domains){
      var max_length = 52-domains.tld.length-5;
      var name = domains.name;
      var shorten = name;
      if(name.length > max_length){
        var start = Math.floor(max_length/2);
        var end = name.length - (max_length-start);
        return shorten = name.slice(0, start) + "[...]" +name.slice(end, name.length-1);
      } else {
        return name;
      }
    };

// POST: send results to BE
    $scope.send = function() {

      $scope.trySubmit = true;   


      if ($scope.MailForm.$valid === false || $scope.domainNotepad.length == 0) {
        // console.log('NOT-sent');
        return;
      } else {
 //$scope.submitted = true;
        // console.log('wow-sending'+$scope.domainNotepad.length);

        $http({
          url: '/domaininterest/',
          method: "POST",
          data: {
            'domain': $scope.domainNotepad,
            'country_code' : country_code,
            person: {
              'last_name': $scope.MailForm.lastname,
              'first_name': $scope.MailForm.name,
              'email': $scope.MailForm.Email,
              'customer_number': $scope.MailForm.CustNr
            }
          }

        }).success(function(data, status, headers, config) {
          $scope.isSubmitted = true;
          //console.log('isSubmitted:' + $scope.isSubmitted);
          //alert('OK:');
          $('#thankyou').modal('show');
          $('#thankyou').css("position", "absolute");
          $('#thankyou').on('shown', function () {
            $('#thankyou').css("top", "10%");
            var top = parseInt($('#thankyou').css("top"));  
            var wpO =  window.pageYOffset;
            $('#thankyou').css("top", top+wpO);
          });
          
          


    $scope.domainTransmitted = $scope.domainNotepad;

    $scope.domainNotepad = [];


        }).error(function(data, status, headers, config) {
          $scope.status = status;
          //  console.dir($scope.status);
          //$('#thankyou').modal('show');
          // console.log('ERROR:' + status); 
        });
      }
    };


    
 $scope.iscategory = function(domains) {

  //console.log('cat_scope:'+$scope.category);
  //console.log(domains.category);   

if($scope.category !== "") {
//console.log('yeah'+domains.category+':'+);
if(parseInt(domains.category) === parseInt($scope.category)) 

      return (parseInt(domains.category) === parseInt($scope.category)) ? true : false;



      } else {
        return true
      }

     //console.log('cat:'+$scope.category);
//console.dir(domains.category)    
//return true;
    };

    $scope.isTop20 = function(domains) {
      return (domains.list === 20) ? true : false;
    };

    $scope.isTop100 = function(domains) {
      return (domains.list === 100) ? true : false;
    };

    $scope.isTop500 = function(domains) {
      return (domains.list === 0) ? true : false;
    };


    $scope.changedcategory = function(field) {
  //console.log('changed:'+field.Selectcategory)
  $scope.category = field.Selectcategory;
  //console.dir(field)
}



  });
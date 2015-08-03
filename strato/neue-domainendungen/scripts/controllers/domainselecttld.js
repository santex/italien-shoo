'use strict';

angular.module('prerushApp')
  .controller('DomainselecttldCtrl', function($scope) {

    $scope.filter = "$";
    $scope.search = {
      $: '.'
    };

    // we start with a dot in the searchfield
    
/*
    $scope.category = "";

if($scope.category !== "") {
 $scope.search_category = {
      $: parseInt($scope.category)
    };
}
*/

    $scope.plurify = function() {
      return function(value) {
        return value + "s";
      };
    };

    



    // on change set the scope-value
    $scope.change = function(post) {
      post.domainName = post.domainName.replace(/\s/ig, "");
      // forbid input that doesn't make a qualified domain 
      var regex = new RegExp("^[a-z0-9äöüß]+(-[a-z0-9äöüß]+)*$");

      if ( (regex.test(post.domainName) || post.domainName.length == 0) || (post.domainName.lastIndexOf("-") !== -1  && post.domainName.length > 1)) {
        $scope.domainName = post.domainName.toLowerCase();
      } else {

        // the single input-field on top needs a special handling after regexing
        if(post.domainName.length ===  $scope.domainName.length) {
          $scope.domainName = $scope.domainName.toLowerCase().substr(0,$scope.domainName.length-1);
        } else {
           post.domainName = $scope.domainName.toLowerCase();
        }
      }

      return post;
    };

    // return the number of totalDomains (INT)
    $scope.totalDomains = function() {
      return $scope.domainNotepad.length;
    }

    // set true or false depending on total
    var hideDomain = function(total) {
      $scope.nodomain = true;
      if (total > 0) {
        $scope.nodomain = false;
      }

    }

    // add new domainname.tld to the domainNotepad-Array, this Array will also be used for the POST to BE
    $scope.add = function(domain) {

      // add only if not empty and not ending with "-"   
      if ($scope.domainName && $scope.domainName.lastIndexOf("-") != $scope.domainName.length - 1) {

        // put together name + tld
        var domainComplete = $scope.domainName + domain.tld;

        // check bool if we hit it
        var domainAlreadythere = false;

        // iterate through the array and search for a hit
        angular.forEach($scope.domainNotepad, function(eachdomain) {

          if (domainComplete.toLowerCase() == eachdomain.name.toLowerCase() + eachdomain.tld.toLowerCase()) {
            domainAlreadythere = true; // hit!
          }

        });

        // only add when not already there
        if (!domainAlreadythere) {
          // add to the array
          
          $scope.domainNotepad.push({

            // match this arrray (+1)        
           // 'id': $scope.domainNotepad.length + 1,
            // match other array (-1)
            'tld': domain.tld,
            'name': $scope.domainName.toLowerCase()
          });

        }

      }
    };
    $scope.$watch($scope.totalDomains, hideDomain);

  });
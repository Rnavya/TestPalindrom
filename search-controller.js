(function () {
    "use strict";
    function SearchController($scope,$location) {
        var search = this;
        function Palindromic(x) {
            var pal = parseInt(x.toString().split('').reverse().join(''));

            if (pal === x)
                return true;
            else
                return false;
        }
        search.Search = function () {
            search.Max = [];
            for(var i=search.minimum;i<=search.maximum;i++)
            {
                if(isPalindrome(i))
                {
                    search.Max.push(i);
                }
            }
            search.result = search.Max[search.Max.length-1];
            
        };

        search.Showpage=function()
        {
            $location.path("search");
        }
        search.goback = function () {
            $location.path("index.html");
        }
        search.clear = function () {
            search.minimum = "";
            search.maximum = "";
            search.result = "";
        }

        function isPalindrome(s) {
            var len = s.toString().length;;
            if (len < 2) {
                return true;
            }
            var i = 0;
            var j = len - 1;
            while (i < j) {
                if (s.toString()[i] != s.toString()[j]) {
                    return false;
                }
                i += 1;
                j -= 1;
            }
            return true;
        }
    }
    searchModule.controller('SearchController', ['$scope', '$location', SearchController]);
}());
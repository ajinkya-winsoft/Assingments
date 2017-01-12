var app = angular.module("myApp", []).run(function($templateRequest) {
  $templateRequest("template/editor.html");
});


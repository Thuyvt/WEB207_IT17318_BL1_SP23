// Khởi tạo app myModule
var myApp = angular.module("myModule", []);
// Khởi tạo controller
// C1: dung ham cu the
// myApp.controller("tên controoler", tenHam)
// C2: hàm nặc danh
myApp.controller("myController", function($scope) {
    // biến message
    $scope.message = "Hello, back to school";

    // Mảng đổi tượng
    $scope.mangObject = [
        {
            firstName: "Thuy",
            lastName: "Vu"
        },
        {
            firstName: "Luong",
            lastName: "Nguyen"
        }
    ];   
    $scope.sum = function() {
       // code 
       $scope.finalSum = Number.parseInt($scope.number1) +  Number.parseInt($scope.number2);
    };
});
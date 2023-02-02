// Khởi tạo app angularjs
// Khai báo thư viện phụ thuộc - dependences
var myApp = angular.module("myApp", ["ngRoute"]);
// Đăng ký controller với app
myApp.controller("gioiThieuController", gioiThieuController);
// Cấu hình chuyển nội dung trang
myApp.config(function ($routeProvider, $locationProvider) {
    // Xóa khoảng trắng
    $locationProvider.hashPrefix("");
    // Chuyển trang
    $routeProvider
    .when("/home", {
        templateUrl: "./pages/trang-chu.html"
    })
    .when("/gioi-thieu/:name", {
        templateUrl: "./pages/gioi-thieu.html",
        controller: "gioiThieuController"
    })
    .when("/lien-he", {
        templateUrl: "./pages/lien-he.html"
    })
    .otherwise({
        // Chạy trang nào đầu tiên thì đưa vào otherwise
        redirectTo: "/home"
    })

});

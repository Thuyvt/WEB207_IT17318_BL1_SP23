let productApi = "http://localhost:3000/sanpham";
var app = angular.module("demo_product", []);
// app.controller("myCtrl", myCtrl);

app.controller("myCtrl", function ($scope, $http) {
    // danh sách sản phẩm
    $scope.products = [];
    
    // Call api lấy ra danh sách sản phẩm
    $http.get(productApi)
    .then(function (data) {
        // gán giá trị trả về cho $scope.products
        $scope.products = data.data;
    })
    .catch(function (e) {
        // trường hợp lỗi, console ra lỗi
        console.log(e);
    });
    // Tạo phương thức delete sản phẩm
    $scope.delete = function(index) {
        // Lấy ra id của đối tượng = index truyền vào từ html
        var sp = $scope.products[index].id;
        // urlApi/id: để xóa đối tượng = id
        $http.delete(productApi+ "/" + sp)
        .then(function () {
            $scope.products.splice(index, 1);
            // C2: gọi lại phương thức lấy danh sách sản phẩm
            console.log(index);
        })
        .catch(function (e) {
            console.log(e);
        })
    }

})
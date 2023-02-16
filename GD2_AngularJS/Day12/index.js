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
    $scope.viTriHienTai = - 1;
    $scope.product = {
        id: "",
        ten: "",
        so_luong: "",
        gia_nhap: "",
        gia_ban: "",
        mo_ta: "",
    }
    // Phương thức select product cần sửa
    $scope.selectProduct = function (index) {
        var id = $scope.products[index].id;
        $scope.viTriHienTai = index;
        $http.get(productApi +"/" + id)
        .then(function (data) {
            $scope.product = data.data;
        })
        .catch(function (e) {
            console.log(e);
        });
    }

    // Phương thức xử lý sự kiện submit
    $scope.onSubmit = function (event) {
        // phân biệt nút sửa và thêm
        if ($scope.viTriHienTai == -1) {
            // Nút thêm
            console.log($scope.product);
            $http.post(productApi, $scope.product)
            .then(function () {
                $scope.products.push($scope.product);
            })
            .catch(function (e) {
                consonle.log(e);
            });
        } else {
            // Nút sửa
            console.log($scope.product);
            var id = $scope.products[$scope.viTriHienTai].id;
            $http.put(productApi +"/"+id, $scope.product)
            .then(function() {
                $scope.viTriHienTai = -1;
            })
            .catch(function (e) {
                console.log(e);
            })
        }
                                                                                            }
})
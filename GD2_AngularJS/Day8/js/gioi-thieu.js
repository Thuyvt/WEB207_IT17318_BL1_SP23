function gioiThieuController($scope, $routeParams) {
    // $routeParam dùng để lấy tham số từ url
    $scope.message = "Đây là trang giới thiệu của " + $routeParams.name;
    $scope.sanPham  = [
        {ten: "iphone",
        gia: 13},
        {ten: "sumsung",
        gia: 20}
    ];
}
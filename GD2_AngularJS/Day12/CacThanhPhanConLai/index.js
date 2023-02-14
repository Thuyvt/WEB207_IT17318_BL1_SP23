let myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope) {
  let user = {
    firstName: "hang",
    lastName: "nguyen",
  };
  $scope.user = user;

  let users = [
    {
      id: 1,
      name: "HangNT169",
      address: "Ha Noi",
    },
    {
      id: 2,
      name: "PhongTT35",
      address: "Ha Noi",
    },
    {
      id: 3,
      name: "KhanhPG",
      address: "Ha Noi",
    },
    {
      id: 4,
      name: "NguyenVV4",
      address: "Ha Noi",
    },
    {
      id: 5,
      name: "DungNA29",
      address: "Ha Noi",
    },
    {
      id: 6,
      name: "TienNH21",
      address: "Ha Noi",
    },
  ];
  $scope.users = users;
});
//   camelCase;
myApp.directive("checkPassword", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attr, mCtrl) {
      const fnValidate = function (value) {
        if (value.length < 6) {
          mCtrl.$setValidity("check_length_pwd", false); // xet loi duoc hien thi hay khong: hop le hay k: false => hien thi : check_length_pwd : ten dat
        } else {
          mCtrl.$setValidity("check_length_pwd", true);
        }
      };

      mCtrl.$parsers.push(fnValidate);
      // fnValidate : kiem tra khi co loi. Neu loi => push vao
    },
  };
});

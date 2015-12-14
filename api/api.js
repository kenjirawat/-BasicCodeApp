app.controller('someController',['$scope','someService', function ($scope, someService) {
    $scope.datas = [];
    someService.getData().then(function (data) { // รับค่าจาก deferred.resolve(data)
        $scope.datas = data;
    });
}]).                
factory('someService', function ($http, $q) {
    return {
        getData: function () {
            var deferred = $q.defer();//เริ่มทำงาน     
            $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7%3FAPPID%3D62ed18ef2ed8428a8b63fbfccd8483c4').success(function (data) {
                deferred.resolve(data);// เสร็จแล้วเอาไปเลย!!
            });
            return deferred.promise; //รอตามสัญญา ขอเวลาอีกไม่นาน
        }
    };
});
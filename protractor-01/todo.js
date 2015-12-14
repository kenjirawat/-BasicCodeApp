angular.module('app', [])
  .controller('ctr', function () {
    var scope = this       //เป็นตัวกลางในการสื่อสาร  เป็น oject ยัดอะไรเข้าไปก็ได้ this คือตัว controller
    scope.input1 = 0
    scope.input2 = 0
})
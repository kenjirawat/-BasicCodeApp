angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this       //เป็นตัวกลางในการสื่อสาร  เป็น oject ยัดอะไรเข้าไปก็ได้ this คือตัว controller
    todoList.data = []
  
    todoList.add = function (v) {
      todoList.data.push({value: v})   //เพื่อให้มันสามารถใส่ค่าได้หลายค่า
      console.log(todoList.data)
    }
    todoList.clear = function () {
      todoList.data = []
    }
    todoList.sum = function () {
 	var sumNum = 0
 	for (var i = 0  ; i < todoList.data.length ; i++) {
   		sumNum += todoList.data[i].value
   	}
    return sumNum
    }
    console.log(todoList.sum())
})
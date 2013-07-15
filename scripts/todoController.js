todolistapp.controller("TodoController", function($scope, $filter, todoStorage){
	// $scope.todos =null;
	// $scope.todo = {
	// 	id=0,
	// 	name=test,
	// 	createdate="today 2:50pm",
	// 	completed = false
	// }

	var todos = $scope.todos = todoStorage.get();
	
	$scope.newTodo = "";
	$scope.editingTodo = null;

	$scope.$watch("todos",function(){
		// alert(todos);
		todoStorage.put(todos);
	},true);

	$scope.addTodo = function(){
		// alert("addTodo()");
		var newTodo = $scope.newTodo.trim();
		if(newTodo != null && newTodo != ""){
			todos.push({
				name: newTodo,
				createdate: Date.now(),
				createdatedisplay: $filter('calendar')(),
				completed: false
			});
			$scope.newTodo = "";
		}
	};

	$scope.editTodo = function(todo){
		$scope.editingTodo = todo;
		$scope.originalTodo = angular.extend({}, todo);
	};

	$scope.updateTodo = function(todo){
		todo.name = todo.name.trim();
		if(!todo.name){
			$scope.removeTodo(todo);
		}
		$scope.editingTodo = null;
	};

	$scope.revertTodo = function(todo){
		todos[todos.indexOf(todo)]=$scope.originalTodo;
		$scope.editingTodo = null;
	};

	$scope.removeTodo = function(todo){
		todos.splice(todos.indexOf(todo), 1);
	};

	$scope.removeCompleted = function(){
		$scope.todos = todos = todos.filter(function(todo){
			return !todo.completed;
		});
	};
});
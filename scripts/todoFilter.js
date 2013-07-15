todolistapp.filter('calendar',function(){
	return function(date){
		return moment(date).calendar();
	};
});

// todolistapp.filter('removeCompleted',function(){
// 	return function(todos){
// 		todos = _.filter(todos, function(todo){
// 			return !todo.completed;
// 		});
// 		return todos;
// 	}
// });
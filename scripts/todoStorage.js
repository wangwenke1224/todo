todolistapp.factory("todoStorage", function(){
	var STORAGE_ID = 'todolistapp';
	return {

		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (todos) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
});
todolistapp.directive('ngBlur',function() {
	return function (scope, elem, attrs) {
		// ng-blur attr
		elem.bind('blur',function(){
			scope.$apply(attrs.ngBlur);
		});

		// ng-esc attr
		elem.bind('keydown', function (event) {
			var ESCAPE_KEY = 27;
			if (event.keyCode === ESCAPE_KEY) {
				scope.$apply(attrs.ngEsc);
			}
		});
	};
});
angular.module('docsTimeDirective', ['ngRoute'])
.directive('myTimer', ['$interval', 'dateFilter', function($interval, dateFilter) {
	return {
		link : function(scope, element, attrs) {
			var timeOutId;
			var now = new Date();

			function updateTime() {
		    	element.text(dateFilter((new Date()) - now, 'ss'));
		    }

		    element.on('$destroy', function() {
		    	$interval.cancel(timeoutId);
		    });

		    timeoutId = $interval(function() {
	    		updateTime();
		    }, 1000);
		}
	}
}]);

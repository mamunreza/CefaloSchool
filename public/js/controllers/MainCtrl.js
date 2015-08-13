angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

	$scope.tagline = 'Course Dashboard';

	$scope.course = {
        //id: 1,
        name: 'Ook!',
        description: 'A language for orang-utans.'
        //date: new Date()
    };

	var refresh = function () {
		$http.get('/courselist').success(function (response) {
			console.log("I got the data I requested");
			$scope.courselist = response;
		});	
	}

	refresh();

	$scope.addCourse = function () {
		console.log($scope.course);
		$http.post('/courselist', $scope.course).success(function (response) {
			console.log(response);
			refresh();
		});
	}

	$scope.removeCourse = function (id) {
		console.log(id);
		$http.delete('/courselist/' + id).success(function (response) {
			console.log(response);
			refresh();
		}); 
	}

	$scope.editCourse = function (id) {
		console.log(id);
		$http.get('/courselist/'  + id).success(function (response) {
			$scope.course = response;
		});
	}

	$scope.updateCourse = function () {
		console.log($scope.course._id);
		$http.put('/courselist/'  + $scope.course._id, $scope.course).success(function (response) {
			refresh();
		});

	}

	$scope.deselect = function () {
		$scope.course = "";
	}
});
/************************
	CONTROLLERS
************************/
function Main_Controller($scope, $timeout, angularFire, angularFireCollection) {
	var ref = new Firebase("https://exp1.firebaseio.com/list");

	$scope.position = angularFireCollection(ref);

	$scope.moveleft = function() {
		$scope.position.x -= 1;
	}
	$scope.moveright = function() {
		$scope.position.x += 1;
	}
	$scope.moveup= function() {
		$scope.position.y -= 1;
	}
	$scope.movedown = function() {
		$scope.position.y += 1;
	}

	angularFire(ref, $scope, "position");
};


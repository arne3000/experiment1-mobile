/************************
	CONTROLLERS
************************/
function Main_Controller($scope, $timeout, angularFire, angularFireCollection) {
	var ref = new Firebase("https://experiment1.firebaseio.com/player");

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


/************************
	CONTROLLERS
************************/
function Main_Controller($scope, $timeout, angularFire, angularFireCollection) {
	var ref = new Firebase("https://experiment1.firebaseio.com/player");

	//login
	var auth = new FirebaseSimpleLogin(ref, function(error, user) {
		if (error) {
			// an error occurred while attempting login
			console.log(error);
		} else if (user) {
			// user authenticated with Firebase
			console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
		} else {
			// user is logged out
		}
	});

	//for now just allow anons to access data
	auth.login('anonymous');

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

	console.log($scope.position);
	angularFire(ref, $scope, "position");
};


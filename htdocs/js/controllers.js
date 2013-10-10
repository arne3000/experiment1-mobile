/************************
	CONTROLLERS
************************/
function Main_Controller($scope, $timeout, angularFire, angularFireCollection) {
	var ref = new Firebase("https://experiment1.firebaseio.com/player");

	//login
	var auth = new FirebaseSimpleLogin(ref, function(error, user) {
		if (error) {
			// an error occurred while attempting login
			cout(error);
		} else if (user) {
			// user authenticated with Firebase
			cout('User ID: ' + user.id + ', Provider: ' + user.provider);
		} else {
			// user is logged out
			cout('logged out');
		}
	});

	//for now just allow anons to access data
	auth.login('anonymous');

	var currentPos = angularFireCollection(ref);
	if (currentPos == null) {
		$scope.position = {'x':0,'y':0};
	} else {
		$scope.position = angularFireCollection(ref);
	}
	
	$scope.login = auth.login('anonymous');
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

	cout($scope.position);

	angularFire(ref, $scope, "position");
};


var notifQ = new Array();

function cout(text) {
	notifQ.push(text);
}

document.addEventListener('deviceready', function() {
	for (var i = 0; i < notifQ.length; i++) {
		navigator.notification.alert(notifQ[i], function(){}, 'alert', 'Close');
	}
}, false);
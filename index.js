function createTouche() {
	console.log("create Gesture");

	var doc = window.document,
		element = doc.getElementById('container');

	Touche.tap(element, {
		options: {
			areaThreshold: 5,
			precedence: 5
		},
		end: function(e, data) {
			console.log("tap");
		},
		cancel: function() {
			console.log("tap cancelled");
		}
	});

	Touche.tap(element, {
		options: {
			areaThreshold: 5,
			precedence: 5,
			touches: 2
		},
		end: function(e, data) {
			console.log("2-finger tap");
		},
		cancel: function() {
			console.log("2-finger tap cancelled");
		}
	});

	Touche.doubletap(element, {
		options: {
			timeThreshold: 600
		},
		end: function() {
			console.log("double tap");
		},
		cancel: function() {
			console.log("double tap cancelled");
		}
	});

	Touche.swipe(element, {
		options: {
			radiusThreshold: 24
		},
		start: function(e, data) {
			console.log("swipestart1", data);
		},
		update: function(e, data) {
			console.log("swipeupdate1", data);
		},
		end: function(e, data) {
			console.log("swipe1", data);
		},
		cancel: function() {
			console.log("swipe cancelled");
		}
	});

	Touche.rotate(element, {
		options: {
			rotationThreshold: 18
		},
		start: function(e, data) {
			console.log("rotatestart", data.rotation);
		},
		update: function(e, data) {
			console.log("rotateupdate", data.rotation);
		},
		end: function(e, data) {
			console.log("rotate");
		},
		cancel: function() {
			console.log("rotate cancelled");
		}
	});

	Touche.pinch(element, {
		options: {
			pinchThreshold: 10
		},
		start: function(e, data) {
			console.log("pinchstart", data.scale);
		},
		update: function(e, data) {
			console.log("pinchupdate", data.scale);
		},
		end: function(e, data) {
			console.log("pinch");
		},
		cancel: function() {
			console.log("pinch cancelled");
		}
	});
}
window.addEventListener('DOMContentLoaded', createTouche, false);
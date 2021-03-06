/**
 * Copyright (c) 2014-2015 Koninklijke Philips N.V.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Philips HTML5 Angular Application
 *
 * The controllers provide the necessary linkage between the DHPService and the front end views.
 */

/* The login controller retrieves a token via the token function.  The token function calls the login function which then
	   broadcasts a message as to whether or not a user was successful in logging in or not.  If successful then the Patient controller 
	   and the Observations controller will both retrieve data for the patient.													*/
dhp.controller('LoginController', function($scope, DHPService) {

	$scope.signInShow = true;
	$scope.failedLoginShow = false;

	$scope.loginUser = function() {
		DHPService.token($scope.userName, $scope.password);
	};
	$scope.$on('Successful patient', function() {
		$scope.userName = "";
		$scope.password = "";
		$scope.signInShow = false;
	});
	$scope.$on('Successful logout', function() {
		$scope.signInShow = true;
		$scope.failedLoginShow = false;
	});
	$scope.$on('Failed login', function() {
		$scope.failedLoginShow = true;
	});
});

dhp.controller('DashboardController', function($scope, DHPService) {
	$scope.patientPanel = false;
	$scope.nursePanel = false;
	$scope.familyPanel = false;

	$scope.$on('Successful login', function() {
		console.log('Dashboard Controller');
		$scope.patientPanel = true;
		$scope.nursePanel = false;
		$scope.familyPanel = false;
		DHPService.observationsGlucose();
	});

	$scope.showPatientPanel = function() {
		$scope.patientPanel = true;
		$scope.nursePanel = false;
		$scope.familyPanel = false;

		if (!$scope.glucoseData) {
			DHPService.observationsGlucose();
		}
	};

	$scope.showNursePanel = function() {
		$scope.patientPanel = false;
		$scope.nursePanel = true;
		$scope.familyPanel = false;
		if (!$scope.glucoseData) {
			DHPService.observationsGlucose();
		}

		if (!$scope.meanBPData) {
			DHPService.observationsMeanBloodPressure();
		}
		if (!$scope.diastolicBPData) {
			DHPService.observationsDiastolicBloodPressure();
		}
		if (!$scope.systolicBPData) {
			DHPService.observationsSystolicBloodPressure();
		}
		if (!$scope.weightData) {
			DHPService.observationsWeight();
		}
		if (!$scope.pulseOximtryData) {
			DHPService.observationsPulseOximetry();
		}
	};

	$scope.showFamilyPanel = function() {
		$scope.patientPanel = false;
		$scope.nursePanel = false;
		$scope.familyPanel = true;
		if (!$scope.telehealthNoteData) {
			DHPService.observationsTelehealthNote();
		}
	};

	function mapData(data) {
		return _.map(data, function(reading) {
			var time = new Date(reading.content.appliesDateTime);
			return [
				time.valueOf(), // appliesDateTime
				reading.content.valueQuantity.value // valueQuantity
			];
		});
	}

	function mapStringData(data) {
		return _.map(data, function(reading) {
			var time = new Date(reading.content.appliesDateTime);
			return {
				time: time.toDateString(),
				explanation: reading.content.valueString
			};
		});
	}

	function createStepData(data) {
		return _.map(data, function(reading) {
			var time = new Date(reading.datetime);
			return [
				time.valueOf(),
				reading.steps
			];
		})
	}

	// Returns a random integer between min (included) and max (excluded)
	// Using Math.round() will give you a non-uniform distribution!
	function binaryGeneration() {
		return _.sample([0, 1]);
	}

	function getRandomInt(firstMin, firstMax, secondMin, secondMax) {
		var sample = binaryGeneration();
		if (sample === 0) {
			return Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
		} else {
			return Math.floor(Math.random() * (secondMax - secondMin)) + secondMin;
		}
	}


	function randomData(data) {
		return _.map(data, function(reading) {
			return [
				getRandomInt(0, 1000, 3000, 4000), // Activity
				reading.content.valueQuantity.value // valueQuantity
			];
		});
	}

	$scope.stepData = createStepData(STATIC_STEP_DATA);

	$scope.$on('glucoseObsSuccess', function() {
		$scope.glucoseData = [];

		$.each(DHPService.getGlucoseObservationsData(), function(key, val) {
			if (key === 'entry') {
				var mapped = mapData(val);
				var stepMockData = randomData(val);

				$scope.glucoseData = mapped;
				$scope.bloodGlucoseActivityData = _.slice(stepMockData, 0, 15);
			}
		});
	});

	$scope.$on('Mean Blood Pressure Success', function() {
		$scope.meanBPData = [];

		$.each(DHPService.getMeanBloodPressureObservationsData(), function(key, val) {
			if (key === 'entry') {
				var mapped = mapData(val);

				$scope.meanBPData = mapped;
			}
		});
	});

	$scope.$on('Diastolic Blood Pressure Success', function() {
		$scope.diastolicBPData = [];

		$.each(DHPService.getDiastolicBloodPressureObservationsData(), function(key, val) {
			if (key === 'entry') {
				var mapped = mapData(val);

				$scope.diastolicBPData = mapped;
			}
		});
	});

	$scope.$on('Systolic Blood Pressure Success', function() {
		$scope.systolicBPData = [];

		$.each(DHPService.getSystolicBloodPressureObservationsData(), function(key, val) {
			if (key === 'entry') {
				var mapped = mapData(val);

				$scope.systolicBPData = mapped;
			}
		});
	});

	$scope.$on('Weight Success', function() {
		$scope.weightData = [];

		$.each(DHPService.getWeightObservationsData(), function(key, val) {
			if (key === 'entry') {
				var mapped = mapData(val);

				$scope.weightData = mapped;
			}
		});
	});

	$scope.$on('Telehealth Note Success', function() {
		$scope.telehealthNoteData = undefined;

		$.each(DHPService.getTelehealthNoteData(), function(key, val) {
			if (key === 'entry') {
				var mapped = mapStringData(val);

				$scope.telehealthNoteData = mapped;
			}
		});
	});

	$scope.$on('Pulse Oximetry Success', function() {
		$scope.pulseOximtryData = undefined;

		$.each(DHPService.getPulseOximetryObservationsData(), function(key, val) {
			if (key === 'entry') {
				var mapped = mapData(val);

				$scope.pulseOximtryData = mapped;
			}
		});
	});

});

/* The patient controller retrieves patient demographic data and sets the $scope model for the patient view. */
dhp.controller('PatientController', function($scope, DHPService) {

	$scope.patientShow = false;

	$scope.$on('Successful login', function() {
		DHPService.patient();
	});
	$scope.logoutUser = function() {
		DHPService.logout();
	};
	$scope.$on('Successful patient', function() {
		$scope.patientShow = true;
		$.each(DHPService.getPatientData(), function(key, val) {
			if (key === "name") {
				var givennames = [];
				var familynames = [];

				for (p = 0; p < val.length; p++) {
					if (val[p].hasOwnProperty('given')) {
						var tmp = val[p]['given'];
						for (t = 0; t < tmp.length; t++) {
							givennames.push(tmp[t]);
						}
					}
				}

				for (p = 0; p < val.length; p++) {
					if (val[p].hasOwnProperty('family')) {
						var tmp = val[p]['family'];
						for (t = 0; t < tmp.length; t++) {
							familynames.push(tmp[t]);
						}
					}
				}
				$scope.names = '(Family) ' + familynames.toString() + ' (Given) ' + givennames.toString();
			}
			if (key === "gender")
				$scope.gender = val.coding[0]['display'];
			if (key === "birthDate")
				$scope.birthDate = val;
			if (key === "active") {
				var active;
				if (val == true)
					active = "Active";
				else
					active = "Inactive";
				$scope.status = active;
			}
			if (key === "telecom") {
				var phones = [];
				var temp;
				for (i = 0; i < val.length; i++) {
					if (val[i].hasOwnProperty('use')) {
						phones.push(val[i]['use'] + ' : ' + val[i]['value']);
					} else {
						phones.push('other : ' + val[i]['value']);
					}
				}
				$scope.phones = phones.toString();
			}
			if (key === "address") {
				var addrs = [];
				for (i = 0; i < val.length; i++) {
					addrs.push(val[i]['line'][0] + ' ' + val[i]['city'] + ' ' + val[i]['state'] + ' ' + val[i]['zip']);
				}
				$scope.addresses = addrs.toString();
			}
		});
		DHPService.organization(DHPService.getOrganizationId());
	});
	$scope.$on('Successful logout', function() {
		$scope.patientShow = false;
	});
	$scope.$on('Successful organization', function() {
		$scope.organization = DHPService.getOrganizationData();
	});
	$scope.getPatient = function() {
		DHPService.refreshPatient();
	};
	$scope.$on('Successful refresh patient', function() {
		DHPService.organization(DHPService.getOrganizationId());
	});
});

/* The observations controller retrieves observations and sets the $scope model for the observations view. */
// dhp.controller('ObservationsController', function($scope, DHPService) {
// 	$scope.observationsShow = false;
// 	$scope.showNext = false;
// 	$scope.showPrevious = false;

// 	$scope.$on('Successful patient', function() {
// 		$scope.observationsShow = true;
// 		DHPService.observations();
// 	});
// 	$scope.$on('Successful logout', function() {
// 		$scope.observationsShow = false;
// 	});

// 	$scope.getObservations = function() {
// 		DHPService.observations();
// 	};

// 	$scope.getObservationsNext = function() {
// 		DHPService.observationsNext();
// 	}

// 	$scope.getObservationsPrevious = function() {
// 		DHPService.observationsPrevious();
// 	}

// 	$scope.$on('Successful observations', function() {
// 		var resultsCount;
// 		var obsTable = [];
// 		var k = 0;
// 		var links = [];
// 		var linkObj = {};
// 		var prevFlag;
// 		var nextFlag;

// 		$.each(DHPService.getObservationsData(), function(key, val) {
// 			if (key === "totalResults") {
// 				$scope.total_results = "Total Records: " + val;
// 				resultsCount = val;
// 			}
// 			if (key === "link") {
// 				for (j = 0; j < val.length; j++) {
// 					linkObj['id'] = j;
// 					linkObj['href'] = val[j]['href'];
// 					linkObj['rel'] = val[j]['rel'];
// 					if (linkObj['rel'] === 'next') {
// 						nextFlag = true;
// 						DHPService.setObservationsNext(linkObj['href']);
// 					}
// 					if (linkObj['rel'] === 'previous') {
// 						prevFlag = true;
// 						DHPService.setObservationsPrev(linkObj['href']);
// 					}
// 					links.push(linkObj);
// 				}
// 			}
// 			if (key === "entry") {
// 				for (i = 0; i < val.length; i++) {
// 					var obs = {};
// 					var vals = [];

// 					obs['id'] = k++;

// 					vals = dhpUtils.getObjects(val[i], 'display'); // getObjects(TestObj, 'id'); // Returns an array of matching objects
// 					for (p = 0; p < vals.length; p++) {
// 						if (vals[p]['system'] === "http://loinc.org") {
// 							obs['display'] = vals[p]['display'];
// 						} else {
// 							obs['display'] = vals[p]['display'];
// 						}
// 					}
// 					vals = dhpUtils.getObjects(val[i], 'value');
// 					for (p = 0; p < vals.length; p++) {
// 						obs['value'] = vals[p]['value'];
// 					}
// 					vals = dhpUtils.getObjects(val[i], 'units');
// 					for (p = 0; p < vals.length; p++) {
// 						obs['units'] = vals[p]['units'];
// 					}
// 					vals = dhpUtils.getObjects(val[i], 'status');
// 					for (p = 0; p < vals.length; p++) {
// 						obs['status'] = vals[p]['status'];
// 					}
// 					vals = dhpUtils.getObjects(val[i], 'reliability');
// 					for (p = 0; p < vals.length; p++) {
// 						obs['reliability'] = vals[p]['reliability'];
// 					}
// 					vals = dhpUtils.getObjects(val[i], 'start');;
// 					if (vals.length > 0) {
// 						for (p = 0; p < vals.length; p++) {
// 							obs['datetime'] = vals[p]['start'];
// 						}
// 					}
// 					vals = dhpUtils.getObjects(val[i], 'end');
// 					if (vals.length > 0) {
// 						for (p = 0; p < vals.length; p++) {
// 							obs['datetime'] = obs['datetime'] + 'to' + vals[p]['end'];
// 						}
// 					}
// 					vals = dhpUtils.getObjects(val[i], 'appliesDateTime');
// 					if (vals.length > 0) {
// 						for (p = 0; p < vals.length; p++) {
// 							obs['datetime'] = vals[p]['appliesDateTime'];
// 						}
// 					}
// 					obsTable.push(obs);
// 				}
// 			}
// 		});
// 		$scope.showNext = nextFlag;
// 		$scope.showPrevious = prevFlag;
// 		$scope.obsTable = obsTable;
// 	});
// });

/* The graph controller retrieves graph data and sets the $scope model for the graph view. */
// dhp.controller('GraphController', function($scope, $window, $timeout, DHPService) {
// 	$scope.graphShow = false;

// 	$scope.getGraph = function() {
// 		DHPService.observationsGlucose();
// 	};

// 	$scope.$on('Successful logout', function() {

// 		$timeout(function() {
// 			$window.location.reload();
// 		}, 2000);

// 		$scope.graphShow = false;


// 	});

// 	$scope.$on('Successful patient', function() {
// 		$scope.graphShow = true;
// 	});

// 	$scope.$on('glucoseObsSuccess', function() {

// 		var resultsCount;
// 		var obsList = [];
// 		var k = 0;
// 		var links = [];
// 		var linkObj = {};
// 		var times = [];
// 		var readings = [];

// 		$.each(DHPService.getGlucoseObservationsData(), function(key, val) {
// 			if (key === "totalResults") {
// 				resultsCount = val;
// 			}
// 			/* The code below can be expanded if one wanted to page the data and/or retrieve additional results. */
// 			if (key === "link") {
// 				for (j = 0; j < val.length; j++) {
// 					if (val[j]['rel'] === 'next') {
// 						linkObj['id'] = j;
// 						linkObj['href'] = val[j]['href'];
// 						linkObj['rel'] = val[j]['rel'];

// 						links.push(linkObj);
// 					}
// 				}
// 			}
// 			if (key === "entry") {
// 				for (i = 0; i < val.length; i++) {

// 					var obs = {};
// 					var vals = [];

// 					obs['id'] = k++;

// 					vals = dhpUtils.getObjects(val[i], 'value');
// 					for (p = 0; p < vals.length; p++) {
// 						obs['value'] = vals[p]['value'];
// 						readings.push(vals[p]['value']);
// 					}
// 					vals = dhpUtils.getObjects(val[i], 'appliesDateTime');
// 					if (vals.length > 0) {
// 						for (p = 0; p < vals.length; p++) {
// 							obs['datetime'] = vals[p]['appliesDateTime'];
// 							times.push(vals[p]['appliesDateTime']);
// 						}
// 					}
// 					obsList.push(obs);
// 				}
// 			}
// 		});

// 		$scope.labels = times;
// 		if (resultsCount > 0) {
// 			$scope.series = ['Glucose Observations'];
// 		} else {
// 			$scope.nograph = "There are no glucose observations for graphing."
// 		}
// 		$scope.data = [
// 			readings
// 		];
// 	});
// });
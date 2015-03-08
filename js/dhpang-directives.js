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
 * Each of the directives below corresponds to one of the fields in the UI.
 */
dhp.directive('ngStatus', function() {
	return {
		template: '{{status}}'
	}
});

dhp.directive('ngGender', function() {
	return {
		template: '{{gender}}'
	}
});

dhp.directive('ngNames', function() {
	return {
		template: '{{names}}'
	}
});

dhp.directive('ngPhones', function() {
	return {
		template: '{{phones}}'
	}
});

dhp.directive('ngAddresses', function() {
	return {
		template: '{{addresses}}'
	}
});
dhp.directive('ngBirthdate', function() {
	return {
		template: '{{birthDate}}'
	}
});

dhp.directive('ngOrganization', function() {
	return {
		template: '{{organization}}'
	}
});

dhp.directive('ngTotalresults', function() {
	return {
		template: '<strong>{{total_results}}</strong>'
	}
});

dhp.directive('ngNograph', function() {
	return {
		template: '<strong>{{nograph}}</strong>'
	}
});

dhp.directive('glucoseGraph', function() {
	return {
		restrict: 'E',
		scope: {
			data: '=',
			axisLabel: '@'
		},
		template: '<div id="glucose-graph" style="margin: 10px 0;"></div>',
		controller: function($scope, $element) {
			function renderData() {
				var targetHeight = null;

				var options = {
					chart: {
						color: '#eee'
					},
					title: {
						text: null
					},
					colors: ['#2c88ba', '#ffbe37'],
					xAxis: {
						type: 'datetime',
						dateTimeLabelFormats: {
							day: '%b %e',
							week: '%b %e'
						},
						title: {
							text: 'Time'
						}
					},
					yAxis: {
						title: {
							text: $scope.axisLabel
						}
					},
					legend: {
						// enabled: false
						align: 'right',
						verticalAlign: 'top',
						layout: 'vertical',
						x: 0,
			            y: 100
					},
					series: [{
						name: 'Glucose',
						data: $scope.data
					}],
					credits: {
						enabled: false
					}
				};

				$($element).highcharts(options);

				// var chart = $($element).highcharts();
				// var dataElementsCount = $scope.data.series.length == 0 ? chart.height : ($scope.data.series[0].data.length * 60 * 2);
				// chart.setSize(chart.width, dataElementsCount);
			}

			$scope.$watch('data', function() {
				if ($scope.data) {
					renderData();
				}
			});
		}
	}
});

dhp.directive('lineGraph', function() {
	return {
		restrict: 'E',
		scope: {
			data: '=',
			axisLabel: '@',
			type: '@'
		},
		template: '<div id="glucose-graph" style="margin: 10px 0;"></div>',
		controller: function($scope, $element) {
			function renderData() {
				var targetHeight = null;

				var options = {
					chart: {
						color: '#eee'
					},
					title: {
						text: null
					},
					colors: ['#2c88ba', '#ffbe37'],
					xAxis: {
						type: 'datetime',
						dateTimeLabelFormats: {
							day: '%b %e',
							week: '%b %e'
						},
						title: {
							text: 'Time'
						}
					},
					yAxis: {
						title: {
							text: $scope.axisLabel
						}
					},
					legend: {
						// enabled: false
						align: 'right',
						verticalAlign: 'top',
						layout: 'vertical',
						x: 0,
			            y: 100
					},
					series: [{
						name: $scope.type,
						data: $scope.data
					}],
					credits: {
						enabled: false
					}
				};

				$($element).highcharts(options);

				// var chart = $($element).highcharts();
				// var dataElementsCount = $scope.data.series.length == 0 ? chart.height : ($scope.data.series[0].data.length * 60 * 2);
				// chart.setSize(chart.width, dataElementsCount);
			}

			$scope.$watch('data', function() {
				if ($scope.data) {
					renderData();
				}
			});
		}
	}
});
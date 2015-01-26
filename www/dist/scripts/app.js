/*! @generated */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* globals Chart:true */
'use strict';

var doughnut = {};
var defaults = [{
    value: 0,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Red'
}, {
    value: 0,
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'Green'
}, {
    value: 0,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Yellow'
}];
var options = {
    animationEasing: 'easeOutQuint',
    responsive: true
};
var ctx = $('#doughnut-demo').get(0).getContext('2d');
var chart;

doughnut.create = function (red, green, yellow) {
    var data = defaults;

    data[0].value = parseInt(red, 10);
    data[1].value = parseInt(green, 10);
    data[2].value = parseInt(yellow, 10);

    chart = new Chart(ctx).Doughnut(data, options);
};

doughnut.update = function (color, value) {
    var map = {
        red: 0,
        green: 1,
        yellow: 2
    };
    var segment = chart.segments[map[color]];

    segment.value = parseInt(value, 10);
    chart.update();
};

module.exports = doughnut;

},{}],2:[function(require,module,exports){
/* globals Chart:true */
'use strict';

var liveData = {};
var defaults = {
    labels: [],
    datasets: [{
        label: 'FPS',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: []
    }]
};
var options = {
    animation: false,
    scaleBeginAtZero: true,
    responsive: true
};

var ctx = $('#live-data-demo').get(0).getContext('2d');
var lastDataPoint = 0;
var chart;

liveData.create = function () {
    var data = defaults;
    chart = new Chart(ctx).Line(data, options);
    window.chart = chart;
};

liveData.update = function (value, time) {
    if (lastDataPoint && (lastDataPoint + 100) > time) {
        return;
    }
    lastDataPoint = time;

    value = parseFloat(value);
    time = Math.round(time) / 1000;
    chart.addData([value], time);

    if (chart.datasets[0].points.length > 20) {
        chart.removeData();
    }

    chart.update();
};

module.exports = liveData;

},{}],3:[function(require,module,exports){
$(function () {
    'use strict';

    var doughnut = require('./doughnut-demo.js');

    doughnut.create(
        $('#red').val(),
        $('#green').val(),
        $('#yellow').val()
    );

    $('#red').on('change', function (event) {
        doughnut.update('red', $(event.currentTarget).val());
    });
    $('#green').on('change', function (event) {
        doughnut.update('green', $(event.currentTarget).val());
    });
    $('#yellow').on('change', function (event) {
        doughnut.update('yellow', $(event.currentTarget).val());
    });

    var liveData = require('./live-data-demo.js');
    var pt = 0;

    liveData.create();

    function updateLiveData(t) {
        var fps = 1000 / (t - pt);

        liveData.update(fps, t);
        pt = t;

        window.requestAnimationFrame(updateLiveData);
    }
    updateLiveData(17);
});

},{"./doughnut-demo.js":1,"./live-data-demo.js":2}]},{},[3]);

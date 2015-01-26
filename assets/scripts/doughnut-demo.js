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

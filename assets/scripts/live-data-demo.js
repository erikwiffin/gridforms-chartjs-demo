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

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

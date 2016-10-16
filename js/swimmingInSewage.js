function buildAndDisplayData(data) {
    var total = 0;

    for (var i = 0; i < data.length; i++) {
        total += parseFloat(data[i].total);
    }
    // Convert total to gallons (from millions of gallons) and an integer
    total = parseInt(total * 1000000)
    showCounter(total);
    var a = gallonsPerStationSeries(data);;
    drawGallonsPerYearChart(a.years, a.series);

}

function showCounter(total) {

    var total_start = (total - 100000).toLocaleString();

    $('#theCounter').addClass('counter-analog').counter({
        initial: total_start,
        direction: 'up',
        interval: '1',
        format: total.toLocaleString(),
        stop: total.toLocaleString()
    });
}

function gallonsPerStationSeries(data) {
    var years = {};
    var yearsList = [];
    // TODO: Change 2016 to current year to something more dynamic.
    for (var year = 1985; year < 2016; year++) {
        years[year] = 0;
        yearsList.push(year);
    }

    var stations = {
        crcw: {
            name: 'Downtown',
            years: years
        },
        obrien: {
            name: 'Calumette',
            years: years
        },
        wilmette: {
            name: 'Wilmette',
            years: years
        }
    };

    for (var i = 0; i < data.length; i++) {
        var event = data[i];

        stations['crcw']['years'][parseInt(event.year)] += parseFloat(event['crcw']);
        stations['obrien']['years'][parseInt(event.year)] += parseFloat(event['obrien']);
        stations['wilmette']['years'][parseInt(event.year)] += parseFloat(event['wilmette']);
    }
    
    retVal = [];
    $.each(stations, function (index, station) {
        series = {name: station.name, data: []};
        $.each(station.years, function (index, year) {
            series['data'].push(year);
        });
        retVal.push(series);
    });
    return {series: retVal.reverse(), years: yearsList};
}

/*
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5]
    }]
*/
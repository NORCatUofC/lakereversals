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

    var total_start = (total - 300000).toLocaleString();

    $('#theCounter').addClass('counter-analog').counter({
        initial: total_start,
        direction: 'up',
        interval: '1',
        format: total.toLocaleString(),
        stop: total.toLocaleString()
    });
}

function gallonsPerStationSeries(data) {
    var yearsList = [];
    
    for (var i = 0; i < data.length; i++) {
        var year = parseInt(data[i].year);
        if ($.inArray( year, yearsList) < 0) {
            yearsList.push(year);
        }
    
    }
    
    var years = function(yearsList) {
        yearsRet = {};
        for (var y = 0; y < yearsList.length; y++) {
            yearsRet[yearsList[y]] = 0;
        }
        return yearsRet;
    }

    var stations = {
        crcw: {
            name: 'Downtown',
            years: years(yearsList)
        },
        obrien: {
            name: 'Calumette',
            years: years(yearsList)
        },
        wilmette: {
            name: 'Wilmette',
            years: years(yearsList)
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
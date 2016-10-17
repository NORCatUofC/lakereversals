// High charts



function drawGallonsPerYearChart(years, series) {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Sewage Dumped per Station'
        },
        xAxis: {
            categories: years
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Millions of Gallons'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: series
    });

    /*
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Gallons Per Year'
        },
        xAxis: {
            categories: years
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Sewage dumped (millions of gallons)'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: series,
    });
    */
}
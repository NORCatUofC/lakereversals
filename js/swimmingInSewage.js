function buildAndDisplayData(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += parseFloat(data[i].total);
    }
    // Convert total to gallons (from millions of gallons) and an integer
    total = parseInt(total * 1000000)
    setupCounter(total);

}

function setupCounter(total) {
    
    var total_start = (total-100000).toLocaleString();

    $('#theCounter').addClass('counter-analog').counter({
        initial: total_start,
        direction: 'up',
        interval: '1',
        format: total.toLocaleString(),
        stop: total.toLocaleString()
    });


}
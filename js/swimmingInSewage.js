function buildAndDisplayData(data) {
    var total = 0;
    for (var i=0; i < data.length; i++) {
        total += parseFloat(data[i].total);
    }
    // Convert total to gallons (from millions of gallons) and an integer
    total = parseInt(total * 1000000)
    alert(total);
    
}
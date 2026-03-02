//For JR Travels Pricing Matrix
function calculateFare(type) {
    
    const baseRate = 50; 
    const stationValue = 5; 
    
    
    let start = parseInt(document.getElementById('pickup').value);
    let end = parseInt(document.getElementById('dropoff').value);
    
    // Math.abs 
    let distance = Math.abs(end - start);
    
    
    let totalFare = baseRate + (distance * stationValue);
    
    if (type === 'discount') {
        
        totalFare = totalFare * 0.8; 
    }
    
    // The results output
    document.getElementById('displayPrice').innerHTML = "₱ " + totalFare.toFixed(2);
    
    if (distance === 0) {
        window.alert("Select different stations for pick up & drop off");
    }
}

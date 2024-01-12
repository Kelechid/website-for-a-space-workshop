function sumValues() {
   
    var participantType = document.querySelector('input[name="participantType"]:checked');
    var participantTypePrice = participantType ? parseFloat(participantType.value) : 0;
  
    var totalCost = parseFloat(document.getElementById('outputBox5').innerText) || 0;
    var sessions = document.querySelectorAll('input[name="session"]:checked');
  
    sessions.forEach(function (session) {
      var sessionPrice = parseFloat(session.dataset.price);
      var fromDate = new Date(document.getElementById('fromDate').value);
      var toDate = new Date(document.getElementById('toDate').value);
      var numberOfDays = Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24)) || 1; 
  
      var sessionCost = (sessionPrice + participantTypePrice) * numberOfDays;
      totalCost += sessionCost;
      document.getElementById('outputBox' + session.value).innerText = sessionCost.toFixed(2);
    });
  
    var discountApplied = false;
    if (sessions.length > 2) {
      var discount = totalCost * 0.15;
      totalCost -= discount;
      discountApplied = true;
    }
  
    var totalCostOutput = document.getElementById('outputBox5');
    totalCostOutput.innerText = totalCost.toFixed(2);
  
    var confirmationMessage = 'Total Cost: ' + totalCost.toFixed(2);
    if (discountApplied) {
      confirmationMessage += ' (After 15% discount)';
    }
  
    var confirmation = confirm(confirmationMessage + '\nAccept The Total Cost and We Are Ready For Takeoff');
  
    if (confirmation) {
      alert('Awesome! Thanks for registering. See You In Space!');
    } else {
      alert('Application withdrawn No worries! You can change your mind anytime.');
    }
  }
  
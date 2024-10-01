document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.bgna');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
//tickects
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const travelClass = document.getElementById('class').value;

    const summaryContent = `
      <strong>Departure:</strong> ${departure}<br>
      <strong>Destination:</strong> ${destination}<br>
      <strong>Departure Date:</strong> ${departureDate}<br>
      <strong>Return Date:</strong> ${returnDate}<br>
      <strong>Adults:</strong> ${adults}<br>
      <strong>Children:</strong> ${children}<br>
      <strong>Class:</strong> ${travelClass}
    `;

    document.getElementById('summaryContent').innerHTML = summaryContent;
    document.getElementById('bookingSummary').style.display = 'block';
  });

  document.getElementById('passengerDetailsButton').addEventListener('click', function() {
    const adults = parseInt(document.getElementById('adults').value);
    const children = parseInt(document.getElementById('children').value);

    let passengerFields = '';
    for (let i = 1; i <= adults; i++) {
      passengerFields += `
        <h5>Adult ${i}</h5>
        <div class="mb-3">
          <label for="adult${i}Name" class="form-label ">Name</label>
          <input type="text" class="form-control indes" id="adult${i}Name" required>
        </div>
        <div class="mb-3">
          <label for="adult${i}Age" class="form-label">Age</label>
          <input type="number" class="form-control indes" id="adult${i}Age" required>
        </div>
      `;
    }

    for (let i = 1; i <= children; i++) {
      passengerFields += `
        <h5>Child ${i}</h5>
        <div class="mb-3">
          <label for="child${i}Name" class="form-label ">Name</label>
          <input type="text" class="form-control indes" id="child${i}Name" required>
        </div>
        <div class="mb-3">
          <label for="child${i}Age" class="form-label ">Age</label>
          <input type="number" class="form-control indes" id="child${i}Age" required>
        </div>
      `;
    }

    document.getElementById('passengerFields').innerHTML = passengerFields;
    new bootstrap.Modal(document.getElementById('passengerModal')).show();
  });

  document.getElementById('passengerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const adults = parseInt(document.getElementById('adults').value);
    const children = parseInt(document.getElementById('children').value);

    let passengerDetails = '';
    for (let i = 1; i <= adults; i++) {
      const name = document.getElementById(`adult${i}Name`).value;
      const age = document.getElementById(`adult${i}Age`).value;
      passengerDetails += `<strong>Adult ${i}:</strong> Name: ${name}, Age: ${age}<br>`;
    }

    for (let i = 1; i <= children; i++) {
      const name = document.getElementById(`child${i}Name`).value;
      const age = document.getElementById(`child${i}Age`).value;
      passengerDetails += `<strong>Child ${i}:</strong> Name: ${name}, Age: ${age}<br>`;
    }

    const ticketContent = document.getElementById('summaryContent').innerHTML + '<br>' + passengerDetails;
    document.getElementById('ticketContent').innerHTML = ticketContent;
    new bootstrap.Modal(document.getElementById('ticketModal')).show();
  });

  
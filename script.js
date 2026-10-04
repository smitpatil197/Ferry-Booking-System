document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('booking-form');

  if (!bookingForm) {
    console.error('Booking form not found.');
    return;
  }

  // Pre-fill email if saved
  const savedEmail = localStorage.getItem('userEmail');
  if (savedEmail) {
    const emailField = document.getElementById('email');
    if (emailField) {
      emailField.value = savedEmail;
    }
  }

  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const ferry = document.getElementById('ferrySelect').value;
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;

    if (!ferry || !name || !email || !phone || !date || !passengers) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{7,15}$/;

    if (!emailRegex.test(email)) {
      alert('Invalid email address.');
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert('Invalid phone number.');
      return;
    }

    const bookingData = {
      ferry,
      name,
      email,
      phone,
      date,
      passengers
    };

    localStorage.setItem('bookingData', JSON.stringify(bookingData));

    alert(`Thank you, ${name}! Your booking is confirmed.`);

    // ✅ This will now redirect
    window.location.href = 'payment.html';
  });
});

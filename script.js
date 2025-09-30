document.getElementById('contactForm').addEventListener('submit', function(event) {
  let valid = true;
  // Name validation
  const name = document.getElementById('name').value.trim();
  if (!name) {
    document.getElementById('nameError').textContent = 'Name is required.';
    valid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }
  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!email) {
    document.getElementById('emailError').textContent = 'Email is required.';
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    valid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }
  // Message validation
  const message = document.getElementById('message').value.trim();
  if (!message) {
    document.getElementById('messageError').textContent = 'Message is required.';
    valid = false;
  } else {
    document.getElementById('messageError').textContent = '';
  }
  // Prevent if invalid
  if (!valid) {
    event.preventDefault();
    document.getElementById('successMsg').textContent = '';
  } else {
    event.preventDefault();
    document.getElementById('successMsg').textContent = 'Your message has been sent!';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.register-form');
  const inputs = form.querySelectorAll('input');
  const submitButton = form.querySelector('button[type="submit"]');


 function submitRegister() {
      const loginBox = document.getElementById('container');
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Simulasi login gagal
      if (username !== "admin" || password !== "admin") {
        loginBox.classList.add('shake');
        setTimeout(() => loginBox.classList.remove('shake'), 400);
      } else {
        alert("Login berhasil!");
      }
    }

    function toggleTheme() {
      document.body.classList.toggle("dark");
    }


  // Add event listeners to inputs for validation
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.checkValidity()) {
        input.classList.remove('invalid');
        submitButton.disabled = !Array.from(inputs).every(i => i.checkValidity());
      } else {
        input.classList.add('invalid');
      }
    });
  });

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add('invalid');
        isValid = false;
      }
    });

    if (isValid) {
      // Simulate a successful registration
      alert('Registration successful!');
      form.reset();
      inputs.forEach(input => input.classList.remove('invalid'));
    }
  });

  // Animate the form on load
  animate({
    targets: '.register-form',
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 500,
    easing: 'easeOutQuad'
  });
});
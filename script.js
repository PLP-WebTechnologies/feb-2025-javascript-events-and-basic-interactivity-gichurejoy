
document.getElementById('changeTextBtn').addEventListener('click', function () {
  document.getElementById('listItem').textContent = 'Awesome!';
});


document.getElementById('colorBtn').addEventListener('click', function () {
  const title = document.getElementById('mainTitle');
  title.style.color = title.style.color === 'tomato' ? 'black' : 'tomato';
});


document.getElementById('imageToggleBtn').addEventListener('click', function () {
  const img = document.getElementById('mainImage');
  img.style.display = img.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('mainTitle').addEventListener('dblclick', function () {
  alert(' You double-clicked the title!');
});

document.getElementById('name').addEventListener('keyup', function (e) {
  console.log(`Key pressed: ${e.key}`);
});


document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  let isValid = true;


  if (!email.value.includes('@')) {
    document.getElementById('emailFeedback').textContent = 'Invalid email!';
    isValid = false;
  } else {
    document.getElementById('emailFeedback').textContent = '';
  }

  if (password.value.length < 8) {
    document.getElementById('passwordFeedback').textContent = 'Password must be at least 8 characters';
    isValid = false;
  } else {
    document.getElementById('passwordFeedback').textContent = '';
  }

  if (isValid) {
    alert('Form submitted successfully!');
  }
});


document.getElementById('password').addEventListener('input', function () {
  const feedback = document.getElementById('passwordFeedback');
  if (this.value.length < 8) {
    feedback.textContent = 'Too short';
  } else {
    feedback.textContent = '';
  }
});

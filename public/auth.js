function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      displayUserInfo(userCredential.user);
    })
    .catch(error => {
      console.error('Login error:', error.message);
    });
}

function register() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      displayUserInfo(userCredential.user);
    })
    .catch(error => {
      console.error('Registration error:', error.message);
    });
}

function displayUserInfo(user) {
  const userInfoDiv = document.getElementById('user-info');
  userInfoDiv.innerHTML = `<p>Welcome, ${user.email}!</p>`;
}

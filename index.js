document.getElementById('signupForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const loader=document.getElementById('loader');
    loader.style.display='flex'

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    try {
      const res = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password,username })
      });

      const data = await res.json();
      loader.style.display='none'


      if (res.ok) {
       

        alert('Signup successful! You can now log in.');
        window.location.href = './login.html'; // Redirect to login page
      } else {
        alert(data.message || 'Signup failed.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again later.');
      console.error('Signup error:', error);
    }
  });

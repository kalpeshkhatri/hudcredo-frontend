document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const loader=document.getElementById('loader');
    loader.style.display='flex'

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    

    try {
      const res = await fetch('https://hudcredo-backend.onrender.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
            });

      const data = await res.json();
      console.log(data);
      loader.style.display='none'
      console.log('Response Status:', res.status);
      console.log('Response Data:', data);

      




      if (res.ok) {
      // here res.ok is boolean value if response code is between 200 to 299. ==>res.ok === (res.status >= 200 && res.status < 300)

      
      localStorage.setItem('Hudcredo_token', data.token); // ✅ Save token

     
      
      const tokenExpiry = Date.now() + 60 * 60 * 1000 *30; //for normal user token valid for 30days 
      localStorage.setItem('Hudcredo_token_expiry', tokenExpiry.toString());
      alert('Login successful!');
      window.location.href = './index0.html';
      }
      
      
      
      else if (res.status === 401) {
          // ❌ Invalid credentials
          console.log(data)
          alert(data.message);
          } 
      
     
      else {
          // ❌ Other error (500, 400, etc.)
          alert(data.message || 'Something went wrong. Please try again.');
          }

    } catch (error) {
      alert('Something went wrong. Please try again later.');
      console.error('Login error:', error);
    }
  });



document.getElementById('forget1').addEventListener('click',(e)=>{
  e.preventDefault()
  window.location.href = './forget.html';
})
document.getElementById('reset1').addEventListener('click',(e)=>{
  e.preventDefault()
  window.location.href = './reset.html';
})






// 1. Login to get the accessToken and refreshToken
fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30, // Optional, defaults to 60
    }),
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json(); // Parse the response body as JSON
  })
  .then(data => {
    console.log('Login Successful:', data);
  
    // Step 2: Extract accessToken and refreshToken
    const accessToken = data.accessToken;
    const refreshToken = data.refreshToken;
  
    // Step 3: Use the accessToken for a protected request (like getting user data)
    fetch('https://cors-anywhere.herokuapp.com/https://dummyjson.com/auth/me', { // Using CORS Anywhere proxy
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`, // Pass the actual access token in the Authorization header
      },
      credentials: 'include' // Include cookies (e.g., accessToken) in the request
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json(); // Parse the user data response
    })
    .then(userData => {
      console.log('User Data:', userData);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
  
    // Step 4: Refresh the access token using the refreshToken when needed
    // Example: Refresh access token after some time or an error (like token expiration)
  
    setTimeout(() => {
      fetch('https://cors-anywhere.herokuapp.com/https://dummyjson.com/auth/refresh', { // Using CORS Anywhere proxy
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          refreshToken: refreshToken, // Send the actual refresh token to refresh the access token
          expiresInMins: 30, // Optional, defaults to 60 for access token expiration time
        }),
        credentials: 'include', // Include cookies (e.g., accessToken) in the request
      })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json(); // Parse the response body as JSON
      })
      .then(refreshData => {
        console.log('Token refreshed successfully:', refreshData);
        const newAccessToken = refreshData.accessToken; // New access token
        const newRefreshToken = refreshData.refreshToken; // New refresh token (optional)
  
        // You can now use the new access token for further requests
      })
      .catch(error => {
        console.error('Error refreshing token:', error);
      });
    }, 5000); // Example: Refresh the token after 5 seconds (or any other condition)
  })
  .catch(error => {
    console.error('Login Error:', error); // Handle login errors
  });
  
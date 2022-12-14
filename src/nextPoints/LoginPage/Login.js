import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
        <div class="login-wrapper">
      <form action="" class="form">
        <h2>Login</h2>
        <div class="input-group">
          <input type="text" name="loginUser" id="loginUser" required />
          <label for="loginUser">User Name</label>
        </div>
        <div class="input-group">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            required
          />
          <label for="loginPassword">Password</label>
        </div>
        <input type="submit" value="Login" class="submit-btn" />
      </form>
    </div>
    </div>
  )
}

export default Login
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault() // stop the reload
    console.log('register button is trigered')

    try{

      const response = await axios.post('http://localhost:3000/register',{email,password});
      setMessage('Registered Successfully')
      return response.data;

    } catch(error) {
      console.error(error);
      setMessage('Error in the registration')
    }


  }

  return (
    <div>
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" placeholder='enter password'

          value={password}

          onChange={(e) => setPassword(e.target.value)} required />

        <button type='submit'>Register</button>

        <button onClick={() => navigate('/')}>Go to login</button>

      </form>

      {
        message
      }
    </div>
  )
}

export default Register
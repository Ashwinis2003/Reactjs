import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault() // stop the reload
    console.log('register button is trigered')

    try{
      const response = await axios.post('http://localhost:3000/login',{email,password});
      localStorage.setItem('token',response.data.token)
      setMessage('login Successfully')
      navigate('/products')

    } catch(error) {
      console.error(error);
      setMessage('Error in the login')
    }
  }

  return (
    <div>

      <h1 className='text-center'>login</h1>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" placeholder='enter password'

          value={password}

          onChange={(e) => setPassword(e.target.value)} required />

        <button type='submit'>login</button>

        <button onClick={() => navigate('/register') }>Go to Register</button>

      </form>


    </div>
  )
}

export default Login
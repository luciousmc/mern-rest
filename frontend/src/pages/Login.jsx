import { useState } from 'react';
import './Register.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='heading'>
        <h1>Login</h1>
        <p>Enter your info to login</p>
      </section>

      <section className='form register'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='Email Address'
            value={email}
            onChange={handleChange}
          />
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Enter Password'
            onChange={handleChange}
          />

          <input className='btn submit' type='submit' value='Submit' />
        </form>
      </section>
    </>
  );
}
export default Login;

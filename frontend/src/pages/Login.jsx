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

  return (
    <>
      <section className='heading'>
        <h1>Login</h1>
        <p>Enter your info to login</p>
      </section>

      <section className='form register'>
        <form>
          <input
            type='text'
            className='form-control'
            id='email'
            name='email'
            placeholder='Email Address'
            onChange={handleChange}
          />
          <input
            type='text'
            className='form-control'
            id='password'
            name='password'
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

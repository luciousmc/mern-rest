import { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

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
        <h1>Register</h1>
        <p>Please create an account</p>
      </section>

      <section className='form register'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={name}
            placeholder='Enter Your Name'
            onChange={handleChange}
          />
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Email Address'
            onChange={handleChange}
          />
          <input
            type='text'
            className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Enter Password'
            onChange={handleChange}
          />
          <input
            type='text'
            className='form-control'
            id='password2'
            name='password2'
            value={password2}
            placeholder='Confirm Password'
            onChange={handleChange}
          />
          <input className='btn submit' type='submit' value='Submit' />
        </form>
      </section>
    </>
  );
}
export default Register;

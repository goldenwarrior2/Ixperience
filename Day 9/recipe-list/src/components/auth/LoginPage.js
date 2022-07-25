import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      console.log(userCred);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='container mt-5'>
      <div className='card'>
      <div className='card-header'>
        <h1 className='m-0'>Login</h1>
      </div>
      <div className='card-body'>
        <form onSubmit={onFormSubmit}>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             type="email" className="form-control" placeholder="Enter your email"/>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" className="form-control" placeholder="Enter your password"/>
          </div>
          
          <div className='d-grid mt-4'>
            <button className='btn btn-primary'
            type='submit'
            >Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

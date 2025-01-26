import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

// import e from "express";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if(!formData.email || !formData.password){
    return dispatch(signInFailure('Please Fill All The Fields'));
  }
  try{
    dispatch(signInStart());
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if(data.success === false){
      dispatch(signInFailure(data.message));
    }
    
    if(response.ok){
      dispatch(signInSuccess(data));
      navigate('/');
    }
  } catch(error){
    dispatch(signInFailure(error.message));
  }
};


  return (
    <div className='min-h-screen mt-20' >
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">
        {/* Left */}

        <div className="flex-1">
          <Link 
          to="/" 
          className='  text-4xl font-bold dark:text-white' >
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ' >Sam</span>
          Blog
          </Link>
          <p className='text-sm- mt-5' >
            You Can Sign-Up With Your Email And Password Or With Google.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
          

            <div className="">
              <Label value=' Your Email '/>
              <TextInput type='email' placeholder='coder@gmail.com' id='email' onChange={handleChange} />                       
            </div>

            <div>
              <Label value=' Your Password '/>
              <TextInput type='password' placeholder='********' id='password' onChange={handleChange} />                       
            </div>

            <Button gradientDuoTone="redToYellow" type='submit' disabled={loading} >
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className='pl-3' >Loading...</span>
                  </>                
                  
                ) : ('Sign In')              
              }
            </Button>
          </form>

          <div className=" flex gap-2 text-sm mt-5">
            <span>Dont  Have An Account?</span>
            <Link to='/sign-up' className='text-blue-500'>Sign Up</Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure' >
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default SignIn

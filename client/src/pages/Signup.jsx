import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import e from "express";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    // Resume Here 2.09.04
    
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup',{ 
        method: ' POST',
        header:{'Content-Type': 'application/json'},
        body:JSON.stringify(formData),
      });
      const data = await res.json();
    } catch (error){

    }
  }
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
            This Is Project Purpose Is to Learn Mern Stack At Begginer Level
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit} >
            <div className="">
              <Label value=' Your Username '/>
              <TextInput
              type='text'
              placeholder='Username'
              id='newusername' onChange={handleChange}
              
              />
                       
            </div>
            <div className="">
              <Label value=' Your Email '/>
              <TextInput
              type='email'
              placeholder='coder@gmail.com'
              id='email' onChange={handleChange}
              />
                       
            </div>
            <div className="">
              <Label value=' Your Password '/>
              <TextInput
              type='password'
              placeholder='Password'
              id='password' onChange={handleChange}
              />                       
            </div>
            <Button gradientDuoTone="redToYellow" type='submit' >Sign Up</Button>
          </form>

          <div className=" flex gap-2 text-sm mt-5">
            <span>  Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>SignIn</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

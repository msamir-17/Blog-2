import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
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
            This Is Project Purpose Is to Learn Mern Stack At Begginer Level</p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form action="" className='flex flex-col gap-4' >
            <div className="">
              <Label value=' Your Username '/>
              <TextInput
              type='text'
              placeholder='Username'
              id='username'
              />
                       
            </div>
            <div className="">
              <Label value=' Your Email '/>
              <TextInput
              type='text'
              placeholder='coder@gmail.com'
              id='email'
              />
                       
            </div>
            <div className="">
              <Label value=' Your Password '/>
              <TextInput
              type='text'
              placeholder='Password'
              id='password'
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

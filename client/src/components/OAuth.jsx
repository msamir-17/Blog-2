import { Button } from 'flowbite-react'
import { AiFillGoogleCircle } from 'react-icons/ai';
import React from 'react'
import { GoogleAuthProvider, signInWithPopup,getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
const OAuth = () => {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async () =>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        try{
            const resultFromGoogle = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google',{
                method:'POST',
                headers: { 'content-type': 'application/json' },
                body:JSON.stringify({
                    name: resultFromGoogle.user.displayName,
                    email: resultFromGoogle.user.email,
                    googlePhotoUrl: resultFromGoogle.user.photoURL
                }),
            })
            const data = await res.json()
            if(res.ok){
                dispatch(signInSuccess(data))
                navigate('/')
                // 3:29
            }
        }
        catch(error) {
            console.log(error);
        }
    }
  return (
    <Button type='button' outline gradientDuoTone="redToYellow" onClick={handleGoogleClick} >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue With Google
    </Button>
  )
}

export default OAuth

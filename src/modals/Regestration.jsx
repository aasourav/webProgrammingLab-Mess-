import 'animate.css'
import React, { useState } from 'react'
import Input from '../pages/Input'


const forModal = `z-50 w-1/2 h-2/3 fixed  top-1/4 -mt-16 left-1/4 opacity-95`
const forAnimation = `animate__animated animate__fadeIn`
const Regestration = ({Event}) => {
  const[fullName,setFullName]=useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const changeInput = (e)=>{
    console.log(fullName,email,password);
      switch(e.target.name){
        case 'fullName':
          setFullName(e.target.value);
          break;
        case 'email':
          setEmail(e.target.value);
          break;
        case 'password':
          setPassword(e.target.value);
          break;
        default:
          break;
      }
  }
  const FormSubmit = (e)=>{
    console.log(fullName,email,password);
    Event();
    alert("Successfully Regestered..")
    
  }
  return (
    <div className={`bg-gray-400 ${forModal} border-2 rounded-xl p-8 ${forAnimation} flex flex-col items-center`}>
      <div className='relative top-24 '>
          <div className='text-3xl font-medium mb-12'>Registration Form</div>
          <div>
            <div>
              <Input 
                  val={fullName} 
                  Name='fullName' 
                  labelCSS='' 
                  inputCSS={`px-2 py-1 rounded-md`} 
                  inputChange={changeInput} 
                  labelText='Full Name' 
                  placeHolder='Mehedi Hasan'
              />
              <Input 
                  val={email} 
                  Name='email' 
                  inputCSS={`px-2 py-1 rounded-md`} 
                  inputChange={changeInput} 
                  labelText='Email' 
                  placeHolder='mirzaShakil@example.com'
              />
              <Input 
                  val={password} 
                  Name='password' 
                  inputType='password' 
                  inputCSS={`px-2 py-1 rounded-md`} 
                  inputChange={changeInput} 
                  labelText='Password' 
                  placeHolder='*****'
              />
            </div>
              <div className='mt-5 self-end flex justify-end'>
                <button onClick={Event} className='mt-4 mr-2 text-white px-4 py-1 rounded-md bg-red-600'>Cancel</button>
                <button onClick={FormSubmit} name='submit' className='mt-4 text-white px-4 py-1 rounded-md bg-blue-800'>Submit</button>
              </div>
          </div>
      </div>
      
        
        
    </div>
  )
}

export default Regestration
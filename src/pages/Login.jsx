import 'animate.css'
import React, { useState } from 'react'
import Regestration from '../modals/Regestration'
import WaitingForApprove from '../modals/WaitingForApprove'
import Input from './Input'

const loginTitle = `text-8xl`
const inputCss = `px-2 py-1 rounded-md `
const Login = () => {
    const [regModal,setRegModal] = useState(false);
    const [Approve,setApprove] = useState(true);
    const [userName, setUser] = useState('');
    const [password,setPassword] = useState('');
    
    const regModalFunc = ()=>{
        setRegModal(prev=> !prev);
    }
    const waitApproveFunc = ()=>{
        setApprove(prev=> !prev)
    }
    const SubmitData = (e)=>{
    
        setUser('');
        setPassword('');
    }

    const changeData = (e)=>{
        switch(e.target.name){
            case 'username':
                setUser(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }
    
  return (
    
    <div className='flex flex-col w-full h-full fixed'>
        
        { Approve===true ? <WaitingForApprove Event={waitApproveFunc}/> : null}
        <div className='flex flex-col pb-12  bg-yellow-400'>
            <div className='w-1/2 flex flex-col self-center justify-cente pt-28'>
                <h1 className={`${loginTitle} self-start animate__animated animate__fadeInRight animate__slow`}>Welcome To</h1>
                <h1 className={`${loginTitle} self-end animate__animated animate__fadeInLeft animate__slow`}>Digital Mess</h1>
            </div>
        </div>
        <div className='border-t-4 border-black  bg-blue-400 h-full'>
           { regModal===true ? <Regestration Event={regModalFunc}/> : null}
            <div onSubmit={SubmitData} className='animate__animated animate__pulse animate__slow flex flex-col justify-center items-center mt-28'>
                <Input 
                    val={userName}
                    Name='username' 
                    inputChange={changeData} 
                    labelCSS='text-xl mt-36' 
                    inputCSS={`${inputCss} mb-2`} 
                    labelText='UserName' 
                    inputType='text' 
                    placeHolder='ex. ahsan'
                />
                <Input 
                    val={password}
                    Name='password' 
                    inputChange={changeData} 
                    labelCSS='text-xl' 
                    inputCSS={`${inputCss}`} 
                    labelText='Password' 
                    inputType='password' 
                    placeHolder='****'
                />
                <div className='pr-12 mt-5'>
                    <button onClick={SubmitData} className='bg-black mt-4 mr-2 text-white px-4 py-1 rounded-md'> Submit</button>
                    <button onClick={regModalFunc} className='bg-black mt-4 text-white px-4 py-1 rounded-md'>Wanna Join?</button>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Login
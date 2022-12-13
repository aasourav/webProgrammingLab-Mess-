import React from 'react'
const forAnimation = `animate__animated animate__fadeIn`

const WaitingForApprove = ({Event}) => {
  return (
    <div className={`z-50 fixed w-1/2 bg-orange-300 p-16 h-2/4 left-1/4 top-1/4 flex flex-col justify-between rounded-xl border-2 ${forAnimation}`}>
        <p className='text-2xl font-medium'>Your Application is not approved. Please wait for approval</p>
        <button onClick={Event} className='bg-sky-800 px-2 py-1 rounded-md text-white'>I understood</button>
    </div>
  )
}

export default WaitingForApprove
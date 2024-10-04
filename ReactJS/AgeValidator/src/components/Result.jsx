import React from 'react'

const Result = ({ isEligible, setCheckingEligiblity }) => {
    return (
        <div className='bg-white shadow-xl rounded w-[60%] m-auto flex flex-col p-6 gap-6'>
            {
                isEligible ? (
                    <div>
                        <h1 className='font-bold text-xl'>You are Eligible, as you're more than 18</h1>
                    </div>
                ) : (
                    <div>
                        <h1>You are not Eligible as you're 18 or less</h1>
                    </div>
                )
            }

            <p className='text-green-600 hover:text-amber-500 font-semibold underline' onClick={() => setCheckingEligiblity(true)}>Go back</p>
        </div>
    )
}

export default Result
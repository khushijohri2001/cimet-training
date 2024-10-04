import React, { useState } from 'react'

const DobForm = ({ eligibleHandler }) => {
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [dob, setDob] = useState("");
    const [isInputEmpty, setIsInputEmpty] = useState(false)

    const dobHandler = (e) => {
        let currentInput = e.target.value
        setDob(currentInput);
        setIsInputEmpty(false)
    }

    const ageHandler = (e) => {
        e.preventDefault();

        if (dob === "") {
            setIsInputEmpty(true);
        } else {
            setIsInputEmpty(false);

            let age = calculateAge();

            if (age > 18) {
                eligibleHandler(true)
            } else {
                eligibleHandler(false)
            }
        }
    }

    const calculateAge = () => {
        let currentDate = new Date();
        let birthDate = new Date(dob)
        let diff = new Date(currentDate - birthDate)
        let age = Math.abs(diff.getUTCFullYear() - 1970);
        return age
    }

    return (
        <div className='bg-white shadow-xl rounded w-[60%] m-auto flex flex-col p-6 gap-6'>
            <h1 className='text-3xl font-bold'>Find our if you're Eligible to use our service!</h1>
            <form action="" onSubmit={ageHandler}>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="" className='text-lg font-bold'>What is your Date of Birth?</label>
                    <input type="date" name="dob" id="dob" value={dob} onChange={dobHandler} className='cursor-pointer w-[40%] border-2 p-2 rounded' />
                </div>

                {
                    isInputEmpty && <p className='pt-4 text-red-600 font-semibold'>Date of Birth is a required field</p>
                }

                <button type='submit' className='cursor-pointer text-green-600 border border-green-600 px-4 py-2 font-bold  rounded mt-6 hover:bg-green-600 hover:text-white'>Check</button>
            </form>

            <p className='text-green-600 hover:text-amber-500 underline font-bold cursor-pointer' onClick={() => setIsInfoOpen(!isInfoOpen)}>
                Why do we need to know this?
            </p>

            {
                isInfoOpen && (
                    <div className='border-2 border-amber-500 p-4 text-lg'>
                        Your date of birth determines if you can use our platform. You must be at least 18 years old to use our services.
                    </div>
                )
            }
        </div>
    )
}

export default DobForm
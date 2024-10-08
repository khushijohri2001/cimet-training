/* eslint-disable react/prop-types */
import { useState } from 'react'

const Form = ({ setData, fetchImages, data }) => {
    const [formData, setFormData] = useState(data);
    const [isChecked, setIsChecked] = useState(false);


    const formSubmitHandler = async (e) => {
        e.preventDefault();
        setData(formData)
        fetchImages(formData)
        // const images = await fetchImages();
        // console.log(images);

    }

    const userInputHandler = (e) => {
        let { name, value } = e.target;

        if (name === "imageRandom") {
            setIsChecked(e.target.checked)
        }

        setFormData(data => ({ ...data, [name]: name === "isRandom" ? e.target.checked : value }))
    }

    return (
        <div className='p-6 my-10 border-2 border-black flex flex-col gap-6 items-center  w-[50%] m-auto'>
            <h2 className='text-xl font-bold'>Select options</h2>

            <form action="" className='flex flex-col gap-8' onSubmit={formSubmitHandler}>

                <div>
                    <label htmlFor="search-query" className='text-lg font-bold'>Search for Images</label>
                    <input name="query" type="text" id="search-query" placeholder='Search for Images' className='border-2 border-black p-2 rounded w-[30rem] disabled:bg-gray-100 disabled:border-gray-400 disabled:text-gray-500' onChange={userInputHandler} disabled={isChecked} />
                </div>

                <div>
                    <input name="isRandom" type="checkbox" id="checkbox" className='mr-2' onChange={userInputHandler} />
                    <label htmlFor="isRandom" className='text-lg' >Do you want Random Images?</label>
                </div>

                <div>
                    <label htmlFor="count" className='text-lg font-bold'>Number of Images to Display</label>
                    <input name="count" type="text" className='border-2 border-black p-2 rounded w-[30rem]' onChange={userInputHandler} />
                </div>

                <div>
                    <select name="orientation" id="" className='p-2 rounded text-lg' onChange={userInputHandler}>
                        <option value="">Choose Orientation</option>
                        <option value="landscape">Landscape</option>
                        <option value="portrait">Portrait</option>
                    </select>
                </div>

                <button type="submit" className='bg-amber-500 p-2 rounded font-bold'>Submit</button>
            </form>
        </div>
    )
}

export default Form
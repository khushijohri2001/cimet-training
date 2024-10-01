import React from 'react'
import { useState } from 'react'

const FlipCard = ({data: {imageUrl}}) => {
    const [isSelected, setIsSelected] = useState(false);

    
    return (
        <div className={`flip-card `} onClick={() => setIsSelected(true)}>
            <div className={`flip-card-inner ${isSelected ? "flipping-card" : "flipping-reverse-card"}`}>
                <div className="flip-card-front">
                    <img src="https://images.vexels.com/content/156928/preview/question-mark-square-icon-e971e7.png" alt="Avatar" style={{width:"200px", height:"200px"}}/>
                </div>
                <div className="flip-card-back">
                    <img src={imageUrl} alt="" className='h-full w-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default FlipCard
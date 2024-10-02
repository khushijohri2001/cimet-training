import React from 'react'

const FlipCard = ({data, flipHandler}) => {

    
    return (
        <div className="flip-card" onClick={() => flipHandler(data)}>
            <div className={`flip-card-inner ${data.isOpen ? "flipping-card" : "flipping-reverse-card"}`}>
                <div className="flip-card-front">
                    <img src="https://images.vexels.com/content/156928/preview/question-mark-square-icon-e971e7.png" alt="Avatar" style={{width:"200px", height:"200px"}}/>
                </div>
                <div className="flip-card-back">
                    <img src={data.imageUrl} alt="" className='h-full w-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default FlipCard
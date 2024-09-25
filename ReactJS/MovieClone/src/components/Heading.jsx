import React from 'react'
import Toggle from './Toggle'

const Heading = ({title, toggle, cardList}) => {
  return (
    <div>
        <div>
            <p>{title}</p>
            <Toggle toggle={toggle} />
        </div>
        <div>
            cardlist
        </div>
    </div>
  )
}

export default Heading
import React from 'react'

const Toggle = ({toggle}) => {
  return (
    <div>
        <button className=''>{toggle.key1}</button>
        <button>{toggle.key2}</button>
    </div>
  )
}

export default Toggle
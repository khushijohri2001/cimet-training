/* eslint-disable react/prop-types */

import { useState } from "react"

const Toggle = ({toggle}) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className="border-collapse">
        <button className={`w-24 p-1 rounded-l-md ${!isToggle ? "bg-orange-500 text-white border  border-pink-200" : "bg-slate-200 text-black"}`} onClick={() => setIsToggle(false)}>{toggle.key1}</button>
        <button className={`w-24 p-1 rounded-r-md  ${isToggle ? "bg-orange-500 text-white  border  border-pink-200" : "bg-slate-200 text-black"}`} onClick={() => setIsToggle(true)}>{toggle.key2}</button>
    </div>
  )
}

export default Toggle
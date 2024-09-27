/* eslint-disable react/prop-types */

import { useState } from "react"
import { useToggle } from "../context/ToggleContext";

const Toggle = ({ toggle, title }) => {
  const { dispatch } = useToggle();
  const [isToggle, setIsToggle] = useState(false);


  const toggleButtonHandler1 = () => {
    setIsToggle(false)

    if (title === "Trending") {
      dispatch({
        type: "TRENDING_TOGGLE", payload: false
      })
    }

    if (title === "Popular") {
      dispatch({
        type: "POPULAR_TOGGLE", payload: false
      })
    }
  }

  const toggleButtonHandler2 = () => {
    setIsToggle(true)

    if (title === "Trending") {
    dispatch({
      type: "TRENDING_TOGGLE", payload: true
    })
  }

  if (title === "Popular") {
    dispatch({
      type: "POPULAR_TOGGLE", payload: true
    })
  }
  }



  return (
    <div className="border-collapse">
      <button className={`w-24 p-1 rounded-l-md ${!isToggle ? "bg-orange-500 text-white border  border-pink-200" : "bg-slate-200 text-black"}`} onClick={toggleButtonHandler1}>{toggle.key1.name}</button>
      <button className={`w-24 p-1 rounded-r-md  ${isToggle ? "bg-orange-500 text-white  border  border-pink-200" : "bg-slate-200 text-black"}`} onClick={toggleButtonHandler2}>{toggle.key2.name}</button>
    </div>
  )
}

export default Toggle
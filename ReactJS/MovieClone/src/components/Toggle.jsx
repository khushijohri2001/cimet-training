/* eslint-disable react/prop-types */

import { useState } from "react"

const Toggle = ({ buttons:{button1, button2}, activeButton, setActiveButton, setActiveData, data }) => {

  const toggleButtonHandler1 = () => {
    setActiveButton(button1)
    setActiveData(data[0])
  }

  const toggleButtonHandler2 = () => {
    setActiveButton(button2)
    setActiveData(data[1])
  }

  return (
    <div className="border-collapse">
      <button className={`w-24 p-1 rounded-l-md ${activeButton === button1 ? "bg-orange-500 text-white border  border-pink-200" : "bg-slate-200 text-black"}`} onClick={toggleButtonHandler1}>{button1}</button>
      <button className={`w-24 p-1 rounded-r-md  ${activeButton === button2 ? "bg-orange-500 text-white  border  border-pink-200" : "bg-slate-200 text-black"}`} onClick={toggleButtonHandler2}>{button2}</button>
    </div>
  )
}

export default Toggle
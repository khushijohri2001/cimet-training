import React from 'react'
import { useState } from 'react'
import { useCurrency } from '../context/CurrencyContext';

const CurrencyDropDown = () => {
    const { selectedCurrency, selectedCurrencyHandler } = useCurrency();
    
    return (
        <div>
            <select className='text-black px-4 py-1' value={selectedCurrency} onChange={(e) => selectedCurrencyHandler(e)} >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
            </select>
        </div>
    )
}

export default CurrencyDropDown
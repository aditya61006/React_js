import "./components.css"
import React, { useId } from "react";


function InputBox({label,
    className = "",
    amount,
    onAmountChange,
    oncurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable =  false, 


}){
    const amountInputId = useId()
    return(
       
        <div className= {`bg-white p-3 rounded-lg text-sm flex ${className}`}>
           
            <div className="w-1/2">
           
            <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
            {label}
            </label>
           
            <input type="number" id={amountInputId} className="outline-none w-full bg-transparent py-1.5" placeholder="Amount" 
            disabled ={amountDisable} 
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            />
           


            </div>

           <div className="w-1/2 flex flex-wrap justify-end text-right">

           <p className="text-black/40 mb-2 w-full">Currency Type</p>

           </div>

           <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
           value={selectCurrency}
           oncurrencyChange = {(e)=>oncurrencyChange && oncurrencyChange(e.target.value)}
           disabled = {currencyDisable}
           >

            {currencyOption.map((currency)=>{

            <option key={currency} value={currency}>
                {currency} </option>

            })} 
           </select>
        </div>
        
      
    )
}

export default InputBox
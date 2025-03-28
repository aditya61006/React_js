import { useEffect,useState } from "react";
import "tailwindcss"

function useCurrencyInfo(currency){
    const [data, setData] =  useState({})
    useEffect(()=> {
        let res = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((response)=>{
            response.json()
        }).then((response)=>{
            setData(response[currency])      
        })
        
    },[currency])
    console.log(data);
    return data;
}
export default useCurrencyInfo; 
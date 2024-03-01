import { useEffect,useState } from "react";

export default function useCurrencyinfo(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json').then((res)=>res.json()).
        then((res)=>(res[currency]))
    },[currency])
    console.log(data)
    return data
}
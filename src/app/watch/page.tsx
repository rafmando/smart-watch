'use client'
import { useEffect, useState } from "react";
import Time from "../ui/time/time";

export default function Page() {
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
   
    
    
    useEffect(() => {
        setInterval(() => {
            let currentTime = new Date()
            let hrs = currentTime.getHours().toString()
            let mins = currentTime.getMinutes().toString().length != 2 ? '0' + currentTime.getMinutes().toString() : currentTime.getMinutes().toString() 
            setHours(hrs)
            setMinutes(mins)
        },1000)
    })
   
    
    return (
        <div className="starting-screen">
            <div className="dotted-circle"></div>
            <Time hours={hours} minutes={minutes} />
        </div>
            
        
    )
}
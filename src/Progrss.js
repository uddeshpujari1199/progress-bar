import React, { useEffect, useState } from 'react'

export default function Progrss() {
    const[filled,setFilled]=useState(0)
    const[isRunning,setIsRunning]=useState(false)
    useEffect(()=>{
        if(filled<100 && isRunning){
            setTimeout(()=>setFilled(prev=>prev+=2),100)
        }
    },[filled,isRunning])
  return (
    <div setIsRunning={setIsRunning} onScroll={()=>setIsRunning(true)}>
        <div className='progressbar'       onScroll={()=>console.log('hello')}>
            <div style={{
                height:"100%",
                width:`${filled}%`,
                backgroundColor:"#a66cff",
                transition:"width 0.5s"
            }}>
                    
            </div>
            <span className='progressPersect'>{filled}%
                    </span>
        </div>
        <button className='btn' onClick={()=>setIsRunning(true)}>Run</button>
    </div>
  )
}

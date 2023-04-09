import React, { useEffect, useState } from 'react'
import {AiOutlineDown} from "react-icons/ai"

let divOption=[
    {
        id: 1,
        data: 'a1'
    },
    {
        id: 2,
        data: 'a2'
    },
    {
        id: 3,
        data: 'a3'
    },
    {
        id: 4,
        data: 'a4'
    },
]

export default function Select() {
    const [focus, setFocus] = useState(false)
    const [inputFocus, setInputFocus] = useState(false)
    const [addDiv, setAddDiv] = useState(['item1'])
    const handleArray = (e:any) => {
        setAddDiv(items => [...items, e?.target.textContent])
    }
    useEffect(()=>{
        let handleDiv = ()=>{
            setFocus(false)
        }
        document.addEventListener('mouseup',handleDiv)
    },[])
    
  return (
    <section className='w-1/4 mx-auto px-1 mt-10'>
        <div className='flex justify-between items-center border rounded p-2' onClick={()=> setFocus(true)}>
            <div className='flex'>
                <input type="text" name="" id="" className={`${inputFocus ? 'w-ull' : 'w-0.5'} border-none outline-none`} onFocus={() => setInputFocus(true)}/>
                <div className='flex flex-wrap'>

                {
                    addDiv.map((item, index) =>{
                        return(
                            <span key={index} className='mx-1'>{item}</span>
                        )
                    })
                }
                </div>
            </div>
            <div>

            <span>
                <AiOutlineDown/>
            </span>
            </div>
        </div>
        <div className={`p-2 shadow mt-1 ${focus ? 'visible' : 'hidden'}`} >
            {
                divOption.map((item, index) =>{
                    return(
                        <div key={index} onClick={handleArray}>{item.data}</div>
                    )
                })
            }
        </div>
    </section>
  )
}

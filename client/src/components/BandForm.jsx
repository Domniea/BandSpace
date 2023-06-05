import React from 'react'
import { useState } from "react"

function bandForm() {
    const initInputs= {
        name: '',
        city: '',
        facebookURL: '',
        email: ''
    }

    const [inputs, setInputs] = useState({})

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevState =>  ({
            ...prevState,
            [name]: value
        }))
    }
    
    console.log(inputs)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
    }

    return (
        <>
            <div className="Form">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name='name'
                        value={inputs.name}
                        onChange={handleChange}
                        placeholder='Band Name' 
                    />
                    <input 
                        type="text" 
                        name='city'
                        value={inputs.city}
                        onChange={handleChange}
                        placeholder='City' 
                    />
                    <input 
                        type="text" 
                        name='facebookURL'
                        value={inputs.facebookURL}
                        onChange={handleChange}
                        placeholder='Facebool Url' 
                    />
                    <input 
                        type="email" 
                        name='email'
                        value={inputs.email}
                        onChange={handleChange}
                        placeholder='Email' 
                    />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default bandForm
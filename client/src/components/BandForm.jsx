import React from 'react'
import { useState } from "react"
import  genres  from '../utils/genres'

function bandForm() {
    
    const initInputs= {
        name: '',
        city: '',
        facebookURL: '',
        genre: [],
        email: ''
    }

    const [inputs, setInputs] = useState({})
    const [checkedGenres, setCheckedGenres] = useState(
        new Array(genres.length).fill(false)
    )

    function handleChange(e) {
        const { name, value ,type, checkbox} = e.target
        setInputs(prevState =>  ({
            ...prevState,
            [name]: type === checkbox ? checked : value 
        }))
    }
    
    // console.log(inputs)

    function handleCheckedGenreChange() {
        console.log(checkedGenres)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
    }

    // console.log(genres)
    // genres.map((type, index)=> {
    //     console.log(type.genre, index)
    // })

    const checkboxGenre = genres.map((type, index) => {
        // console.log(type)
        return(
                <div key={index}>             
                    <input 
                        type='checkbox'
                        name={type.genre}
                        id={`checkbox-genre-${type.genre}`}
                        value={type.genre}
                        checked={checkedGenres[index]}
                        onChange={handleCheckedGenreChange}
                    />
                    <label htmlFor={`checkbox-genre-${type.genre}`}>{type.genre}</label>
                </div>
        )
    })


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
                    <input 
                        type="email" 
                        name='email'
                        value={inputs.email}
                        onChange={handleChange}
                        placeholder='Email' 
                    />
                    <div className='checkbox--genres'>
                        {checkboxGenre}
                    </div>
                    {/* <div onChange={handleChange}>
                        <input type='radio' value={inputs.genre} name='genre' />
                        <input type='radio' value={inputs.genre} name='genre' />
                        <input type='radio' value={inputs.genre} name='genre' />
                        <input type='radio' value={inputs.genre} name='genre' />
                        <input type='radio' value={inputs.genre} name='genre' />
                        <input type='radio' value={inputs.genre} name='genre' />
                        <button>Submit</button>
                    </div> */}
                </form>
            </div>
        </>
    )
}

export default bandForm
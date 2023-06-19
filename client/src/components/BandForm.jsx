import React from 'react'
import { useState } from "react"
import axios from 'axios'
import  genres  from '../utils/genres'

function bandForm() {
    
    
    const initInputs = {
        name: '',
        city: '',
        facebookURL: '',
        spotifyURL: '',
        bandcampURL: '',
        soundCloudURL: '',
        genre: '',
        email: ''
    }

    const initCheckboxes =  new Array(genres.length).fill(false)

    const genreData = []

    const [checkedGenres, setCheckedGenres] = useState(
        new Array(genres.length).fill(false)
    )

    const [inputs, setInputs] = useState(
        {
            name: '',
            city: 'Salt Lake City/SLC',
            facebookURL: '',
            spotifyURL: '',
            bandcampURL: '',
            soundCloudURL: '',
            genre: genreData,
            email: ''
        }
    )

    //Handle change functions
    function handleChange(e) {
        const { name, value ,type, checkbox} = e.target
        setInputs(prevState =>  ({
            ...prevState,
            [name]: type === checkbox ? checked : value 
        }))
    }

    function handleCheckedGenreChange(position) {
        const updatedCheckedGenres = checkedGenres.map((item, index, ) => {
            return index === position ? !item : item  
        }) 

        setCheckedGenres(updatedCheckedGenres)

        const allGenres = updatedCheckedGenres.reduce(
            (allGenres, value, index) => {
                if(value === true) {
                    return [...allGenres, genres[index].genre]
                }
                return allGenres
            }
            ,[]
        )

        setInputs(prevState => {
            return {
                ...prevState,
                genre: allGenres
            }
        })

    }
    
    function postData(inputs) {
        axios.post('https://bandspace-production.up.railway.app/bands/bands', inputs)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    //Submit to API
    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        postData(inputs)
        setInputs(initInputs)
        setCheckedGenres(initCheckboxes)
    }

    // Genre checknboxes render
    const checkboxGenre = genres.map((type, index) => {
        return(
                <div 
                    key={index}
                    className='checkbox--genre'
                >   
                    <>
                        <input 
                            type='checkbox'
                            name={type.genre}
                            
                            id={`checkbox-genre-${type.genre}`}
                            value={type.genre}
                            checked={checkedGenres[index]}
                            onChange={() => handleCheckedGenreChange(index)}
                        />
                        <label 
                            htmlFor={`checkbox-genre-${type.genre}`}
                        >
                            {type.genre}
                        </label>
                    </>          
                        
                </div>
        )
    })

    //Limit genres to 3(max)
    if(inputs.genre.length  > 3) {
        alert('Please pick no more than three genres')
    }

    return (
        <>
            <div className="Form--bandsubmition">
                <form 
                    onSubmit={handleSubmit}
                    className="Form--bandsubmition"   
                >
                    <input 
                        type="text" 
                        name='name'
                        className="input--text"
                        value={inputs.name}
                        onChange={handleChange}
                        placeholder='Band Name' 
                    />
                        <input 
                            type="email" 
                            name='email'
                            className="input--text"
                            value={inputs.email}
                            onChange={handleChange}
                            placeholder='Email' 
                        />
                    <input 
                        type='url' 
                        name='facebookURL'
                        className="input--text"
                        value={inputs.facebookURL}
                        onChange={handleChange}
                        placeholder='facebook Url' 
                    />
                    <input 
                        type='url'
                        className="input--text" 
                        name='spotifyURL'
                        value={inputs.spotifyURL}
                        onChange={handleChange}
                        placeholder='Spotify Url' 
                    />
                    <input 
                        type='url'
                        className="input--text" 
                        name='bandcampURL'
                        value={inputs.bandcamp}
                        onChange={handleChange}
                        placeholder='Bandcamp Url' 
                    />
                    <input 
                        type='url'
                        className="input--text" 
                        name='soundCloudURL'
                        value={inputs.soundCloud}
                        onChange={handleChange}
                        placeholder='SoundCloud Url' 
                    />
                    <select
                        name='city'
                        id='city'
                        className="input--text"
                        value={inputs.city}
                        onChange={handleChange}
                    >
                        <option value="salt lake city/SLC">- Salt Lake/SLC -</option>
                        <option value="ogden"> - Ogden - </option>
                        <option value="logan">- Logan -</option>
                        <option value="st george">- St. George -</option>
                    </select>
                    <div className='checkbox--genre--container'>
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
                    <br></br>
                    <button 
                        onSubmit={handleSubmit}
                        disabled={inputs.genre.length > 3 ? true: false}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default bandForm
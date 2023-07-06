import React, { useEffect } from 'react'
import { useState, useContext} from "react"
import { BandListData } from "../context/bandListContext.jsx";
import  genres  from '../utils/genres'
import CheckboxesContainer from './CheckboxesContainer'

function bandForm(props) {
    
    const { postBand } = useContext(BandListData)
    
    const initInputs = {
        name: '',
        city: '',
        genre: '',
        facebookURL: '',
        spotifyURL: '',
        bandcampURL: '',
        soundcloudURL: '',
        email: ''
    }
    const [tempCheckboxGenres, setTempCheckboxGenres] = useState(
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ]
    )
    const initCheckboxes =  new Array(genres.length).fill(false)

    // const genreData = tempCheckboxGenres.flat()

    const [checkedGenres, setCheckedGenres] = useState(
        new Array(genres.length).fill(false)
    )

    const [inputs, setInputs] = useState(
        {
            name: '',
            city: 'Salt Lake City/SLC',
            genre: 'poop',
            facebookURL: '',
            spotifyURL: '',
            bandcampURL: '',
            soundcloudURL: '',
            email: ''
        }
    )

    useEffect(() => {
        setInputs(prevState =>  {
            return {
                ...prevState,
                 genre: tempCheckboxGenres.flat()
            } 
         })
    }, [tempCheckboxGenres])

    //Handle change functions
    function handleChange(e) {
        const { name, value ,type, checkbox} = e.target
        setInputs(prevState =>  ({
            ...prevState,
            [name]: type === checkbox ? checked : value 
        }))
    }

    // function handleCheckedGenreChange(position) {
    //     const updatedCheckedGenres = checkedGenres.map((item, index, ) => {
    //         return index === position ? !item : item  
    //     }) 

    //     setCheckedGenres(updatedCheckedGenres)
        
    //     const allGenres = updatedCheckedGenres.reduce(
    //         (allGenres, value, index) => {
    //             if(value === true) {
    //                 return [...allGenres, genres[index].genre]
    //             }
    //             return allGenres
    //         }
    //         ,[]
    //     )

    //     setInputs(prevState => {
    //         return {
    //             ...prevState,
    //             genre: allGenres
    //         }
    //     })

    // }

    //Submit to API
    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        postBand(inputs)
        alert('Your Band Has Been Submitted!!!')
        setInputs(initInputs)
        setCheckedGenres(initCheckboxes)
    }

    // Limit genres to 3(max)
    // if(inputs.genre.length  >= 3) {
    //     alert('Please pick no more than three genres')
    // }

    console.log(inputs.genre)

    return ( 
        <>
            <div className="Form--bandsubmition">
                <form 
                    onSubmit={handleSubmit}
                    className="Form--bandsubmition"   
                >
                    <div className='type-or-select'>
                    <input 
                        type="text" 
                        name='name'
                        className="input--text"
                        value={inputs.name}
                        onChange={handleChange}
                        placeholder='Band Name' 
                        required
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
                        value={inputs.bandcampURL}
                        onChange={handleChange}
                        placeholder='Bandcamp Url' 
                    />
                    <input 
                        type='url'
                        className="input--text" 
                        name='soundcloudURL'
                        value={inputs.soundcloudURL}
                        onChange={handleChange}
                        placeholder='Soundcloud Url' 
                    />
                    <select
                        name='city'
                        id='city'
                        className="input--text"
                        value={inputs.city}
                        onChange={handleChange}
                        required
                    >
                        <option value="salt lake city/SLC">- Salt Lake/SLC -</option>
                        <option value="ogden"> - Ogden - </option>
                        <option value="logan">- Logan -</option>
                        <option value="st george">- St. George -</option>
                    </select>
                    </div>
                    <h4 style={{textAlign: 'center'}}>Please limit genres to 5</h4>
                    <CheckboxesContainer 
                        tempCheckboxGenres={tempCheckboxGenres}
                        setTempCheckboxGenres={setTempCheckboxGenres}
                        setInputs={setInputs}
                        
                    />
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
import { all } from "axios";
import React from "react";
import { useState } from "react";

const GenreCheckboxContainer = (props) => {

    const [show, setShow] = useState(false)

    const { genres, setGenres, types, genreGroup, handleChange } = props

    const toggle = () => {
        setShow(prevState => !prevState)
    }

    const [checkedGenres, setCheckedGenres] = useState(
        new Array(types.length).fill(false)
    )

    function handleCheckedGenreChange(position) {
        const updatedCheckedGenres = checkedGenres.map((item, index, ) => {
            return index === position ? !item : item  
        }) 
        
        setCheckedGenres(updatedCheckedGenres)

        const allGenres = updatedCheckedGenres.reduce(
            (allGenres, value, index) => {
                if(value === true) {
                    return [...allGenres, types[index].genre]
                }
                return allGenres
            }
            ,[]
        )
        
        console.log(allGenres)
    }

    const checkbox = types.map((sound, index) => {
        const { genre } = sound

        return <div key={index}>
            <label >
                <input 
                    type="checkbox"
                    name={genre}
                    value={genre}
                    checked={checkedGenres[index]}
                    id={`checkbox ${genre}`}
                    onChange={() => handleCheckedGenreChange(index)}
                />
                {genre}
            </label>
        </div>
    })
    
    console.log(genres)

    return (
        <div>
            <h1>{genreGroup}</h1>
            <button onClick={toggle}>Show</button>
            {   
                show &&
                <>
                  {checkbox}
                </> 
            }
        </div>
    )
}

export default GenreCheckboxContainer
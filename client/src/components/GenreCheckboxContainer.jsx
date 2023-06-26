import { all } from "axios";
import React from "react";
import { useState } from "react";

const GenreCheckboxContainer = (props) => {

    const [show, setShow] = useState(false)

    const { setTempCheckboxGenres, setInputs, tempCheckboxGenres, types, genreGroup, index } = props

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
    

        setTempCheckboxGenres(prevState => {
            return prevState.map((x, place) => {
                if(place === index){
                    return allGenres
                }
                else {
                    return x
                }
            })
        })

        // setInputs(prevState =>  {
        //    return {
        //        ...prevState,
        //         genre: tempCheckboxGenres.flat()
        //    } 
        // })
       
    }

    const checkbox = types.map((sound, index) => {
        const { genre } = sound

        return <div 
            key={index}
            className="checkbox--single"
        >
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

    return (
        <div className="GenreCard">
            <div className="bandHeader">
                <h1>{genreGroup}</h1>
                 <button 
                    onClick={toggle}
                    type="button"
                 >
                    Show
                    </button>
            </div>
            {   
                show &&
                <>
                    <div className="checkbox--genre--container">
                      {checkbox}
                    </div>
                </> 
            }
        </div>
    )
}

export default GenreCheckboxContainer
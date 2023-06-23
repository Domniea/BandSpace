import React from "react";
import { useState } from "react";
import GenreCheckboxContainer from "./GenreCheckboxContainer";
import test from '../utils/test'

const TestCheckBox = () => {
    const [genres, setGenres] = useState({
        sounds: []
    }
    )

    // const handleChange = (e) => {
    //     // console.log(e.target)
    //     const { value, checked } = e.target
    //     const { sounds } = genres
    //     if (checked) {
    //         setGenres({
    //             sounds: [ ...sounds, value]
    //         })
    //     }
    //     else {
    //         setGenres({
    //         sounds: sounds.filter(sound => sound !== value)
    //         })
    //     }
    //     console.log(checked)
    // }
    
    const checkbox = test.map((style, index) => {
        let sounds = Object.keys(style)
        let types = Object.values(style)
        return <GenreCheckboxContainer 
            key={index}
            genreGroup={sounds}
            types={types[0]}
            genres={genres}
            setGenres={setGenres}
            // handleChange={handleChange}

    />
        // console.log(types)
        // return <div key={index}>
        //     <h1>{sounds}</h1>
        //     {
        //         types[0].map((sound, index) => {
        //             const { genre } = sound
        //             // console.log(sound)
        //             return <div key={index}>
        //                 <label htmlFor="">
        //                     <input 
        //                         type="checkbox"
        //                         name={genre}
        //                         value={genre}
        //                         id={`checkbox ${genre}`}
        //                         onChange={handleChange}
        //                     />
        //                     {genre}
        //                 </label>
        //             </div>
        //         })
        //     }
        // </div>
    })
    
    // test.map((sound, index) => {
    //     const { genre } = sound
    //     return <div key={index}>
    //         <label htmlFor="">
    //             <input 
    //                 type="checkbox"
    //                 name={genre}
    //                 value={genre}
    //                 id={`checkbox ${genre}`}
    //                 onChange={handleChange}
    //             />
    //             {genre}
    //         </label>
    //     </div>
    // })


    return (
        <div>
            <h1>List</h1>
            {checkbox}
        </div>
    )
}

export default TestCheckBox
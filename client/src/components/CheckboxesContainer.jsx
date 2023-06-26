import React from "react"
import { useState } from "react"
import GenreCheckboxContainer from "./GenreCheckboxContainer"
import genreData from "../utils/genres1"


function CheckboxesContainer(props) {
    // const [tempGenres, setTempGenres] = useState(
    //     [
    //         [],
    //         [],
    //         [],
    //         [],
    //         [],
    //         [],
    //         [],
    //         []
    //     ]
    // )
    
    const { tempCheckboxGenres, setTempCheckboxGenres, setInputs } = props

    const checkbox = genreData.map((style, index) => {
        let sounds = Object.keys(style)
        let types = Object.values(style)
        return <GenreCheckboxContainer 
            key={index}
            genreGroup={sounds}
            types={types[0]}
            tempCheckboxGenres={tempCheckboxGenres}
            setTempCheckboxGenres={setTempCheckboxGenres}
            setInputs={setInputs}
            index={index}
        />
    })

    // console.log(tempCheckboxGenres.flat())

    return (
        <div>
            {checkbox}
        </div>
    )
}

export default CheckboxesContainer
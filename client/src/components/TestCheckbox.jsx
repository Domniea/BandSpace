import React from "react";
import { useState } from "react";
import GenreCheckboxContainer from "./GenreCheckboxContainer";
import test from '../utils/test'

const TestCheckBox = () => {
    const [genres, setGenres] = useState(
        [
            ['one'],
            ['two'],
            ['three']
        ]
    )

    const checkbox = test.map((style, index) => {
        let sounds = Object.keys(style)
        let types = Object.values(style)
        return <GenreCheckboxContainer 
            key={index}
            genreGroup={sounds}
            types={types[0]}
            genres={genres}
            setGenres={setGenres}
            index={index}
            // handleChange={handleChange}

    />

    })

    return (
        <div>
            <h1>List</h1>
            {checkbox}
        </div>
    )
}

export default TestCheckBox
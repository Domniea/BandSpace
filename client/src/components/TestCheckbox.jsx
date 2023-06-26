import React from "react";
import { useState } from "react";
import GenreCheckboxContainer from "./GenreCheckboxContainer";
import test from '../utils/genres1'

const TestCheckBox = () => {
    const [genres, setGenres] = useState(
        [
            [],
            [],
            []
        ]
    )

    const [realGenres, setRealGenres] = useState(
        {
        genres: []
        }
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
            realGenres={realGenres}
            setRealGenres={setRealGenres}
            index={index}
        />
    })
    

    const fakeSubmit = () => {
        // let genreLength = genres[0].length + genres[1].length + genres[2].length
        // const lengthCheck = (length) => {
        //     return length >= 4 ? true : false
        // }
        // console.log(lengthCheck(genreLength))

        // const genresLengths = genres.reduce((acc, value, index) => {
        //     acc += value.length
        //     return acc
        // }, 0)

        // console.log(genresLengths)

        genres.flat().length <= 3 ? console.log(true) : console.log(false)

    }

    return (
        <div>
            <h1>List</h1>
            {checkbox}
            <button 
            id="submitButton"
            onClick={fakeSubmit}
            disabled={genres.length > 3}
            >
                Submit</button>
        </div>
    )
}

export default TestCheckBox
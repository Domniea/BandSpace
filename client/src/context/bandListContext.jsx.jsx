import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const BandList = createContext()

function bandListProvider(props) {
    const [bandList, setBandList] = useState()

    useEffect(() => {
        axios.get('/api/bands')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    })

    return (
        <bandContext.Provider>
            {props.children}
        </bandContext.Provider>
    )
}
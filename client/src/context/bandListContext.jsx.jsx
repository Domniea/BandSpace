import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const BandListData = createContext()

function BandListProvider(props) {
    const [bandList, setBandList] = useState([])

    useEffect(() => {
        axios.get('/api/bands')
            .then(res => setBandList(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <BandListData.Provider value={bandList}>
            {props.children}
        </BandListData.Provider>
    )
}

export {BandListData, BandListProvider}
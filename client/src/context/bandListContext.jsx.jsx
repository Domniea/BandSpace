import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const BandListData = createContext()

function BandListProvider(props) {
    const [bandList, setBandList] = useState([])

    useEffect(() => {
        axios.get('https://bandspace-production.up.railway.app/bands')
            .then(res => setBandList(res.data))
            .catch(err => console.log(err))
    }, [])

    function postBand(inputs) {
        axios.post('https://bandspace-production.up.railway.app/bands', inputs)
            .then(res => setBandList(prevState=> {
                [
                    ...prevState,
                    res.data
                ]
            }))
            .catch(err => console.log(err))
    }

    return (
        <BandListData.Provider value={{bandList, postBand}}>
            {props.children}
        </BandListData.Provider>
    )
}

export {BandListData, BandListProvider}
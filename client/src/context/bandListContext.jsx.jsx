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
            .then(res => setBandList(prevState => {
                return [
                    ...prevState,
                    res.data
                ]
            }))
            .catch(err => console.log(err))
    }

    function editBand(bandId, updates) {
        axios.put(`https://bandspace-production.up.railway.app/bands/${bandId}`, updates)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function deleteBand(bandId) {
        axios.delete(`https://bandspace-production.up.railway.app/bands/${bandId}`)
            .then(res => setBandList(prevState => {
                return prevState.filter(act => act._id !== bandId)
            }
            
        ))
            .catch(err => console.log(err))
    }

    return (
        <BandListData.Provider value={
            {
                bandList,
                postBand,
                editBand,
                deleteBand
            }
        }>
            {props.children}
        </BandListData.Provider>
    )
}

export {BandListData, BandListProvider}
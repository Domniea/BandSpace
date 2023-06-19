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

    function postBand(inputs) {
        axios.post('/api/bands', inputs)
            .then(res => setBandList(prevState => {
                return [
                    ...prevState,
                    res.data
                ]
            }))
            .catch(err => console.log(err))
    }

    function editBand(bandId, updates) {
        axios.put(`/api/bands/${bandId}`, updates)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function deleteBand(bandId) {
        axios.delete(`/api/bands/${bandId}`)
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
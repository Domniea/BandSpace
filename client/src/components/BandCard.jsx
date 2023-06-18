import React, { useState } from 'react'

function BandCard(props) {

    const {name, facebookURL, spotifyURL, bandcampURL, genre } = props

    const [showBandDetails, setShowBandDetails] = useState(false)

    function toggleBandDetails() {
        setShowBandDetails(prevState => !prevState)
    }
    return (
        <div className='BandCard'>
            <div className='bandHeader'>
                <h1>{name}</h1>
            
                <button onClick={toggleBandDetails} >Show</button>
            </div>
                { showBandDetails &&
                    <>
                        <h2>{spotifyURL}</h2>
                        <h2>{facebookURL}</h2>
                        <h3>{genre.join(', ')}</h3>
                    
                    </>
                }

        </div>
    )
}

export default BandCard
import React, { useState } from 'react'

function BandCard(props) {

    const {name, facebookURL, spotifyURL, bandcampURL, genre, _id, deleteBand} = props

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
                        <a href={spotifyURL}>Spotify</a>
                        <br></br>
                        <a href={facebookURL}>FaceBook</a>
                        <br></br>
                        {
                            bandcampURL &&
                                <a href={bandcampURL}>Bandcamp</a>
                        }
                        <h3>{genre.join(', ')}</h3>
                        <button onClick={() => deleteBand(_id)}>Delete</button>
                    
                    </>
                }

        </div>
    )
}

export default BandCard
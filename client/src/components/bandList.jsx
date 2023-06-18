import React, { useContext} from "react";
import { BandListData } from "../context/bandListContext.jsx";
import BandCard from "./BandCard.jsx";

function BandList() {
    const bands = useContext(BandListData)

    console.log(bands)

    const band = bands.map(act => {
        return <BandCard 
            key={act._id}
            {...act}
        />
    })

    return (
        <>
            <div className="BandList">
                <h1>Band List Test</h1>
                {band}
            </div>
        </>
    )
}

export default BandList
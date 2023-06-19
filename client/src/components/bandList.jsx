import React, { useContext} from "react";
import { BandListData } from "../context/bandListContext.jsx";
import BandCard from "./BandCard.jsx";

function BandList() {
    const {bandList} = useContext(BandListData)

    const band = bandList.map(act => {
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
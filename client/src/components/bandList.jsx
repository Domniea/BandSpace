import React, { useContext} from "react";
import { BandListData } from "../context/bandListContext.jsx";
import BandCard from "./BandCard.jsx";

function BandList() {
    const {bandList, deleteBand} = useContext(BandListData)

    const band = bandList.map(act => {
        return <BandCard 
            key={act._id}
            {...act}
            deleteBand={deleteBand}
        />
    })

    return (
        <>
            <div className="BandList">
                <header>
                    <h1>Band List</h1>
                </header>
                {band}
            </div>
        </>
    )
}

export default BandList
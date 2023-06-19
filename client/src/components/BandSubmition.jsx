import React, { useContext } from "react";
import BandForm from "./BandForm";
import { BandListData } from "../context/bandListContext.jsx";

function BandSubmition() {

    const {bandList, postBand} = useContext(BandListData)

    return (
        <>
            <div className="BandSubmition">
                <header>
                    <h1>Band Submition Form</h1>
                </header>
                <BandForm 
                    submit={postBand}
                />
            </div>
        </>
    )
}

export default BandSubmition
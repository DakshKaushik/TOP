import React from "react";

function Resume({personalData,educationData}){
    return(
        <div>
            <h1>Resume</h1>
            <h2>{personalData.name}</h2>
            <h2>{personalData.email}</h2>
            <h2>{personalData.phone}</h2>
            <h2>{personalData.address}</h2>
            <br></br>
            <h2>{educationData.school}</h2>
            <h2>{educationData.degree}</h2>
        </div>
    )
}
export default Resume
import React from "react"

function HogTiles({ hog }) {

    function clickHandler() {
        alert(`More info about ${hog.name}\nSpecialty: ${hog.specialty}\nWeight: ${hog.weight}\nGreased: ${hog.greased ? "Yes" : "No"}\nHighest Medal Achieved: ${hog["highest medal achieved"]}`)
    }

    return (
        <div class="card">
            <img src={hog.image} alt="Hog :)" onClick={clickHandler}/>
            <h1>{hog.name}</h1>
        </div>
    )
}

export default HogTiles
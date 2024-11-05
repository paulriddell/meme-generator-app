import memeData from "../memesdata.js";
import { useState } from 'react'

export default function Meme() {

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        console.log("i was clicked")

        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        console.log(memesArray[randomNumber].url)


    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
            </div>
            <img src={memeImage} alt="meme" className="meme--image" />
        </main>
    )
}
import { useState, useEffect } from 'react'

export default function Meme() {

    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )
    const [allMemes, setallMemes] = useState([])

    useEffect(() => {

        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setallMemes(data.data.memes))

        return () => {
            console.log("Component unmounted")
        }
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText} />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText} />
                <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
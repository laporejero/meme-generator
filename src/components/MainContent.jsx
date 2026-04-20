import { useState, useEffect } from 'react'

export default function MainContent() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    // handles the top and bottom text
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // handles the meme image when the button is clicked
    function getMemeImage() {
        const randNum = Math.floor(Math.random() * allMemes.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: allMemes[randNum].url
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input 
                        type="text" 
                        placeholder={meme.topText}
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>
                <label>Bottom Text 
                    <input 
                        type="text"
                        placeholder={meme.bottomText}
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}
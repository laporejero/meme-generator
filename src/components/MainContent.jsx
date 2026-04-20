import { useState } from 'react'

export default function MainContent() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input 
                        type="text" 
                        placeholder={meme.topText}
                        name="topText"
                    />
                </label>
                <label>Bottom Text 
                    <input 
                        type="text"
                        placeholder={meme.bottomText}
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">One does not simply</span>
                <span className="bottom">Walk into Mordor</span>
            </div>
        </main>
    )
}
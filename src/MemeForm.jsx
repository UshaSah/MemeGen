import { useState } from 'react'


function MemeForm({ onGenerateMeme }) {
    // 2.add state management
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSumbit = (e) => {
        e.preventDefault()
        console.log('Form submitted!')
        if (imageUrl.trim()) {
            onGenerateMeme({
                topText: topText.trim(),
                bottomText: bottomText.trim(),
                imageUrl: imageUrl.trim()
            })
        }

    }
    // 1. add the function Memeform and return the basic form
    // 3. add the actual form structure
    return (
        <form onSubmit={handleSumbit} className="meme-form">
            <div className="input-group">
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                    type="url"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Enter an image URL..."
                    required
                />
            </div>
            <div className="input-group">
                <label htmlFor="topText">Top Text:</label>
                <input
                    type="text"
                    id="topText"
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                    placeholder="Enter top text..."

                />
            </div>

            <div className="input-group">
                <label htmlFor="bottomText">Bottom Text:</label>
                <input
                    type="text"
                    id="bottomText"
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                    placeholder="Enter bottom text..."
                />
            </div>

            <button type="submit" className="btn">
                Generate Meme
            </button>
        </form>
    )

}

export default MemeForm

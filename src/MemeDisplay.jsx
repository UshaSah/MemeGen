

function MemeDisplay({ meme }) {
    if (!meme || !meme.imageUrl) {
        return null
    }

    return (
        <div className="mem-display">
            <img src={meme.imageUrl} alt="Meme" />
            {meme.topText && (
                <div className="meme-text top">
                    {meme.topText}
                </div>
            )}
            {meme.bottomText && (
                <div className='meme-text bottom'>
                    {meme.bottomText}
                </div>
            )}
        </div>
    )
}

export default MemeDisplay
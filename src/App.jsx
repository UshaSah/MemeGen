import { useState } from 'react'
import MemeForm from './MemeForm'
import './App.css'


function App() {
  const [currentMeme, setCurrentMeme] = useState(null)

  const handleGenerateMeme = (memeData) => {
    console.log('App: Generating meme with:', memeData)
    setCurrentMeme(memeData)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎭 Meme Generator</h1>
        <p>Create your own memes with React!</p>
      </header>
      <main className="app-main">
        <MemeForm />
      </main>
    </div>
  )
}

export default App

import React from 'react';
import '../styles/landing.css';
import Header from './Header';
import VideoInput from "./VideoInput";
import AudioInput from "./AudioInput";

function Main() {
    return (
        <div className="landing-page">
            <Header />
            <div className="content">
                <h1 className='title'>Welcome to Public Speaking Trainer AI</h1>
            </div>
            <h2>&#127916; Upload your video to start!</h2>
            <VideoInput width={800} height={800} />
            <h2>&#9197; Start analysis!</h2>
            <h3>Speech Analysis</h3>
            <p>Please upload the audio of your presentation to start the speech analysis</p>
            <AudioInput width={800} height={800} />
            <button className="buttonSpeech">Start Analysis</button>
            <h3>Face Analysis</h3>
        </div>
    );
}

export default Main;

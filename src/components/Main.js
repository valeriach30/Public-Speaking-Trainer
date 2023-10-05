import React from 'react';
import '../styles/landing.css';
import Header from './Header';
import VideoInput from "./VideoInput";

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
        </div>
    );
}

export default Main;

import React from 'react';
import '../styles/landing.css';
import Header from './Header';
import VideoInput from "./VideoInput";
import AudioInput from "./AudioInput";

function Main() {

    const [audioFile, setAudioFile] = React.useState(null);


    const handleSpeechAnalysis = async () => {
        if (!audioFile) {
            console.error("No audio file selected");
            return;
        }

        const url = 'https://whisper-speech-to-text1.p.rapidapi.com/speech-to-text';
        const data = new FormData();
        data.append('file', audioFile); // use file uploaded from AudioInput
        const options = {
            method: 'POST',
            headers: {
                'X-RapidAPI-Key': '01989c5a92msh98e3df586790dacp1965d4jsn27d1908809f8',
                'X-RapidAPI-Host': 'whisper-speech-to-text1.p.rapidapi.com'
            },
            body: data
        };

        try {
            console.log("Sending request...");
            const response = await fetch(url, options);
            console.log("Request sent!");
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

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
            <AudioInput width={800} height={800} onFileChange={setAudioFile} />
            <button className="buttonSpeech" onClick={handleSpeechAnalysis}>Start Analysis</button>
            <h3>Face Analysis</h3>
        </div>
    );
}

export default Main;

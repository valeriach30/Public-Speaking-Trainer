import React, { useState } from 'react';
import '../styles/landing.css';

/* ------------------------ COMPONENTS ------------------------*/
import Header from './Header';
import AudioInput from "./AudioInput";

function Main() {

    const [audioFile, setAudioFile] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [loadingSentiment, setLoadingSentiment] = React.useState(false);
    const [loadingTips, setLoadingTips] = React.useState(false);
    const [text, setText] = useState(null);
    const [sentimentResults, setSentimentResults] = useState([]);
    const [tips, setTips] = useState(null);

    /* ------------------------ FIRST AI >> GET TEXT FROM AUDIO ------------------------*/
    const handleSpeechAnalysis = async () => {
        if (!audioFile) {
            console.error("No audio file selected");
            return;
        }
        setLoading(true);
        const url = 'https://whisper-speech-to-text1.p.rapidapi.com/speech-to-text';
        const data = new FormData();
        data.append('file', audioFile);

        const options = {
            method: 'POST',
            headers: {
                'X-RapidAPI-Key': '01989c5a92msh98e3df586790dacp1965d4jsn27d1908809f8',
                'X-RapidAPI-Host': 'whisper-speech-to-text1.p.rapidapi.com'
            },
            body: data
        };

        try {
            console.log("Sending request to First API...");
            const response = await fetch(url, options);
            console.log("Response received!");
            const result = await response.text();
            console.log(result);

            const jsonObject = JSON.parse(result);
            setText(jsonObject.text);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    /* ------------------------ SECOND AI >> GET SENTIMENT FROM TEXT ------------------------*/
    const handleSentimentAnalysis = async () => {
        if (text == null) {
            console.error("No text to analyze");
            return;
        }
        setLoadingSentiment(true);
        const encodedText = encodeURIComponent(text);
        const url = 'https://emoai-ai-powered-text-emotion-analyzer.p.rapidapi.com/emotion?text=' + encodedText;
        console.log(url);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '01989c5a92msh98e3df586790dacp1965d4jsn27d1908809f8',
                'X-RapidAPI-Host': 'emoai-ai-powered-text-emotion-analyzer.p.rapidapi.com'
            }
        };

        try {
            console.log("Sending request to Second API...");
            const response = await fetch(url, options);
            console.log("Response received!");
            const result = await response.json();
            setSentimentResults(result);
            console.log(result);
        } catch (error) {
            console.error('Request failed', error);
        } finally {
            setLoadingSentiment(false);
        }
    }

    /* ------------------------ RENDER SENTIMENT RESULTS ------------------------*/
    const renderSentimentResults = () => {
        const emojis = {
            neutral: "😐",
            anger: "😠",
            fear: "😨",
            disgust: "🤢",
            surprise: "😮",
            joy: "😄",
            sadness: "😢"
        };

        return sentimentResults.map((item) => (
            <div key={item.label} className="sentiment-result">
                <span>{emojis[item.label]} </span>
                <span>{(item.score * 100).toFixed(1)}% {item.label}</span>
            </div>
        ));
    };

    /* ------------------------ THIRD AI >> GET TIPS ------------------------*/
    const handleTips = async () => {
        if (!text) {
            console.error("No text to analyze");
            return;
        }
        setLoadingTips(true);
        const url = 'https://chatgpt53.p.rapidapi.com/';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '01989c5a92msh98e3df586790dacp1965d4jsn27d1908809f8',
                'X-RapidAPI-Host': 'chatgpt53.p.rapidapi.com'
            },
            // Stringify the body to ensure it's sent as JSON
            body: JSON.stringify({
                messages: [
                    {
                        role: 'user',
                        content: 'Give me tips on how to improve my speech! Here is my speech: ' + text
                    }
                ],
                temperature: 1
            })
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonResponse = await response.json();

            // Access the content from the choices array
            const tips = jsonResponse.choices[0].message.content;
            setTips(tips);
            console.log(tips);
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingTips(false);
        }

    }


    return (
        < div className="landing-page" >
            {/* ------------------------ HEADER ------------------------*/}
            < Header />

            {/* ------------------------TITLE ------------------------*/}
            < div className="content" >
                <h1 className='title'>Welcome to Public Speaking Trainer AI</h1>
            </div >

            {/* ------------------------ SPEECH ANALYSIS ------------------------*/}
            <h2>&#9197; Start analysis!</h2>
            <h3>&#128483; Speech Analysis</h3>
            <p className='textMain'>Please upload the audio of your presentation to start the speech analysis</p>

            {/* ------------------------ AUDIO INPUT ------------------------*/}
            <AudioInput width={800} height={800} onFileChange={setAudioFile} />
            <button className="buttonSpeech" onClick={handleSpeechAnalysis}>Start Text Analysis</button>
            {loading && <><p className='textMain'>Analyzing audio!</p><div className="spinner"></div></>}

            {
                text &&
                <div>
                    <p className='textMain'> We gathered the following text from your audio: </p>
                    <p className='resultText'>{text}</p>
                </div>
            }

            {/* ------------------------ TEXT ANALYSIS ------------------------*/}

            <h3>&#128221; Text Sentiment Analysis</h3>
            <p className='textMain'>Please click the button below to determine the emotions present on your audio!</p>
            <button className="buttonSpeech" onClick={handleSentimentAnalysis}>Start Text Sentiment Analysis</button>

            {/* ------------------------ TEXT SENTIMENT ANALYSIS RESULTS ------------------------*/}
            {
                loadingSentiment
                    ? <><p className='textMain'>Analyzing text!</p><div className="spinner"></div></>
                    : <div className="sentiment-analysis-results">
                        <h3>&#128214; Analysis Results</h3>
                        {renderSentimentResults()}
                    </div>
            }

            {/* ------------------------ TIPS ------------------------*/}
            <h3>💡 Get tips</h3>
            <p className='textMain'>Press the button below to get some tips on how to improve!</p>
            <button className="buttonSpeech" onClick={handleTips}>Get tips</button>
            {loadingTips && <><p className='textMain'>Getting tips!</p><div className="spinner"></div></>}

            {
                tips &&
                <div>
                    <p className='textMain'> Here are your tips: </p>
                    <p className='resultText'>{tips}</p>
                </div>
            }
        </div >
    );
}

export default Main;

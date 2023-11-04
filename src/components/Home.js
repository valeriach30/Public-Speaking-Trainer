import '../styles/landing.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="landing-page">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="info">
                        <h1>Public Speaking Trainer</h1>
                        <p>Our program empowers you to speak with confidence, captivate any audience, and leave a lasting impression. Whether you're new to public speaking or looking to refine your skills</p>
                        <button> <Link to="/main" style={{ color: 'white' }}>Start Now!</Link></button>
                    </div>
                    <div className="image">
                        <img src="https://img.freepik.com/premium-vector/speech-man-podium-illustration_111797-93.jpg" alt='Speechman' />
                    </div>
                </div>
            </div>
            <h1 className='titleF'>What we offer</h1>
            <div className='content'>
                <div className="feature1">
                    <h1>Upload your audio</h1>
                    <p>Elevate your public speaking journey with our cutting-edge feature. It's your turn to shine! Record your practice speeches, presentations, or pitches, and upload them directly to our platform. Our state-of-the-art technology will analyze your performance, providing you with invaluable feedback and insights.</p>
                    <br></br>
                    <p>🎥 Seamless Upload: Effortlessly upload your recorded audios, saving you time and hassle.</p>
                    <br></br>
                    <p>📈 Data-Driven Insights: Receive personalized feedback on your speaking skills.</p>
                </div>
                <div className="feature1">
                    <h1>Tips for Your Presentation</h1>
                    <p>Take your public speaking to the next level with our personalized Presentation Tips feature. Your delivery is key, and we're here to help you refine it. </p>
                    <br></br>
                    <p>🔍 Tailored Feedback: Get specific suggestions on how to improve your presentation skills, allowing you to adjust and polish your performance.</p>
                    <br></br>
                    <p>🗣️ Effective Communication: Master the art of conveying your message, ensuring your audience is engaged and informed.</p>
                    <br></br>
                    <p>🔒 Confidence Building: Strengthen your public speaking confidence by knowing you're delivering your content in the most impactful way.</p>
                    <br></br>
                    <p>🚀 Enhance Your Influence: Harness the power of effective speaking techniques to leave a lasting impression on your audience.</p>
                </div>
                <div className="feature1">
                    <h1>Audio analysis</h1>
                    <p>Transform your public speaking skills with our cutting-edge Audio Analysis feature. Your voice is your most powerful tool, and we're here to help you harness its full potential. </p>
                    <br></br>
                    <p>🎙️ Evaluation: Receive instant, data-driven feedback on your tone, pace, clarity, and more, ensuring you deliver your message with precision.</p>
                    <br></br>
                    <p>🔊 Sound Mastery: Learn to modulate your voice effectively, captivating your audience with every word.</p>
                    <br></br>
                    <p>🚀 Elevate Your Impact: Unleash the true potential of your voice and make a lasting impression on any audience.</p>
                </div>
            </div>
        </div >
    );
}

export default Home;

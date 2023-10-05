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
                        <button> <Link to="/main">Start Now!</Link></button>
                    </div>
                    <div className="image">
                        <img src="https://img.freepik.com/premium-vector/speech-man-podium-illustration_111797-93.jpg" alt='Speechman' />
                    </div>
                </div>
            </div>
            <h1 className='titleF'>What we offer</h1>
            <div className='content'>
                <div className="feature1">
                    <h1>Upload your video</h1>
                    <p>Elevate your public speaking journey with our cutting-edge feature. It's your turn to shine! Record your practice speeches, presentations, or pitches, and upload them directly to our platform. Our state-of-the-art technology will analyze your performance, providing you with invaluable feedback and insights.</p>
                    <br></br>
                    <p>🎥 Seamless Upload: Effortlessly upload your recorded videos, saving you time and hassle.</p>
                    <br></br>
                    <p>📈 Data-Driven Insights: Receive personalized feedback on your pacing, tone, body language, and more, empowering you to refine your speaking skills.</p>
                </div>
                <div className="feature1">
                    <h1>Analysis of facial expressions</h1>
                    <p>Experience a revolutionary enhancement to your public speaking journey with our Facial Expression Analysis feature. Your face tells a story, and we're here to help you perfect it. </p>
                    <br></br>
                    <p>🔍 Feedback: Receive instant feedback on your facial expressions, allowing you to adapt and enhance your delivery on the fly.</p>
                    <br></br>
                    <p>😀 Emotion Mastery: Learn to convey emotions effectively, ensuring your audience connects deeply with your message.</p>
                    <br></br>
                    <p>🔒 Confidence Boost: Gain confidence in your ability to communicate authentically, knowing your facial expressions are perfectly aligned with your words.</p>
                    <br></br>
                    <p>🚀 Elevate Your Impact: Unleash the full power of non-verbal communication and become an unforgettable speaker.</p>
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
        </div>
    );
}

export default Home;

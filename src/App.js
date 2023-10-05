import logo from './logo.svg';
import './styles/App.css';
import './styles/landing.css';

function App() {
  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <a href="#" className="logo">Speech <b>Crafters</b></a>
          <ul className="links">
            <li>Home</li>
            <li>Practice</li>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>Public Speaking Trainer</h1>
            <p>Our program empowers you to speak with confidence, captivate any audience, and leave a lasting impression. Whether you're new to public speaking or looking to refine your skills</p>
            <button>Start Now!</button>
          </div>
          <div className="image">
            <img src="https://img.freepik.com/premium-vector/speech-man-podium-illustration_111797-93.jpg" alt="Description of the image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

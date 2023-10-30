import React from "react";
import '../styles/video.css';

export default function VideoInput(props) {
    const [youtubeLink, setYoutubeLink] = React.useState('');
    const [videoId, setVideoId] = React.useState(null);

    const handleLinkChange = (event) => {
        setYoutubeLink(event.target.value);
        // Extract YouTube video ID
        const match = event.target.value.match(/v=([\w-]+)/);
        if (match && match[1]) {
            setVideoId(match[1]);
        }
    };
    return (
        <div className="VideoInput">
            <p className="text">Please upload your presentation to youtube and paste the link down below!</p>
            <input
                className="videoInput_Text"
                type="text"
                placeholder="Copy and paste your presentation video link here"
                value={youtubeLink}
                onChange={handleLinkChange}
            />
            {videoId && (
                <iframe
                    className="VideoInput_video"
                    width={props.width}
                    height={props.height}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
}

import React from "react";
import '../styles/audio.css';

export default function Audio(props) {
    const { width, height } = props;

    const inputRef = React.useRef();

    const [source, setSource] = React.useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        props.onFileChange(file); // Aquí se usa la función pasada como prop
        const url = URL.createObjectURL(file);
        setSource(url);
    };


    const handleChoose = (event) => {
        inputRef.current.click();
    };

    return (
        <div className="VideoInput">
            <input
                ref={inputRef}
                className="VideoInput_input"
                type="file"
                onChange={handleFileChange}
                accept=".mov,.mp4,.avi,.mp3,.wav"
            />
            {!source && <button onClick={handleChoose}>Choose</button>}
            {source && (
                <video
                    className="VideoInput_video"
                    width={width}
                    height={height}
                    controls
                    src={source}
                />
            )}
        </div>
    );
}

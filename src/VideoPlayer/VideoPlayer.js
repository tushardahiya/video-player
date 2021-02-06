import React from "react";
import "./VideoPlayer.css";
import poster from '../assets/poster.png';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';

const VideoPlayer = () => {
    return (
        <div>
            <h1 className="heading">Try playing this video</h1>
            <video className="screen" controls poster={poster}>
            <source src="https://drive.google.com/uc?export=download&id=1LHbNM7n77t2mk5f94fjpdMh_H5pwHe_n" type='video/mp4'/>  
            <p>browser doesnt support videos</p>
            </video>
            <div className="controls">
                <button className="button" id="start">
                    <PlayArrowRoundedIcon/>
                </button>
                <button className="button" id="stop">
                    <StopRoundedIcon/>
                </button>
                <input type="range" className="progress" min="0" max="100" step="0.1"></input>
            </div>
        </div>
    )
}

export default VideoPlayer;
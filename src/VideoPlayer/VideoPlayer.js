import React , {Component} from "react";
import "./VideoPlayer.css";
import "./progress.css";
import poster from '../assets/poster.png';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';

class VideoPlayer extends Component {

    state={
        playing:false
    };

    playvideo = () => {
        this.setState({playing:true});
        this.refs.video.play();
    }

    pausevideo = () => {
        this.setState({playing:false});
        this.refs.video.pause();
    }

    stopvideo = () => {
        this.setState({playing:false});
        this.refs.video.pause();
        this.refs.video.currentTime = 0 ;
    }

    render() {

        let button = null;
        if(this.state.playing) {
            button = <PauseRoundedIcon
            style={{ color: 'yellow' }}/>
        }
        else {
            button = <PlayArrowRoundedIcon 
            style={{ color: 'green' }}/>
        }

        return (
            <div className="body">
                <h1 className="heading">Try playing this video</h1>
                <video ref="video" className="screen" poster={poster}>
                    <source src="https://drive.google.com/uc?export=download&id=1LHbNM7n77t2mk5f94fjpdMh_H5pwHe_n" type='video/mp4'/>  
                    <p>browser doesnt support videos</p>
                </video>
                <div className="controls">
                    <button 
                    className="button"
                    id="start"
                    onClick={ this.state.playing == false ? this.playvideo : this.pausevideo  }>
                       {button}
                    </button>
                    <button 
                    className="button" 
                    id="stop"
                    onClick={ this.stopvideo}  >
                        <StopRoundedIcon 
                        style={{ color: 'red' }}/>
                    </button>
                    <input 
                    type="range" 
                    className="progress"  
                    min="0" 
                    max="100" 
                    step="0.1" 
                    value="0">
                    </input>
                    <span className="timestamp">00:00</span>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;
import React , {Component} from "react";
import "./VideoPlayer.css";
import "./progress.css";
import poster from '../assets/poster.png';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';

class VideoPlayer extends Component {

    state={
        playing:false,
        currentTime:0,
        timestamp:'00:00'
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

    updateProgress = () => {
        let updatedCurrentTime =  (this.refs.video.currentTime / this.refs.video.duration )*100;
        this.setState({currentTime:updatedCurrentTime});

        //getting the mins for the timestamp
        let mins = Math.floor(this.refs.video.currentTime / 60);
        if(mins<10){
            mins = '0'+String(mins);
        }

        //getting the seconds for the timestamps
        let seconds = Math.floor(this.refs.video.currentTime % 60);
        if(seconds<10){
            seconds = '0'+String(seconds);
        }
        let updatedTimestamp = mins+':'+seconds;
        this.setState({timestamp:updatedTimestamp});
    }

    setVideoProgress = () => {
        this.refs.video.currentTime = (+this.refs.progress.value * this.refs.video.duration)/100;
    }

    render() {

        let button = null;
        if(this.state.playing) {
            button = <PauseRoundedIcon
            style={{ color: 'white' }}/>
        }
        else {
            button = <PlayArrowRoundedIcon 
            style={{ color: 'green' }}/>
        }
// https://firebasestorage.googleapis.com/v0/b/tushar-video-player.appspot.com/o/video.mp4?alt=media&token=ac8b3c35-009a-477e-8420-d198c467cd68

//https://drive.google.com/uc?export=download&id=1LHbNM7n77t2mk5f94fjpdMh_H5pwHe_n
        return (
            <div className="body">
                <h1 className="heading">Try playing this video</h1>
                <video 
                ref="video" 
                onTimeUpdate={this.updateProgress}
                onClick={ this.state.playing == false ? this.playvideo : this.pausevideo }
                className="screen" 
                poster={poster}>
                    <source src="https://firebasestorage.googleapis.com/v0/b/tushar-video-player.appspot.com/o/video.mp4?alt=media&token=ac8b3c35-009a-477e-8420-d198c467cd68" type='video/mp4'/>  
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
                    ref="progress"
                    min="0" 
                    max="100" 
                    step="0.1" 
                    onChange={this.setVideoProgress}
                    value={this.state.currentTime}>
                    </input>
                    <span className="timestamp">{this.state.timestamp}</span>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;
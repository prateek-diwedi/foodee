import React, { Component } from 'react';
import VideoCover from 'react-video-cover'
//import "../images/foodee-video.mp4"

class VideoBackground extends Component {
  state = {
      resizeNotifier: () => {},
    }
  render() {
      const videoOptions = {
        src: '/foodee-video2.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      };
      
  return (
       
        <div>
          <VideoCover
            videoOptions={videoOptions}
            remeasureOnWindowResize
            getResizeNotifier={resizeNotifier => {
              this.setState({
                resizeNotifier,
              });
            }}
          />
        </div>
      );
    }
  }
  export default VideoBackground;
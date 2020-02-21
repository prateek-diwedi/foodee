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
      // const style = {
      //   width: '150vw',
      //   height: '150vh',
      //   position: 'fixed',
      //   margin: 'auto',
      //   top: '-25vh',
      //   left: '-25vw',
      //   zIndex: -2,
      // };
  return (
        // <div style={style} >
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


import React, { Component } from 'react'
import '../App.css'


// require('tracking')
// require('tracking/build/data/face')

export default class UseCam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoSrc: null,


        }
    }



    componentDidMount(b) {
        // var tracker = new window.tracking.ObjectTracker('face')
        // tracker.setInitialScale(4)
        // tracker.setStepSize(2)
        // tracker.setEdgesDensity(0.1)

        navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia ||
            navigator.mediaDevices.webkitGetUserMedia ||
            navigator.mediaDevices.mozGetUserMedia ||
            navigator.mediaDevices.msGetUserMedia


        if (navigator.mediaDevices.getUserMedia) {

            navigator.mediaDevices.getUserMedia({ video: true })

                .then((stream) => {
                    //this.video.srcObject = stream;
                    let video = document.getElementById('myVideo')
                    video.srcObject = stream;
                    //this.setState({videoSrc:(URL.createObjectURL(stream))})


                })
                .catch(function (err) {
                    console.log(err)
                    console.log("Something went wrong!");
                });
        }

        //let video = document.getElementById('myVideo')
        let canvas = document.getElementById('canvasLayer')
        let video = document.getElementById('myVideo')
        let imageCanvas = document.getElementById('canvas')
        let context = canvas.getContext('2d')
        let context1 = imageCanvas.getContext('2d')


        //trackImageVerifyWithAws(tracker, context, context1, imageCanvas, video, this.props.a)
        // Trigger the traking event
        // window.tracking.track('#myVideo', tracker)
    }


    render() {

        return (
            <div>
                <div className="container">
                    <div className="videoLayer">
                        <video loop autoPlay width="768" height="480" id="myVideo" preload="true" type="video/webm"></video>
                    </div>
                    <div>
                        <canvas id="canvasLayer" width="643" height="480" className="canvasLayer"></canvas>
                    </div>
                </div>

                <div>


                    <canvas id="canvas" width="299" height="230" ></canvas>
                    <img id="photo" src="" alt=""></img>
                </div>

            </div>



        )
    }
}


import React, { Component } from 'react'
import trackImage from './track'
import '../App.css'


require('tracking')
require('tracking/build/data/face')
require('tracking/build/data/eye')
require('tracking/build/data/mouth')

export default class UseCam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoSrc: null,


        }
    }



    componentDidMount(b) {
        var tracker = new window.tracking.ObjectTracker(['face', 'eye', 'mouth'])
        tracker.setInitialScale(4)
        tracker.setStepSize(2)
        tracker.setEdgesDensity(1)

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
                    //this.setState({ videoSrc: (URL.createObjectURL(stream)) })


                })
                .catch(function (err) {
                    console.log(err)
                    console.log("Something went wrong!");
                });
        }

        let canvas = document.getElementById('canvasLayer')
        let video = document.getElementById('myVideo')
        let imageCanvas = document.getElementById('canvas')
        let context = canvas.getContext('2d')
        let context1 = imageCanvas.getContext('2d')



        document.getElementById('capture').addEventListener('click', function () {




            context.drawImage(video, 0, 0, 200, 200);
            //context.drawImage(video, 0, 0, 400, 300);
            var dataURL = canvas.toDataURL()
            //console.log(dataURL)







        })

        // Trigger the traking event
        window.tracking.track('#myVideo', tracker, { camera: true })


        tracker.on('track', function (event) {
            if (event.data.length === 0) {
                // No objects were detected in this frame.
                console.log("not")
            } else {
                event.data.forEach(function (rect) {
                    context.strokeStyle = '#a64ceb';
                    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                    // rect.x, rect.y, rect.height, rect.width
                    console.log("hellooo")
                    console.log(rect.x)
                });
            }

        })

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
                <div style={{ marginTop: "250px" }}>
                    <a href="#" id="capture" className="booth-capture-button">Take Photo</a>

                </div>

            </div >





        )
    }
}
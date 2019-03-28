

import React, { Component } from 'react'
import '../../App.css'

export default class UseCam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoSrc: "",


        }
    }



    componentDidMount(b) {


        navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia ||
            navigator.mediaDevices.webkitGetUserMedia ||
            navigator.mediaDevices.mozGetUserMedia ||
            navigator.mediaDevices.msGetUserMedia


        if (navigator.mediaDevices.getUserMedia) {

            navigator.mediaDevices.getUserMedia({ video: true })

                .then((stream) => {
                    let video = document.getElementById('myVideo')
                    video.srcObject = stream;
                    // this.setState({ videoSrc: video.srcObject })


                })
                .catch(function (err) {
                    console.log(err)

                });
        }

        let canvas = document.getElementById('canvasLayer')
        let video = document.getElementById('myVideo')
        let context = canvas.getContext('2d')
        document.getElementById('capture').addEventListener('click', function () {

            let imageCanvas = context.drawImage(video, 0, 0, 180, 220);
            var dataURL = canvas.toDataURL()
            //console.log(dataURL)
        })

    }

    render() {
        console.log(this.state.videoSrc)
        return (
            <div>
                <div className="container">
                    <div className="videoLayer">
                        <video loop autoPlay width="350" height="320" id="myVideo" preload="true" type="video/webm"></video>
                    </div>
                    <div>
                        <canvas id="canvasLayer" width="180" height="220" className="canvasLayer"></canvas>
                        <a href="#" id="capture" className="booth-capture-button">Take Photo</a>
                    </div>
                </div>



            </div >





        )
    }
}


import React, { Component } from 'react'
import '../../App.css'

export default class UseCam extends Component {

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

        let canvas = this.refs.canvasLayer
        let video = document.getElementById('myVideo')
        let context = canvas.getContext('2d')
        document.getElementById('capture').addEventListener('click', function () {

            context.drawImage(video, 0, 0, 90, 130);
            var image = canvas.toDataURL("image/png")
            //window.location.href = image;

        })

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="videoLayer">
                        <video loop autoPlay width="350" ref="myVideo" height="320" id="myVideo" preload="true" type="video/webm"></video>
                    </div>
                    <button class="btn btn-success" id="capture"> Take Photo</button>
                </div>
                <div>
                    <canvas ref="canvasLayer" id="canvasLayer" width="90" height="130" className="canvasLayer"></canvas>

                </div>
            </div >

        )
    }
}
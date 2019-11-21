

import React, { Component } from 'react'

class UseCam extends Component {

    componentDidMount() {
        navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia ||
            navigator.mediaDevices.webkitGetUserMedia ||
            navigator.mediaDevices.mozGetUserMedia ||
            navigator.mediaDevices.msGetUserMedia
        if (navigator.mediaDevices.getUserMedia) {

            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    let video = document.getElementById('myVideo')
                    video.srcObject = stream;
                })
                .catch(function (err) {
                    console.log(err)
                });
        }
    }
    capturePicture = () => {
        let canvas = this.refs.canvasLayer
        let video = this.refs.myVideo
        let context = canvas.getContext('2d')
        context.drawImage(video, 0, 0, 90, 130);
    }

    render() {
        return (
            <div className="web-cam">
                <div className="container">
                    <div className="videoLayer">
                        <video loop autoPlay width="350" ref="myVideo" height="320" id="myVideo" preload="true" type="video/webm"></video>
                    </div>
                    <button className="btn btn-success" id="capture" onClick={this.capturePicture}> Take Photo</button>
                </div>
                <div>
                    <canvas ref="canvasLayer" id="canvasLayer" width="90" height="130" className="canvasLayer"></canvas>

                </div>
            </div >

        )
    }
}

export default UseCam
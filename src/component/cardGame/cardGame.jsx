import React, { Component } from "react";
import Utils from '../../utility/util'
import '../../styles/cardGame.css'
import ReactDOM from 'react-dom';


class CardGame extends Component {
    state = {
        player1: [],
        player1: [],
        player1: [],
        player1: [],

    }
    componentDidMount() {


    }


    arrayOfCard = ["C1C.png", "D1D.png", "H1H.png", "S1S.png", "C2C.png", "D2D.png", "H2H.png", "S2S.png", "C3C.png", "D3D.png", "H3H.png", "S3S.png"
        , "C4C.png", "D4D.png", "H4H.png", "S4S.png", "C5C.png", "D5D.png", "H5H.png", "S5S.png", "C6C.png", "D6D.png", "H6H.png", "S6S.png",
        "C7C.png", "D7D.png", "H7H.png", "S7S.png", "C8C.png", "D8D.png", "H8H.png", "S8S.png", "C9C.png", "D9D.png", "H9H.png", "S9S.png",
        "CIC.png", "DID.png", "HIH.png", "SIS.png", "CJC.png", "DJD.png", "HJH.png", "SJS.png", "CQC.png", "DQD.png", "HQH.png", "SQS.png",
        "CRC.png", "DRD.png", "HRH.png", "SRS.png"];




    newShuffleCard = Utils.shuffleArray(this.arrayOfCard)


    // sortAndDisplayCard(array, id) {

    //     let image;

    //     array.sort();

    //     for (let i = 0; i < array.length; i++) {

    //         image = React.createElement("img", {
    //             src: require("./image/" + array[i]),

    //             style: {
    //                 width: 100,
    //                 height: 130,
    //                 marginLeft: 150
    //             }
    //         })


    //         // this.setState({ card: image })


    //         // myImg.addEventListener("mouseover", this.scaleUp);
    //         // myImg.addEventListener("mouseout", this.scaleDown);

    //     }
    // }

    loadImage = () => {

        let player1 = [];
        let player2 = [];
        let player3 = [];
        let player4 = [];

        for (let i = 0; i < this.newShuffleCard.length; i++) {
            let distCard = i % 4;
            if (distCard === 0) player1.push(this.newShuffleCard[i]);
            if (distCard === 1) player2.push(this.newShuffleCard[i]);
            if (distCard === 3) player3.push(this.newShuffleCard[i]);
            if (distCard === 3) player4.push(this.newShuffleCard[i]);
        }

        this.sortAndDisplayCard(player1, "player1");
        // this.sortAndDisplayCard(player2, "player2");
        // this.sortAndDisplayCard(player3, "player3");
        // this.sortAndDisplayCard(player4, "player4");
    };


    // scaleUp(e) {
    //     let x = e.currentTarget;
    //     x.style.transform = "scale(1.1)";
    // }

    // scaleDown(e) {
    //     let x = e.currentTarget;
    //     x.style.transform = "scale(1)";
    // }





    render() {


        console.log(this.state.value)

        return (
            <div id="card-holder">

                <div id="player1">
                    {
                        this.state.array.map((number, key) => {

                            return <img key={key} src={require('./image/' + number)} style={{ width: 100, height: 130, marginLeft: key * 14 }} />
                        })
                    }
                    <p> Player1</p>
                </div>
                <div id="player2">
                    <p> Player2</p>
                </div>
                <div id="player3">
                    <p> Player3</p>
                </div>
                <div id="player4">
                    <p> Player4</p>
                </div>
                <div id="center"></div>



            </div >
        );
    }
}

export default CardGame;
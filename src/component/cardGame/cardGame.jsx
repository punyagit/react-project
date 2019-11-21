import React, { Component } from 'react';
import '../../styles/cardGame.css';
import { loadImage, checkArray } from './cardUtil/card.js';

class CardGame extends Component {
    state = {
        arraysOfPlayer: [],
        imageSrc: '',
        holdClickedCard: [],
        error: ''

    }
    componentDidMount() {
        const arraysOfPlayer = loadImage();
        this.setState({ arraysOfPlayer })
    }

    scaleUp = (e) => {
        let x = e.currentTarget;
        x.style.transform = 'scale(1.1)';
    }

    scaleDown = (e) => {
        let x = e.currentTarget;
        x.style.transform = 'scale(1)';
    }


    onCardClick = (e) => {
        if (this.state.error !== '') this.setState({ error: '' })
        let holdClickedCard = this.state.holdClickedCard;
        let arraysOfPlayer = this.state.arraysOfPlayer
        let arrayClicked = Number(e.currentTarget.id);
        const errorMessage = `   player${arrayClicked + 1} has already thown his card`
        let value = checkArray(arraysOfPlayer, arrayClicked);
        if (value) {
            let valueToRemove = e.currentTarget.name
            const filteredItems = arraysOfPlayer[arrayClicked].filter(function (item) {
                return item !== valueToRemove
            });
            arraysOfPlayer[arrayClicked] = filteredItems;
            holdClickedCard.push(valueToRemove);
            this.setState({ holdClickedCard });
            this.setState({ arraysOfPlayer });
            if (holdClickedCard.length === 4) setTimeout(function () {
                this.setState({ holdClickedCard: [] });
            }.bind(this),
                300);
        }

        else this.setState({ error: errorMessage });

    }

    render() {

        return (
            <div id='card-holder'>
                {this.state.arraysOfPlayer.map((array, key) => {
                    return <div key={key} id={'player' + (1 + key)} >
                        {array.map((value, keys) => {
                            return (
                                <React.Fragment key={keys}>
                                    <img src={require(`./image/${value}`)} name={value} id={key}
                                        style={{ width: 100, height: 130, marginLeft: keys * 14 }}
                                        onMouseEnter={this.scaleUp} onMouseLeave={this.scaleDown}
                                        onClick={this.onCardClick} alt='card' className='card-image' />

                                </React.Fragment>
                            )
                        })}
                        <p className='player-name'>{'player' + (key + 1)}</p>
                    </div>

                })}
                <div id='center'>
                    <p className="error-display" >{this.state.error}</p>
                    {this.state.holdClickedCard.map((value, key) => {
                        return <img key={key} src={require(`./image/${value}`)} name={value} id={key}
                            style={{ width: 100, height: 130, marginLeft: (key * 64) || 30, marginTop: (key * 44) || 65 }}
                            onMouseEnter={this.scaleUp} onMouseLeave={this.scaleDown}
                            onClick={this.onCardClick} alt='card' className='card-image' />
                    })}
                </div>
            </div >
        );
    }
}

export default CardGame;

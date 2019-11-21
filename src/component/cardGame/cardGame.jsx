import React, { Component } from 'react';
import '../../styles/cardGame.css';
import loadImage from './cardUtil/card.js';

class CardGame extends Component {
    state = {
        arrays: [],
        imageSrc: '',
        arrayCard: [],
        cardCount: 0
    }
    componentDidMount() {
        const arrays = loadImage();
        this.setState({ arrays })
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
        let arrayCard = this.state.arrayCard;
        let arrays = this.state.arrays
        let arrayClicked = Number(e.currentTarget.id);
        let valueToRemove = e.currentTarget.name
        const filteredItems = arrays[arrayClicked].filter(function (item) {
            return item !== valueToRemove
        })
        arrays[arrayClicked] = filteredItems;
        arrayCard.push(valueToRemove)
        this.setState({ arrayCard })
        this.setState({ arrays })
        if (arrayCard.length === 4) setTimeout(function () {
            this.setState({ arrayCard: [] });
        }.bind(this),
            300);
    }

    render() {

        return (
            <div id='card-holder'>
                {this.state.arrays.map((array, key) => {
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
                    {this.state.arrayCard.map((value, key) => {
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

import React, { Component } from 'react';
import Fifteen from './gameOfFIfteen/fifteen';
import CreateId from './cretaeId/createId';
import CardGame from './cardGame/cardGame';


import id from '../styles/id.png';
import fifteen from '../styles/fiffteen.png';
import cardImage from '../styles/cardgame.png'

class Navigation extends Component {
    state = {
        value: true,
    }

    idClick = (value) => {
        this.setState({ value });
    }
    render() {
        return (

            <React.Fragment>
                <div className="container">
                    <div className="holder">
                        <img src={id} alt="Create Id" onClick={() => this.idClick("id")} />
                        <img src={cardImage} alt="Card Game" onClick={() => this.idClick("card")} />
                        <img src={fifteen} alt="Game of Fifteen" onClick={() => this.idClick("fifteen")} />
                        < p><a href="https://github.com/PunyaChapagain/react-project.git" target="blank">Github </a></p>
                    </div>
                    <div className="component">
                        {(() => {
                            switch (this.state.value) {
                                case "id": return <CreateId />;
                                case "fifteen": return <Fifteen />;
                                case "card": return < CardGame />;
                                default: return <CreateId />;
                            }
                        })()}

                        {/* {(this.state.value) ? <CreateId /> : <Fifteen />} */}

                    </div>
                </div>


            </React.Fragment>

        );
    }
}

export default Navigation;

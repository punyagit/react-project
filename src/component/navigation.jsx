import React, { Component } from 'react';
import Fifteen from './gameOfFIfteen/fifteen';
import CreateId from './cretaeId/createId';

import id from '../styles/id.png';
import fifteen from '../styles/fiffteen.png';
import CardGame from './cardGame/cardGame';

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
                        <img src={id} alt="Create Id" onClick={() => this.idClick(true)} />
                        <img src={fifteen} alt="Game of Fifteen" onClick={() => this.idClick(false)} />
                        < p><a href="https://github.com/PunyaChapagain/react-project.git" target="blank">Github </a></p>
                    </div>
                    <div className="component">
                        {/* {(this.state.value) ? <CreateId /> : <Fifteen />} */}
                        < CardGame />
                    </div>
                </div>


            </React.Fragment>

        );
    }
}

export default Navigation;

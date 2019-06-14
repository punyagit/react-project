import React, { Component } from 'react';
import Fifteen from './gameOfFIfteen/fifteen';
import CreateId from './cretaeId/createId'
class Navigation extends Component {
    state = {
        value: true,
    }
    render() {
        return (

            <React.Fragment>
                <div className="container">
                    <header>,m,.m,</header>
                    <div className="component">
                        {(this.state.value) ? <CreateId /> : <Fifteen />}
                    </div>
                </div>


            </React.Fragment>

        );
    }
}

export default Navigation;

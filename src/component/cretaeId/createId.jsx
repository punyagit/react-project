import React, { Component } from 'react';
import DetailForm from './form'
import ShowId from './showId'
import '../../styles/createId.css'


class CreateId extends Component {

    state = {
        detail: {
            cardNo: "",
            liscenseNo: "",
            name: "",
            unitNo: "",
            address: "",
            city: "",
            state: "",
            dateOfBirth: "",
            expiryDate: "",
        }

    }

    handleChange = e => {
        const detail = { ...this.state.detail }
        detail[e.currentTarget.name] = e.currentTarget.value
        this.setState({ detail })

    }

    render() {


        return (
            <div id="container">
                <div className="detail-fom">
                    <DetailForm value={this.state.detail} onChange={this.handleChange} />
                </div>
                <div className="deatil-view">
                    <ShowId value={this.state.detail} />
                </div>
            </div>);
    }
}

export default CreateId;
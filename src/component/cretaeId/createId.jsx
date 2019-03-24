import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
//import * as ReactBootstrap from 'react-bootstrap'
import '../../styles/createId.css'
class CreateId extends Component {
    state = {
        details: {
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
    render() {
        return (
            <div>
                <Form>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" className="form-control" autoFocus />
                    </div>

                </Form>

            </div>);
    }
}

export default CreateId;
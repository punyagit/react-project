import React from 'react';


const DetailForm = ({ onChange, value }) => {
    const { name, unitNo, address, city, postCode } = value
    return (<div>
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" className="form-control" autoFocus
                    onChange={onChange} value={name} name="name" />
            </div>
            <div className="form-group">
                <label htmlFor="unitNo">Unit No.</label>
                <input id="unitNo" type="text" className="form-control"
                    onChange={onChange} value={unitNo} name="unitNo" />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input id="address" type="text" className="form-control"
                    onChange={onChange} value={address} name="address" />
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input id="city" type="text" className="form-control"
                    onChange={onChange} value={city} name="city" />
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <select className="custom-select" id="state" name="state" onChange={onChange}>
                    <option defaultValue value=""  > Choose..</option>
                    <option>NSW</option>
                    <option>QLD</option>
                    <option>VIC</option>
                    <option>TAS</option>
                    <option>WA</option>
                    <option>SA</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="postCode">Post Code</label>
                <input id="postCode" type="text" className="form-control"
                    onChange={onChange} value={postCode} name="postCode" />
            </div>
            <div className="form-group">
                <label htmlFor="year">Expiry Date</label>
                <select className="custom-select" id="year" name="expiryDate" onChange={onChange}>
                    <option defaultValue>Choose..</option>
                    <option value="1">1 Year</option>
                    <option value="3">3 Year</option>
                    <option value="5">5 year</option>

                </select>
            </div>
            <button className="btn btn-primary">Submit</button>

        </form>

    </div>);
}

export default DetailForm;
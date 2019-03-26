import React from 'react';


const DetailForm = ({ onChange, value }) => {
    const { name, unitNo, address, city, state } = value
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
                </select>
                {/* <input id="state" type="text" className="form-control"
                    onChange={onChange} value={state} name="state" /> */}
            </div>
            <button className="btn btn-primary">Submit</button>

        </form>

    </div>);
}

export default DetailForm;
import React from 'react';


const DetailForm = ({ onChange, value, setRef }) => {
    const { name, unitNo, address, city, postCode, disable, disable1, day, year } = value


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="liscens type">Choose Liscense</label>
                    <select defaultValue="Liscense Type" className="custom-select" id="Liscense type"
                        name="liscense" onChange={onChange}>
                        <option disabled>Liscense Type</option>
                        <option>P</option>
                        <option>P2</option>
                        <option>Full</option>

                    </select>
                </div>
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
                    <select defaultValue="Choose State" className="custom-select" id="state" name="state" onChange={onChange}>
                        <option disabled>Choose State</option>
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
                    <select defaultValue="red" className="custom-select" ref={setRef}
                        id="year" name="expiryDate" onChange={onChange}>
                        <option disabled value="red" >How Many Year</option>
                        <option value="1">1 Year</option>

                        <option disabled={disable1} >2 Year</option>
                        <option disabled={disable}>5 year</option>

                    </select>
                </div>
                <label>Birthday</label>
                <div>
                    <input type="text" value={day} className="input-birthday" placeholder="Day" onChange={onChange} name="day" />
                    <input type="text" value={year} className="input-birthday" placeholder="Year" onChange={onChange} name="year" />
                    <select onChange={onChange} defaultValue="choose" name="month">
                        <option disabled value="choose">Choose Month</option>
                        {months.map((month, key) => {
                            return <option key={key}>{month}</option>
                        })}

                    </select>

                </div>
                <br />
                <button className="btn btn-primary">Take Photo</button>

            </form>

        </div>);
}

export default DetailForm;
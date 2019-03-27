import React from 'react';
import Util from '../../utility/util'

const ShowId = ({ value }) => {
    const add = {
        NSW: "New South Wales,",
        QLD: "Queensland,",
        VIC: "Victoria,",
        TAS: "Tasmania,",
        WA: "Western Australia,",
        SA: "South Australia,"
    }
    let stateName = value.state
    let newExpiryDate = Util.expiryDate(parseInt(value.expiryDate))

    let color = (value.liscenseType === "Provisional Driver Liscense") ? "#ff6666" : "yellow"


    return (

        < div id="show-id"  >


            <div className="top" style={{ backgroundColor: color }}>
                <span className="head-span" >{value.liscenseType}</span>

                <span className="top-span">{add[stateName]} Australia</span>
            </div>
            <div className="main-show">
                <div className="left-side">
                    <span className="span-your-name">{value.name}</span>
                    <span className="span-address">
                        <span>{(value.unitNo === "") ? "" : `UNIT ${value.unitNo}`}</span>
                        <span>{value.address}</span>
                        <span>{value.city} {value.state} {value.postCode}</span>

                    </span>
                    <span className="span-name1 name1">Liscence No</span>
                    <span className="span-class-no">21436579</span>
                    <span className="span-name1">Liscence Class</span>
                    <span className="span-class-no">C</span>
                </div>
                <div className="right-side" >
                    <div className="rhs-date">
                        <span className="span-name">Card Number</span>
                        <span className="span-exp-card">
                            2 045 322 117
                        </span>

                    </div>
                    <div className="photo">


                    </div>
                    <div className="rhs-date">
                        <span className="span-name">Expiry Date</span>
                        <span className="span-exp-card">
                            {(isNaN(parseInt(value.expiryDate))) ? "" : newExpiryDate}
                        </span>
                    </div>



                </div>





            </div>


        </div >);
}

export default ShowId;
import React from 'react';


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
    console.log(value.year)


    return (

        < div id="show-id" >

            <div className="top">
                <span className="head-span">Driver Liscense</span>

                <span className="top-span">{add[stateName]} Australia</span>
            </div>
            <div className="main-show">
                <div className="left-side">
                    {value.name}
                    <span className="span-address">
                        <span>{(value.unitNo === "") ? "" : `UNIT ${value.unitNo}`}</span>
                        <span>{value.address}</span>
                        <span>{value.city} {value.state} {value.postCode}</span>

                    </span>
                </div>
                <div calss="right-side">

                </div>

            </div>


        </div >);
}

export default ShowId;
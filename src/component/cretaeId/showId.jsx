import React from 'react';


const ShowId = ({ value }) => {
    const add = {
        NSW: "New South Wales",
        QLD: "Queensland",
        VIC: "Victoria",
        TAS: "Tasmania"


    }
    let stateName = value.state


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
                        <span>{value.unitNo}</span>
                        <span>{value.address}</span>
                        <span>{value.city} {value.state}</span>

                    </span>
                </div>
                <div calss="right-side">

                </div>

            </div>


        </div >);
}

export default ShowId;
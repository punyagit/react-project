import React from 'react';


const ShowId = ({ value }) => {
    const [NSW, QLD, VIC, WA] = ["New South Wales", "Queensland", "Victoria", "Western Australia"]
    let st = value.state
    console.log(NSW)
    return (
        <div id="show-id">
            <div className="top">
                <span className="head-span">Driver Liscense</span>


                <span className="top-span">{st}, Australia</span>
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


        </div>);
}

export default ShowId;
import React from 'react';


const ShowId = ({ value }) => {
    return (
        <div id="show-id">
            <div className="top">
                <span className="head-span">Driver Liscense</span>

                <span className="address-span">{value.state}, Australia</span>
            </div>
            <div class="main-show">
                <div class="left-side">
                    {value.name}
                </div>
                <div calss="right-side">
                    638982938298
                </div>

            </div>


        </div>);
}

export default ShowId;
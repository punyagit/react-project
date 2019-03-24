import React from 'react';


const ShowId = ({ value }) => {
    return (
        <div id="shoe-id">
            <div className="top">
                <p> Driver Liscense</p>
                <p>{value.state}, Australia</p>
            </div>
            <div class="main">
                <div class="left-side">
                </div>
                <div calss="right-side">
                </div>

            </div>


        </div>);
}

export default ShowId;
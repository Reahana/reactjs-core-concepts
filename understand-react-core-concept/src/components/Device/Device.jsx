import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h1>I have a Phone {props.name} </h1>
            <DeviceDetails info='my'></DeviceDetails>
        </div>
    );
};

export default Device;
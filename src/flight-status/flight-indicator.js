import React from 'react'
import Tracker from "./tracker";

const warning = {
    color: 'red',
};

const FlightIndicator = ()=> {

    return (<Tracker>
        {children => (
            <div>
                <h4 style={children  === 'Delayed' ? warning : null}>{children}</h4>
                {children  === 'Delayed' && <p>Dear Passenger we are working in a solution :)</p>}
            </div>

        )}
    </Tracker>)
}


export default FlightIndicator
import React from 'react';
import {Marker,Popup} from 'react-leaflet';

const markers = (props)=>(
    <Marker position={[31.147129, 75.341217]}>
          <Popup>
            Punjab <br /> <b>Population density is:</b> 14,974,073
          </Popup>
    </Marker>
);

export default markers;
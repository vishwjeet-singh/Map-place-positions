import React,{Component} from 'react';
import './App.module.css';
import {Map,TileLayer, Marker, Popup } from "react-leaflet";

import Markers from '../src/Components/Marker/Marker';


class App extends Component {


  render(){
    const places = {
      NewDelhi : { name: 'New Delhi' , coordinates: [[28.613939, 77.209023]] , populationdensity: '31,181,376'},
      Mumbai : { name: 'Mumbai' , coordinates: [19.075983, 72.877655] , populationdensity: '14,974,073'},
      Chennai : { name: 'Chennai' , coordinates: [13.082680, 80.270721] , populationdensity: '11,235,018'}, 
      Siddharthnagar : { name: 'SiddharthNagar' , coordinates: [28.613939, 77.209023] , populationdensity: '2,559,297'}
    }
    console.log(places.NewDelhi.coordinates);
    return (
      <Map center={[20.593683, 78.962883]}
       zoom={5} 
       scrollWheelZoom={true}
       style={{height:'100vh'}}
       >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* delhi display */}

        <Marker position={[28.613939, 77.209023]}>
          <Popup>
            New Delhi <br /> <b>Population density is:</b> 31,181,376
          </Popup>
        </Marker>
        {/* kolkata display */}

        <Marker position={[22.572645, 88.363892]}>
          <Popup>
            Kolkata <br /> <b>Population density is:</b> 14,974,073
          </Popup>
        </Marker>

        {/* chennai display */}
        <Marker position={[13.082680, 80.270721]}>
          <Popup>
            Chennai <br /> <b>Population density is:</b> 14,974,073
          </Popup>
        </Marker>
        {/* SiddharthNagar */}
        <Marker position={[27.259590, 82.802177]}>
          <Popup>
            SiddharthNagar <br /> <b>Population density is:</b> 14,974,073
          </Popup>
        </Marker>
        {/* Mumbai */}
        <Marker position={[19.075983, 72.877655]}>
          <Popup>
            Mumbai <br /> <b>Population density is:</b> 14,974,073
          </Popup>
        </Marker>
        <Markers></Markers>
      </Map>
    );
  }
}

export default App;

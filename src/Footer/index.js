import React from 'react';
import Address from './Address';
import Map from './Map';
import MapPreloader from './Map/MapPreloader';
import Contacts from './Contacts';
import Menu from './Menu';

export default ({ mapPreloader }) => (
  <div>
    <Address />
    {mapPreloader ? <MapPreloader /> : <Map /> }
    <Contacts />
    <Menu />
  </div>
);

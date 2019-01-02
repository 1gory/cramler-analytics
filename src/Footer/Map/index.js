import React from 'react';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';
import MapStyle from './MapStyle.json';
import locationIcon from './location.svg';

const Wrapper = styled.div`
  height: 370px;
`;

const Marker = styled.img`
  width: 40px;
  position: relative;
  top: -40px;
  left: -20px;
`;

const LocationIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const LocationWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 15px;
  
  @media (min-width: 765px) {
    width: auto;
    padding-right: 40px;
    right: 0;
  }
`;

const Location = styled.div`
  background: #fff;
  margin: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const Label = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: rgba(59, 59, 59, 0.5);
  font-size: 12px;
  background: #fff;
  padding-bottom: 5px;
`;

const Address = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #3b3b3b;
`;

export default () => (
  <Wrapper>
    <LocationWrapper>
      <Location>
        <LocationIcon src={locationIcon} />
        <div>
          <Label>Адресс:</Label>
          <Address>Алтуфьевское шоссе д.5, Москва</Address>
        </div>
      </Location>
    </LocationWrapper>
    <GoogleMap
      bootstrapURLKeys={{
        key: 'AIzaSyDtghT2dehFPUOPIn1JECSjwLBY0qW8-bk',
        language: 'ru',
      }}
      defaultCenter={{ lat: 55.850664, lng: 37.582478 }}
      defaultZoom={14}
      options={{
        styles: MapStyle,
        scrollwheel: false,
      }}
    >
      <div lat={55.850664} lng={37.582478}>
        <Marker src={locationIcon} />
      </div>
    </GoogleMap>
  </Wrapper>
);

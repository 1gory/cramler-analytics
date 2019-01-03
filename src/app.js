import 'babel-polyfill';
import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header';
import Hero from './Hero';
import Reasons from './Reasons';
import DirectionsHeader from './DirectionsHeader';
import Directions from './Directions';
import Form from './Form';
import Care from './Care';
import Support from './Support';
import Payment from './Payment';
import Checklist from './Checklist';
import About from './About';
import Footer from './Footer';
import OrderPopUp from './OrderPopUp';

const Wrapper = styled.div`
  
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapPreloader: true,
    };

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
  }

  handleWaypointEnter() {
    this.setState({
      mapPreloader: false,
    });
  }

  render() {
    return <Wrapper>
      <OrderPopUp />
      <Header />
      <Hero />
      <Reasons />
      <DirectionsHeader />
      <Directions />
      <Form />
      <Care />
      <Support />
      <Payment />
      <Checklist />
      <About handleScroll={this.handleWaypointEnter} />
      <Footer mapPreloader={this.state.mapPreloader} />
    </Wrapper>
  }
};
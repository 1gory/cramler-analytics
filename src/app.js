import 'babel-polyfill';
import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header';
import Hero from './Hero';
// import Reasons from './Reasons';
// import DirectionsHeader from './DirectionsHeader';
// import Directions from './Directions';
// import Form from './Form';
// import Care from './Care';
// import Support from './Support';
// import Payment from './Payment';
// import Checklist from './Checklist';
// import About from './About';
// import Footer from './Footer';
import OrderPopUp from './OrderPopUp';
import PopUpType from './OrderPopUp/Type';

const Wrapper = styled.div`
  
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popUptype: 'order',
      mapPreloader: true,
      isOpened: false,
    };

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handlechangePopUp = this.handlechangePopUp.bind(this);
  }

  handleWaypointEnter() {
    this.setState({
      mapPreloader: false,
    });
  }

  handleClose(){
    this.setState({
      isOpened: false,
    });
  }

  handleOpen(){
    this.setState({
      isOpened: true,
    });
  }

  handlechangePopUp(type){
    this.setState({
      popUptype: type,
    });
  }

  render() {
    return <Wrapper>
      <OrderPopUp type={PopUpType[this.state.popUptype]} isOpened={this.state.isOpened} handleClose={this.handleClose} />
      <Header />
      <Hero />
      {/*<Reasons />*/}
      {/*<DirectionsHeader />*/}
      {/*<Directions />*/}
      {/*<Form handlechangePopUp={this.handlechangePopUp} handleOpen={this.handleOpen} />*/}
      {/*<Care />*/}
      {/*<Support />*/}
      {/*<Payment />*/}
      {/*<Checklist handlechangePopUp={this.handlechangePopUp} handleOpen={this.handleOpen} />*/}
      {/*<About handleScroll={this.handleWaypointEnter} />*/}
      {/*<Footer mapPreloader={this.state.mapPreloader} />*/}
    </Wrapper>
  }
};

import React, {Component} from 'react';
import styled from 'styled-components';
import H3 from '../Elements/H3';

const SectionWrapper = styled.div`
  background-color: ${({background}) => (background ? background : 'gray')};
  padding: 50px 20px;
`;

const SectionBlock = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const SectionHeader = styled(H3)`
  text-align: center;
  margin: 26px 0;
`;

const DetailsButton = styled.span`
  color: garkgray;
  text-decoration: underline;
  text-align: center;
  display: block;
  cursor: pointer;
`;

const Ul = styled.ul`
  max-width: 530px;
`;

const Li = styled.li`
  list-style-type: circle;
  padding-bottom: 10px;
`;

const ProblemsText = styled.span`
  font-size: 14px;
  margin-left: 20px;
`;

const Img = styled.img`
  width: 100px;
  display: block;
  
  @media(max-width: 768px) {
    display: none;
  }
`;

const MinImg = styled.img`
  width: 40px;
  display: none;
  
  @media(max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Text = styled.p`
  padding: 0 20px;
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened
    }));
  }

  render() {
    return <SectionWrapper background={this.props.background}>
      <SectionBlock>
        <MinImg src={this.props.img}/>
        <SectionHeader>
          {this.props.sectionHeader}
        </SectionHeader>
        <ProblemsText>Проблемы:</ProblemsText>
        <ImgWrapper>
          <div>
            <Ul>
              {this.props.problems.map((problem, i) => (
                <Li key={i}>
                  {problem}
                </Li>)
              )}
            </Ul>
            <Text>
              {this.state.isOpened && this.props.text}
            </Text>
            <DetailsButton onClick={this.handleClick}>{this.state.isOpened ? 'скрыть' : 'подробнее'}</DetailsButton>
          </div>
          <Img src={this.props.img}/>
        </ImgWrapper>
      </SectionBlock>
    </SectionWrapper>;
  }
};
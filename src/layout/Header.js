import React from 'react'

import styled from 'styled-components';
import { rgba } from 'polished';

import { Heading1, Heading2, Heading3 } from '../base/typography';
import { colors } from '../abstracts/Variables';

import hero from '../img/hero.jpg';
import logoGraphql from '../img/logo/logo-graphql.png';
import logoMongo from '../img/logo/logo-mongo.png';
import logoNode from '../img/logo/logo-node.png';
import logoReact from '../img/logo/logo-react.png';

const Hero = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  //hardcoded background image, without using polished library
  /* background-image: linear-gradient(to left bottom, 
                    rgba(0, 78, 146, .8), 
                    rgba(0, 4, 40, .8)),
                    url(${hero}); */
  background-image: linear-gradient(to left bottom, 
                    ${rgba(colors.colorPrimary, .9)}, ${rgba(colors.colorPrimaryDark, .9)}),
                    url(${hero});
  background-size: cover;
  background-position: top;

  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80vh);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80vh);
`

const LeftHeader = styled.header`
  grid-column: 2 / 7;
  grid-row: 2 / 3;
  z-index: 5;
  padding: 6rem;
  padding-bottom: 9rem;

  display: grid;
  justify-items: start;
  align-items: center;
  grid-template-rows: 1fr min-content min-content 1.5fr;
  grid-template-columns: minmax(min-content, max-content);
`

const RightHeader = styled.header`
  grid-column: 7 / 10;
  grid-row: 2 / 3;
  z-index: 5;
  padding: 9rem 2rem;

  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-row-gap: 0;
`

const LogoGrid = styled.div`
  display: grid;
  align-items: center;
  grid-row-gap: 5vh;
`

const LogoImg = styled.img`
  align-self: center;
  display: block;
  max-height: 4rem;
  max-width: 100%;
  filter: brightness(110%);
`

const Header = () => {
  return (
    <React.Fragment>
      <Hero />

      <LeftHeader>
        placeholder for icon
        <Heading1>demiglace0505</Heading1>
        <Heading2>Serialize yourself.</Heading2>
        button placeholder
      </LeftHeader>

      <RightHeader>
        <Heading3>Full Stack Web Developer</Heading3>
        <LogoGrid>
          <LogoImg src={logoReact} alt="Reactjs logo" />
          <LogoImg src={logoNode} alt="Nodejs logo" />
          <LogoImg src={logoMongo} alt="Mongodb logo" />
          <LogoImg src={logoGraphql} alt="GraphQL logo" />
        </LogoGrid>
      </RightHeader>

    </React.Fragment>
  )
}

export default Header;
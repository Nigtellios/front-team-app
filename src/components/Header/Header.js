import React from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';
import rem from '../../services/styles/PxToRem';

function MainHeader() {
  return (
    <Header>
      <HeaderWrapper>
        <LogoBox>
          <Logo src={logo}/>
        </LogoBox>
        <NavWrapper>
          <p>There Would Be Nav</p>
        </NavWrapper>
      </HeaderWrapper>
    </Header>
  );
}

const Header = styled.header`
  position: sticky;
  background: transparent;
  margin: 0;
  padding: ${ rem( 16 ) } 10vw;
`;

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  border: ${ rem(1) } solid red;
`;

const LogoBox = styled.div`
  height: 0;
  position: relative;
  padding-top: calc( ${ rem(200) } * ( 9/16 ));
  padding-right: calc( ${ rem(200) } * ( 1 ));
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: logo-spin infinite 20s linear;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const NavWrapper = styled.div`
  display: block;
`;

export default MainHeader;
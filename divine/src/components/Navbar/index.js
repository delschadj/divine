import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        
        <Bars />
        <NavMenu>
          <NavLink to='/explore' activeStyle>
            Explore
          </NavLink>
          <NavLink to='/ask' activeStyle>
            Ask
          </NavLink>
          <NavLink to='/connect' activeStyle>
            Connect
          </NavLink>
          <NavLink to='/account' activeStyle>
            Account
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/account'>Later Button</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
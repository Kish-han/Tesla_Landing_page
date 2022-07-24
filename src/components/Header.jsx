import React, { useState } from 'react'
import styled from 'styled-components'
import { Close } from '@material-ui/icons'
const Header = () => {
  
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg" alt="" />
      </Logo>
      <Menu>
        <p>Model S</p>
        <p>Model Y</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Solar Roof</p>
      </Menu>
      <RightMenu>
        <p onClick={()=>setBurgerStatus(true)} >Menu</p>
        <p>Shop</p>
        <p>Account</p>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomClose>
          <Close onClick={()=>setBurgerStatus(false)}  className='icon'/>
        </CustomClose>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Test Drive</li>
        <li>Insurance</li>
        <li>Cybertruck</li>
        <li>Roadster</li>
        <li>Semi</li>
        <li>Charging</li>
        <li>Powewall</li>
        <li>Commercial Energy</li>
        <li>Utilities</li>
        <li>Find Us</li>
        <li>Support</li>
        <li>Investor Relations</li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  z-index: 100;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Menu = styled.div`
  display : flex ;
  align-items: center;
  flex: 1;
  justify-content: center;

  p{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 10px;
  }
 
  @media (max-width: 950px) {
    display : none ;
  } 
`

const RightMenu = styled.div`
  display: flex;
  width: 18vw;
  align-items: center;
  transition: all 0.2s ease-in-out;
  p{
    cursor: pointer;
    margin-right: 10px;
    margin-left: 10px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: 10px;
    &:hover{
      background-color: #dad9d9;
      transition: all 0.5s ease-in-out;
    }
  }
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ;
  li{
    padding: 10px;
    border-radius: 10px;
    font-weight: 500;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    cursor: pointer;
    &:hover{
      background-color: #dad9d9;
      transition: all 0.5s ease-in-out;
    }
  }
`
const CustomClose = styled.div`
  display: flex;
  justify-content: flex-end;
  .icon{
    cursor: pointer;
    height: 30px;
    width: auto;
    border-radius: 20px;
    margin-bottom: 8px;
    &:hover{
      background-color: #dad9d9;
      transition: all 0.5s ease-in-out;
    }
  }
  
`
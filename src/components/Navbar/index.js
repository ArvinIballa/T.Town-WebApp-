import React, {useState} from 'react';
import { Nav, NavbarContainer, HomeTitle, Home, HomeDiv, TitleIcon, RightMenu, 
  TipIconDiv, TipIcon, Tip, TopTipDiv,
  AddressDiv, AddressText, AddressCircle, AddressHide, 
  TokenContainer, TokensDiv, TokensText, TokensAddIcon, TokensIcon,
} from './NavbarElements';
import {IMAGES} from '../../assets'
import { addThousandsSeparator } from '../global_vars';

const Navbar = () => {

  const address = '0x1234154564564564asdasdasdasd8910';
  const tokens = 500000;
  const navTips = [
    {id: 1, tipTitle:"SQUAWK", tip: "is a token used to buy ingame items in Treasure Town."}, // token tip
  ]

  const [toolTip, setToolTip] = useState(null);
  const openTooltip = (tip) => {
    setToolTip(tip)
  }

  const closeTooltip = () => {setToolTip(null)}

  return (
    <Nav>
      <NavbarContainer>
        {/* LEFT SIDE */}
        <HomeDiv>
          <Home to="/">
            <TitleIcon src={IMAGES.treasure_icon} alt="Treasure-Town"/>
            <HomeTitle>Treasure Town</HomeTitle>
          </Home>
        </HomeDiv>
        {/* RIGHT SIDE */}
        <RightMenu>

          <TokenContainer>
            <TokensDiv>
              <TokensIcon src={IMAGES.squawk_icon}/>
              <TokensText>{ tokens > 999999 ? "999,999+" : addThousandsSeparator(tokens, ',')}</TokensText>
              <TokensAddIcon/>
            </TokensDiv>
            <TipIconDiv>
              <TipIcon onMouseEnter={() => openTooltip(0)} onMouseLeave={closeTooltip}/>
              { toolTip === 0 ?
              <Tip>
                <TopTipDiv>
                  <TokensIcon src={IMAGES.squawk_icon}/>{navTips[0].tipTitle}
                </TopTipDiv> {navTips[0].tip}
              </Tip>
              :
              null
              }
            </TipIconDiv>
          </TokenContainer>

          <AddressDiv>
            <AddressCircle color={0}/>
            {address ?
            <AddressText>{address ? address.slice(0, 6) +'...' + address.slice(-4) : ''}</AddressText>
            :
            <AddressHide/>
            }
          </AddressDiv>
        </RightMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
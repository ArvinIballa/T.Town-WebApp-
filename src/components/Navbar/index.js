import React, {useState, useEffect, useRef} from 'react';
import { Nav, NavbarContainer, HomeTitle, Home, HomeDiv, TitleIcon, RightMenu, 
  TipIconDiv, TipIcon, Tip, TopTipDiv,
  AddressDiv, AddressText, AddressCircle, AddressHide, 
  TokenContainer, TokensDiv, TokensText, TokensAddIcon, TokensIcon,
  DropMenu, DropItem, DropText, DropCheckIcon, AddressDivWrapper
} from './NavbarElements';
import {IMAGES} from '../../assets'
import { addThousandsSeparator, addDelay } from '../global_functions';
import { navTips } from '../global_vars';

const Navbar = () => {
  const ref = useRef(null);

  // ADDRESS ==========================================================
  const address = '0x1234154564564564asdasdasdasd8910';
  const addressDropList = [
    {id: 1, title: "Copy Address", title2: "Copied"},
    {id: 2, title: "Disconnect Wallet"},
  ]
  const [addressDropID, setDropAddressID] = useState(0);
  const [dropDownAddress, setDropDownAddress] = useState(false);
  const showDropDownAddress = () => {setDropAddressID(0); setDropDownAddress(!dropDownAddress)};
  const dropDownAddressFunctions = (drop_id) => {
    if (drop_id === 1) {
      setDropAddressID(1);
      navigator.clipboard.writeText(address);
      addDelay(() => {
        setDropAddressID(0);
      }, 1000 );
    }
    if (drop_id === 2) {
      setDropAddressID(2);
      setDropDownAddress(false);
    }
  }

  // TOKEN =============================================================
  const tokens = 500000;

  // TOOL TIP ==========================================================
  const [toolTip, setToolTip] = useState(null);
  const openTooltip = (tip) => {
    setToolTip(tip)
  }
  const closeTooltip = () => {setToolTip(null)}

  // USE EFFECT ========================================================
  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (dropDownAddress && ref.current && !ref.current.contains(e.target)) {
        setDropDownAddress(false);
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [dropDownAddress])

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

          <AddressDiv ref={ref}>
            <AddressDivWrapper onClick={showDropDownAddress}>
              <AddressCircle color={address ? 0 : 1}/>
              {address ?
                <AddressText>{address ? address.slice(0, 6) +'...' + address.slice(-4) : ''}</AddressText>
                :
                <AddressHide/>
              }
            </AddressDivWrapper>

              { dropDownAddress === true ?
                <DropMenu>
                  { addressDropList.map(data =>
                    <DropItem key={data.id} color={data.id === 1 && addressDropID === 1 ? 1 : 0} onClick={()=>dropDownAddressFunctions(data.id)}>
                      { data.id === 1 && addressDropID === 1 ?
                        <>
                        <DropText>{data.title2}</DropText><DropCheckIcon/>
                        </>
                        :
                        <DropText>{data.title}</DropText>
                      }
                    </DropItem>
                    )
                  }
                </DropMenu>
              : null
              }
          </AddressDiv>
        </RightMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
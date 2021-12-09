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

  // check width
  const [width, setWidth] = useState(window.innerWidth);
  const updateWindow = () => {
    setWidth(window.innerWidth)
  }

  // Logo Link in Games ==========================================================
  const logoReturnLink = () => {
    switch (window.location.pathname) {
      case '/prequel/kraken-slayer/play': return '/prequel/kraken-slayer';
      case '/prequel/galleon-race/play': return '/prequel/galleon-race';
      default: return '/';
    }
  }
  const logoText = () => {
    switch (window.location.pathname) {
      case '/prequel/kraken-slayer/play': return 'Kraken Slayer';
      case '/prequel/galleon-race/play': return 'Galleon Race';
      default: return 'Treasure Town';
    }
  }

  // ADDRESS =====================================================================
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
  const squawk_token = 500000;
  const ust_token = 100000;

  const tokens = [
    {id: 1, icon: IMAGES.ust_icon, token: ust_token},
    {id: 2, icon: IMAGES.squawk_icon, token: squawk_token},
  ]

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
    document.addEventListener("mousedown", checkIfClickedOutside);

    updateWindow();
    window.addEventListener("resize", updateWindow);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
      window.removeEventListener("resize", updateWindow);
    }
  }, [dropDownAddress])

  return (
    
    <Nav>
      <NavbarContainer>
        {/* LEFT SIDE */}
        <HomeDiv>
          <Home to={logoReturnLink()}>
            <TitleIcon src={IMAGES.treasure_icon} alt="Treasure-Town"/>
            { width < 660 ? null :
            <HomeTitle>{logoText()}</HomeTitle>
            }
          </Home>
        </HomeDiv>
        {/* RIGHT SIDE */}
        <RightMenu>

          { tokens.map((data,index) =>
            <TokenContainer key={data.id}>
              <TokensDiv>
                <TokensIcon src={data.icon}/>
                <TokensText>{ data.token > 999999 ? "999,999+" : addThousandsSeparator(data.token, ',')}</TokensText>
                <TokensAddIcon/>
              </TokensDiv>
              <TipIconDiv>
                <TipIcon onMouseEnter={() => openTooltip(index)} onMouseLeave={closeTooltip}/>
                { toolTip === index ?
                <Tip>
                  <TopTipDiv>
                    <TokensIcon src={data.icon}/>{navTips[index].tipTitle}
                  </TopTipDiv> {navTips[index].tip}
                </Tip>
                :
                null
                }
              </TipIconDiv>
            </TokenContainer>
          )
          }

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
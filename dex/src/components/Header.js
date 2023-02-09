import React from 'react'
import Logo from "../moralis-logo.svg";
import Eth from "../eth.svg";

function Header() {
  return (
    <div>
      <header>
        <div className="leftH">
          <img src={Logo} alt="logo" className="logo" />
          <div className="headerItem">Swap</div>
          <div className="headerItem">Tokens</div>
        </div>
        <div className='rightH'>
        <div className="headerItem">Swap</div>
        <img src={Eth} alt="logo" className="logo" />
          

        </div>
      </header>
    </div>
  )
}

export default Header
import React from 'react';
import './Header.css';
import logo from './components/images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src={logo} alt=''/>
            <div className='header__search'>
                {/* Search Icon */}
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" />
            </div>
        </div>
        <div className='header__right'>
          stoped at 34:00
        </div>
    </div>
    
  )
}

export default Header
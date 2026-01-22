import React from 'react'
import {navItems} from '../../constants/data'

const Header = () => {
  return (
    <div>
        <ul>
            {navItems.map((item, index) => (
                <li key={index}>{item.label}</li>
            ))}
        </ul>
    </div>
  )
}

export default Header
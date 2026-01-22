import React from 'react'
import {navItems, authLink} from '../../constants/data'
import { Link } from 'react-router-dom'
import "./header.css"
import ModeCtrl from './ModeCtrl'

const Header = () => {
  return (
    <nav className='sticky top-0 z-50 border-b border-neutral-700/80 backdrop-blur-lg'>
      <div className='container relative'>
        <div className='nav-inside-wrapper flex justify-center items-center'>
          <div className='logo-wrapper flex items-center gap-2'>
            <div className='logo w-10 h-10 rounded-full border border-neutral-700/80 flex items-center justify-center'>
              <div className='round-dot w-8 h-8 rounded-full bg-indigo-800'></div>
            </div>
            <span className='logo-text text-lg'>AceDot.Dev</span>
          </div>
          <ul className='nav-wrapper hidden lg:flex gap-3'>
            {
            navItems.map((item, index) => (
              <li key={index}>
                {/* 리액트에서는 a 태그를 사용하지 안혹, Link 컴포넌트를 사용한다.    경로를 href 대신 to 속성으로 지정한다. */}
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className='info-wrapper hidden lg:flex items-center gap-2'>
            {
              authLink.map((item, index) => (
                <Link key={index}
                to={item.to}
                className={`py-2 px-3 runded-md text-neutral-200 text-xs ${index === 1 ? "bg-gradient-to-r from-indigo-500 to-indigo-800 border-0 light:text-neutral-200" : "border border-neutral-700/80 light: text-neutral-950 dark:text-neutral-200"}`}
                >{item.label}</Link>
              ))
            }
            <ModeCtrl />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return <header>
<NavLink to='./home'>Home</NavLink>
<NavLink to='./about'>About</NavLink>
<NavLink to='./pokemongallery'>Choose your Poke</NavLink>
<h1 className='TitleFont'> Who's that pokemon? </h1>
</header>
}

export default Header
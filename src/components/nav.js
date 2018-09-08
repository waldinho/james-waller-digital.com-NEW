import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import { getNav } from '../JSON/nav';

class Nav extends Component {

    render() {
        const nav = getNav()
        const navItems = nav.map((item) => { return ( <NavLink to={item.url} className="item" activeClassName="active" key={item.id}><p>{item.title}</p></NavLink>)})

    return (
        <div className='nav'>
            {navItems}
        </div>
    )}
}

export default Nav;

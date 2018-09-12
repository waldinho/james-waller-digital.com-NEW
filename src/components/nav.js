import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import { getNav } from '../JSON/nav';

class Nav extends Component {

    render() {
        const nav = getNav()
        const navItems = nav.map((item) => { return ( <NavLink exact to={item.url} className="item" activeClassName="active" key={item.id}><p>{item.title}</p></NavLink>)})

    return (
        <div className='nav'>
            {/* <NavLink to="/" className="item" activeClassName="active" key="1"><p>Homepage</p></NavLink> */}
            {navItems}
        </div>
    )}
}

export default Nav;

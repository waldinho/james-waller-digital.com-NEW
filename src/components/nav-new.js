import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { getNav } from '../JSON/nav';

class Nav extends Component {

    render() {
        const nav = getNav()
        const navItems = nav.map((item) => { return ( <Link to={item.url}><li key={item.id}>{item.title}</li></Link>)})

    return (
        <div className='nav'>
            <div className='burger-bg'>
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    )}
}

export default Nav;

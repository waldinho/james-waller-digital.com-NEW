import React, { Component } from 'react';
import { Link } from 'react-router';

import { getNav } from '../JSON/nav';

class Nav extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const nav = getNav()
        const navItems = nav.map((item) => { return ( <Link to={itme.url}><li key={item.id}>{item.title}</li></Link>)})

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

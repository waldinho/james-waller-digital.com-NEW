import React, { Component } from 'react';
import { getNav } from '../JSON/nav';

class Nav extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const nav = getNav()
        const navItems = nav.map((item) => { return ( <li key={item.id}>{item.title}</li>)})

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
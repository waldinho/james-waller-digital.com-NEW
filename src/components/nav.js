import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { getNav } from '../JSON/nav';

class Nav extends Component {

    render() {
        const nav = getNav()
        const navItems = nav.map((item) => { return ( <Link to={item.url} className="item" activeClassName="active"><p key={item.id}>{item.title}</p></Link>)})

    return (
        <div className='nav'>
            {navItems}
        </div>
    )}
}

export default Nav;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { getSocial } from '../JSON/social';

class Social extends Component {

    render() {
        const social = getSocial()
        const socialItems = social.map((item) => { return ( <Link to={item.url} target='_blank'><div className={"item--" + item.id} key={item.id}></div></Link>)})

    return (
        <div className='social'>
            {socialItems}
        </div>
    )}
}

export default Social;

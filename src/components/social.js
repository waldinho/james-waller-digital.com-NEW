import React, { Component } from 'react';

import { getSocial } from '../JSON/social';

class Social extends Component {

    render() {
        const social = getSocial()
        const socialItems = social.map((item) => { return ( <a href={item.url} target='_blank'><div className={"item--" + item.id} key={item.id}></div></a>)})

    return (
        <div className='social'>
            {socialItems}
        </div>
    )}
}

export default Social;

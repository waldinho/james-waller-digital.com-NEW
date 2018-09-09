import React, { Component } from 'react';
import Page from '../components/page.js';

import { getAbout } from '../JSON/about';

class About extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const about = getAbout()
        const title = about[0].title 
        const aboutText = about[0].paragraph.map((item) => { return ( <p key={item.id}>{item.text}</p> )})

    return (
        <div className='about'>
            <Page 
            title={title}
            text={aboutText}
            />
        </div>
    )}
}

export default About;

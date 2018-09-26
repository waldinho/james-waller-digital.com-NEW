import React, { Component } from 'react';
import Grid from '../components/grid.js';

import { getServices } from '../JSON/services';

class Services extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const services = getServices()
        const title = services[0].title 
        const columns = services[0].service.length
        const servicesText = services[0].service.map((item) => { 
            return ( 
                <div className={'item columns--' + columns + ' service--' + item.id} key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                </div>
            )
        })

    return (
        <div className='services'>
            <Grid 
            title={title}
            text={servicesText}
            />
        </div>
    )}
}

export default Services;

import React, { Component } from 'react';
import Grid from '../components/grid.js';

import { getPortfolio } from '../JSON/portfolio';

class Portfolio extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const portfolio = getPortfolio()
        const title = portfolio[0].title 
        const columns = portfolio[0].companies.length / 3
        const portfolioText = portfolio[0].companies.map((item) => { 
            return ( 
                <div className={'columns portfolio__' + item.id} key={item.id}>
                    <h2>{item.title}</h2>
                    {/* <p>{item.text}</p> */}
                </div> 
            )
        })

    return (
        <div className='portfolio'>
            <Grid 
            title={title}
            text={portfolioText}
            />
        </div>
    )}
}

export default Portfolio;

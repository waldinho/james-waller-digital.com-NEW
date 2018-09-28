import React, { Component } from 'react';
import Grid from '../components/grid.js';

import { getPortfolio } from '../JSON/portfolio';

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: true,
            isActive: true,
            isRest: true,
        }
        this.toggleHidden = this.toggleHidden.bind(this)
    }

    toggleHidden (e) {

        const {
            isHidden,
            isActive,
            isRest,
            currentTarget
        } = this.state

        this.setState({
            isHidden: !isHidden,
            isActive: !isActive,
            isRest: !isRest,
            currentTarget: e.target.id
        })

    }

    render(e) {

        const {
            isHidden,
            isActive,
            isRest,
            currentTarget
        } = this.state

        console.log("currentTarget: ", currentTarget)
        
        const clickedElement = 'show--' + currentTarget
        const hiddenElement = 'hide--' + currentTarget
        const hideRest = 'hide'
        const portfolio = getPortfolio()
        const title = portfolio[0].title 
        const columns = portfolio[0].companies.length / 3
        const portfolioText = portfolio[0].companies.map((item) => { 

            console.log(clickedElement + ' - ' + item.id)

            const hidden = (isHidden ? hiddenElement : clickedElement);
            const active = (isActive ? clickedElement : hiddenElement);
            const rest = (isRest ? '' : hideRest);

            const blurb = item.text.map((text) => {
                return (
                    <p>{text.paragraph}</p>
                )
            })
            return ( 
                <div id={item.id} onClick={this.toggleHidden.bind(this)}>
                    <div id={item.id} className={'item columns--' + columns + ' portfolio--' + item.id + ' ' + active}>
                        <div  id={item.id} className={'title--' + rest}><h2 id={item.id}>{item.title}</h2></div>
                    </div>
                    <div id={item.id} className={'columns--1--hidden-item portfolio--' + item.id + ' ' + hidden}>
                        <div id={item.id} className='title'><h2 id={item.id}>{item.title}</h2></div>
                        <div id={item.id} className='blurb'>{blurb}</div>
                    </div>
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
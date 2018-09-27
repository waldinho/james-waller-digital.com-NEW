import React, { Component } from 'react';
import Grid from '../components/grid.js';

import { getPortfolio } from '../JSON/portfolio';

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.currentElement = React.createRef();
        this.state = {
            isHidden: true,
            isActive: true
        }
    }

    toggleHidden () {
        const {
            isHidden,
            isActive,
        } = this.state

        this.setState({
          isHidden: !isHidden,
          isActive: !isActive,
        })
    }

    render() {
        const {
            isHidden,
            isActive,
        } = this.state
        
        const portfolio = getPortfolio()
        const title = portfolio[0].title 
        const columns = portfolio[0].companies.length / 3
        const portfolioText = portfolio[0].companies.map((item) => { 

            const hidden = (isHidden ? 'hide' : 'show');
            const active = (isActive ? 'show' : 'hide');

            const blurb = item.text.map((text) => {
                return (
                    <p>{text.paragraph}</p>
                )
            })
            return ( 
                <div id={item.id} onClick={this.toggleHidden.bind(this)}>
                    <div className={'item columns--' + columns + ' portfolio--' + item.id + ' ' + active} key={item.id}>
                        <div className='comapny'><h2>{item.title}</h2></div>
                    </div>
                    <div className={'item columns--1 portfolio--' + item.id + ' ' + hidden} key={item.id}>
                        <div className='comapny'><h2>{item.title}</h2></div>
                        <div className='blurb'>{blurb}</div>
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


// class MyList extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: ['foo', 'bar', 'baz'],
//       selected: {},
//     };
//     this.selectItem = this.selectItem.bind(this);
//     this.renderItem = this.renderItem.bind(this);
//   }

//   selectItem(el){
//     var selected = this.state.selected;
//     selected[el] = !selected[el];
//     this.setState({selected: selected});
//   }

//   renderItem(el){
//     var className = this.state.selected[el] ? 'active' : 'inactive';
//     var onClick = this.selectItem.bind(this, el);
//     return <li key={el} className={className} onClick={onClick}>{el}</li>;
//   }

//   render() {
//     console.log(this.state.data);
//     return (
//       <ul>
//       { this.state.data.map(this.renderItem) }
//       </ul>
//      );
//   }
// }

// ReactDOM.render(
//   <MyList />,
//   document.getElementById('root')
// );
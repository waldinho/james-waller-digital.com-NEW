import React, { Component } from 'react';
import Logo from './logo';

class Grid extends Component {

    render() {

        return (
            <div className='grid'>
                <Logo />
                <h1>
                    {this.props.title}
                </h1>
                <div className='grid__content'>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default Grid;

import React, { Component } from 'react';

class Grid extends Component {

    render() {

        return (
            <div className='grid'>
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

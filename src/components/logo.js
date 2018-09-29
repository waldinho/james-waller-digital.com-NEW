import React, { Component } from 'react';

class Logo extends Component {

    render() {

        return (
            <div className='logo'>
                <div className='logo__image'></div>
                <div className='logo__text'>Web Development</div>
                <div className='logo__location'>Sydney, Australia</div>
            </div>
        );
    }
}

export default Logo;

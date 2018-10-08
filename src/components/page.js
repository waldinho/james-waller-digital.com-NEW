import React, { Component } from 'react';
import Logo from './logo';

class Page extends Component {

    render() {

        return (
            <div className='page'>
                <Logo />
                <h1>
                    {this.props.title}
                </h1>
                <div className='page__content'>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default Page;

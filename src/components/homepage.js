import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props)
        this.backgroundImageRandom = this.backgroundImageRandom.bind(this)
        this.greeting = this.greeting.bind(this)
    }
    backgroundImageRandom = () => {
        const randomNum = Math.floor(Math.random() * 5);
        console.log(randomNum)
        return 'homepage-image-' + (randomNum) + ' full-cover'
    }

    greeting = () => {
        const today = new Date()
        const curHr = today.getHours()

        if (curHr < 12) {
            return 'Good morning!'
        } else if (curHr < 17) {
            return 'Good afternoon!'
        } else {
            return 'Good evening!'
        }
    }

    render() {
        const backgroundImage = this.backgroundImageRandom()
        const greeting = this.greeting()
        return (
            <div className={backgroundImage}>
                <div className='text-bg'>
                    <h1>{greeting}</h1>
                </div>
            </div>
        );
    }
}

export default Homepage;
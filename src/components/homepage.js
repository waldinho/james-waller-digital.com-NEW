import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props)
        this.backgroundImageRandom = this.backgroundImageRandom.bind(this)
        this.greeting = this.greeting.bind(this)
    }
    backgroundImageRandom = () => {
        const randomNum = Math.floor(Math.random() * 2)
        return 'homepage-image-' + (randomNum) + ' full-cover'
    }

    greeting = () => {
        const today = new Date()
        const curHr = today.getHours()

        if (curHr < 12) {
            return 'morning'  
        } else if (curHr < 17) {
            return 'afternoon'  
        } else {
            return 'evening'
        }
    }

    render() {
        const backgroundImage = this.backgroundImageRandom()
        const greeting = this.greeting()
        return (
            <div className={greeting}>
                <div className={backgroundImage}>
                    <div className='text-bg'>
                        <h1>Good {greeting}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
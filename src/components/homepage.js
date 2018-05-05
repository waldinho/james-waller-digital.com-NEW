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
            return 'Good morning'  
        } else if (curHr < 17) {
            return 'Good afternoon'  
        } else {
            return 'Good evening'
        }
    }

    dayClass = () => {
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
        const dayClass = this.dayClass()
        return (
            <div className={dayClass}>
                <div className={backgroundImage}>
                    <div className='text-bg'>
                        <h1>{greeting}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
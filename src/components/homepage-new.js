import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props)
        this.greeting = this.greeting.bind(this)
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
        const greeting = this.greeting()
        return (
            <div className='home'>
                <div className='text-bg'>
                    Good <br/>
                    {greeting}
                </div>
            </div>
        );
    }
}

export default Homepage;
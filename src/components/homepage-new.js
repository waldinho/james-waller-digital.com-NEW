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
            <div className={greeting}>
                    <div className='text-bg'>
                        <h1>Good {greeting}</h1>
                    </div>
            </div>
        );
    }
}

export default Homepage;
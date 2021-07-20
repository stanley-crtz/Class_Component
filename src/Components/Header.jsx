import React, { Component } from 'react'

class Header extends Component {


    render() {
        return (
            <nav>
                <h1>{this.props.text}</h1>
            </nav>
        )
    }

}

export default Header;
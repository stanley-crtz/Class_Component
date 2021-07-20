import React, { Component } from 'react'

export default class Contador extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Josue',
            count: 0
        };

        this.handleSum = this.handleSum.bind(this);
    }

    changeState = (key, value) => this.setState({ ...this.state, [key]: value })

    handleSum() {
        this.changeState('count', this.state.count + 1);
    }

    handleResta = () => {
        this.changeState('count', this.state.count - 1);
    }

    componentDidUpdate(){
        console.log('me actualize')
    }

    componentWillUnmount(){
        console.log('Me desmonte');
    }

    render() {

        const {name, count} = this.state;

        return (
            <div>
                <h2>{name}</h2>
                <h3>{count}</h3>
                {/* <input type="button" value="Sumar" onClick={this.handleSum.bind(this)} /> */}
                <input type="button" value="Sumar" onClick={this.handleSum} />
                <input type="button" value="Restar" onClick={this.handleResta} />
            </div>
        )
    }
}

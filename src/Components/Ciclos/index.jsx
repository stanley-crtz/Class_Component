import React, { Component } from 'react'
import Contador from '../Contador'

export default class index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mount: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ mount: false })
        }, 3000)
    }

    render() {
        return (
            <div>
                {
                    this.state.mount && (
                        <Contador />
                    )
                }
            </div>
        )
    }
}

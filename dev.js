import { response } from 'express';
import React, { Component } fom 'react'
import Axios from 'axios'

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = { username: " "};
    }
    componentDidMount() {
        Axios.get('/my-api/user/username')
        .then (response => {
            this.setState({ name: response.data.username})
        })
    }
    render(){
        return (
            <p>
                username is {this.state.username}
            </p>
        )
    }
}
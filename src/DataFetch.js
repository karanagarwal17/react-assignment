import React, { Component } from 'react'
import axios from 'axios'

class Stringify extends Component {
    componentWillReceiveProps(nextProps){
        if(this.props.depth !== nextProps.depth){
            this.render()
        }
    }

    render(){
        return(
            <div>
                <h1>Stringify</h1>
                <div>{JSON.stringify(this.props.object, null, this.props.depth)}</div>
                <br />
            </div>
        )
    }
}

class Hash extends Component {
    componentWillReceiveProps(nextProps){
        if(this.props.object !== nextProps.object){
            this.render()
        }
    }

    render(){
        return(
            <div>
                <h1>Hash</h1>
                <div>{btoa(JSON.stringify(this.props.object))}</div>
                <br />
            </div>
        )
    }
}

class DataFetch extends Component {
    constructor(){
        super()

        this.state = {
            object: {}
        }
        this.getdata = this.getData.bind(this)
    }

    getData = url => {
        axios.get(url)
        .then((res) => {
            this.setState({
                object: res.data.events ? res.data.events[0] : {}
            })
        })
        .catch(function(err){
            console.log(err)
            this.setState({
                object: {}
            })
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <button onClick={() => this.getData(this.props.url)} >Fetch</button>
                <Stringify object={this.state.object} depth={this.props.depth} />
                <Hash object={this.state.object} />
            </div>
        )
    }
}

export default DataFetch
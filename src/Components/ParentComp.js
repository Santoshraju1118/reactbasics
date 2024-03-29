import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {

constructor(props) {
    super(props)

    this.state = {
         name: "Alex"
    }
}

componentDidMount() {
    setInterval(() => {
        this.setState({
            name:"Alex"
        })
    }, 2000)
}

    render() {
        console.log("Parent Compo Render")
        return (
            <div>
                Parent Component {this.state.name}
                <MemoComp name={this.state.name} />
                {/* <PureComp name={this.state.name} />
                <RegComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp

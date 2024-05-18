import React, { Component } from 'react'


export default class Counter extends Component {

    constructor(){
          super();
          this.state={
            value:0
          }
          const increment=this.increment.bind(this)
          const decrement=this.decrement.bind(this)
    }
   
    increment=()=>{
        this.setState(prev=>({
           value:prev.value+1 
        }))
    }
    decrement=()=>{
        this.setState(prev=>({
            value:prev.value-1
        }))
    }
  render() {
    return (
        <>
        <div>Counter App</div>
        <p>Count: {this.state.value}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        </>
      
    )
  }
}

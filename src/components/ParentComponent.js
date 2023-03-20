import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

constructor(props) {
  super(props)

  this.state = {
    ParentName: 'Parent !'
  }
  
  this.greetParent = this.greetParent.bind(this)

}

greetParent(Children) {
    alert(`hello ${this.state.ParentName} How are you ${Children}`)
    console.log `done`
}

  render() {
    return (
      <ChildComponent greetHandler = {this.greetParent}/>
    )
  }
}

export default ParentComponent
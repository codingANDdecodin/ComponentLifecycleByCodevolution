import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props){
      super(props)

      this.state={
        name:"ajittha"
      }
      console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStatesFromProps")
        return null;
    }

    componentDidMount(){
      console.log("LifecycleB componentDidMount")
    }

    shouldComponentUpdate(){
      console.log("lifecycleB componentShouldUpdate")
      return true;
    }

    
    getSnapshotBeforeUpdate(){
      console.log("lifecycleB getSnapshootBeforeUpdate")
      return null;
    }

    componentDidUpdate(){
      console.log("lifecycleB conponentDidUpdate")
    }
  render() {
    console.log("LifecycleB render")
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB
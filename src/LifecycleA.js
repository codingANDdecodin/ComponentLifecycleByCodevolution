import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
    constructor(props){
      super(props)

      this.state={
        name:"ajittha"
      }
      console.log("LifecycleA constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStatesFromProps")
        return null;
    }

    componentDidMount(){
      console.log("LifecycleA componentDidMount")
    }

    shouldComponentUpdate(){
      console.log("lifecycleA shouldComponentUpdate")
      return true;
    }


    getSnapshotBeforeUpdate(){
      console.log("lifecycleA getsnapshootbeforeUpdate");
      return null
    }
    componentDidUpdate(){
      console.log("lifecycleA componentDidUpdate")

    }
    changeState =()=>{
      this.setState({
        name:"Codeevluatioin"
      });
    }
  render() {
    console.log("LifecycleA render")
    return (
      <div>LifecycleA
        <LifecycleB></LifecycleB>
        <button onClick={this.changeState}>change state</button>
      </div>
    )
  }
}

export default LifecycleA
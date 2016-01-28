import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {storeConfigure,subscribe,bindNext,bindTopicToState} from '../../src/index.js'


let sub = subscribe;

let publish = bindNext([
  function (a) {
    return Object.assign({
      p: 233,
    }, a)
  }
]);

store.listen(function (d) {
  console.log('d:',d)
});


const bindData = function (target,name,descriptor) {
  target.displayName = 'ZZZ';
};


@bindTopicToState('hello')
class Count extends Component {
  constructor(props){
    super(props);
    this.state = {
      hello:{
        x:'init hello'
      }
    };
  }

  componentDidMount(){

    console.log(this,'old');
  }

  render(){
    return (
      <h2>
      {this.state.hello.x}
      </h2>
    )
  }
}

class C extends Component {

  constructor(props){
    super(props);
    this.name = 4;
  }

  componentDidMount(){
    setTimeout(function () {
      publish('hello',{
        x:1
      })
    },2000)
  }

  render(){
    return (
      <div>
        count:
        <Count></Count>
      </div>
    )
  }
}

window.C = C;
window.Count = Count;

export default C;
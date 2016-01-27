import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {storeConfigure,bindStore,bindNext} from '../../src/index.js'


let store = storeConfigure({name:'a'});
let sub = bindStore(store);

let publish = bindNext([
  function (a) {
    console.log('next a',a);
    return new Promise(function (resolve) {
      resolve(Object.assign({
        p:233,
      },a))
    })
  }
]);

store.listen(function (d) {
  console.log('d:',d)
});

class Count extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    sub('hello', (d)=> {
      console.log(`hello ::::`,d);
      this.setState(d)
    });
  }

  render(){
    return (
      <h2>{this.state.name} ::: {this.state.i}</h2>
    )
  }
}

class C extends Component {

  constructor(props){
    super(props);
    this.name = 3;
  }

  componentDidMount(){
    let i = 0;
    setInterval(function () {
      i=i+1;

      publish('hello',{
        name:2222,
        i
      })
    },1000);
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

export default C;
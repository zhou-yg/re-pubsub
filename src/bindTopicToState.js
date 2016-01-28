/**
 * Created by zyg on 16/1/27.
 */
import * as PubSub from 'pubsub-js'
import subscribe from './subscribe'

/**
 * bind a listen data update callback when `componentDidMount`
 * and execute set new state to ReactElement state
 */
export default function bindDataToState(topic,funcName = 'componentDidMount' ){

  topic = [].concat(topic);

  return function (target, name) {
    let oldFunc = target.prototype[funcName];

    target.prototype[funcName] = function () {

      subscribe(topic,(triggerTopic,data) => {

        this.setState({
          [triggerTopic]:data
        })
      });

      oldFunc.call(this)
    }
  }
}
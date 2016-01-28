/**
 * Created by zyg on 16/1/27.
 */
import * as PubSub from 'pubsub-js'
import {isFunction} from 'lodash'

function bindStore (store) {

  return function (topic, data) {
    if(store){
      store.dispatch({
        [topic]:data
      })
    }
  }
}

export default function bindNext(nexts = [],store){

  const dispatch = bindStore(store);

  return function publish(topic,data){

    let result = nexts.reduce(function (init, next) {

      if(init instanceof Promise){
        return init.then(next)
      }else{
        return next(data);
      }
    },data);

    if(result instanceof Promise){
      result.then(function (data) {

        PubSub.publish(topic,data)

        dispatch(topic,data);
      })

    }else{

      PubSub.publish(topic,data)

      dispatch(topic,data);
    }
  };
}
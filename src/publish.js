/**
 * Created by zyg on 16/1/27.
 */
import * as PubSub from 'pubsub-js'
import {isFunction} from 'lodash'

export default function bindNext(nexts = []){

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
      })

    }else{
      PubSub.publish(topic,data)
    }
  };
}
/**
 * Created by zyg on 16/1/27.
 */
import * as PubSub from 'pubsub-js'

export default function bindNext(nexts = []){

  return function publish(topic,data){

    nexts.reduce(function (init, next) {
      return init.then(next);
    },new Promise(function (resolve) {
      resolve(data);
    })).then(function (result) {

      PubSub.publish(topic,result);
    }).catch(function (err) {
      console.error(err);
    });
  };
}
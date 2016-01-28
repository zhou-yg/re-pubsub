/**
 * Created by zyg on 16/1/26.
 */
import * as PubSub from 'pubsub-js'

import storeConfigure from './storeConfigure'

const subscribeCreator = function subscribeCreator(store, callback) {

  return function (topic, data) {

    if (store) {
      store.dispatch({
        [topic]: data
      });
    }

    callback(topic, data);
  }
}

export default function subscribe(topic, callback = _=>_) {

  topic = [].concat(topic);

  topic.forEach(topic => {
    PubSub.subscribe(topic, subscribeCreator(store, callback));
  })
}
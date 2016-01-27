/**
 * Created by zyg on 16/1/26.
 */
import * as PubSub from 'pubsub-js'

export default function bindStore(store){

 return function subscribe(topic,callback=_=>_) {

   PubSub.subscribe(topic, function (topic, data) {

     store.dispatch({
       [topic]:data
     });

     callback(data);
   });
 }
}
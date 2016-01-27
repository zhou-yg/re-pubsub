
/**
 * Created by zyg on 16/1/27.
 */
import {isPlainObject,isFunction} from 'lodash'

export default function storeConfigure(initialStore = {}) {

  let store = initialStore;

  let listeners = [];

  return {
    getStore(){
      return Object.assign({},store)
    },
    dispatch(data={}){
      if(!data || !isPlainObject(data)){
        throw new Error('dispatch need a plainObject')
      }
      store = Object.assign(store,data);

      listeners.forEach(function (listener) {
        listener(store);
      })
    },
    listen(listener){
      if(!isFunction(listener)){
        throw new Error('listen need a function')
      }
      listeners.push(listener);
      let isSubscribed = true;

      return function unSubscribe() {
        if (!isSubscribed) {
          return
        }

        isSubscribed = false;
        let index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      }
    },
  }
}
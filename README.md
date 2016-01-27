
## re-pubsub

a pubsub data flow for react

using

```
import {bindDataToState,bindNext} from 're-pubsub'

@bindTopicToState('myTopic')
class ReactComponents extends Component {

    constructor(){
        super();

        this.state = {
          myTopic:'myData' //while publish data.The state will be like this
        }
    }
    ....
}

bindNext()('myTopic','myData')

```
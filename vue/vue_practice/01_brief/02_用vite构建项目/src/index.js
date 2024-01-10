//可以直接引入
//这里引入的vue，默认不支持直接在组件里的template属性，因为性能太差了
import {createApp} from "vue"

//创建根组件
const App={
    data(){
        return
        {
            message:"??"
        }   
    },
    template:"<h1>{{message}}</h1>"
}

createApp(App).mount("#app")
//这个接口同样需要export，我的理解：别的地方要用就给他export出去,在别的地方import
import { Dictionaries } from "../enum/Dictionaries"




//联合类型来规定这个参数只能传什么值
export type Expire = Dictionaries.pernament | number
//这里定义一下key,我觉得虽然是string，但是为了可读性，就这么包一下
export type Key=string

export interface StorageCls{
    set:<T>(key:Key,value:T,expire:Expire)=>void
    get:<T>(key:Key)=>Result<T|null>
    remove:(key:Key)=>void
    clear:()=>void
}

export interface Data<T>{
    //传入值可以是任意类型
    value:T
    [Dictionaries.expire]:Dictionaries.expire
}

export interface Result<T>{
    message:string,
    //传进来是什么，返回的就是什么
    value: T| null
}
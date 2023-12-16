var Dictionaries;
(function (Dictionaries) {
    Dictionaries["expire"] = "_expire_";
    Dictionaries["pernament"] = "pernament";
})(Dictionaries || (Dictionaries = {}));

//导出一个类,它的接口模板在type文件夹的index.ts中
class Storage {
    //注意泛型方法写法
    set(key, value, expire = Dictionaries.pernament) {
        //等号千万要注意
        const data = {
            value,
            [Dictionaries.expire]: expire
        };
        //本来这里两个参数，键值对，我们把值和过期时间包到一个对象里传进去，然后json化
        localStorage.setItem(key, JSON.stringify(data));
    }
    get(key) {
        //
        const value = localStorage.getItem(key);
        //判断localstorage是否有值，有的时候连值都没有，更别谈是否过期
        if (value) {
            //最开始T没找到是因为get方法上没给泛型
            //刚才用localStorage的getItem拿到的方法是Json格式的，转一下
            const obj = JSON.parse(value);
            const now = new Date().getTime();
            //如果有值，再进行是否过期的判断
            //过期就删，没过期就给返回值
            if (typeof obj[Dictionaries.expire] == 'number' && obj[Dictionaries.expire] < now) {
                this.remove(key);
                return {
                    //注意`和变量用法
                    message: `您的${key}已过期`,
                    value: null
                };
            }
            else {
                return {
                    message: "成功读取",
                    value: obj.value
                };
            }
        }
        else {
            return {
                message: '没有token',
                value: null
            };
        }
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}

export { Storage };


class EventEmitter {
    
    // 初始化监听事件
    constructor(){
        this._event = {}
    }
    // 注册（订阅）事件
    on(eventName,callBack){
        // 取出所有该事件名下的回调函数
        const callBacks = this._event[eventName] || []
        callBacks.push(callBack)
        this._event[eventName] = callBacks
    }

    // 发布事件
    emit(eventName,...args) {
        const callBacks = this._event[eventName] || []
        callBacks.forEach(cb => {
            // 取出所有该事件名订阅的回调并执行
            cb(...args)
        });
    }

    // off ，删除指定订阅的事件名下的事件
    off(eventName,callBack) {
        const callBacks = this._event[eventName] || []
        const newCallBacks = callBacks.filter(fn => fn!==callBack)
        this._event[eventName] = newCallBacks
    }

    // once 一次性事件，执行完立即删除
    once(eventName,callBack) {
        const fn = (...args) => {
            callBack(...args)
            this.off(eventName,fn)
        }
        this.on(eventName,fn)
    }
}
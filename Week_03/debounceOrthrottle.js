





/**
 * 
 * @param {fn} fn 要被执行的方法，相隔多长时间要被执行的方法
 * @param {time} time 间隔时间，相隔多长时间调用一次方法
 * @param  {...args} args 剩余参数，剩余参数将会在调用fn方法的时候，会传个event对象 过去
 */
const debounce =(fn,time,...args)=>{
    let timeNo
    return  (...params)=>{
        clearTimeout(timeNo)
        timeNo = setTimeout(()=>{
            fn(...args,...params)
            clearTimeout(timeNo)
        },time)
    }
}

const throttle = (fn,time,...args)=>{
    let timeNo;
    return (...params) =>{
        if(timeNo) return

        timeNo = setTimeout(()=>{
            fn(...args,params)
            clearTimeout(timeNo)
            timeNo = null
        },time)
    }

}

// 截流是一定时间内只执行一次，例如重复点击（重复动作）
// 防抖是动作触发后，在n时间内再次触发，重新计时，也就是再次触发动作延后（n秒后之行）








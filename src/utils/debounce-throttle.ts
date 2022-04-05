export const debounce = (
  action: (...args: any[]) => void,
  wait: number
): (() => void) => {
  let last: NodeJS.Timeout
  return function realFunc(this: any, ...args: any) {
    clearTimeout(last)
    last = setTimeout(() => {
      action.apply(this, args)
    }, wait)
  }
}

export const thorttle = (
  action: (...args: any[]) => void,
  wait: number
): (() => void) => {
  let flag = true
  return function (this: any, ...args: any) {
    if (!flag) return
    flag = false

    setTimeout(() => {
      action.apply(this, args)
      flag = true
    }, wait)
  }
}

// 增加前缘触发功能
export var debounceImmediate = (fn, wait, immediate = false) => {
  let timer,
    startTimeStamp = 0
  let context, args

  let run = (timerInterval) => {
    timer = setTimeout(() => {
      let now = new Date().getTime()
      let interval = now - startTimeStamp
      if (interval < timerInterval) {
        // the timer start time has been reset，so the interval is less than timerInterval
        startTimeStamp = now
        run(wait - interval) // reset timer for left time
      } else {
        if (!immediate) {
          fn.apply(context, args)
        }
        clearTimeout(timer)
        timer = null
      }
    }, timerInterval)
  }

  return function () {
    context = this
    args = arguments
    let now = new Date().getTime()
    startTimeStamp = now // set timer start time

    if (!timer) {
      if (immediate) {
        fn.apply(context, args)
      }
      run(wait) // last timer alreay executed, set a new timer
    }
  }
}

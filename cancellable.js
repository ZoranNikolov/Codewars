/**
 Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, specifically at cancelT ms. In that case, fn should never be called.

 

Example 1:

Input: fn = (x) => x * 5, args = [2], t = 20, cancelT = 50
Output: [{"time": 20, "returned": 10}]
Explanation: 
const result = []

const fn = (x) => x * 5

const start = performance.now() 

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)})
}
     
const cancel = cancellable(log, [2], 20);

const maxT = Math.max(t, 50)
          
setTimeout(cancel, cancelT)

setTimeout(() => {
     console.log(result) // [{"time":20,"returned":10}]
}, 65)

The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened after the execution of fn(2) at 20ms.
Example 2:

Input: fn = (x) => x**2, args = [2], t = 100, cancelT = 50 
Output: []
Explanation: The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
Example 3:

Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30, cancelT = 100
Output: [{"time": 30, "returned": 8}]
Explanation: The cancellation was scheduled to occur after a delay of cancelT (100ms), which happened after the execution of fn(2,4) at 30ms.
 
 */

var cancellable = function(fn, args, t) {
    let timeoutId;
  
    const executeFn = () => {
      fn(...args);
    };
  
    const cancelFn = () => {
      clearTimeout(timeoutId);
    };
  
    timeoutId = setTimeout(executeFn, t);
  
    return cancelFn;
  };
  
  // Example usage:
  const result = [];
  const fn = x => x * 5;
  const start = performance.now();
  const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ time: diff, returned: fn(...argsArr) });
  };
  
  const cancel = cancellable(log, [2], 20);
  const cancelT = 50;
  
  const maxT = Math.max(20, cancelT);
  
  setTimeout(() => {
    cancel(); // Cancelling before the scheduled execution
  }, cancelT - 10);
  
  setTimeout(() => {
    console.log(result); // Output: [{"time":20,"returned":10}]
  }, maxT + 10);
  

"use strict";

/**
 * 
 * @param {fn} fn 要被执行的方法，相隔多长时间要被执行的方法
 * @param {time} time 间隔时间，相隔多长时间调用一次方法
 * @param  {...args} args 剩余参数，剩余参数将会在调用fn方法的时候，会传个event对象 过去
 */
var debounce = function debounce(fn, time) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var timeNo;
  return function () {
    for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }

    clearTimeout(timeNo);
    timeNo = setTimeout(function () {
      fn.apply(void 0, args.concat(params));
      clearTimeout(timeNo);
    }, time);
  };
};

var throttle = function throttle(fn, time) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  var timeNo;
  return function () {
    for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      params[_key4] = arguments[_key4];
    }

    if (timeNo) return;
    timeNo = setTimeout(function () {
      fn.apply(void 0, args.concat([params]));
      clearTimeout(timeNo);
      timeNo = null;
    }, time);
  };
}; // 截流是一定时间内只执行一次，例如重复点击（重复动作）
// 防抖是动作触发后，在n时间内再次触发，重新计时，也就是再次触发动作延后（n秒后之行）
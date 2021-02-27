const { countBy } = require("./underscore");

(function(){
    var root = typeof self == 'object' && self.self === self && self ||
    typeof global == 'object' && global.global === global && global ||
    this || {};
// 核心
[]
var _ = function (obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    // [1,2,3]
    this._wrapped = obj;
};
    _.each = function(arr, fn){
        for(let i = 0; i < arr.length; i++){
            fn(arr[i], i)
        }
        return arr;
    };
    _.map = function(){};

    _.throttle =  function(){
        let isFirst = true;
        let execDate = +new Date();
        return function(){
            if(isFirst){
                cb();
                execDate = +new Date();
                isFirst = false;
            }else{
                const currentData = +new Date();
                if(currentData - execData >= t){
                    cb();
                    execDate = +new Date();
                }else{
                    const timeWait = t - (+new Date() - execDate);
                    timeoutId && clearTimeout(timeoutId);
                    timeoutId = setTimeout(()=>{
                        cb();
                        execDate = +new Date();
                    })
                }
            }
        }
    }

    var push = Array.prototype.push;

    _.isFunction = function (obj) {
        return typeof obj == 'function' || false;
    };

    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
          if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
      };

       _.mixin = function (obj) {
        // each 第一个参数  arr
        _.each(_.functions(obj), function (name) {
            // console.log(obj[name]);
            // _[name] = obj[name]
            var func = _[name] = obj[name];
            // 
            _.prototype[name] = function () {

                // 参数合并
                var args = [this._wrapped];

                // push.apply(args, arguments);


                args.push(...arguments)
                console.log(args);

                return func.apply(_, args);
            };
        });
        return _;
    };
      // Add all of the Underscore functions to the wrapper object.
      _.mixin(_);

    root._ = _;

})()
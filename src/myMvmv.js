;
(function(win, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (win['MyMvmv'] = factory());
})(window, function() {
    const Mvmv = function(opt) {
        return this._init(opt)
    }

    Mvmv.prototype = {
        constructor: Mvmv,
        _init: function(opt) {

        }
    }
    return Mvmv;
});
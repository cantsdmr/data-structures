declare global {
    interface Function {
        method(name: string, func: Function): any;
        curry(): any;
        memoize(): any;
    }
}

export const GoodParts = {
    ActivateCurry: function () {
        Function.prototype["curry"] = function () {
            var slice = Array.prototype.slice
            var args = slice.apply(arguments);
            var that = this;

            return () => {
                return that.apply(null, args.concat(slice.apply(arguments)))
            }
        }

        return this;
    },
    ActivateMethodAddition: function () {
        Function.prototype["method"] = function (name: string, func: Function) {
            if (!this.prototype[name]) {
                this.prototype[name] = func;
            }
        }

        return this;
    },
    Build: function () {
        return undefined;
    }
}
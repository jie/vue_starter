
function initFunctions() {

    Function.prototype.partial_es6 = function (...args) {
        for (let i = args.length; i < this.length; i++)
            args.push(undefined)

        return (...remainArgs) => {
            let j = 0;
            args.forEach((arg, i) => arg === undefined && (args[i] = remainArgs[j++]))
            return this(...args)
        }
    }


}

export {
    initFunctions
}
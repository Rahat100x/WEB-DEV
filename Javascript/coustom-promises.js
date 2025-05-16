class MyPromise {
    constructor(executorFun) {
        this._state = 'pending';
        this._successCalbacks = []
        this._errorCalbacks = []
        this._finallyCalbacks = []
        this.value = undefined
        executorFun(
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this)
        );
    }

    then(callback) {
        if(this._state == 'fulfilled') {
            callback(this.value)
            return this;
        }
        this._successCalbacks.push(calback);
        return this;
    }
    catch(callback) {
        if(this._state == 'rejected') {
            callback()
            return this;
        }
        this._errorCalbacks.push(callback);
        return this;
    }
    finally(callback) {
        if(this._state !== 'pending') {
            callback()
            return this;
        }
        this._finallyCalbacks.push(calback);
    }

    resolverFunction(value) {
        this.value = value;
        this._state = 'fulfilled';
        this._successCalbacks.forEach((callback) => callback(value));
        this._finallyCalbacks.forEach((callback) => callback());
    }
    rejectorFunction(err) {
        this._state = 'rejected'
        this._errorCalbacks.forEach((callback) => callback(err));
        this._finallyCalbacks.forEach((callback) => callback());
    }
}

function wait(seconds) {
    return new MyPromise((resolve,reject) => {
        setTimeout(() => reject('HaHa'), seconds * 1000);
    })
}

wait(3)
  .then((e) => console.log('Promise Resolve After 3s' ,e))
  .catch((e) => console.log('Rejected after 10s ',e))
  .finally(() => console.log("finally"))
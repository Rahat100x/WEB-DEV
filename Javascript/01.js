function fun(fn,delay) {
    console.log(arguments);
    let myId;
    return function() {
       myId = setTimeout(() => {
          fn()
        },delay);
    };
}

fun("Luban",2);
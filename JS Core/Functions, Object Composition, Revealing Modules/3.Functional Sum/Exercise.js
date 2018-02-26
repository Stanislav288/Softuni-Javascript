function example(number) {
    let result = 0;
    let add = (function (number) {
        return function sum() {
            result += number;
            return add;
        }();
    });

    add.toString = function () {
        return result;
    };

    console.log(add(number));
}

example(2);
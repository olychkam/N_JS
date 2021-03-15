console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(a: number) {
    return function (b: number) {
        return a + b
    }
}

console.log(sum(3)(6))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let counter = 0
    return function () {
        return counter++
    }
}

const counter = makeCounter();
console.log(counter());//1
console.log(counter()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 3


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter2(startCount: number) {
    return {
        increase: () => ++startCount,
        decrease() {
            return --startCount
        },
        reset: () => {
            startCount = 0;
            return startCount
        },
        set: (newCount: number) => {
            startCount = newCount
            return startCount
        },
        getCount: () => startCount
    }
}

let count = makeCounter2(10);
count.increase()
console.log(count.getCount())
let count2 = makeCounter2(0)
count2.increase()
console.log(count2.getCount())

//Recursion
/*sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050*/

/*
function sumToByLog(n: number) {
    let result = 0
    for (let i = 0; i >= n; i++) {
        result += i
    }
    return result;
}*/

function sumToByLog(n: number): number {
    if (n === 1) return n;
    return n + sumToByLog(n - 1)
}

console.log(sumToByLog(3))

/*function sumToByLog(n:number,acc:number):number{
    if(n===1) return n+acc;
    return sumToByLog(n-1,acc+1)
}*/

/*1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120*/

function multiCount(n: number): number {
    if (n === 1) return n;
    return n * multiCount(n - 1)
}

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n: number): any {
    if (n === 0) return 0;
    if (n === 1) return (num: number) => num;
    let _arguments: number[] = [];

    function helper(...args: number[]) {
        _arguments = {..._arguments, ...args}
        if (_arguments.length >= n) {
            return _arguments.reduce((acc, number) => acc + number)
        } else {
            return helper;
        }
    }

    return helper
}

console.log(superSum(3))

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

function fib(n: number): number {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list:any){
    alert(list.value)
    if(list.next){
        printList(list.next)
    }
}

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};
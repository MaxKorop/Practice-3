// Завдання 2. Знаходження числа Фібоначчі 
const findFibonacci = (n) => {
    if (n === 0 || n === 1) return n
    return findFibonacci(n - 1) + findFibonacci(n - 2)
}

console.log(findFibonacci(7))

// Завдання 3. Функція filter 
const filterFunction = (data, handler) => {
    let filteredData = []
    data.forEach(element => {
        if (handler(element)) filteredData = [...filteredData, element]
    });
    return filteredData
}
const isOdd = (data) => data % 2
const arr = [2, 5, 1, 12, 15, 7, 9]

console.log(filterFunction(arr, isOdd))

// Завдання 4. Функція pow
const pow = (number, power) => {
    if (power === 0) return 1 
    else if (power > 0) return number * pow(number, power - 1)
    else return 1 / (number * pow(number, -power - 1))
}

console.log(pow(2, 4))

// Завдання 5. Функція powList
const powList = (arr, power, handler) => {
    const listpow = arr.map(element => handler(element, power));
    return listpow
}
const arr2 = [1, 2, 3, 4]

console.log(powList(arr2, 2, pow))

// Завдання 6. Функція powAndFilter
const powAndFilter = (filter, powList, pow, arr, power, minNumber) => filter(powList(arr, power, pow), (number) => number < minNumber)

console.log(powAndFilter(filterFunction, powList, pow, arr2, 2, 10))

// Завдання 7. Функція sum
const sum = (handler) => () => {
    const numbers = handler()
    return numbers.reduce((result, current) => result + current, 0)
  }
const array = () => [1, 2, 3, 4, 5];
const calc = sum(array)
console.log(calc())  
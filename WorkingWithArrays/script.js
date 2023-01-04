(function () {
    function sortByDescending(array) {
        return array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    function getFirst5Elements(array) {
        return array.slice(0, 5);
    }

    function getLast5Elements(array) {
        return array.slice(-5);
    }

    function getEvenNumbersSum(array) {
        return array.filter(function (e) {
            return e % 2 === 0;
        }).reduce(function (sum, e) {
            return sum + e;
        }, 0);
    }

    function getNumbersFrom1To100() {
        var array = [];

        for (var i = 1; i <= 100; i++) {
            array.push(i);
        }

        return array;
    }

    function getEvenNumbersSquares(array) {
        return array.filter(function (e) {
            return e % 2 === 0;
        }).map(function (e) {
            return e * e;
        });
    }

    var numbers = [13, 6, 4, 9, 20, 11, 1, 2, 6];

    console.log("Задан массив:");
    console.log(numbers);

    console.log("Отсортирован по убыванию:");
    console.log(sortByDescending(numbers));

    console.log("Первые пять элементов:");
    console.log(getFirst5Elements(numbers));

    console.log("Последние пять элементов:");
    console.log(getLast5Elements(numbers));

    console.log("Сумма чётных чисел:");
    console.log(getEvenNumbersSum(numbers));

    var numbersFrom1To100 = getNumbersFrom1To100();

    console.log("Массив от 1 до 100:")
    console.log(numbersFrom1To100);

    console.log("Квадраты чётных чисел:")
    console.log(getEvenNumbersSquares(numbersFrom1To100));
})();
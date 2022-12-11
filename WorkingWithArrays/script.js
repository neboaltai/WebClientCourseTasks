(function () {
    function sortByDescending(array) {
        return array.sort((e1, e2) => e2 - e1);
    }

    function getFirst5Numbers(array) {
        return array.slice(0, 5);
    }

    function getLast5Numbers(array) {
        return array.slice(-5);
    }

    function getEvenNumbersSum(array) {
        return array.filter(e => e % 2 === 0)
                    .reduce((sum, currentValue) => sum + currentValue, 0);
    }

    function getFrom1To100Numbers() {
        var array = [];

        for (i = 0; i < 100; i++) {
            array[i] = i + 1;
        }

        return array;
    }

    function getSquaresOfEvenNumbers(array) {
        return array.filter(e => e % 2 === 0)
                    .map(e => Math.pow(e, 2));
    }

    var numbers = [13, 6, 4, 9, 20, 11, 1, 2, 6];

    console.log("Задан массив:");
    console.log(numbers);

    console.log("Отсортирован по убыванию:");
    console.log(sortByDescending(numbers));

    console.log("Первые пять элементов:");
    console.log(getFirst5Numbers(numbers));

    console.log("Последние пять элементов:");
    console.log(getLast5Numbers(numbers));

    console.log("Сумма чётных чисел:");
    console.log(getEvenNumbersSum(numbers));

    var from1To100Numbers = getFrom1To100Numbers();

    console.log("Массив от 1 до 100:")
    console.log(from1To100Numbers);

    console.log("Квадраты чётных чисел:")
    console.log(getSquaresOfEvenNumbers(from1To100Numbers));
})();
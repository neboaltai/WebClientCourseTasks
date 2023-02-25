(function () {
    function getAverageAge(persons) {
        return _.reduce(persons, function (sum, person) {
            return sum + person.age;
        }, 0) / persons.length;
    }

    function getFrom20To30AgedPersonsSortedByAgeAscending(persons) {
        return _.chain(persons)
            .filter(function (person) { return person.age >= 20 && person.age <= 30; })
            .sortBy("age")
            .value();
    }

    function getFrom20To30AgedUniquePersonNamesSortedByAgeDescending(persons) {
        return _.chain(persons)
            .filter(function (person) { return person.age >= 20 && person.age <= 30; })
            .sortBy("age")
            .reverse()
            .pluck("name")
            .uniq()
            .value();
    }

    function getNamesCount(persons) {
        return _.countBy(persons, function (person) {
            return person.name;
        })
    }

    var persons = [
        { name: "Misha", age: 34 },
        { name: "Ilya", age: 24 },
        { name: "Jenya", age: 36 },
        { name: "Vlad", age: 25 },
        { name: "Pasha", age: 23 },
        { name: "Pasha", age: 43 },
        { name: "Jenya", age: 13 },
        { name: "Ilya", age: 35 },
        { name: "Vasya", age: 34 },
        { name: "Masha", age: 37 },
        { name: "Vlad", age: 30 },
        { name: "Grisha", age: 20 }
    ];

    console.log("Список людей:");
    console.log(persons);

    console.log("Средний возраст всех людей:");
    console.log(getAverageAge(persons));

    console.log("Список людей с возрастом от 20 до 30 включительно, по возрастанию:")
    console.log(getFrom20To30AgedPersonsSortedByAgeAscending(persons));

    console.log("Список имён людей с возрастом от 20 до 30 включительно, по убыванию:")
    console.log(getFrom20To30AgedUniquePersonNamesSortedByAgeDescending(persons));

    console.log("{имя: число людей}");
    console.log(getNamesCount(persons));
})();
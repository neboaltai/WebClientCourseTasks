(function () {
    function getCountriesWithMaxCountOfCities(countries) {
        return countries.filter(country =>
               country.cities.length === countries.reduce((maxCount, country) =>
               Math.max(maxCount, country.cities.length), 0));
    }

    function getPopulationByCountry(countries) {
        var countryAndPopulation = {};

        for (var country of countries) {
            countryAndPopulation[country.name] = country.cities.reduce((sum, city) =>
            sum + city.population, 0);
        }

        return countryAndPopulation;
    }

    var countries = [{
        name: "Brasil",
        cities: [{ name: "Colombo", population: 177764 },
                 { name: "RioClaro", population: 1635551 },
                 { name: "Caxias", population: 133980 },
                 { name: "Queimados", population: 115020 },
                 { name: "Apucarana", population: 105114 }]
    }, {
        name: "Indonesia",
        cities: [{ name: "Depok", population: 365200 },
                 { name: "Pasuruan", population: 134019 },
                 { name: "Ciputat", population: 270800 },
                 { name: "Lhokseumawe", population: 109600 }]
    }, {
        name: "Philippines",
        cities: [{ name: "Tabaco", population: 107166 },
                 { name: "Polomolok", population: 110709 },
                 { name: "Ddagupan", population: 130328 },
                 { name: "Lipa", population: 218447 },
                 { name: "Cotobato", population: 163849 }]
    }, {
        name: "United Kingdom",
        cities: [{ name: "Oxford", population: 144000 },
                 { name: "Cambridge", population: 121000 },
                 { name: "Birmingham", population: 1013000 },
                 { name: "Glasglow", population: 619680 }]
    }];

    console.log("Страна(ы) с максимальным количеством городов:")
    console.log(getCountriesWithMaxCountOfCities(countries));

    console.log("{cтрана: численность}")
    console.log(getPopulationByCountry(countries));
})();
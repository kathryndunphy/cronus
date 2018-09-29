$(document).ready(function () {
    const cityNameAirportCodeArray = [{
            "cityName": "Albuquerque",
            "airportCode": "ABQ"
        },
        {
            "cityName": "Amarillo",
            "airportCode": "AMA"
        },
        {
            "cityName": "Amsterdam, Netherlands",
            "airportCode": "AMS"
        },
        {
            "cityName": "Atlanta",
            "airportCode": "ATL"
        },
        {
            "cityName": "Baltimore / Washington",
            "airportCode": "BWI"
        },
        {
            "cityName": "Baton Rouge",
            "airportCode": "BTR"
        },
        {
            "cityName": "Boston",
            "airportCode": "BOS"
        },
        {
            "cityName": "Branson",
            "airportCode": "BKG"
        },
        {
            "cityName": "Buffalo",
            "airportCode": "BUF"
        },
        {
            "cityName": "Cancun Mexico",
            "airportCode": "CUN"
        },
        {
            "cityName": "Charleston",
            "airportCode": "CHS"
        },
        {
            "cityName": "Charlotte",
            "airportCode": "CLT"
        },
        {
            "cityName": "Chicago Midway",
            "airportCode": "MDW"
        },
        {
            "cityName": "Chicago O'Hare",
            "airportCode": "ORD"
        },
        {
            "cityName": "Cincinnati",
            "airportCode": "CVG"
        },
        {
            "cityName": "Cleveland",
            "airportCode": "CLE"
        },
        {
            "cityName": "Columbus John Glenn Airport",
            "airportCode": "CMH"
        },
        {
            "cityName": "Columbus Rickenbacker",
            "airportCode": "LCK"
        },
        {
            "cityName": "Dallas Love",
            "airportCode": "DAL"
        },
        {
            "cityName": "Dallas / Ft. Worth",
            "airportCode": "DFW"
        },
        {
            "cityName": "Denver",
            "airportCode": "DEN"
        },
        {
            "cityName": "Destin / Fort Walton Beach",
            "airportCode": "VPS"
        },
        {
            "cityName": "Detroit",
            "airportCode": "DTW"
        },
        {
            "cityName": "El Paso",
            "airportCode": "ELP"
        },
        {
            "cityName": "Frankfurt, Germany",
            "airportCode": "FRA"
        },
        {
            "cityName": "Ft. Lauderdale",
            "airportCode": "FLL"
        },
        {
            "cityName": "Guadalajara, Mexico",
            "airportCode": "GDL"
        },
        {
            "cityName": "Harlingen",
            "airportCode": "HRL"
        },
        {
            "cityName": "Houston Hobby",
            "airportCode": "HOU"
        },
        {
            "cityName": "Houston Bush Intercontinental",
            "airportCode": "IAH"
        },
        {
            "cityName": "Indianapolis",
            "airportCode": "IND"
        },
        {
            "cityName": "Jacksonville",
            "airportCode": "JAX"
        },
        {
            "cityName": "Kansas City",
            "airportCode": "MCI"
        },
        {
            "cityName": "Las Vegas",
            "airportCode": "LAS"
        },
        {
            "cityName": "Little Rock",
            "airportCode": "LIT"
        },
        {
            "cityName": "London Gatwick",
            "airportCode": "LGW"
        },
        {
            "cityName": "London Heathrow",
            "airportCode": "LHR"
        },
        {
            "cityName": "Long Beach",
            "airportCode": "LGB"
        },
        {
            "cityName": "Los Angeles",
            "airportCode": "LAX"
        },
        {
            "cityName": "Louisville",
            "airportCode": "SDF"
        },
        {
            "cityName": "Lubbock",
            "airportCode": "LBB"
        },
        {
            "cityName": "Memphis",
            "airportCode": "MEM"
        },
        {
            "cityName": "Mexico City",
            "airportCode": "MEX"
        },
        {
            "cityName": "Miami",
            "airportCode": "MIA"
        },
        {
            "cityName": "Milwaukee",
            "airportCode": "MKE"
        },
        {
            "cityName": "Minneapolis/St. Paul",
            "airportCode": "MSP"
        },
        {
            "cityName": "Nashville",
            "airportCode": "BNA"
        },
        {
            "cityName": "New Orleans",
            "airportCode": "MSY"
        },
        {
            "cityName": "New York Newark-Liberty",
            "airportCode": "EWR"
        },
        {
            "cityName": "New York Kennedy",
            "airportCode": "JFK"
        },
        {
            "cityName": "Oakland",
            "airportCode": "OAK"
        },
        {
            "cityName": "Oklahoma City",
            "airportCode": "OKC"
        },
        {
            "cityName": "Omaha",
            "airportCode": "OMA"
        },
        {
            "cityName": "Ontario, CA",
            "airportCode": "ONT"
        },
        {
            "cityName": "Orange County",
            "airportCode": "SNA"
        },
        {
            "cityName": "Orlando International",
            "airportCode": "MCO"
        },
        {
            "cityName": "Orlando Sanford",
            "airportCode": "SFB"
        },
        {
            "cityName": "Panama City, FL",
            "airportCode": "ECP"
        },
        {
            "cityName": "Pensacola, FL",
            "airportCode": "PNS"
        },
        {
            "cityName": "Philadelphia",
            "airportCode": "PHL"
        },
        {
            "cityName": "Phoenix",
            "airportCode": "PHX"
        },
        {
            "cityName": "Pittsburgh",
            "airportCode": "PIT"
        },
        {
            "cityName": "Portland",
            "airportCode": "PDX"
        },
        {
            "cityName": "Punta Cana, Dominican Republic",
            "airportCode": "PUJ"
        },
        {
            "cityName": "Raleigh-Durham",
            "airportCode": "RDU"
        },
        {
            "cityName": "Reno",
            "airportCode": "RNO"
        },
        {
            "cityName": "Sacramento",
            "airportCode": "SMF"
        },
        {
            "cityName": "Salt Lake City",
            "airportCode": "SLC"
        },
        {
            "cityName": "San Diego",
            "airportCode": "SAN"
        },
        {
            "cityName": "San Francisco",
            "airportCode": "SFO"
        },
        {
            "cityName": "San Jose",
            "airportCode": "SJC"
        },
        {
            "cityName": "San Jose Del Cabo/Los Cabos International",
            "airportCode": "SJD"
        },
        {
            "cityName": "Seattle",
            "airportCode": "SEA"
        },
        {
            "cityName": "Steamboat Springs, CO",
            "airportCode": "HDN"
        },
        {
            "cityName": "St. Louis",
            "airportCode": "STL"
        },
        {
            "cityName": "St. Petersburg/Clearwater",
            "airportCode": "PIE"
        },
        {
            "cityName": "Stockholm, Sweden",
            "airportCode": "ARN"
        },
        {
            "cityName": "Tampa",
            "airportCode": "TPA"
        },
        {
            "cityName": "Toronto, Canada Pearson",
            "airportCode": "YYZ"
        },
        {
            "cityName": "Tucson",
            "airportCode": "TUS"
        },
        {
            "cityName": "Tulsa",
            "airportCode": "TUL"
        },
        {
            "cityName": "Washington, D.C. Reagan/National",
            "airportCode": "DCA"
        },
        {
            "cityName": "Washington, D.C. Dulles",
            "airportCode": "IAD"
        }
    ];

    cityNameAirportCodeArray.forEach(function (elem) {
        let optionElement = $("<option>");
        optionElement.attr("value", elem.cityName);
        optionElement.html(elem.cityName);
        $("#cityList").append(optionElement);
    });

    const searchForFlights = function () {
        let originCity = "Austin, TX";
        let originAirport = "AUS";
        let destinationCity = $("#destination").val();
        let destinationObject = cityNameAirportCodeArray.find(element => element.cityName === destinationCity);
        let destinationAirport;
        let inputStartDate = $("#fromDate").val();
        let inputEndDate = $("#toDate").val();
        let limit = 10;
        let currency = "USD";
        let partner = "picky";

        let searchError = $(".searchError");
        searchError.html("");

        let startDateQueryParam = moment(inputStartDate).format("DD/MM/YYYY");
        let endDateQueryParam = moment(inputEndDate).format("DD/MM/YYYY");

        if (!destinationCity) {
            searchError.html("Destination city cannot be empty!");
            return;
        }
        if (!destinationObject) {
            searchError.html("Invalid city. Please select a city from the list.");
            return;
        } else {
            destinationAirport = destinationObject.airportCode;
            // console.log(destinationAirport);
        }
        if (!inputStartDate) {
            searchError.html("Departure date cannot be empty.");
            return;
        }
        if (!inputEndDate) {
            searchError.html("Arrival date cannot be empty.");
            return;
        }
        if (moment(inputStartDate).isSameOrBefore(moment())) {
            searchError.html("Your Departure date cannot be earlier than today.");
            return;
        }
        if (inputStartDate > inputEndDate) {
            searchError.html("Departure and Arrival dates are incorrect");
            return;
        }

        let url = "https://api.skypicker.com/flights";
        let queryParams = {
            flyFrom: originAirport,
            to: destinationAirport,
            dateFrom: startDateQueryParam,
            dateTo: startDateQueryParam,
            returnFrom: endDateQueryParam,
            partner: partner,
            limit: limit,
            curr: currency
        };

        $.ajax({
            url: url,
            data: queryParams,
            dataType: "json"
        }).then(function (response) {
            console.log(response);
            populateFlightData(response.data, originCity, destinationCity);
        });
    };

    const populateFlightData = function (flightData, originCity, destinationCity) {
        // console.log(flightData);
        if (flightData.length < 1) {
            $(".searchError").html(`Sorry! There are no flights to ${destinationCity} from ${originCity}`);
        } else {
            for (let i = 0; i < flightData.length; i++) {
                let newRow = $("<tr>");
                let airlineCell = $("<td>");
                let routeCell = $("<td>");
                let durationCell = $("<td>");
                let priceCell = $("<td>");
                let linkCell = $("<td>");
                let link = $("<a>");
                link.html("Select");
                link.attr("href", flightData[i].deep_link);
                linkCell.append(link);

                durationCell.html(flightData[i].fly_duration);
                priceCell.html(flightData[i].price);

                for (let j = 0; j < flightData[i].route.length; j++) {
                    let airlineRow = $("<tr>");
                    airlineRow.text(flightData[i].route[j].airline);
                    airlineCell.append(airlineRow);
                    let routeRow = $("<tr>");
                    routeRow.text(flightData[i].route[j].cityFrom + " to " + flightData[i].route[j].cityTo);
                    routeCell.append(routeRow);
                }
                
                newRow.append(airlineCell);
                newRow.append(routeCell);
                newRow.append(durationCell);
                newRow.append(priceCell);
                newRow.append(linkCell);
                $(".flightTableBody").append(newRow);
            }
        }
    };

    // const airlineNameArray = [];
    // const returnAirlineNameArray = function() {
    //     $.ajax({
    //         url: "https://api.skypicker.com/airlines",
    //         dataType: "json"
    //     }).then(function(response){
    //         airlineNameArray.push(response);
    //     });
    // };
    // returnAirlineNameArray();
    // console.log(airlineNameArray);

    $(".search").on("click", searchForFlights);
});
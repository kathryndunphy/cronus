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

    cityNameAirportCodeArray.forEach(function(elem){
        let optionElement = $("<option>");
        optionElement.attr("value", elem.cityName);
        optionElement.html(elem.cityName);
        $("#cityList").append(optionElement);
    });

    const searchForFlights = function () {
        $.ajax({
            type: "GET",
            url: "",
            data: {
                "TripType": "O",
                "NoOfAdults": 1,
                "NoOfChilds": 0,
                "NoOfInfants": 0,
                "ClassType": "Economy",
                "OriginDestination": [{
                    "Origin": "JFK",
                    "Destination": "SFO",
                    "TravelDate": "07/14/2017"
                }]
            },
            headers: {
                "apikey": "35e30f9c-520a-4",
                "Content-Type": "application/json",
                "mode": "sandbox",
            }
        }).then(function (response) {
            console.log(response);
        });
    };

    $(".search").on("click", searchForFlights);
});
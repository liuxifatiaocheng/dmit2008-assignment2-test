;

(function () {
  "use strict";

  Handlebars.registerHelper('list', function (context, options) {
    var ret = "<ul>";

    for (var i = 0, j = context.length; i < j; i++) {
      ret = ret + "<li>" + options.fn(context[i]) + "</li>";
    }

    return ret + "</ul>";
  });
  Handlebars.registerHelper('Fahrenheit', function (temperature) {
    var valNum = parseFloat(temperature);
    var fahNum = valNum * 1.8 + 32;
    return fahNum + "F";
  });
  Handlebars.registerHelper('celsius', function (temperature) {
    var celNum = temperature;
    return celNum + "C";
  });
  Handlebars.registerHelper('ifChecked', function (isChecked, options) {
    if (isChecked) {} // console.log("It's true");
    // return options.fn(this);
    // console.log("It's false");
    // return options.inverse(this);

  });

  var displayWeather = function displayWeather(data, el, showForecast) {
    document.querySelector('.weather-display').innerHTML = Handlebars.templates['weather-display-template'](data, el, showForecast);
  }; // Event listener for retrieving a weather forecast


  document.querySelector('.frm.weather').addEventListener('submit', function (e) {
    e.preventDefault();
    var location = e.target.querySelector('[name=location]').value,
        query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"".concat(location, "\") and u=\"c\"&format=json&env=store/datatables.org/alltableswithkeys"); // if (document.getElementById("checkbox").checked) {
    //     let checkbox = {isSelected: "ture"};
    // };

    var isChecked = document.getElementById("checkbox").checked;
    fetch("https://query.yahooapis.com/v1/public/yql?q=".concat(query)).then(function (data) {
      return data.json();
    }) // see Response.json() in the Fetch API spec
    .then(function (json) {
      json = json.query.results.channel;
      displayWeather(json, document.querySelector('.weather-display'), true);
    });
  });
})();
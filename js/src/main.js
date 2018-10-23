Handlebars.registerHelper('list', (context, options) => {
    var ret = "<ul>";

    for(var i=0, j=context.length; i<j; i++) {
        ret = ret + "<li>" + options.fn(context[i]) + "</li>";
    }

    return ret + "</ul>";
});

Handlebars.registerHelper('Fahrenheit', (temperature) => {
    let valNum = parseFloat(temperature);
    let fahNum = (valNum*1.8)+32;
    return fahNum + "F"  ;
});

Handlebars.registerHelper('celsius', (temperature) => {
    let celNum = temperature;
    return celNum + "C" ;
});

Handlebars.registerHelper('ifChecked', function(isChecked, options) {
    if(isChecked) {
        return options.fn(this);
    }
    return options.inverse(this);
  });


const displayWeather = (data, el, showForecast) => {

    document.querySelector('.weather-display').innerHTML = Handlebars.templates['weather-display-template'](data, el, showForecast);

};



// Event listener for retrieving a weather forecast
document.querySelector('.frm.weather').addEventListener('submit', (e) => {
    e.preventDefault();

    let location = e.target.querySelector('[name=location]').value,
        query = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u="c"&format=json&env=store/datatables.org/alltableswithkeys`;    
    // if (document.getElementById("checkbox").checked) {
    //     let checkbox = {isSelected: "ture"};
    // };
    let isChecked = document.getElementById("checkbox").checked;

 

    fetch(`https://query.yahooapis.com/v1/public/yql?q=${query}`)
        .then(data => data.json()) // see Response.json() in the Fetch API spec
        .then(json => {
            json = json.query.results.channel;
            displayWeather(json, document.querySelector('.weather-display'), true);

    });
});
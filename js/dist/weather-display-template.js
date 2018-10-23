(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['weather-display-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>"
    + ((stack1 = (helpers.list || (depth0 && depth0.list) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.forecast : stack1),{"name":"list","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " "
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + ": \r\nhi| "
    + alias4((helpers.Fahrenheit || (depth0 && depth0.Fahrenheit) || alias2).call(alias1,(depth0 != null ? depth0.high : depth0),{"name":"Fahrenheit","hash":{},"data":data}))
    + ", low|"
    + alias4((helpers.Fahrenheit || (depth0 && depth0.Fahrenheit) || alias2).call(alias1,(depth0 != null ? depth0.low : depth0),{"name":"Fahrenheit","hash":{},"data":data}))
    + " \r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>"
    + ((stack1 = (helpers.list || (depth0 && depth0.list) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.forecast : stack1),{"name":"list","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " "
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + ": \r\nhi| "
    + alias4((helpers.celsius || (depth0 && depth0.celsius) || alias2).call(alias1,(depth0 != null ? depth0.high : depth0),{"name":"celsius","hash":{},"data":data}))
    + ", low|"
    + alias4((helpers.celsius || (depth0 && depth0.celsius) || alias2).call(alias1,(depth0 != null ? depth0.low : depth0),{"name":"celsius","hash":{},"data":data}))
    + " \r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function", buffer = 
  "<h1>Weather Update</h1>\r\n<div>Location: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.city : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.region : stack1), depth0))
    + "</div>\r\n<div>Date: "
    + alias2(((helper = (helper = helpers.lastBuildDate || (depth0 != null ? depth0.lastBuildDate : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"lastBuildDate","hash":{},"data":data}) : helper)))
    + "</div>\r\n<div>Conditions: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.condition : stack1)) != null ? stack1.text : stack1), depth0))
    + "</div>\r\n<div>Current Temp: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.condition : stack1)) != null ? stack1.temp : stack1), depth0))
    + "</div>\r\n<div>Sunrise: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.astronomy : depth0)) != null ? stack1.sunrise : stack1), depth0))
    + "</div>\r\n<div>Sunset: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.astronomy : depth0)) != null ? stack1.sunset : stack1), depth0))
    + "</div>\r\n";
  stack1 = ((helper = (helper = helpers.ifChecked || (depth0 != null ? depth0.ifChecked : depth0)) != null ? helper : alias4),(options={"name":"ifChecked","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data}),(typeof helper === alias5 ? helper.call(alias3,options) : helper));
  if (!helpers.ifChecked) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    ";
},"useData":true});
})();
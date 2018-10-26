(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['weather-display-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.list || (depth0 && depth0.list) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.forecast : stack1),{"name":"list","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " "
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + ": \r\nhi| "
    + alias4((helpers.Temperature || (depth0 && depth0.Temperature) || alias2).call(alias1,(depth0 != null ? depth0.high : depth0),{"name":"Temperature","hash":{},"data":data}))
    + ", low|"
    + alias4((helpers.Temperature || (depth0 && depth0.Temperature) || alias2).call(alias1,(depth0 != null ? depth0.low : depth0),{"name":"Temperature","hash":{},"data":data}))
    + " \r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"basic-weather-info\">\r\n    <h2>Today's Info</h2>\r\n    <div>Location: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.city : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.region : stack1), depth0))
    + "</div>\r\n    <div>Date: "
    + alias2(((helper = (helper = helpers.lastBuildDate || (depth0 != null ? depth0.lastBuildDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"lastBuildDate","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div>Conditions: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.condition : stack1)) != null ? stack1.text : stack1), depth0))
    + "</div>\r\n    <div>Current Temp: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.condition : stack1)) != null ? stack1.temp : stack1), depth0))
    + "</div>\r\n    <div>Sunrise: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.astronomy : depth0)) != null ? stack1.sunrise : stack1), depth0))
    + "</div>\r\n    <div>Sunset: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.astronomy : depth0)) != null ? stack1.sunset : stack1), depth0))
    + "</div>\r\n</div>\r\n\r\n<div class=\"forecast-display\">\r\n    <h2>Forecast</h2>\r\n    <div>"
    + ((stack1 = container.invokePartial(partials.forecast,depth0,{"name":"forecast","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
},"main_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"args":["forecast"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
})();
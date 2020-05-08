// from data.js
var tableData = data;

// Select the table
var table = d3.select("table");
// Select tbody
var tbody = d3.select("tbody");

//Use d3 to update each cell's text with
// ufo report values (datetime, city, state, country, shape, duration,comments)
tableData.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the input and button
const input = d3.select("input");
const button = d3.selectAll(".filter");

// Create event handlers for clicking the button or pressing the enter key
button.on("change", runEnter);
// form.on("submit", runEnter);

//Create a dictionary for all values
inputValues={}

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
    var query = d3.select(this).select("input");
    
    var queryvalue = query.property("value");
    var queryid = query.attr("id");
    console.log(query);
    console.log(queryid);
    // console.log(query.attr("id"))
    //console.log(query.property("value"))
    console.log(queryvalue);
    inputValues[queryid] = queryvalue;
    console.log(inputValues);
    newtable();
}
function newtable(){

    let newData = tableData;
    Object.entries(inputValues).forEach(function([key,value]){
       newData = newData.filter(ufo => ufo[key] === value);
        console.log(newData);
    });
    
    tbody.html('')
    newData.forEach(function(x) {
      console.log(x);
      var row = tbody.append("tr");
      Object.entries(x).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the ufo report object
        var cell = row.append("td");
        cell.text(value);
      });
    });
    };

  // Select the input element and get the raw HTML node
//   var inputDateElement = d3.select("#datetime");
//   var inputCityElement = d3.select("#city");
//   var inputStateElement = d3.select("#state");
//   var inputCountryElement = d3.select("#country");
//   var inputShapeElement = d3.select("#shape");

//   // Get the value property of the input element
 //   var inputDateValue = inputDateElement.property("value"); 
//   var inputCityValue = inputCityElement.property("value");
//   var inputStateValue = inputStateElement.property("value");
//   var inputCountryValue = inputCountryElement.property("value");
//   var inputShapeValue = inputShapeElement.property("value");


  // Print the value to the console
//   console.log(inputDateValue);
//   console.log(inputCityValue);
//   console.log(inputStateValue);
//   console.log(inputCountryValue);
//   console.log(inputShapeValue);
  // console.log(tableData);

// var filteredCity = tableData.filter(ufo => ufo.city === inputCityValue);
// var filteredState = tableData.filter(ufo => ufo.state === inputStateValue);
// var filteredCountry = tableData.filter(ufo => ufo.country === inputCountryValue);
// var filteredShape = tableData.filter(ufo => ufo.shape === inputShapeValue);

// console.log(filteredDate);
// console.log(filteredCity);
// console.log(filteredState);
// console.log(filteredCountry);
// console.log(filteredShape);

//Clear fields
// inputDateValue = '';
// inputCityValue = '';
// inputStateValue = '';
// inputCountryValue = '';
// inputShapeValue = '';









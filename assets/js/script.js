

function getWeather(){
    var inputSearch = $('#input-search').val();
    var searchBtn = $('#search-btn');
    var searchHistory = $('#search-history');
    var weatherDisplay = $('#weather-display');
    var forcast  = $('#forcast');

     console.log(inputSearch);
    var APIKey = "f16c05f7b1a705b26116da2afe023789";
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearch},us&appid=${APIKey}`;
    var uvURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearch},us&appid=${APIKey}`;
    var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${inputSearch},us&appid=${APIKey}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
           // Storing the rating data
           $(".city").html("<h1>" + response.name + " </h1>");

           var temp = (response.main.temp - 273.15) * 1.80 + 32;
           $(".temp").text("Temperature:" + temp.toFixed(1) + ' F');

           $(".humid").text("Humidity: " + response.main.humidity + "%");

           $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
           $(".uv").text("UV Index: " + response.coord);

           var iconURL= "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
           var img = $("<img>").attr("src", iconURL);
            $('#cityIcon').after(img);
           

        })
        var iconURL = 'http:openweathermap.org/img/w/” + response.weather[0].icon + “.png”';
           // 5-Day forcast 

    $.ajax({
        url:forecastURL,
        method: "GET"
    }).then(function(forecast) {
        console.log(forecastURL);
       console.log(forecast);
    
          
       var iconURL1= "http://openweathermap.org/img/w/" + forecast.list[0].weather[0].icon + ".png";
       var iconURL2= "http://openweathermap.org/img/w/" + forecast.list[7].weather[0].icon + ".png";
       var iconURL3= "http://openweathermap.org/img/w/" + forecast.list[11].weather[0].icon + ".png";
       var iconURL4= "http://openweathermap.org/img/w/" + forecast.list[19].weather[0].icon + ".png";
       var iconURL5= "http://openweathermap.org/img/w/" + forecast.list[27].weather[0].icon + ".png";
       var img1 = $("<img>").attr("src", iconURL1);
       var img2 = $("<img>").attr("src", iconURL2);
       var img3 = $("<img>").attr("src", iconURL3);
       var img4 = $("<img>").attr("src", iconURL4);
       var img5 = $("<img>").attr("src", iconURL5);

       console.log(forecast.list[0].dt_txt);
       //$('#date1').text('Temperature: ' + forecast.list[0].main.temp + "F");
       $('#date1').text(forecast.list[0].dt_txt);
       $('#icon1').html(img1);
       $('#temp1').text('Temperature: ' + forecast.list[0].main.temp + "F");
       $('#humid1').text('Humidity: ' + forecast.list[0].main.humidity + "%");
       console.log(forecast.list[0].weather[0].icon);
       
       $('.title').text("5-Day Forecast");
       $('#date2').text(forecast.list[7].dt_txt); 
       $('#icon2').html(img2);
       $('#temp2').text('Temperature: ' + forecast.list[7].main.temp + "F");
       $('#humid2').text('Humidity: ' + forecast.list[7].main.humidity + "%");
       
       $('#date3').text(forecast.list[11].dt_txt);
       $('#icon3').html(img3);
       $('#temp3').text('Temperature: ' + forecast.list[11].main.temp + "F");
       $('#humid3').text('Humidity: ' + forecast.list[11].main.humidity + "%");
       
       $('#date4').text(forecast.list[19].dt_txt);
       $('#icon4').html(img4);
       $('#temp4').text('Temperature: ' + forecast.list[19].main.temp + "F");
       $('#humid4').text('Humidity: ' + forecast.list[19].main.humidity + "%");
    
       $('#date5').text(forecast.list[27].dt_txt);
       $('#icon5').html(img5);
       $('#temp5').text('Temperature: ' + forecast.list[27].main.temp + "F");
       $('#humid5').text('Humidity: ' + forecast.list[27].main.humidity + "%");
    
    })
      
}

var searchedCities = [];
function search () {
  var citySearched = $('#input-search').val();
  
  searchedCities.push(citySearched);
}

console.log(searchedCities);
var historyList = `<ul id="prev-search"></ul>`;
$('#search-history').html(historyList);

function getInput(){ 
    previousSearch = historyList += cityList;
    var searchCity = [];
    var citySearch = $('#input-search').val();
    localStorage.setItem(citySearch, citySearch);
    var getCity = localStorage.getItem(citySearch);
    var cityList = $('#prev-search').append(`<li> ${getCity} </li>`);




      
    console.log(citySearch);
    console.log(getCity);        
           
         
}
getInput();

$('#search-btn').on('click', function(){
   getWeather(); 
   getInput(); 
   search();
   
});

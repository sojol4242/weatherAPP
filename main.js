 document.getElementById("button").addEventListener("click", function() {
     const input = document.getElementById("input").value;

     if (input == '') {
         alert("Please enter a city name")
     } else {

         // API CALL
         fetch(
                 `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2f61081082d78a32eb6ee39341d20a5a`
             )
             .then(response => response.json())
             .then((data) => {
                 const temperature = Math.floor(((data.main.temp) - 273))
                 console.log(temperature)
                 document.getElementById("city").innerText = data.name;
                 document.getElementById("temp").innerText = temperature;
                 document.getElementById("lead").innerText = data.weather[0].main;
                 document.getElementById("wind").innerText = data.wind.speed;
                 document.getElementById(
                     "icon"
                 ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                 document.getElementById("error").innerText = "";
                 console.log(data);
             })
             .catch(err => {
                 // alert("Can't find a valid city")
                 document.getElementById("input").value = ''
                 document.getElementById("city").innerText = ''
                 document.getElementById("temp").innerText = '';
                 document.getElementById("lead").innerText = '';
                 document.getElementById("wind").innerText = null;
                 document.getElementById(
                     "icon"
                 ).src = data.weather[0].icon;

                 document.getElementById("error").innerText = "We Can't find a valid city name.Please try again";
             })


     }
 });


 document.getElementById("input").value = '';
const form = document.getElementById("search");
var place = document.getElementById("place")
var temp = document.getElementById("temp")
var desc = document.getElementById("description")
var img = document.getElementById("img")

form.addEventListener("submit", e => {
    e.preventDefault();
    const search = form.city.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=dfa0a729ee767dacaf35f7d382c78fba`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod == "404") {
            place.innerHTML = "City/Country Not Found."
            temp.innerHTML = ""
            desc.innerHTML = ""
            img.src = ""
        } else {

            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`;

            place.innerHTML = data.name + " - " + data.sys.country;
            temp.innerHTML = Math.round(data.main.temp-273.15) + "°C";
            img.src = icon;
            desc.innerHTML = data.weather[0].description.toUpperCase();
        }

        console.log(data)
    })
})
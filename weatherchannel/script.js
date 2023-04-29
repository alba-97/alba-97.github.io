let input = document.querySelector("input")
let button = document.querySelector("button")


function climaCiudad() {
    let ciudad = input.value;
    input.value = "";
    if (ciudad) {
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric&lang=es"
        $.getJSON(url, function (data) {
            document.querySelector("#ciudad").innerHTML = data.name;
            document.querySelector("#temperatura").innerHTML = data.main.temp+"<sup>°C</sup>";
            document.querySelector("#descripcion").innerHTML = data.weather[0].description;
            document.querySelector("#wicon").setAttribute("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
            document.querySelector(".container").style.visibility = "visible";
            console.log(data);
        }).fail(function() { alert("Error de búsqueda."); })
    } else {
        alert("Ingrese una localidad.")
    }
}

button.addEventListener("click", climaCiudad)

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        climaCiudad();
    }
})
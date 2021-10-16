fetch("https://api.openweathermap.org/data/2.5/onecall?lat=50.67&lon=-1.57&units=metric&exclude=hourly.weather.icon,daily&appid=5ca18117614d95f07352373ba4fef627")

    .then((res) => res.json())
    .then((data)=>{
        console.log(data)
        console.log(data["current"]["temp"]);
        console.log(data["current"]["pressure"])
        let temp = data["current"]["temp"];
        let temperatureHtml = "La temperature est de : ";
        let pressionHtml = "La pression atmosphériqueest de : "
        let pressure = data["current"]["pressure"];
        let p = document.createElement("p");
        let pressureP = document.createElement("p")
        let body = document.body;

        body.appendChild(p);
        body.appendChild(pressureP);

        p.innerHTML = temperatureHtml + temp;
        pressureP.innerHTML = pressionHtml + pressure
    })
    .catch((err) => console.log(err));
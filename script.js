fetch("https://api.openweathermap.org/data/2.5/onecall?lat=50.679393&lon=1.5716648&dt=0&lang=fr&units=metric&exclude=hourly.dt.weather.icon,daily&appid=97e4d09993bc362396b9af4a0188b735")

    .then((res) => res.json())
    .then((data)=>{
        console.log(data)
        let divToday = document.createElement("div");
        divToday.setAttribute("class", "divToday");
        let tempExacte = Math.floor(data["current"]["temp"]);
        let presExacte = data["current"]["pressure"];
        let temp = Math.floor(data["hourly"]["0"]["temp"]);
        let meteoToday = "La météo d'aujourd'hui à "; 
        let temperatureTexte = "La temperature est de : ";
        let pressionHtml = "La pression atmosphérique est de : "
        let pressure = data["hourly"]["0"]["pressure"];
        let humidity = data["current"]["humidity"];
        let icon = data["current"]["weather"]["0"]["icon"];
        let unix_timestamp = data["hourly"]["0"]["dt"]
        let unix_heureExacte = data["current"]["dt"];
        let date = new Date(unix_timestamp * 1000);
        let dateExacte = new Date(unix_heureExacte * 1000);
        let hours = date.getHours();
        let hoursExacte = dateExacte.getHours();
        let minutes = "0" + date.getMinutes();
        let minutesExacte = "0" + dateExacte.getMinutes();
        let seconds = "0" + date.getSeconds();
        let formattedTime = hoursExacte + ' : ' + minutesExacte.substr(-2);
        let heureHours = hours;
        let uniteDegre = " °C";
        let unitePascal = " Pa"
        let divHeure = document.createElement("div");
        divHeure.setAttribute("class", "divHeure");
        let temperatureHtml = document.createElement("span");
        let pressureP = document.createElement("p");
        let iconImg = document.createElement("img");
        let pHumidity = document.createElement("p");
        let heureAffichageHtml = document.createElement("h1");
        let heureExacte = document.createElement("p");
        let temperatureExacte = document.createElement("p");
        let pressionExacte = document.createElement("p");
        let body = document.body
        let section = document.getElementById("section");

        //Meteo du lendemain - declaration des variables
        let tempTomorrow = Math.floor(data["daily"]["1"]["temp"]["eve"]);
        let pressionTomorrow = data["daily"]["1"]["pressure"]
        let unixTomorrow = data["daily"]["1"]["dt"];
        let iconTomorrow = data["daily"]["1"]["weather"]["0"]["icon"];
        let dateTomorrow = new Date(unixTomorrow * 1000);
        let dayTomorrow = dateTomorrow.getDate();
        let monthTomorrow = dateTomorrow.getMonth()+1;
        let tempTomorrowHtml = document.createElement("p");
        let pressionTomorrowHtml = document.createElement("p");
        let dayTomorrowHtml = document.createElement("p");
        let iconTomorrowHtml = document.createElement("img");
        let divTomorrowHtml = document.createElement("div");
        divTomorrowHtml.setAttribute("class", "divTomorrow");

        //Meteo du sur-lendemain - declaration des variables
        let temp2 = Math.floor(data["daily"]["2"]["temp"]["eve"]);
        let pression2 = data["daily"]["2"]["pressure"]
        let unix2 = data["daily"]["2"]["dt"];
        let icon2 = data["daily"]["2"]["weather"]["0"]["icon"];
        let date2 = new Date(unix2 * 1000);

        body.appendChild(section);
        section.appendChild(divToday);
            divToday.appendChild(heureAffichageHtml);
            divToday.appendChild(iconImg);
            divToday.appendChild(temperatureHtml);
            divToday.appendChild(pressureP);
            divToday.appendChild(pHumidity);
        section.appendChild(divHeure)
            divHeure.appendChild(heureExacte);
            divHeure.appendChild(temperatureExacte);
            divHeure.appendChild(pressionExacte);
        section.appendChild(divTomorrowHtml);
            divTomorrowHtml.appendChild(dayTomorrowHtml);
            divTomorrowHtml.appendChild(tempTomorrowHtml);
            divTomorrowHtml.appendChild(pressionTomorrowHtml);
            divTomorrowHtml.appendChild(iconTomorrowHtml);

        heureAffichageHtml.innerHTML = meteoToday + hours + " h";
        temperatureHtml.innerHTML = temp + uniteDegre;
        pressureP.innerHTML = pressionHtml + pressure + unitePascal;
        iconImg.setAttribute("src", "http://openweathermap.org/img/wn/"+icon+".png");
        pHumidity.innerHtml = humidity + " %";

        heureExacte.innerHTML = formattedTime;
        temperatureExacte.innerHTML = tempExacte + uniteDegre;
        pressionExacte.innerHTML = presExacte + unitePascal;

        dayTomorrowHtml.innerHTML = dayTomorrow + " / " + monthTomorrow;
        tempTomorrowHtml.innerHTML = tempTomorrow + uniteDegre;
        pressionTomorrowHtml.innerHTML = pressionTomorrow + unitePascal;
        iconTomorrowHtml.setAttribute("src", "http://openweathermap.org/img/wn/"+iconTomorrow+".png")



        // function checkTime(i) {
        //     if (i < 10) {
        //       i = "0" + i;
        //     }
        //     return i;
        //   }
          
        //   function startTime() {
        //     var today = new Date();
        //     var h = today.getHours();
        //     var m = today.getMinutes();
        //     var s = today.getSeconds();
        //     // add a zero in front of numbers<10
        //     m = checkTime(m);
        //     s = checkTime(s);
        //     document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        //     t = setTimeout(function() {
        //       startTime()
        //     }, 500);
        //   }
        //   startTime();


        
    })
    .catch((err) => console.log(err));
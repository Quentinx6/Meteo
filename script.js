fetch("https://api.openweathermap.org/data/2.5/onecall?lat=50.679393&lon=1.5716648&dt=0&lang=fr&units=metric&exclude=hourly.dt.weather.icon,daily&appid=97e4d09993bc362396b9af4a0188b735")

    .then((res) => res.json())
    .then((data)=>{
        console.log(data)
        let divToday = document.createElement("div");
        divToday.setAttribute("class", "divToday");
        let tempExacte = Math.floor(data["hourly"]["2"]["temp"]);
        let presExacte = data["hourly"]["2"]["pressure"];
        let windExactems = Math.floor(data["hourly"]["2"]["wind_gust"]);
        let windExacte = Math.floor(windExactems * 3.6);
        let iconExacte = data["hourly"]["2"]["weather"]["0"]["icon"];
        let iconExacteHtml = document.createElement("img");
        let temp = Math.floor(data["hourly"]["0"]["temp"]);
        let pressure = data["current"]["pressure"];
        let humidity = data["current"]["humidity"];
        let precision = data["current"]["weather"]["0"]["description"];
        let precisionIcon = document.createElement("p");
        let windExacteHtml = document.createElement("span");
        let windpresHtml = document.createElement("p");
        let precisionValue = precision[0].toUpperCase() + precision.substring(1);

        //Lever et couche de soleil
        let sunrise = data["current"]["sunrise"];
        let sunset = data["current"]["sunset"];
        let sunriseDate = new Date(sunrise *1000);
        let sunsetDate = new Date(sunset * 1000);
        let sunriseHour = sunriseDate.getHours();
        let sunsetHour = sunsetDate.getHours();
        let sunriseMin = sunriseDate.getMinutes();
        let sunsetMin =  sunsetDate.getMinutes();
        if(sunriseMin<10){sunriseMin = "0"+ sunriseMin};
        if(sunsetMin<10){sunsetMin = "0" + sunsetMin};
        //Indice UV
        let uv = data["current"]["uvi"];
        let uvp = document.createElement("p");
        let uvP = document.createElement("p");
        let uvHtml = document.createElement("span");
        let uvImg = document.createElement("img");

        //Vent
        let windCurrent = data["hourly"]["0"]["wind_gust"];
        let wind = Math.floor(windCurrent * 3.6);
        let windHtml = document.createElement("p");
        let windImg = document.createElement("img");
        let windspan = document.createElement("span");

        let icon = data["current"]["weather"]["0"]["icon"];
        let unix_timestamp = data["current"]["dt"];
        let unix_heureExacte = data["hourly"]["2"]["dt"];
        let date = new Date(unix_timestamp * 1000);
        let dateExacte = new Date(unix_heureExacte * 1000);
        let dayToday = date.toLocaleString('fr-FR', {
            weekday :'long',
            year:'numeric',
            month:'long',
            day : 'numeric',
            hour :'numeric',
            minute:'numeric'
        })
        let dateToday = dayToday[0].toUpperCase() + dayToday.substring(1);
        // let numberDay = date.getDate()
        // let month = date.getMonth() +1;
        // let hours = date.getHours();
        let hoursExacte = dateExacte.getHours();
        let minutes = date.getMinutes();
        if (minutes<10) {minutes = "0" + minutes}
        let minutesExacte = "0" + dateExacte.getMinutes();
        let seconds = "0" + date.getSeconds();
        let formattedTime = hoursExacte + ' : ' + minutesExacte.substr(-2);
        let uniteDegre = " °C";
        let unitePascal = " Pa"
        let divHeure = document.createElement("div");
        divHeure.setAttribute("class", "divHeure");
        let temperatureHtml = document.createElement("span");
        let temperatureP = document.createElement("p");
        let pressureP = document.createElement("span");
        let soleilCycleHtml = document.createElement("p");
        let divDebutCycle = document.createElement("div");
        let divFinCycle = document.createElement("div");
        let sunriseCycleHtml = document.createElement("span");
        let sunsetCycleHtml = document.createElement("span");
        let sunriseImg = document.createElement("img");
        let separationSoleil = document.createElement("img");
        let sunsetImg = document.createElement("img");  
        let iconImg = document.createElement("img");
        let pHumidity = document.createElement("p");
        let heureAffichageHtml = document.createElement("h1");
        let heureExacte = document.createElement("p");
        let temperatureExacte = document.createElement("p");
        let pressionExacte = document.createElement("p");
        let body = document.body
        let section = document.getElementById("section");

        //Meteo dans 6h - declaration des variables

        let tempsix = Math.floor(data["hourly"]["4"]["temp"]);
        let pressionsix = data["hourly"]["4"]["pressure"];
        let windsixms = Math.floor(data["hourly"]["4"]["wind_gust"]);
        let windsix = Math.floor(windsixms *3.6);
        let unixsix = data["hourly"]["4"]["dt"];
        let iconsix = data["hourly"]["4"]["weather"]["0"]["icon"];
        let datesix = new Date(unixsix * 1000);
        let heuresix = datesix.getHours() + " : " + minutesExacte.substr(-2);
        let temperaturesixHtml = document.createElement("p");
        let pressionsixHtml = document.createElement("p");
        let heuresixHtml = document.createElement("p");
        let iconsixHtml = document.createElement("img");
        let windsixHtml = document.createElement("span");
        let windpressixHtml = document.createElement("p");
        let divsix = document.createElement("div");
        divsix.setAttribute("class", "divsix");
        
        //Meteo dans 8h - declaration des variables

        let temphuit = Math.floor(data["hourly"]["7"]["temp"]);
        let pressionhuit = data["hourly"]["7"]["pressure"];
        let windhuitms = Math.floor(data["hourly"]["7"]["wind_gust"]);
        let windhuit = Math.floor(windhuitms * 3.6);
        let unixhuit = data["hourly"]["7"]["dt"];
        let iconhuit = data["hourly"]["7"]["weather"]["0"]["icon"];
        let datehuit = new Date(unixhuit * 1000);
        let heurehuit = datehuit.getHours() + " : " + minutesExacte.substr(-2);
        let temperaturehuitHtml = document.createElement("p");
        let pressionhuitHtml = document.createElement("p");
        let heurehuitHtml = document.createElement("p");
        let iconhuitHtml = document.createElement("img");
        let windhuitHtml = document.createElement("span");
        let windpreshuitHtml = document.createElement("p");
        let divhuit = document.createElement("div");
        divhuit.setAttribute("class", "divHuit");

        //Meteo dans 10h - declaration des variables

        let tempdix = Math.floor(data["hourly"]["9"]["temp"]);
        let pressiondix = data["hourly"]["9"]["pressure"]
        let winddixms = Math.floor(data["hourly"]["9"]["wind_gust"]);
        let winddix = Math.floor(winddixms * 3.6);
        let unixdix = data["hourly"]["9"]["dt"];
        let icondix = data["hourly"]["9"]["weather"]["0"]["icon"];
        let datedix = new Date(unixdix * 1000);
        let heuredix = datedix.getHours() + " : " + minutesExacte.substr(-2);
        let temperaturedixHtml = document.createElement("p");
        let pressiondixHtml = document.createElement("p");
        let heuredixHtml = document.createElement("p");
        let icondixHtml = document.createElement("img");
        let winddixHtml = document.createElement("span");
        let windpresdixHtml = document.createElement("p");
        let divdix = document.createElement("div");
        divdix.setAttribute("class", "divDix");


        //Meteo du lendemain - declaration des variables
        let tempTomorrow = Math.floor(data["daily"]["1"]["temp"]["eve"]);
        let tempMinTomorrow = Math.floor(data["daily"]["1"]["temp"]["min"]);
        let tempMaxTomorrow = Math.floor(data["daily"]["1"]["temp"]["max"]);
        let pressionTomorrow = data["daily"]["1"]["pressure"]
        let unixTomorrow = data["daily"]["1"]["dt"];
        let iconTomorrow = data["daily"]["1"]["weather"]["0"]["icon"];
        let dateTomorrow = new Date(unixTomorrow * 1000);
        let dayTomorrow = dateTomorrow.getDate();
        let jourTomorrow = dateTomorrow.getDay();
        let monthTomorrow = dateTomorrow.getMonth()+1;
        let tempTomorrowHtml = document.createElement("span");
        let tempMaxTomorrowHtml = document.createElement("span");
        let tempMinTomorrowHtml = document.createElement("span");
        let pressionTomorrowHtml = document.createElement("p");
        let dayTomorrowHtml = document.createElement("p");
        let iconTomorrowHtml = document.createElement("img");
        let divTomorrowHtml = document.createElement("div");
        divTomorrowHtml.setAttribute("class", "divTomorrow");
        tempMaxTomorrowHtml.setAttribute("class", "tempMaxTomorrow");
        tempMinTomorrowHtml.setAttribute("class", "tempMinTomorrow");

        //Meteo du sur-lendemain - declaration des variables
        let temp2 = Math.floor(data["daily"]["2"]["temp"]["eve"]);
        let temp2Min = Math.floor(data["daily"]["2"]["temp"]["min"]);
        let temp2Max = Math.floor(data["daily"]["2"]["temp"]["max"]);
        let pression2 = data["daily"]["2"]["pressure"]
        let unix2 = data["daily"]["2"]["dt"];
        let icon2 = data["daily"]["2"]["weather"]["0"]["icon"];
        let date2 = new Date(unix2 * 1000);
        let jour2 = date2.getDay();
        let day2 = date2.getDate();
        let month2 = date2.getMonth()+1;
        let div2 = document.createElement("div");
        div2.setAttribute("class" , "div2")
        let day2Html = document.createElement("p");
        let temp2Html = document.createElement("span");
        let temp2HtmlMin = document.createElement("span");
        let temp2HtmlMax = document.createElement("span");
        let pression2Html = document.createElement("p");
        let icon2Html = document.createElement("img");
        temp2HtmlMax.setAttribute("class", "temp2Max");
        temp2HtmlMin.setAttribute("class", "temp2Min");

        //Meteo 3 jours plus tard - declaration des variables
        let temp3 = Math.floor(data["daily"]["3"]["temp"]["eve"]);
        let temp3Min = Math.floor(data["daily"]["3"]["temp"]["min"]);
        let temp3Max = Math.floor(data["daily"]["3"]["temp"]["max"]);
        let pression3 = data["daily"]["3"]["pressure"]
        let unix3 = data["daily"]["3"]["dt"];
        let icon3 = data["daily"]["3"]["weather"]["0"]["icon"];
        let date3 = new Date(unix3 * 1000);
        let jour3 = date3.getDay();
        let day3 = date3.getDate();
        let month3 = date3.getMonth()+1;
        let div3 = document.createElement("div");
        div3.setAttribute("class", "div3")
        let day3Html = document.createElement("p");
        let temp3Html = document.createElement("span");
        let temp3HtmlMax = document.createElement("span");
        let temp3HtmlMin = document.createElement("span");
        let pression3Html = document.createElement("p");
        let icon3Html = document.createElement("img");
        temp3HtmlMax.setAttribute("class", "temp3Max");
        temp3HtmlMin.setAttribute("class", "temp3Min");

        //Meteo 4 jours plus tard - declaration des variables

        let temp4 = Math.floor(data["daily"]["4"]["temp"]["eve"]);
        let temp4Max = Math.floor(data["daily"]["4"]["temp"]["max"]);
        let temp4Min = Math.floor(data["daily"]["4"]["temp"]["min"]);
        let pression4 = data["daily"]["4"]["pressure"]
        let unix4 = data["daily"]["4"]["dt"];
        let icon4 = data["daily"]["4"]["weather"]["0"]["icon"];
        let date4 = new Date(unix4 * 1000);
        let jour4 = date4.getDay();
        let day4 = date4.getDate();
        let month4 = date4.getMonth()+1;
        let div4 = document.createElement("div");
        div4.setAttribute("class", "div4")
        let day4Html = document.createElement("p");
        let temp4Html = document.createElement("span");
        let temp4HtmlMax = document.createElement("span");
        let temp4HtmlMin = document.createElement("span");
        let pression4Html = document.createElement("p");
        let icon4Html = document.createElement("img");
        temp4HtmlMax.setAttribute("class", "temp4Max");
        temp4HtmlMin.setAttribute("class", "temp4Min");

        //Changement de fond en fonction de l'icon
        let iconActuel = data["current"]["weather"]["0"]["icon"];
        if(iconActuel.substr(2) == "d"){
            if(parseInt(iconActuel.substr(0,2)) > 4){
                body.style.background = "url('./img/cielCouvert.jpeg')";
            }else{
                body.style.background = "url('./img/fond_meteo.jpg')";
                console.log()
            }
        }else{
            if(parseInt(iconActuel.substr(0,2)) > 4){
                body.style.background = "url('./img/cielCouvert.jpeg')";
            }else{
                body.style.background = "url('./img/nuit.jpg')";
            }
            
        }

        //Attribution de class pour la grille divToday

        heureAffichageHtml.setAttribute("class", "heure");
        temperatureP.setAttribute("class", "temperature");
        precisionIcon.setAttribute("class", "precisionIcon")
        pressureP.setAttribute("class", "pression");
        pHumidity.setAttribute("class", "humidite");
        soleilCycleHtml.setAttribute("class", "soleilCycle");
        uvp.setAttribute("class", "uv");
        windHtml.setAttribute("class", "vent")


        if(isNaN(jour2)){
            console.log("Ce n'est pas un nombre");
        }else{
            if(jourTomorrow === 0){
                jourTomorrow = "Dim";
            }else if(jourTomorrow === 1){
                jourTomorrow = "Lun";
            }else if(jourTomorrow === 2){
                jourTomorrow = "Mar";
            }else if(jourTomorrow === 3){
                jourTomorrow = "Mer";
            }else if(jourTomorrow === 4){
                jourTomorrow = "Jeu";
            }else if(jourTomorrow === 5){
                jourTomorrow = "Ven";
            }else if(jourTomorrow === 6){
                jourTomorrow = "Sam";   
            }
        }
        if(isNaN(jour2)){
            console.log("Ce n'est pas un nombre");
        }else{
            if(jour2 === 0){
                jour2 = "Dim";
            }else if(jour2 === 1){
                jour2 = "Lun";
            }else if(jour2 === 2){
                jour2 = "Mar";
            }else if(jour2 === 3){
                jour2 = "Mer";
            }else if(jour2 === 4){
                jour2 = "Jeu";
            }else if(jour2 === 5){
                jour2 = "Ven";
            }else if(jour2 === 6){
                jour2 = "Sam";   
            }
        }
        if(isNaN(jour3)){
            console.log("Ce n'est pas un nombre");
        }else{
            if(jour3 === 0){
                jour3 = "Dim";
            }else if(jour3 === 1){
                jour3 = "Lun";
            }else if(jour3 === 2){
                jour3 = "Mar";
            }else if(jour3 === 3){
                jour3 = "Mer";
            }else if(jour3 === 4){
                jour3 = "Jeu";
            }else if(jour3 === 5){
                jour3 = "Ven";
            }else if(jour3 === 6){
                jour3 = "Sam";   
            }
        }
        if(isNaN(jour4)){
            console.log("Ce n'est pas un nombre");
        }else{
            if(jour4 === 0){
                jour4 = "Dim";
            }else if(jour4 === 1){
                jour4 = "Lun";
            }else if(jour4 === 2){
                jour4 = "Mar";
            }else if(jour4 === 3){
                jour4 = "Mer";
            }else if(jour4 === 4){
                jour4 = "Jeu";
            }else if(jour4 === 5){
                jour4 = "Ven";
            }else if(jour4 === 6){
                jour4 = "Sam";   
            }
        }

        body.appendChild(section);
        section.appendChild(divToday);
            divToday.appendChild(heureAffichageHtml);
            divToday.appendChild(temperatureP)
                temperatureP.appendChild(iconImg);
                temperatureP.appendChild(temperatureHtml);
            divToday.appendChild(precisionIcon)
            divToday.appendChild(pressureP);
            divToday.appendChild(pHumidity);
            divToday.appendChild(soleilCycleHtml);
                soleilCycleHtml.appendChild(divDebutCycle)
                    divDebutCycle.appendChild(sunriseCycleHtml);
                    divDebutCycle.appendChild(sunriseImg);
                soleilCycleHtml.appendChild(separationSoleil)
                soleilCycleHtml.appendChild(divFinCycle)
                    divFinCycle.appendChild(sunsetImg);
                    divFinCycle.appendChild(sunsetCycleHtml);
            divToday.appendChild(uvp);
                uvp.appendChild(uvP)
                    uvP.appendChild(uvImg);
                    uvP.appendChild(uvHtml);
                uvp.appendChild(windHtml)
                    windHtml.appendChild(windImg);
                    windHtml.appendChild(windspan);


        section.appendChild(divHeure)
            divHeure.appendChild(heureExacte);
            divHeure.appendChild(temperatureExacte);
            divHeure.appendChild(windpresHtml);
                windpresHtml.appendChild(pressionExacte);
                windpresHtml.appendChild(windExacteHtml);
            divHeure.appendChild(iconExacteHtml);

        section.appendChild(divsix);
            divsix.appendChild(heuresixHtml);
            divsix.appendChild(temperaturesixHtml);
            divsix.appendChild(windpressixHtml)
                windpressixHtml.appendChild(pressionsixHtml);
                windpressixHtml.appendChild(windsixHtml);
            divsix.appendChild(iconsixHtml);

        section.appendChild(divhuit);
            divhuit.appendChild(heurehuitHtml);
            divhuit.appendChild(temperaturehuitHtml);
            divhuit.appendChild(windpreshuitHtml);
                windpreshuitHtml.appendChild(pressionhuitHtml);
                windpreshuitHtml.appendChild(windhuitHtml);
            divhuit.appendChild(iconhuitHtml);

        section.appendChild(divdix);
            divdix.appendChild(heuredixHtml);
            divdix.appendChild(temperaturedixHtml)
            divdix.appendChild(windpresdixHtml);
                windpresdixHtml.appendChild(pressiondixHtml);
                windpresdixHtml.appendChild(winddixHtml);
            divdix.appendChild(icondixHtml);

        section.appendChild(divTomorrowHtml);
            divTomorrowHtml.appendChild(dayTomorrowHtml);
            divTomorrowHtml.appendChild(tempMinTomorrowHtml);
            divTomorrowHtml.appendChild(tempTomorrowHtml);
            divTomorrowHtml.appendChild(tempMaxTomorrowHtml)
            divTomorrowHtml.appendChild(pressionTomorrowHtml);
            divTomorrowHtml.appendChild(iconTomorrowHtml);

        section.appendChild(div2);
            div2.appendChild(day2Html);
            div2.appendChild(temp2HtmlMin);
            div2.appendChild(temp2Html);
            div2.appendChild(temp2HtmlMax);
            div2.appendChild(pression2Html);
            div2.appendChild(icon2Html);

        section.appendChild(div3);
            div3.appendChild(day3Html);
            div3.appendChild(temp3HtmlMin);
            div3.appendChild(temp3Html);
            div3.appendChild(temp3HtmlMax);
            div3.appendChild(pression3Html);
            div3.appendChild(icon3Html);

        section.appendChild(div4);
            div4.appendChild(day4Html);
            div4.appendChild(temp4HtmlMin);
            div4.appendChild(temp4Html);
            div4.appendChild(temp4HtmlMax);
            div4.appendChild(pression4Html);
            div4.appendChild(icon4Html);

        heureAffichageHtml.innerHTML = dateToday;
        temperatureHtml.innerHTML = temp + uniteDegre;
        precisionIcon.innerHTML = precisionValue;
        pressureP.innerHTML = "Pression : " + pressure + unitePascal;
        iconImg.setAttribute("src", "http://openweathermap.org/img/wn/"+icon+".png");
        pHumidity.innerHTML = "Humidité : " + humidity + " %";
        sunriseCycleHtml.innerHTML = sunriseHour +" : " + sunriseMin;
        sunriseImg.setAttribute("src", "./img/sunrise.png");
        separationSoleil.setAttribute("src", "./img/fleche-droite.png");
        sunsetImg.setAttribute("src", "./img/sunset.png");
        sunsetCycleHtml.innerHTML = sunsetHour +" : " + sunsetMin;
        uvImg.setAttribute("src", "./img/lindice-uv.png");
        uvHtml.innerHTML = uv ; 
        windImg.setAttribute("src", "./img/vent.png");
        windspan.innerHTML = wind + " km/h" ;

        heureExacte.innerHTML = formattedTime;
        temperatureExacte.innerHTML = tempExacte + uniteDegre;
        pressionExacte.innerHTML = presExacte + unitePascal;
        windExacteHtml.innerHTML = windExacte + " km/h";
        iconExacteHtml.setAttribute("src", "http://openweathermap.org/img/wn/"+iconExacte+".png");

        heuresixHtml.innerHTML = heuresix;
        temperaturesixHtml.innerHTML = tempsix + uniteDegre;
        pressionsixHtml.innerHTML = pressionsix + unitePascal;
        windsixHtml.innerHTML = windsix + " km/h";
        iconsixHtml.setAttribute("src", "http://openweathermap.org/img/wn/"+iconsix+".png");

        heurehuitHtml.innerHTML = heurehuit;
        temperaturehuitHtml.innerHTML = temphuit + uniteDegre;
        pressionhuitHtml.innerHTML = pressionhuit + unitePascal;
        windhuitHtml.innerHTML = windhuit + " km/h";
        iconhuitHtml.setAttribute("src", "http://openweathermap.org/img/wn/"+iconhuit+".png");

        heuredixHtml.innerHTML = heuredix;
        temperaturedixHtml.innerHTML = tempdix + uniteDegre;
        pressiondixHtml.innerHTML = pressiondix + unitePascal;
        winddixHtml.innerHTML = winddix + " km/h";
        icondixHtml.setAttribute("src", "http://openweathermap.org/img/wn/"+icondix+".png");

        dayTomorrowHtml.innerHTML = jourTomorrow + " " +dayTomorrow + " / " + monthTomorrow;
        tempMinTomorrowHtml.innerHTML = tempMinTomorrow + uniteDegre;
        tempTomorrowHtml.innerHTML = " - " +  tempTomorrow + uniteDegre + " - ";
        tempMaxTomorrowHtml.innerHTML = tempMaxTomorrow + uniteDegre;
        pressionTomorrowHtml.innerHTML = pressionTomorrow + unitePascal;
        iconTomorrowHtml.setAttribute("src", "http://openweathermap.org/img/wn/"+iconTomorrow+".png")

        day2Html.innerHTML = jour2 + " " +day2 + " / " + month2;
        temp2HtmlMin.innerHTML = temp2Min + uniteDegre;
        temp2Html.innerHTML = " - " + temp2 + uniteDegre + " - ";
        temp2HtmlMax.innerHTML = temp2Max + uniteDegre;
        pression2Html.innerHTML = pression2 + unitePascal;
        icon2Html.setAttribute("src", "http://openweathermap.org/img/wn/"+icon2+".png");

        day3Html.innerHTML = jour3 + " " +day3 + " / " + month3;
        temp3HtmlMin.innerHTML = temp3Min + uniteDegre;
        temp3Html.innerHTML = " - " +temp3 + uniteDegre+ " - ";
        temp3HtmlMax.innerHTML = temp3Max + uniteDegre;
        pression3Html.innerHTML = pression3 + unitePascal;
        icon3Html.setAttribute("src", "http://openweathermap.org/img/wn/"+icon3+".png");

        day4Html.innerHTML = jour4 + " " +day4 + " / " + month4;
        temp4HtmlMin.innerHTML = temp4Min + uniteDegre;
        temp4Html.innerHTML = " - " + temp4 + uniteDegre + " - ";
        temp4HtmlMax.innerHTML = temp4Max + uniteDegre;
        pression4Html.innerHTML = pression4 + unitePascal;
        icon4Html.setAttribute("src", "http://openweathermap.org/img/wn/"+icon4+".png");


        
    })
    .catch((err) => console.log(err));
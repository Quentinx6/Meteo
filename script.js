fetch("https://api.openweathermap.org/data/2.5/onecall?lat=50.679393&lon=1.5716648&dt=0&lang=fr&units=metric&exclude=hourly.dt.weather.icon,daily&appid=97e4d09993bc362396b9af4a0188b735")

    .then((res) => res.json())
    .then((data)=>{
        console.log(data)
        let divToday = document.createElement("div");
        divToday.setAttribute("class", "divToday");
        let tempExacte = Math.floor(data["hourly"]["2"]["temp"]);
        let presExacte = data["hourly"]["2"]["pressure"];
        let iconExacte = data["hourly"]["2"]["weather"]["0"]["icon"];
        let iconExacteHtml = document.createElement("img");
        let temp = Math.floor(data["hourly"]["0"]["temp"]);
        let meteoToday = "La météo d'aujourd'hui à "; 
        let pressionHtml = "La pression atmosphérique est de : ";
        let pressure = data["hourly"]["0"]["pressure"];
        let humidity = data["hourly"]["0"]["humidity"];
        let icon = data["current"]["weather"]["0"]["icon"];
        let unix_timestamp = data["hourly"]["0"]["dt"]
        let unix_heureExacte = data["hourly"]["2"]["dt"];
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
        let jourTomorrow = dateTomorrow.getDay();
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
        let jour2 = date2.getDay();
        let day2 = date2.getDate();
        let month2 = date2.getMonth()+1;
        let div2 = document.createElement("div");
        div2.setAttribute("class" , "div2")
        let day2Html = document.createElement("p");
        let temp2Html = document.createElement("p");
        let pression2Html = document.createElement("p");
        let icon2Html = document.createElement("img");

        //Meteo 3 jours plus tard - declaration des variables
        let temp3 = Math.floor(data["daily"]["3"]["temp"]["eve"]);
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
        let temp3Html = document.createElement("p");
        let pression3Html = document.createElement("p");
        let icon3Html = document.createElement("img");

        //Meteo 4 jours plus tard - declaration des variables

        let temp4 = Math.floor(data["daily"]["4"]["temp"]["eve"]);
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
        let temp4Html = document.createElement("p");
        let pression4Html = document.createElement("p");
        let icon4Html = document.createElement("img");



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
            divToday.appendChild(iconImg);
            divToday.appendChild(temperatureHtml);
            divToday.appendChild(pressureP);
            divToday.appendChild(pHumidity);
        section.appendChild(divHeure)
            divHeure.appendChild(heureExacte);
            divHeure.appendChild(temperatureExacte);
            divHeure.appendChild(pressionExacte);
            divHeure.appendChild(iconExacteHtml);
        section.appendChild(divTomorrowHtml);
            divTomorrowHtml.appendChild(dayTomorrowHtml);
            divTomorrowHtml.appendChild(tempTomorrowHtml);
            divTomorrowHtml.appendChild(pressionTomorrowHtml);
            divTomorrowHtml.appendChild(iconTomorrowHtml);
        section.appendChild(div2);
            div2.appendChild(day2Html);
            div2.appendChild(temp2Html);
            div2.appendChild(pression2Html);
            div2.appendChild(icon2Html);
        section.appendChild(div3);
            div3.appendChild(day3Html);
            div3.appendChild(temp3Html);
            div3.appendChild(pression3Html);
            div3.appendChild(icon3Html);
        section.appendChild(div4);
            div4.appendChild(day4Html);
            div4.appendChild(temp4Html);
            div4.appendChild(pression4Html);
            div4.appendChild(icon4Html);

        heureAffichageHtml.innerHTML = meteoToday + hours + " h";
        temperatureHtml.innerHTML = temp + uniteDegre;
        pressureP.innerHTML = pressionHtml + pressure + unitePascal;
        iconImg.setAttribute("src", "http://openweathermap.org/img/wn/"+icon+".png");
        pHumidity.innerHtml = humidity + " %";

        heureExacte.innerHTML = formattedTime;
        temperatureExacte.innerHTML = tempExacte + uniteDegre;
        pressionExacte.innerHTML = presExacte + unitePascal;
        iconExacteHtml.setAttribute("src", "http://openweathermap.org/img/wn/"+iconExacte+".png");

        dayTomorrowHtml.innerHTML = jourTomorrow + " " +dayTomorrow + " / " + monthTomorrow;
        tempTomorrowHtml.innerHTML = tempTomorrow + uniteDegre;
        pressionTomorrowHtml.innerHTML = pressionTomorrow + unitePascal;
        iconTomorrowHtml.setAttribute("src", "http://openweathermap.org/img/wn/"+iconTomorrow+".png")

        day2Html.innerHTML = jour2 + " " +day2 + " / " + month2;
        temp2Html.innerHTML = temp2 + uniteDegre;
        pression2Html.innerHTML = pression2 + unitePascal;
        icon2Html.setAttribute("src", "http://openweathermap.org/img/wn/"+icon2+".png");

        day3Html.innerHTML = jour3 + " " +day3 + " / " + month3;
        temp3Html.innerHTML = temp3 + uniteDegre;
        pression3Html.innerHTML = pression3 + unitePascal;
        icon3Html.setAttribute("src", "http://openweathermap.org/img/wn/"+icon3+".png");

        day4Html.innerHTML = jour4 + " " +day4 + " / " + month4;
        temp4Html.innerHTML = temp4 + uniteDegre;
        pression4Html.innerHTML = pression4 + unitePascal;
        icon4Html.setAttribute("src", "http://openweathermap.org/img/wn/"+icon4+".png");


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
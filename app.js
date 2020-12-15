let divTimestamp = document.getElementById("timestamp");
let divLocalTime = document.getElementById("localTime");
let divLocalDate = document.getElementById("localDate");

let date = new Date();

divTimestamp.innerHTML = "le timestamp est de "+date.getTime();
divLocalTime.innerHTML = "C'est le "+date.getDay()+"eme jour de la semaine";
divLocalDate.innerHTML = "il est "+date.getHours()+"h";

let today = new Date();
let future = new Date();

future.setDate(today.getDate()+2);
future.setHours(today.getHours()+6);

if (future.getTime() > today.getTime()){
    let newDiv = document.createElement("div");
    newDiv.style.border = "2px solid black";
    newDiv.style.display = "inline-block";
    newDiv.style.marginTop = "30px";
    document.body.append(newDiv);

    let diffDay = future.getDate() - today.getDate();
    let diffHour = future.getHours() - today.getHours();

    newDiv.innerHTML = diffDay + " jours et " + diffHour + "h <br>";
    newDiv.innerHTML += "OU <br>";
    newDiv.innerHTML += diffDay*24 + diffHour + " heures <br>";
    newDiv.innerHTML += "OU <br>";
    newDiv.innerHTML += diffDay*24*60 + diffHour*60 + " minutes <br>";
    newDiv.innerHTML += "OU <br>";
    newDiv.innerHTML += diffDay*24*60*60 + diffHour*60*60 + " secondes <br>";
}
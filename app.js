var day = document.querySelector(".day")
var date = document.querySelector(".date")
var mounth = document.querySelector(".mounth")
var year = document.querySelector(".year")


const time = new Date();

day.innerText = time.toLocaleString("en",{
    weekday:"long"
})
date.innerText = time.getDate();

mounth.innerText = time.toLocaleString("en",{
    month:"long"
})
year.innerText = time.getFullYear();

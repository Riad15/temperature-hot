const API_key = `81fd1e3b2100ca45ba986663c67445a3`;

const searchTemp = () => {
    const search_city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search_city}&appid=${API_key}&units=metric`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTem(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTem = (temparature) => {
    setInnerText('city', temparature.name)
    setInnerText('temperature', temparature.main.temp)
    setInnerText('weather', temparature.weather[0].main)
    // set weather icon link 
    const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`
    const iconImg = document.getElementById('weather-icon');
    iconImg.setAttribute('src', url);
    console.log(temparature);
}
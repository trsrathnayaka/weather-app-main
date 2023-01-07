// key -->

//--> `${}` by using this we can use keyword inside a string without cancatination

//api url--> https:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let divone = document.getElementById("container");

let key = "5e4264872e29e642a21ad3acae2b4e10";

let data;
//--> user is calling that function when user enter on the button
async function weatherfun() {
  try {
    //--> catching the value from user input box
    let city = document.getElementById("city").value;

    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );

    data = await res.json();
    console.log(data);

    appenddata(data);

    //--> append data inside sucess block
  } catch (error) {
    console.log(error);
  }
}

async function weathern() {
    try {
      //--> catching the value from user input box
      let city = document.getElementById("city").value;
  
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=bahadurgarh&appid=${key}&units=metric`
      );
  
      data = await res.json();
    
  
      main2(data);
  
      //--> append data inside sucess block
    } catch (error) {
      console.log(error);
    }
  }

  weathern();


function main2(data){

    divone.innerHTML = "";

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month2 = document.createElement("p");

  let today = new Date();
  month2.setAttribute("id", "month2")
  month2.innerText = `${month[today.getMonth()]}, ${today.getDate()}, ${today.toLocaleTimeString()}`;
  

  let city = document.createElement("h1");
  city.setAttribute("id", "city2")
  city.innerText = `${data.name}, ${data.sys.country}`;

  let feels_like = document.createElement("p");
  feels_like.setAttribute("id", "feelslike")
  feels_like.innerText = `Feels like ${data.main.feels_like}\xB0C. ${data.weather[0].main}. ${data.weather[0].description}`;

  let temp = document.createElement("h1");
  temp.setAttribute("id", "temp")
  temp.innerText = `${data.main.temp}\xB0C`;

  let humidity = document.createElement("p");
  humidity.setAttribute("id", "humidity")
  humidity.innerText = `Humidity: ${data.main.humidity}%`;

  let temp_min = document.createElement("span");
  temp_min.setAttribute("id", "temp_min")
  temp_min.innerText = `Temprature Min: ${data.main.temp_min}`;

  let temp_max = document.createElement("span");
  temp_max.setAttribute("id", "temp_max")
  temp_max.innerText = `Temprature Max: ${data.main.temp_max}`;

  let map = document.getElementById("gmap_canvas");
  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  document.getElementById('main2').append(map)

  //--> if this order you append the value same order you get value
  divone.append(
    month2,city,temp,feels_like,

    humidity,
    temp_min,
    temp_max,
  );


}



//--> main function for  findind the weather
function appenddata(data) {
  //--> because we want to do blank container every time when user enter new data
  divone.innerHTML = "";

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month2 = document.createElement("p");

  let today = new Date();
  month2.setAttribute("id", "month2")
  month2.innerText = `${month[today.getMonth()]}, ${today.getDate()}, ${today.toLocaleTimeString()}`;
  

  let city = document.createElement("h1");
  city.setAttribute("id", "city2")
  city.innerText = `${data.name}, ${data.sys.country}`;

  let feels_like = document.createElement("p");
  feels_like.setAttribute("id", "feelslike")
  feels_like.innerText = `Feels like ${data.main.feels_like}\xB0C. ${data.weather[0].main}. ${data.weather[0].description}`;

  let temp = document.createElement("h1");
  temp.setAttribute("id", "temp")
  temp.innerText = `${data.main.temp}\xB0C`;

  let humidity = document.createElement("p");
  humidity.setAttribute("id", "humidity")
  humidity.innerText = `Humidity: ${data.main.humidity}%`;

  let temp_min = document.createElement("span");
  temp_min.setAttribute("id", "temp_min")
  temp_min.innerText = `Temprature Min: ${data.main.temp_min}`;

  let temp_max = document.createElement("span");
  temp_max.setAttribute("id", "temp_max")
  temp_max.innerText = `Temprature Max: ${data.main.temp_max}`;

  let map = document.getElementById("gmap_canvas");
  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  document.getElementById('main2').append(map)

  //--> if this order you append the value same order you get value
  divone.append(
    month2,city,temp,feels_like,

    humidity,
    temp_min,
    temp_max,
  );
}

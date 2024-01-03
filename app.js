const cityform = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

// const icom = document.querySelector('.icon')

const uiupdate = (data,isday)=>{
    details.innerHTML = `<h5 class="my-3">${data.name}</h5>
    <div class="my-3"><h4>${data.weather[0].description}<h4></div>
    <div class="display-4 my-4">
      <span>${(data.main.temp-273.5).toFixed(1)}</span>
      <span>&deg;C</span>
    </div>
  </div>`;
    const dorn=isday;
  const icom = data.weather[0].icon;
  //console.log(icom)
  const iconsrc = `icons/${icom}.png`;
  icon.setAttribute('src', iconsrc);

    if(dorn==='day'){
        const imagesrc = `icons/${dorn}.svg`;
        time.setAttribute('src',imagesrc);
    }
    else{
        const imagesrc = `icons/${dorn}.svg`;
        time.setAttribute('src',imagesrc);
    }
}
// upadating icons
// const iconsrc = `icons/${data.weather[0].icons}.png`;

const updcity = async (city)=>{
    const citydetails = await cityweather(city).then(data=>{
        console.log(data)
        // uiupdate(data)
        //aaba day ki night patta lagauney
        const { name } = data;
    const { timezone, sys, dt } = data;                       // Get timezone offset, sunrise, sunset, and current time from OpenWeather response

    const localTime = new Date((dt + timezone) * 1000);          // Convert UTC time to local time
    const sunriseTime = new Date((sys.sunrise + timezone) * 1000);  // Convert UTC sunrise time to local time
    const sunsetTime = new Date((sys.sunset + timezone) * 1000);           // Convert UTC sunset time to local time

    if (localTime > sunriseTime && localTime < sunsetTime) {
      const isday = 'day'
      uiupdate(data,isday)
     
    } else {
      const isday='night'
      uiupdate(data,isday)
      
    }
    }).catch(err=>{
        console.log(err);
    });
    
}



cityform.addEventListener('submit',(a)=>{
    a.preventDefault();

    //city ko value leko
    const city = cityform.city.value;
    cityform.reset();

    updcity(city)


    //update ui with new city
})
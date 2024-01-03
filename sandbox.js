const key='13d2bc990367281ac9942701dddcef5d';

const cityweather= async (city)=>{
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`

    const response = await fetch(base+query);
    const data =  await response.json()

    

    return data;
    

}


// cityweather().then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err);
// });
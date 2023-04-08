console.log('Hello Jayshree');

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function renderWeatherInfo(data)
{
    let newPara= document.createElement('p');
    newPara.textContent= `${data?.main?.temp.toFixed(2)} °C`;

    document.body.appendChild(newPara);
}

async function showWeather()
{
    try{
         // let latitude = 15.3333;
         // let logitude = 74.0833;
   
        let city = "chhattisgarh"; 

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
         const data= await response.json();
         console.log("Weather data: -> ", data);
         renderWeatherInfo();
         
        //  let newPara= document.createElement('p');
        //  newPara.textContent= `${data?.main?.temp.toFixed(2)} °C`;
    
        //  document.body.appendChild(newPara); 
    }
    catch(e)
    {
         //handle error
         console.log("error!!");
    }
    //https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric

}

async function getCustomWeatherDetails()
{
    try{
        let latitude = 15.3333;
        let longitude = 18.333;
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        let data=await result.json();
      
        console.log(data);
        renderWeatherInfo();

    }
    catch(e)
    {
        console.log("error!!",e);
    }  
}

function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");
  
    if (clickedTab !== currentTab) {
      currentTab.classList.remove("current-tab");
      currentTab = clickedTab;
      currentTab.classList.add("current-tab");
  
      if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
      } 
      else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        //getFromSessionStorage();
      }
  
      // console.log("Current Tab", currentTab);
    }
  }

  function getLocation()
  {
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geolocation supported...");
    }

  }

  function showPosition(position)
  {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

     console.log(lat);
     console.log(long);

  }

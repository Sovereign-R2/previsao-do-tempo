//função para buscar a cidade na API
async function getWeather(city){
    //chave da API do openWeatherMap
    const apiKey = "cebcd482eda57fa9a6714c1c2ba91885"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data; 
    }catch(error){
        console.error("Erro ao obter a previsão do tempo:",error);
    }
}

//função para exibir as informações no HTML
function showWeather(data){
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = '';

    const cityName = document.createElement('h2');
    cityName.textContent = data.name;

    const temperature = document.createElement('p');
    temperature.textContent = `temperatura: ${data.main.temp}°C`;

    const humidity = document.createElement('p');
    humidity.textContent = `Umidade: ${data.main.humidity}%`;

    weatherContainer.appendChild(cityName);
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(humidity);
}

// Evento de clique no botão de pesquisa  
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', async function() {
  const inputCity = document.getElementById('inputCity');
  const city = inputCity.value;
  
  // Verifica se foi digitada uma cidade
  if (city) {
    const weatherData = await getWeather(city);
    showWeather(weatherData);
  } else {
    console.error("Digite o nome de uma cidade");
  }
});

// Evento de teclado no campo de entrada
const inputCity = document.getElementById('inputCity');
inputCity.addEventListener('keyup', async function(event) {
  // Verifica se a tecla pressionada é a tecla "Enter"
  if (event.key === 'Enter') {
    const city = inputCity.value;
    
    // Verifica se foi digitada uma cidade
    if (city) {
      const weatherData = await getWeather(city);
      showWeather(weatherData);
    } else {
      console.error("Digite o nome de uma cidade");
    }
  }
});

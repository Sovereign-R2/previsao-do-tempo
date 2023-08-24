# Previsão do Tempo Web App

Este é um aplicativo web simples que permite aos usuários verificar a previsão do tempo de uma determinada cidade. Ele utiliza a API OpenWeatherMap para obter os dados de previsão do tempo e exibe as informações diretamente na página HTML. O aplicativo tem um design minimalista e usa estilos CSS para tornar a experiência do usuário mais agradável.

## Estrutura do Código

O código está dividido em três partes principais: HTML, CSS e JavaScript.

### HTML (`climate.html`)

- O arquivo HTML define a estrutura básica da página, incluindo uma caixa de entrada de texto e um botão de pesquisa.
- A div com o id "weather" é usada para exibir as informações de previsão do tempo obtidas da API.

### CSS (`climate.css`)

- Define os estilos visuais da página, incluindo a aparência da caixa de entrada, botão e contêiner da previsão do tempo.
- Usa a fonte "Open Sans" do Google Fonts para o texto.
- Define um fundo de imagem da paisagem.

### JavaScript (`climate.js`)

- O código JavaScript é responsável por interagir com a API do OpenWeatherMap e manipular a exibição dos dados na página.
- A função `getWeather(city)` faz uma chamada à API OpenWeatherMap para obter os dados de previsão do tempo para uma cidade específica.
- A função `showWeather(data)` exibe as informações de previsão do tempo na página.
- Dois eventos são definidos para o botão de pesquisa e para a tecla "Enter" na caixa de entrada. Quando um desses eventos é acionado, o aplicativo chama a função `getWeather` com o nome da cidade digitado e, em seguida, exibe os dados retornados na página.

## Notas

- Este é um projeto de exemplo e não possui recursos avançados de tratamento de erros, autenticação ou armazenamento de dados.

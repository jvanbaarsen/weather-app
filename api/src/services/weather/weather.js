import fetch from 'node-fetch'

export const weather = async ({ city }) => {
  const apiKey = process.env.OPENWEATHER_API
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )

  if (response.status === 200) {
    const data = await response.json()
    return {
      city: data.name,
      conditions: data.weather[0].description,
      temp: data.main.temp,
    }
  } else {
    return new Error('Unknown city')
  }
}

export const QUERY = gql`
  query WeatherQuery($city: String!) {
    weather(city: $city) {
      temp
      city
      conditions
    }
  }
`
export const beforeQuery = (props) => {
  return { variables: props }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ weather }) => {
  return (
    <div>
      <h1>Weather in {weather.city}</h1>
      <p>
        {weather.conditions} with a temperature of {weather.temp}c
      </p>
    </div>
  )
}

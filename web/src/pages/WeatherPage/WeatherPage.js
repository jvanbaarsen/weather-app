import { Form, TextField, Submit } from '@redwoodjs/forms'
import WeatherCell from '../../components/WeatherCell'

const WeatherPage = () => {
  const [searchQuery, setSearchQuery] = React.useState()
  const cityFieldRef = React.createRef()
  const onSubmit = () => {
    setSearchQuery(cityFieldRef.current.value)
  }

  return (
    <>
      <h1>What is the weather going to be?</h1>
      <Form onSubmit={onSubmit}>
        <TextField name="city" placeholder="Your city" ref={cityFieldRef} />
        <Submit>Search</Submit>
        {searchQuery && <WeatherCell city={searchQuery} />}
      </Form>
    </>
  )
}

export default WeatherPage

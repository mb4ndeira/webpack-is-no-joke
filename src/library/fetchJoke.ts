import Joke from '../types/Joke'

const fetchJoke = async (): Promise<Joke> => await fetch('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' }}).then(response=> response.json()).then(data=> data.joke)

export default fetchJoke
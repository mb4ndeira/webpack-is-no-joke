const fetchJoke = async () => await fetch('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' }}).then(response=> response.json())

export default fetchJoke
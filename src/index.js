import fetchJoke from './library/fetchJoke'

import './styles/main.scss'

const jokeButton = document.getElementById('joke-button')
const jokeDisplay = document.getElementById('joke-display')

const insertContent = (element, content) => {
    element.innerHTML = content
}

const getJoke = async ()=> {
    try {
        const { joke: newJoke } = await fetchJoke()

        insertContent(jokeDisplay, newJoke)
    } catch(err) {
        console.error(err)
    }
}

jokeButton.addEventListener('click', getJoke)

getJoke()

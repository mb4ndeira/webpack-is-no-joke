import fetchJoke from './library/fetchJoke'

import './styles/main.scss'

const jokeButton = document.getElementById('joke-button')
const jokeDisplay = document.getElementById('joke-display')

const insertContent = (element: HTMLElement | null, content: string) => {
    if(element) {
        element.innerHTML = content
        return
    }

    throw new Error("Element doesn't exist")
}

const getJoke = async ()=> {
    try {
        const newJoke  = await fetchJoke()

        insertContent(jokeDisplay, newJoke)
    } catch(err) {
        console.error(err)
    }
}

if(jokeButton) jokeButton.addEventListener('click', function handleGetAnotherJoke () { getJoke() })

getJoke()

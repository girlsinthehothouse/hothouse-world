const hotvidContainers = [
    { id: 'hotvid-container-1', top: 175, left: 30 },
    { id: 'hotvid-container-2', top: 440, left: 30 },
    { id: 'hotvid-container-3', top: 175, right: 30 },
    { id: 'hotvid-container-4', top: 440, right: 30 },
];

const gifArray = [
    '../images/gifs/cute.gif',
    '../images/gifs/wife.gif',
    '../images/gifs/perform.gif',
    '../images/gifs/craigslist.gif',
    '../images/gifs/fme.gif',
    '../images/gifs/24years.gif',
    '../images/gifs/lonely.gif'
];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function setRandomGif(container) {
    const element = document.getElementById(container.id);
    const randomIndex = getRandomIndex(gifArray);
    const randomGifUrl = gifArray[randomIndex];

    element.style.backgroundImage = `url('${randomGifUrl}')`;
    element.style.top = `${container.top}px`;
    
    if (container.right !== undefined) {
        element.style.right = `${container.right}px`;
    } else {
        element.style.left = `${container.left}px`;
    }
}

hotvidContainers.forEach(container => setRandomGif(container));
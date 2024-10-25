let header = document.getElementsByClassName('home-header')[0]

const backgrounds = [
    './assets/home/headerbg.png',
    './assets/catalog/background1.png',
]

let selectedIndex = 0

const goNext = () => {
    selectedIndex = selectedIndex === backgrounds.length - 1 ? 0 : selectedIndex+1
    header.style.backgroundImage = `url('${backgrounds[selectedIndex]}')`
}

const goPrevious = () => {
    selectedIndex = selectedIndex === 0 ? backgrounds.length - 1 : selectedIndex-1
    header.style.backgroundImage = `url('${backgrounds[selectedIndex]}')`
}